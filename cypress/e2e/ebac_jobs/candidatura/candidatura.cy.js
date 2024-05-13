/// <reference types="cypress" />
describe("Testes para candidatura", () => {
    beforeEach(() => {
         cy.visit("https://ebac-jobs-e2e.vercel.app/")
    })

    it("Deve levar o usuário até o formulário de inscrição", () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input').should('have.length', 7)
        cy.screenshot('tela-inscrição')
    })

    it("Deve preencher o formúlario de inscrição", () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input[name="nome-completo"]').type('Vinicius Blandy')
        cy.get('input[name="email"]').type('viniciusblandy@teste.com')
        cy.get('input[name="telefone"]').type('71 12345678')
        cy.get('input[name="endereco"]').type('Rua Jeste, bairro cypress, salvador-BA')
        cy.get('select[name="escolaridade"]').select("outros")
        cy.get('#mac').check()
        cy.get('.Aplicacao_button__tw2AE').click()
        cy.on('window:alert', (conteudo) => {
            expect(conteudo).contain('Obrigado pela candidatura!')
        })
       cy.screenshot('tela-inscrição-preenchido')
    })
})