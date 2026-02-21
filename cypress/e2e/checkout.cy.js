describe('test of the cart checkout with two items in the cart', () => {
  it('logs in as standard user, adds two products to the cart, asserts sub-total & total then proceeds to check-out ', () => {
    cy.visit('https://www.saucedemo.com/')

    // Login
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    
    // Récupérer le prix des articles, les ajouter au panier
    cy.get('[data-test="inventory-item-price"]').first().invoke('text').then((txt) => {
      const prixArticle1 = Number(txt.split('$')[1])
      cy.wrap(prixArticle1).as('article_1_price')
    })
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

    cy.get('[data-test="inventory-item-price"]').eq(1).invoke('text').then((txt) => {
      const prixArtcile2 = Number(txt.split('$')[1])
      cy.wrap(prixArtcile2).as('article_2_price')
    })
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()

    // Vérifier que le nombre sur le shopping carte correspond au nombres d'articles séléctionnés
    cy.get('[data-test="shopping-cart-badge"]').should('contain', 2)

    // Aller dans le cart
    cy.get('[data-test="shopping-cart-link"]').click()

    // Aller vers le checkout
    cy.get('[data-test="checkout"]').click()

    cy.get('[data-test="firstName"]').type("test_user_firstName")
    cy.get('[data-test="lastName"]').type("test_user_lastName")
    cy.get('[data-test="postalCode"]').type("92130")

    cy.get('[data-test="continue"]').click()

    // Le sub-total doit correspondre au reduce() de la somme des prix des articles présent dedans
    cy.get('@article_1_price').then((prix1) => {
      cy.get('@article_2_price').then((prix2) => {
        const expectedSubTotal = prix1 + prix2
        cy.wrap(expectedSubTotal).as('expectedSubTotal')
      })
    })

    cy.get('@expectedSubTotal').then((expectedSubTotal) => {
      cy.get('[data-test="subtotal-label"]').should('contain', expectedSubTotal)
    })
    
    // Le total doit correspondre au subtotal + taxe
    cy.get('[data-test="tax-label"]').invoke('text').then((txt) => {
      const valeurTaxe = Number(txt.split(': $')[1])
      cy.wrap(valeurTaxe).as('valeurTaxe')
    })

    cy.get('[data-test="subtotal-label"]').invoke('text').then((txt) => {
      const valeurSubTotal = Number(txt.split(': $')[1])
      cy.wrap(valeurSubTotal).as('valeurSubTotal')
    })
    
    cy.get('@valeurTaxe').then((valeurTaxe) => {
      cy.get('@valeurSubTotal').then((valeurSubTotal) => {
        cy.get('[data-test="total-label"]').should('contain', valeurTaxe + valeurSubTotal)
      })
    })

    // Vers la fin du checkout
    cy.get('[data-test="finish"]').click()

    cy.get('[data-test="complete-header"]').should('contain', 'Thank you for your order!')
  })
})