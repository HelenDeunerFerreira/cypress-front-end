/// <reference types="cypress" />

describe("Testes da cada componente de produto", () => {
  before(() => {
    cy.visit("https://www.saucedemo.com/v1/inventory.html");
  });

  // it("Deve validar opção de adicionar ao carrinho", () => {
  //   cy.get(".btn_primary").first().click();
  //   cy.get(".shopping_cart_link").should("contain",".fa-layers-text, .fa-layers-counter");
  // });

  it("Deve levar à página do produto ao clicar na imagem", () => {
    cy.get(".inventory_item_img img").first().click();
    cy.url().should("contain", "id");
  });

  it("Deve levar à página do produto ao clicar no título", () => {
    cy.get('.inventory_details_name').first().click();
    cy.url().should("contain", "id");
  });
});
