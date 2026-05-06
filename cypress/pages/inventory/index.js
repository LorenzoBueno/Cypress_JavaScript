import { elements as e} from "./elements"

class Inventory{
    
    validateUrl(){
        cy.url().should('eq', e.invUrl)
        cy.screenshot('Login')
    }

    addProduct(){
        cy.get(e.product).click()
    }

    validateAddProduct(){
        cy.get(e.shopCart)
            .should(
                "contain.text",
                '1'
            )
            .and('be.visible') 
        cy.screenshot("Product added")
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.contains('Sauce Labs Backpack').should('be.visible')
        cy.get('[data-test="continue-shopping"]').click()
    }

    addProblemProduct(){
        cy.get(e.problemProduct).click()
    }

    validateProblemProduct(){
        cy.get(e.shopCart).should('not.exist')
        cy.screenshot('Product not added')
    }

    removeProduct(){
        cy.get(e.removeProduct).click()
    }

    validateRemoveProduct(){
        cy.get(e.shopCart).should('not.exist')
        cy.screenshot("Product Removed")
    }

    validateRemoveProblemProduct(){
        cy.get(e.removeProduct).should('contain.text', 'Remove')
        cy.get(e.shopCart)
            .should(
                "contain.text",
                '1'
            )
            .and('be.visible') 
        cy.screenshot('Product not removed')
    }


}

export default new Inventory()