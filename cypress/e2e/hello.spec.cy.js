it('contain', () =>{
  cy.visit('https://www.babelcoder.com/')
  cy.contains('Babel Coder')
})