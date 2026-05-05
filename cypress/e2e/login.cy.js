describe('Login', () => {
    it('Log in (Success)', () => {

        // arrange
        cy.visit('https://www.saucedemo.com/')

        // act
        cy.get('[data-test="username"').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.screenshot('Login')

        // assert
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')


    })

    it('Log in (Failure)', () => {
        // arrange
        cy.visit('https://www.saucedemo.com/')

        // act
        cy.get('[data-test="username"').type('invalido')
        cy.get('[data-test="password"]').type('senha_invalida')
        cy.get('[data-test="login-button"]').click()
        cy.screenshot("Error: Invalid Credencials")

        //assert
        cy.url().should('eq', 'https://www.saucedemo.com/')
        cy.get('[data-test="error"]')
            .should(
                'contain.text',
                'Epic sadface: Username and password do not match any user in this service'
            )
    })
})
