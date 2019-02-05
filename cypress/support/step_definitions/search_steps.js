
beforeEach(() => {
Given(`I open page`, () => {
    cy.visit('/')
  })
})

Then(`I see {string} in the title`, title => {
  cy.title().should('include', title)
})

When(`I search for {string}`, text => {
  cy.get('input[placeholder*="faça sua"]')
    .type(text+'{enter}')
})

Then(`I see the survey completed {string}`, text => {
  cy.get('a[title*="Como anexar ao report"] h3 div').then(el => {
    expect(el.text()).to.eq(text)
  })
})
