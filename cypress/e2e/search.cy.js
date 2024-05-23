describe('Teste da tela de pesquisa', () => {
  before(()=>{
    cy.visit('/')
  })

  it('Redirecionar a minha tela para a tela de busca', ()=>{
    cy.get("[href='/Search']").click()
    cy.scrollTo("top")
  })

  it("Procurar por uma musica desejada", ()=>{
    cy.get("[data-testid='campoBusca']").type("Samba de malandro")

    cy.get("[aria-label='music-item']").should("have.length.greaterThan",0)

    
  })

  it("Verifica se existe a musica exata", () => {
    cy.get("[aria-label='music-item']").contains(/^(Samba de malandro)/i).click()
    // cy.get("[aria-label='music-item']").filter(":contains('Samba de Malandro')").click()
  })

  it("Clicou no botao de curtir", async ()=>{
    cy.wait(1500)
    cy.get("[aria-label='music-item']").filter(":contains('Samba de Malandro')").then(async (item)=>{
      cy.wrap(item).find("[data-testid='icon-button']").click()
    })
    cy.scrollTo("top")
  })
})