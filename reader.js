const fs = require('fs');
const path = require('path');

console.log('hola')
fs.readFile('fetch.js', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data)
})
console.log('bye')