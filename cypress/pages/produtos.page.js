import Base from './_base.page'
import { PROD } from './produtos.elements'

export default class Produtos extends Base {

    static acessarSite() {
        cy.visit(PROD.URL)
    }

    static verificarProdutoNoCarrinho() {
        super.getElement(PROD.LISTA_PRODUTOS).should('contain', PROD.PRODUTO)
        super.clickOnElement(PROD.BOTAO_ADICIONAR, 0)
        super.getElement(PROD.NUM_CARRINHO).should('contain', 1)
    }

    static verificarImagemSite() {
        super.getElement(PROD.IMAGEM_PRODUTO).first().click();
        super.validarUrl(PROD.VERIF_URL)
    }

    static verificarNomeSite() {
        super.getElement(PROD.NOME_PRODUTO).first().click();
        super.validarUrl(PROD.VERIF_URL)
    }

}