import Base from './_base.page'

const USERNAME = '#user-name'
const PASSWORD = '#password'
const BOTAO_LOGIN = '#login-button'
const TXT_ERROR = '[data-test=error]'

export default class LoginSite extends Base {
    static acessoSauceDemo() {
        cy.visit('https://www.saucedemo.com')
    }

    static logar(usuario) {
        super.typeValue(USERNAME, usuario)
        super.typeValue(PASSWORD, 'secret_sauce')
        super.clickOnElement(BOTAO_LOGIN)
        // super.validarUrl('https://www.saucedemo.com/inventory.html')
    }

    static loginIncorreto() {
        super.validateElementText(TXT_ERROR, 'Epic sadface: Username and password do not match any user in this service')
    }
}