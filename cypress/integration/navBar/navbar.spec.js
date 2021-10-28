/// <reference types="cypress" />

import SauceMenu from '../../pages/navbar.page'

describe("Testes da barra de navegação", () => {

  it("Deve contar todas as páginas na barra de navegação", () => {
    SauceMenu.acessarSite()
    SauceMenu.testarInvetory()
    SauceMenu.testarInvetory()
    SauceMenu.testarLogout()
  });
});