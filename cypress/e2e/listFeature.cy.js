describe('Fluxo do usuario na aplicacao de musica', () => {
  before(()=> {
    cy.visit('/')
  })

  it('Visualizar playlists e executar uma música', ()=>{
    cy.get("[aria-label='title-head']").should("be.visible")
    cy.get("[aria-label='title-head']").should("contain",'Good morning')
    cy.get("[aria-label='playlist-item']").should("be.visible")
    cy.get("[aria-label='playlist-item']").first().click();
    cy.get("[aria-label='music-item']").should("be.visible")
    cy.get("[aria-label='music-item']").first().click();
    // cy.get("[data-listaMusic]")                                    
  })

  it('Navegar entre playlists e execultar outra música', ()=>{
    cy.get("[aria-label='buttonBack']").click()
    cy.get("[aria-label='playlist-item']").eq(2-1).click()
    cy.get("[aria-label='music-item']").should("be.visible")
    cy.get("[aria-label='music-item']").first().click();
  })

  it('Procurar e favoritar uma música',()=>{
    cy.get
  })
  



})