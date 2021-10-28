import Base from './_base.page'
import { NAVBAR } from './navbar.elements'

export default class SauceMenu extends Base {

    static acessarSite() {
        cy.visit(NAVBAR.URL_PADRAO);
    }

    static testarInvetory() {
        super.clickOnElement(NAVBAR.BOTAO_MENU)
        super.getElement(NAVBAR.MENU_ABERTO)
        super.clickOnElement(NAVBAR.INVENTORY_MENU)
        super.validarUrl(NAVBAR.URL_INVENTORY)
    }

    static testarAbout() {
        super.clickOnElement(NAVBAR.BOTAO_MENU)
        super.getElement(NAVBAR.MENU_ABERTO)
        super.clickOnElement(NAVBAR.ABOUT_MENU)
        super.validarUrl(NAVBAR.URL_ABOUT)
    }

    static testarLogout() {
        super.clickOnElement(NAVBAR.BOTAO_MENU)
        super.getElement(NAVBAR.MENU_ABERTO)
        super.clickOnElement(NAVBAR.LOGOUT_MENU)
        super.validarUrl(NAVBAR.URL_LOGOUT)
    }

}