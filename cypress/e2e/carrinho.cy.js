describe('Carrinho', () => {
    it('Add Product to cart (Success)', () => {
        // arrange
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

        //act
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.screenshot("Product added")

        //assert
        cy.get('[data-test="shopping-cart-badge"]')
            .should(
                "contain.text",
                '1'
            )
            .and('be.visible') 

        cy.get('[data-test="shopping-cart-link"]').click()
        cy.contains('Sauce Labs Backpack').should('be.visible')
    })

    it('Add product to cart (Failure)', () => {

        // arrange
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"').type('problem_user')
        cy.get('[data-test="password"]').type('secret_sauce', { force: true })
        cy.get('[data-test="login-button"]').click()


        //act
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
        cy.screenshot('Product not added')

        //assert
        cy.get('[data-test="shopping-cart-badge"]').should('not.exist')

    })

    it('Remove product from cart (Success)', () => {

        // arrange
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="shopping-cart-badge"]').should('be.visible')

        //act
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        cy.screenshot("Product Removed")

        //assert
        cy.get('[data-test="shopping-cart-badge"]').should('not.exist')

    })

    it('Remove product from cart (Failure)', () => {

        //arrange
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"').type('problem_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

        // act

        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        cy.screenshot('Product not removed')

        //assert

        cy.get('[data-test="remove-sauce-labs-backpack"]').should('contain.text', 'Remove')
        cy.get('[data-test="shopping-cart-badge"]')
            .should(
                "contain.text",
                '1'
            )
            .and('be.visible') 


    })
})