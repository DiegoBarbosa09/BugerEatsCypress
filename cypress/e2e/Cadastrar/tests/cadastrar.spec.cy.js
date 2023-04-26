/// <reference types="cypress" />

import cadastrarPage from "../Pages/cadasrarPage";
import * as motoristasFactories from "../../../factories/motoristasFactories";

const textoEsperado = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'



beforeEach('Pagina Home', () => {
    cadastrarPage.home();
}) 

describe('Cadastro de Motoristas', () => {
    
    it('Validar campos obrigatorios', () => {
        cadastrarPage.btnCadastrar();
        cadastrarPage.alertErro('É necessário informar o nome');
        cadastrarPage.alertErro('É necessário informar o CPF');
        cadastrarPage.alertErro('É necessário informar o email');
        cadastrarPage.alertErro('É necessário informar o CEP');
        cadastrarPage.alertErro('É necessário informar o nome');
        cadastrarPage.alertErro('Selecione o método de entrega');
        cadastrarPage.alertErro('Adicione uma foto da sua CNH');     
    })

    it('CPF invalido', () => {

        var cpfInvalido = motoristasFactories.entregadorCpfInvalido();

        cadastrarPage.btnCadastrar();
        cadastrarPage.alertErro('É necessário informar o CPF');
        cadastrarPage.formulario(cpfInvalido);
        cadastrarPage.seletorDoc()
        cadastrarPage.btnCadastrar();    
        cadastrarPage.scroll('Oops! CPF inválido');
        cadastrarPage.alertErro('Oops! CPF inválido');      
    }) 

    it('Email invalido', () => {

        var emailInvalido = motoristasFactories.entregadorEmailInvalido();

        cadastrarPage.btnCadastrar();
        cadastrarPage.alertErro('É necessário informar o email');
        cadastrarPage.formulario(emailInvalido);
        cadastrarPage.seletorDoc()
        cadastrarPage.btnCadastrar();
        cadastrarPage.scroll('Oops! Email com formato inválido.');
        cadastrarPage.alertErro('Oops! Email com formato inválido.');
    })

    it('CEP Invalido', () => {

        var cepInvalido = motoristasFactories.entregadorCepInvalido();        

        cadastrarPage.formulario(cepInvalido);
        cadastrarPage.scroll('Informe um CEP válido');
        cadastrarPage.alertErro('Informe um CEP válido');        
    })

    it('Cadastrar sem metodo de entrega', () => {
        
        var semMetodo = motoristasFactories.entregadorSemMetodoEnt();

        cadastrarPage.semMetodo(semMetodo);        
        cadastrarPage.seletorDoc();
        cadastrarPage.btnCadastrar();
        cadastrarPage.alertErro('Selecione o método de entrega');
            // Bug - Aplicação esta aceitando cadastrar sem selecionar o metodo de entrega
    })

    it('Selecionar mais de um metodo de entrega', () => {
        var moto = motoristasFactories.entregadorValidoMoto();
        var carro = motoristasFactories.metodoInvalido();
       
        cadastrarPage.formulario(moto);
        cadastrarPage.metodoInvalido(carro);
        cadastrarPage.seletorDoc();
        cadastrarPage.btnCadastrar();
        cadastrarPage.alertErro('Oops! Selecione apenas um método de entrega');
    })

    it('Não fazer o upload da cnh', () => {
        
        var moto = motoristasFactories.entregadorValidoMoto();        

        cadastrarPage.formulario(moto);       
        cadastrarPage.btnCadastrar();
        cadastrarPage.alertErro('Adicione uma foto da sua CNH');
    })

    it('Upload com arquivo invalido', () => {       
        
        var moto = motoristasFactories.entregadorValidoMoto();        
    
        cadastrarPage.formulario(moto);
        cadastrarPage.seletorDocInv();
        cadastrarPage.btnCadastrar();
        // BUG - Aplicação esta aceitando se cadastrar sem ser um documento valido        
    })

    it('Cadastro valido com Moto', () => {

        var moto = motoristasFactories.entregadorValidoMoto();        

        cadastrarPage.formulario(moto);
        cadastrarPage.seletorDoc();
        cadastrarPage.btnCadastrar();
        cadastrarPage.modalCadastroFinalizado(textoEsperado);
    })

    it('Cadastro Valido com Bike Elétrica', () => {

        var bike = motoristasFactories.entregadorValidoBike();        

        cadastrarPage.formulario(bike);
        cadastrarPage.seletorDoc();
        cadastrarPage.btnCadastrar();
        cadastrarPage.modalCadastroFinalizado(textoEsperado);
    })

    it('Cadastro Valido com Van/Caro', () => {

        var carro = motoristasFactories.entregadorValidoCarro();        

        cadastrarPage.formulario(carro);
        cadastrarPage.seletorDoc();
        cadastrarPage.btnCadastrar();
        cadastrarPage.modalCadastroFinalizado(textoEsperado);        
    })


})



