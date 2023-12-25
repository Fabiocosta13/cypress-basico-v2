Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Fabio')
    cy.get('#lastName').type('Costa')
    cy.get('#email').type('fabio@exemplo.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()
})