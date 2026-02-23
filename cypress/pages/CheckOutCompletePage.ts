export class CheckOutCompletePage {
  private orderConfirmation= '[data-test="complete-header"]'

  checkOrderSuccess() {
    cy.get(this.orderConfirmation).should('contain.text', 'Thank you for your order!')
    return this
  }


}