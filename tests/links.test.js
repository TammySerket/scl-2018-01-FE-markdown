const linkValidate = require('./links.js');

it('Debería leer si el archivo es formato MD', () =>{
  const fakeMdFetch = jest.fn().mockReturnValue(Promise.resolve({
    json: () => Promise.resolve({
     links: "fakelink.com"
    })
  }))
  return linkValidate(fakeMdFetch)
   .then(result => {
     expect(result).toBe(fakeMdFetch)
   })
  })