import { Injectable } from '@angular/core';
import { File, IWriteOptions } from '@ionic-native/file';

@Injectable()
export class fileController {
	file: File;
	fs: string;
	baseDir: string;

	constructor(private f: File) {
		this.file = f;
		this.fs = this.file.dataDirectory;
  }

  checkFile(f) {
		this.file.checkFile(this.file.dataDirectory, f)
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
			this.file.readAsText(this.fs, fileName)
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
    return this.file.writeFile(this.fs, fileName, content, a);
}

getPath(){
 return this.fs;
}

}
