import Base from './_base.page'
import { LOGIN } from './login.elements'

export default class LoginSite extends Base {
    static acessoSauceDemo() {
        cy.visit('https://www.saucedemo.com')
    }

    static logar(usuario) {
        super.typeValue(LOGIN.USERNAME, usuario)
        super.typeValue(LOGIN.PASSWORD, 'secret_sauce')
        super.clickOnElement(LOGIN.BOTAO_LOGIN)
    }

    static loginIncorreto() {
        super.validateElementText(LOGIN.TXT_ERROR, 'Epic sadface: Username and password do not match any user in this service')
    }
}