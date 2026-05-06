import Login from '../pages/login/index'
import Inventory from '../pages/inventory/index'

describe('Cart', () => {

    beforeEach(() => {
        Login.visitPage()
    })


    it('Add Product to cart (Success)', () => {
        // arrange
        Login.validCredentials()

        //act
        Inventory.addProduct()

        //assert
        Inventory.validateAddProduct()
    })

    it('Add product to cart (Failure)', () => {

        // arrange
        Login.problemCredentials()

        //act
        Inventory.addProblemProduct()

        //assert
        Inventory.validateProblemProduct()

    })

    it('Remove product from cart (Success)', () => {

        // arrange
        Login.validCredentials()
        Inventory.addProduct()
        Inventory.validateAddProduct()

        //act
        Inventory.removeProduct()
        
        //assert
        Inventory.validateRemoveProduct()
    })

    it('Remove product from cart (Failure)', () => {

        //arrange
        Login.problemCredentials()
        Inventory.addProduct()
        Inventory.validateAddProduct()

        // act
        Inventory.removeProduct()

        //assert
        Inventory.validateRemoveProblemProduct()
    })
})