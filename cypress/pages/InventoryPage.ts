export class InventoryPage {
  private getAddToCartButton(product: string) {
    return `button[data-test="add-to-cart-${product}"]`
  }
  private cartBadge = 'span[data-test="shopping-cart-badge"]'

  addToCart(product: string) {
    cy.get(this.getAddToCartButton(product)).should("be.visible").click()
    return this
  }

  checkCartCount(expectedCount: string) {
    cy.get(this.cartBadge).invoke('text').should('contain', expectedCount)
    return this
  }

  proceedToCart() {
    cy.get('a[data-test="shopping-cart-link"]').should("be.visible").click()
    return this
  }
}