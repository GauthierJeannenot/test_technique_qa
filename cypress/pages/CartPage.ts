export class CartPage {
  private inventoryItem= '[data-test="inventory-item"]'

  checkForNumberOfItemsInCart(numberOfItems: string) {
    cy.get(this.inventoryItem).should('have.length', numberOfItems)
    return this
  }

  proceedToCheckout() {
    cy.get('button[data-test="checkout"]').should("be.visible").click()
    return this
  }
}