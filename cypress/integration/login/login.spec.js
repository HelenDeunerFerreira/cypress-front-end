/// <reference types="cypress" />

import LoginSite from '../../pages/login.page'

describe("Testar login", () => {
    beforeEach(() => {
        LoginSite.acessoSauceDemo()
    })

    it('Realizar o login correto', () => {
        LoginSite.logar('standard_user')
    })

    beforeEach(() => {
        LoginSite.acessoSauceDemo()
    })

    it('Realizar login incorreto', () => {
        LoginSite.logar('standart_invalido')
        LoginSite.loginIncorreto()
    })
})