const fs = require('fs');
const path = require('path');


function linkFiles(mdFile){
  return new Promise((resolve, reject) => {
    fs.readdir(mdFile, (error, files) => {
        if (error) {
            return reject(error);
        }
        return resolve(files);
    })
    .then((dirFiles) => {
      const filePromises = dirFiles.map((file) => {
          return readFilePromise(file);
      });
      return Promise.all(filePromises);
})
})}

  

module.exports = linkFiles;