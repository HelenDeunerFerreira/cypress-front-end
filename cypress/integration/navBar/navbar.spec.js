/// <reference types="cypress" />

describe("Testes da barra de navegação", () => {
    before(() => {
      cy.visit("https://www.saucedemo.com/v1/inventory.html");
    });
  
    it("Deve contar todas as páginas na barra de navegação", () => {
        cy.get('.bm-burger-button').click();
      cy.should("contain", '.bm-item');
    });
  
    // it("Deve levar à página do produto ao clicar no título", () => {
    //   cy.get('.inventory_details_name').first().click();
    //   cy.url().should("contain", "id");
    // });
});