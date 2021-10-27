/// <reference types="cypress" />

Cypress.Commands.add('verificarProdutoNoCarrinho', () => {
    const NUM_CARRINHO = '.fa-layers-counter'
    const LISTA_PRODUTOS = '.inventory_list'
    const BOTAO_ADICIONAR = '.btn_inventory'

    cy.get(LISTA_PRODUTOS).first().should('contain', 'Sauce Labs Backpack')
    cy.get(BOTAO_ADICIONAR).first().click()
    cy.get(NUM_CARRINHO).should('contain', 1)
})