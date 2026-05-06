import Login from '../pages/login/index'
import Inventory from '../pages/inventory/index'

describe('Login', () => {

    beforeEach(() => {
        Login.visitPage()
    })

    it('Log in (Success)', () => {

        // act
        Login.validCredentials()

        // assert
        Inventory.validateUrl()
    })

    it('Log in (Failure)', () => {

        // act
        Login.invalidCredentials()

        //assert
        Login.validateInvalidCredentials()
    })
})
