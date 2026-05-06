import { elements as e } from "./elements"

class Login{

    visitPage(){
        cy.visit(e.loginUrl)
    }

    validCredentials(){
        cy.get(e.username).type('standard_user')
        cy.get(e.password).type('secret_sauce')
        cy.get(e.loginButton).click()
    }

    invalidCredentials(){
        cy.get(e.username).type('invalid')
        cy.get(e.password).type('invalid_password')
        cy.get(e.loginButton).click()
    }

    problemCredentials(){
        cy.get(e.username).type('problem_user')
        cy.get(e.password).type('secret_sauce')
        cy.get(e.loginButton).click()
    }

    validateInvalidCredentials(){
        cy.screenshot("Error: Invalid Credencials")
        cy.url().should('eq', e.loginUrl)
        cy.get(e.error)
            .should(
                'contain.text',
                'Epic sadface: Username and password do not match any user in this service'
            )
    }
}

export default new Login()