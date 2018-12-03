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


    this.ROOT_DIRECTORY = fileNav.dataDirectory;;

    plt.ready()
      .then(() => {
        this.listDir(this.ROOT_DIRECTORY, '');
    })
  }

  checkFile(f) {
		this.fileNav.checkFile(this.fileNav.dataDirectory, f)
			.then(success => {
				console.log('File ' + f + ' exists');
				return true;
			})
			.catch(err => {
				console.log('File ' + f + 'doesn\'t exist');
				return false;
			});
	}

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

  writeFile(fileName, content) {
    let a: IWriteOptions = {
      append: true,
      replace: false,
    }
    return this.fileNav.writeFile(this.ROOT_DIRECTORY, fileName, content, a);
}

getPath(){
 return this.ROOT_DIRECTORY;
}

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
  goDown(item) {
    const parentNativeURL = item.nativeURL.replace(item.name, "");
    this.savedParentNativeURLs.push(parentNativeURL);

    this.listDir(parentNativeURL, item.name);
  }

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
