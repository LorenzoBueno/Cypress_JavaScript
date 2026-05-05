describe('Carrinho', () => {
    it('Adicionar produto ao carrinho com sucesso', () => {
        // arrange
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

        //act
        
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()


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
})