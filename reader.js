const fs = require('fs');
const path = require('path');
const fetch = require("node-fetch")

//console.log('hola')
function readDirectory() {
return new Promise((resolve, reject) => {  
fs.readdir(fetch, 'utf-8', (err, files) => {
  if (err) {
  return reject(err);
}
//return resolve(files);
console.log(resolve(files));
})
})}
console.log('Epera mientras se procesan los datos... =D')

readDirectory(process.cwd())
   .then((readLinks) => {
     const linkPromises = readLinks.map((file) => {
       return readFiles(file);
     })
     return Promise.all(linkPromises);
   }).then((infoFiles) => {
     console.log(infoFiles);
   }).catch((error) => {
     console.log(error);
   })