/// <reference types="cypress" />

class cadastrar {
    home() {
        cy.visit('/')
        cy.contains('h1', 'Seja um parceiro entregador pela Buger Eats').should('be.visible');
        cy.get('a[href="/deliver"]').click();
        cy.contains('h1', 'Cadastre-se para').should('be.visible')
    }

    btnCadastrar() {
        cy.get('button[type=submit]').click()
    }

    alertErro(mensagemEsperada) {
        cy.contains('span[class="alert-error"]', mensagemEsperada).should('be.visible')
    }

    modalCadastroFinalizado(msgEsperadaSucess) {
        cy.get('div[id="swal2-html-container"]').should('have.text', msgEsperadaSucess);
    }

    formulario(entregador) {
        cy.get('input[name="fullName"]').type(entregador.name);
        cy.get('input[name="cpf"]').type(entregador.cpf);
        cy.get('input[name="email"]').type(entregador.email);
        cy.get('input[name="whatsapp"]').type(entregador.whatsapp);
        cy.get('input[name="postalcode"]').type(entregador.postalcode);
        cy.get('input[value="Buscar CEP"]').click()
        cy.get('input[name="address-number"]').type(entregador.number);
        cy.get('input[name="address-details"]').type(entregador.details);
        cy.contains('.delivery-method li', entregador.delivery_method).click()       
    }

    scroll(mensagemEsperada) {
        cy.contains('span[class="alert-error"]', mensagemEsperada).should('be.visible').scrollIntoView()
    }

    semMetodo(entregador) {
        cy.get('input[name="fullName"]').type(entregador.name);
        cy.get('input[name="cpf"]').type(entregador.cpf);
        cy.get('input[name="email"]').type(entregador.email);
        cy.get('input[name="whatsapp"]').type(entregador.whatsapp);
        cy.get('input[name="postalcode"]').type(entregador.postalcode);
        cy.get('input[value="Buscar CEP"]').click()
        cy.get('input[name="address-number"]').type(entregador.number);
        cy.get('input[name="address-details"]').type(entregador.details);       
             
    }

    metodoInvalido(entregador) {
       cy.contains('.delivery-method li', entregador.delivery_method).click()       
    }

    seletorDoc() {
        const uploadFile = '/images/cnh.jpg'
        cy.get('input[accept^="image"]').attachFile(uploadFile)
    }

    seletorDocInv() {
        const uploadFile = '/images/fox.png'
        cy.get('input[accept^="image"]').attachFile(uploadFile)
    }

    




}

export default new cadastrar;

