/// <reference types="cypress" />

import LoginSite from '../../pages/login.page'
import faker from 'faker';

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
        LoginSite.logar(`${faker.name.firstName()}`)
        LoginSite.loginIncorreto()
    })
})