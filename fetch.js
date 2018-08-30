const fetch = require('node-fetch');

fetch('https://github.com/juliangarnier/anime/blob/master/README.md').then((response) => {
  console.log(response)
})