describe('Testes E2E do Projeto Carro', () => {
  //conjunto de testes

  beforeEach(() => {
    //caso de teste

    cy.visit('http://127.0.0.1:5500/'); //operacao de teste

    /* ==== Generated with Cypress Studio ==== */
    
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('testa o parabrisa', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://127.0.0.1:5500/');
    
    /* ==== End Cypress Studio ==== */
  });
  it('verifica se o overlay tem o tamanho de imagem-base', ()=> {

      cy:getComputedStyle('#imagemBase').should('have.prop', 'clientHeight').then(clientHeight=> {
        cy.get('#overlay').invoke('height').should('equal', clientHeight);
      });

      cy.get('#overlay').should('have.class','oculto');

  });

  it('Verifica se o overlay está oculto', ()=> {
    cy.get('#overlay').should('have.class','oculto').and('not.be.visible');

  });

  it('Verifica se a cor do overlay está correta', () => {

    cy.get('#overlay').should('have.css','background-color' , 'rgba(0, 0, 0, 0.533)');

  });  

  it('Verifica se os cards estão ocultos', ()=> {

      cy.get('.data').each(card => {

        cy.wrap(card).should('not.be.visible');
      });
  });

  it('Verifica se as imagens de destaque estão corretas', ()=> {
    
    cy.get('[data-test="imgParabrisa"]'.should(have.clas' , 'oculto').and('not.be.visible'); 

    cy.get('[data-test="imgRetrovisorDir"]'.should(have.clas' , 'oculto').and('not.be.visible'); 

    cy.get('[data-test="imgEspelhoRetrovisor"]'.should(have.clas' , 'oculto').and('not.be.visible'); 

    cy.get('[data-test="imgBase"]'.should(have.clas' , 'oculto').and('not.be.visible'); 

    )

});