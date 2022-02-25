var cpf = require('gerador-validador-cpf')

export default {
    deliver: function() {
        var data = {
            name: 'rogerio',
            cpf: cpf.generate(),
            email: 'rogeriomonteiro@gmail.com',
            whatsapp: '71988309722',
            address: {
                postalcode: '41720075',
                street: 'Rua Jayme Sapolnik',
                number: '1184',
                details: 'cond vivai',
                district: 'Imbuí',
                city_state: 'Salvador/BA'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data
    }
}