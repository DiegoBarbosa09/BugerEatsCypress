var cpf = require('gerador-validador-cpf')

export default {

    entregadorValidoMoto: function() {

        var entValidoMoto = {
            name: 'Armando Guerra',
            cpf: cpf.generate(),
            email: 'teste@teste.com.br',
            whatsapp: '11955255525',
            postalcode: '06462000',
            number: '365',
            details: 'casa 5',
            delivery_method: 'Moto',
            cnh: 'cnh.jpg'
        }
        return entValidoMoto;
    },

    entregadorValidoBike: function() {

        var entValidoBike = {
            name: 'Armando Guerra',
            cpf: cpf.generate(),
            email: 'teste@teste.com.br',
            whatsapp: '11955255525',
            postalcode: '06462000',
            number: '365',
            details: 'casa 5',
            delivery_method: 'Bike Elétrica',
            cnh: 'cnh.jpg'
        }
        return entValidoBike;
    },

    entregadorValidoCarro: function() {

        var entValidoCarro = {
            name: 'Armando Guerra',
            cpf: cpf.generate(),
            email: 'teste@teste.com.br',
            whatsapp: '11955255525',
            postalcode: '06462000',
            number: '365',
            details: 'casa 5',
            delivery_method: 'Van/Carro',
            cnh: 'cnh.jpg'
        }
        return entValidoCarro;
    },

    entregadorSemMetodoEnt: function() {

        var entregadorInvalido = {
            name: 'Armando Guerra',
            cpf: cpf.generate(),
            email: 'teste@teste.com.br',
            whatsapp: '11955255525',
            postalcode: '06462000',
            number: '365',
            details: 'casa 5',            
            cnh: 'cnh.jpg'
        }
        return entregadorInvalido
    },

    entregadorCpfInvalido: function() {
        var cpfInvalido = {
            name: 'Armando Guerra',
            cpf: "000123456",
            email: 'teste@teste.com.br',
            whatsapp: '11955255525',
            postalcode: '06462000',
            number: '365',
            details: 'casa 5',
            delivery_method: 'Moto',
            cnh: 'cnh.jpg'
        }
        return cpfInvalido
    },

    entregadorEmailInvalido: function() {
        var emailInvalido = {
            name: 'Armando Guerra',
            cpf: cpf.generate(),
            email: 'testeteste.com.br',
            whatsapp: '11955255525',
            postalcode: '06462000',
            number: '365',
            details: 'casa 5',            
            delivery_method: 'Moto',
            cnh: 'cnh.jpg'
        }
        return emailInvalido
    },

    entregadorCepInvalido: function() {
        var cepInvalido = {
            name: 'Armando Guerra',
            cpf: cpf.generate(),
            email: 'teste@teste.com.br',
            whatsapp: '11955255525',
            postalcode: '0646200',
            number: '365',
            details: 'casa 5',            
            delivery_method: 'Moto',
            cnh: 'cnh.jpg'
        }
      
      return cepInvalido
    },
    
    metodoInvalido: function() {
        var metodoInvalido = {
            name: 'Armando Guerra',
            cpf: cpf.generate(),
            email: 'teste@teste.com.br',
            whatsapp: '11955255525',
            postalcode: '06462000',
            number: '365',
            details: 'casa 5',            
            delivery_method: 'Moto',
            delivery_method: 'Van/Carro',
            cnh: 'cnh.jpg'
        }
        return metodoInvalido
    },
}