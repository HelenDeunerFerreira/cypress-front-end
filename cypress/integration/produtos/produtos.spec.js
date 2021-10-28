/// <reference types="cypress" />

import Produtos from '../../pages/produtos.page'
import LoginSite from '../../pages/login.page'

describe("Testes da cada componente de produto", () => {

  beforeEach(() => {
    LoginSite.acessoSauceDemo()
    LoginSite.logar('standard_user')
  })

  it("Deve validar opção de adicionar ao carrinho", () => {
    Produtos.verificarProdutoNoCarrinho()
  });

  it("Deve levar à página do produto ao clicar na imagem", () => {
    Produtos.verificarImagemSite()
  });

  it("Deve levar à página do produto ao clicar no título", () => {
    Produtos.verificarNomeSite()
  });
});
