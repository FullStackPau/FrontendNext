describe('template spec', () => {
  it('should click button and get Data', () => {
    cy.visit('/')
    cy.get('.style_primary__inKft').click()
  })
  it('should click error button and show toast', () => {
    cy.visit('/')
    cy.get('.style_sectionbutton__wKBmL > .style_danger__m2Oey').click()
  })
  it('should click in each delete button card and remove the card', () => {
    cy.visit('/')
    cy.get('.style_primary__inKft').click()
    cy.get('.style_card__C_0LV button').each((button) => {
      cy.wrap(button).click();
  
      // Puedes realizar cualquier otra acción que necesites después de hacer clic en el botón
    })
  })
})