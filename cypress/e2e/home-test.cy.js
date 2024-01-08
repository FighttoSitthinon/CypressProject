describe('Test Home page ', () => {
  it('open homepage success', () => {
    cy.visit('https://www.zipeventapp.com/')
    cy.get('.recommend-event').should('be.visible')
    cy.get('.cookies-consent-btn').click()
  })
  it('Default Search Success', () => {
    // assert
    cy.visit('https://www.zipeventapp.com/')

    // action
    cy.get('#search-btn').click()
    cy.wait(1000);

    // on show search result 
    cy.get('#nav-search-result-div').should('be.visible')
    cy.get('#nav-search-result-div').children().should('have.length', 7);
    cy.get('#navbar-more-btn').should('exist')

    // on hide search close
    cy.get('#navbar-close-search-btn').click()
    cy.get('#nav-search-result-div').should('not.be.visible')
    cy.get('#navbar-more-btn').should('not.be.visible')
  })
})