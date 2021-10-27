/// <reference types="cypress" />

describe("Testes da página de produtos", () => {
  before(() => {
    cy.visit("https://www.saucedemo.com/v1/inventory-item.html?id=4");
  });

  it("Deve voltar a página de navegação ao clicar botão BACK", () => {
    cy.get('.inventory_details_back_button').click();
    // cy.url("contain", '.bm-item');
  });
});