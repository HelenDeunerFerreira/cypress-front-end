/// <reference types="cypress" />

describe("Testes da barra de navegação", () => {
  before(() => {
    cy.visit("https://www.saucedemo.com/v1/inventory.html");
  });

  it("Deve contar todas as páginas na barra de navegação", () => {
    cy.get('.bm-burger-button > button').click();
    cy.get('.bm-item-list').click();
    cy.should('contain', '[#inventory_sidebar_link]');
    //logout_sidebar_link
  });
});