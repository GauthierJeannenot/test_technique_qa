export class CheckOutStepOnePage {
  private firstNameInput = 'input[data-test="firstName"]'
  private lastNameInput = 'input[data-test="lastName"]'
  private postalCodeInput = 'input[data-test="postalCode"]'
  private continueButton = 'input[data-test="continue"]'


  fillBillingInfo(firstName: string, lastName: string, postalCode: string) {
    cy.get(this.firstNameInput).clear().type(firstName)
    cy.get(this.lastNameInput).clear().type(lastName)
    cy.get(this.postalCodeInput).type(postalCode)
    cy.get(this.continueButton).should('be.visible').click()
    return this
  }
}