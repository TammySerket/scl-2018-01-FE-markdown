const fs = require('fs');
const path = require('path');
const fetch = require("./fetch.js")

//console.log('hola')
function readDirectory() {
return new Promise((resolve, reject) => {  
fs.readFile(fetch, 'utf-8', (err, document) => {
 /* if (require.main === module) {
    console.log("Soy un programa en la terminal");
 }else{
    console.log("Me están ejecutando como módulo, debería exportar la función solamente");
 }*/
  if (err) {
  return reject(err);
}
return resolve(document);
//console.log(resolve(files));
})
})}
console.log('Epera mientras se procesan los datos... =D')

function readFiles(directory){
return new Promise((resolve, reject) => {
  fs.readlink(directory, (error, files) => {
    if (err) {
      return reject(err);
    }
    return resolve(files);
  })
})
}

/*readDirectory(process.cwd())
   .then((readLinks) => {
     const linkPromises = readLinks.map((file) => {
       return readFiles(file);
     })
     return Promise.all(linkPromises);
   }).then((infoFiles) => {
     console.log(infoFiles);
   }).catch((error) => {
     console.log(error);
   })*/