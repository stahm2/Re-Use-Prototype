import { Injectable } from '@angular/core';
import { File, IWriteOptions } from '@ionic-native/file';
import { Platform, AlertController } from 'ionic-angular';

@Injectable()
export class fileController {
	items;
  savedParentNativeURLs = [];
  ROOT_DIRECTORY;

  fileName: string = 'TestFile.csv';
  counter: number = 0;
  fileList: Array<string> = [];

  constructor(public fileNav: File,
              public plt: Platform,
              public alertCtrl: AlertController) {

    //define root directory
    this.ROOT_DIRECTORY = fileNav.dataDirectory;

    //Check if platform is ready, then list directory
    plt.ready()
      .then(() => {
        this.listDir(this.ROOT_DIRECTORY, '');
    })
  }

  /**
   * read file in defined directory with filename as parameter
   * @param fileName
   */
  readFile(fileName) {

		return new Promise((resolve, reject) => {
      console.log('reading file ' + fileName);
			this.fileNav.readAsText(this.ROOT_DIRECTORY, fileName)
				.then(content => {
					console.log(content);
					alert(content);
				})
				.catch(err => {
					console.log('reading file failed ' + err);
				});
		});
	}

  /**
   * write content to a file in defined directory with content and filename as param
   * @param fileName
   * @param content
   */
  writeFile(fileName, content) {
    let a: IWriteOptions = {
      append: true,
      replace: false,
    }
    return this.fileNav.writeFile(this.ROOT_DIRECTORY, fileName, content, a);
}

/**
 * returns the path
 */
getPath(){
 return this.ROOT_DIRECTORY;
}

/**
 * creates a new file and write to it.
 * First preparing the param JSON to write.
 * @param contentJSON
 */
  createAndWriteFile(contentJSON) {
    let value = contentJSON.headerRow + "\r\n" + contentJSON.conentRow;
    let newFileName = `${this.counter}` + this.fileName;

    this.fileNav.writeFile(this.ROOT_DIRECTORY, newFileName, value, {replace: true}).then((res) => {
      console.log('private doWrite', 'Create File:', res);
      this.fileList.push(newFileName);
      this.counter++;
      this.readFileContent();
    }).catch((error) => {
      console.error('private doWrite', 'Create File Error:', error);
    });

  }

  /**
   * append content to the last created file
   */
  appendToFile() {
    let lastFile = this.fileList[this.fileList.length - 1];

    if (typeof lastFile !== 'undefined') {
      this.fileNav.writeExistingFile(this.ROOT_DIRECTORY, lastFile, 'append, to, csv').then((res) => {
        console.log('appendToFile', 'WriteExisting File:', res);
        this.readFileContent();
      }).catch((error) => {
        console.error('appendToFile', 'WriteExisting Error:', error);
      })
    } else {
      let alert = this.alertCtrl.create({
        title: 'No File',
        subTitle: 'No File to append',
        buttons: ['Dismiss']
      });
      alert.present();
    }
  }

  /**
   * delete the last used created file
   */
  deleteFile() {
    let lastFile = this.fileList[this.fileList.length - 1];

    if (typeof lastFile !== 'undefined') {
      this.fileNav.removeFile(this.ROOT_DIRECTORY, lastFile).then((res) => {
        console.log('deleteFile', 'Delete File:', res);
        this.fileList.pop();
        this.listDir(this.ROOT_DIRECTORY, '');

      }).catch((error) => {
        console.error('deleteFile', 'Delete File Error:', error);
      });
    }
  }

  /**
   * read the content of the last created and used file and
   * present it as an alert to the user
   */
  private readFileContent() {
    let lastFile = this.fileList[this.fileList.length - 1];

    if (typeof lastFile !== 'undefined') {
      this.fileNav.readAsText(this.ROOT_DIRECTORY, lastFile).then((res) => {
        console.log('private readFileContent', 'Read File:', res);
        let alert = this.alertCtrl.create({
          title: 'File Content',
          subTitle: res,
          buttons: ['Dismiss']
        });
        alert.present();
        this.listDir(this.ROOT_DIRECTORY, '');

      }).catch((error) => {
        console.error('private readFileContent', 'Read File Error:', error);
      });
    } else {
      let alert = this.alertCtrl.create({
        title: 'No File',
        subTitle: 'No File to read',
        buttons: ['Dismiss']
      });
      alert.present();
    }
  }

  /*------------------------------------*/
  /*---------FILE NAVIAGATION-----------*/
  /*------------------------------------*/

  /**
   * for testing issues only
   * go down in a navigation tree from a given startpoint param item
   * @author Stefan Iseli
   * @param item
   */
  goDown(item) {
    const parentNativeURL = item.nativeURL.replace(item.name, "");
    this.savedParentNativeURLs.push(parentNativeURL);

    this.listDir(parentNativeURL, item.name);
  }
/**
 * for testing issues only
 * go up in a navigation tree from present position
 * @author Stefan Iseli
 */
  goUp() {
    const parentNativeURL = this.savedParentNativeURLs.pop();

    this.listDir(parentNativeURL, "");
  }

  private listDir = (path, dirName) => {
    this.fileNav
      .listDir(path, dirName)
      .then(entries => {
        this.items = entries;
      })
      .catch(this.handleError);
  };

  private handleError = error => {
    console.log("error reading,", error);
  };

}
