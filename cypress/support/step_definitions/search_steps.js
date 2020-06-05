beforeEach(() => {
  Given(`I open page`, () => {
      cy.visit(Cypress.env("URL_GOOGLE"))
    })
  })
  

Then(`I see {string} in the title`, title => {
  cy.title().should('include', title)
})

When(`I search for {string}`, text => {
  cy.get('input[name="q"]')
    .type(text+'{enter}')
})

Then(`I see the survey completed {string}`, text => {
  cy.get('h3[class="LC20lb DKV0Md"]').then(el => {
    expect(el.text()).to.contains(text)
  })
})
