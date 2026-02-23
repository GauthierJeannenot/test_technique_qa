export class CheckOutStepTwoPage {
  private priceTags = '[data-test="inventory-item-price"]'
  private subtotalLabel = '[data-test="subtotal-label"]'
  private totalLabel = '[data-test="total-label"]'
  


  checkSubTotal(item1_price: string, item2_price: string) {
    cy.get(this.priceTags).eq(0).should('contain.text', item1_price)
    cy.get(this.priceTags).eq(1).should('contain.text', item2_price)

    cy.get(this.subtotalLabel).invoke('text').then((text) => {
      const expectedTotal = `Item total: $${Number(item1_price) + Number(item2_price)}`
      expect(text).to.contain(expectedTotal)
    })
  }

  checkTotalWithTax(itemTotal: string, tax: string) {
    cy.get(this.totalLabel).should('contain.text', `Total: $${Number(itemTotal) + Number(tax)}`)
  }

  proceedToFinish() {
    cy.get('button[data-test="finish"]').should("be.visible").click()
  }
}