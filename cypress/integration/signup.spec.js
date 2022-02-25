import signupPage from '../pages/signup-page'
import signupFactory from '../factories/signup-factory'

describe('Signup', () => {

    var deliver = {}

    // beforeEach(() => {
    //     cy.fixture('deliver').then((d) => {
    //         deliver = d
    //     })
    // })

    it('User should be deliver', () => {
        var deliver = signupFactory.deliver()
        signupPage.go()
        signupPage.fillForm(deliver)
        signupPage.submit()
        
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signupPage.modalContentShouldBe(expectedMessage)
    })
    
    it('Incorrect document', () => {
        var deliver = signupFactory.deliver()
        deliver.cpf = '003657015AA'
        signupPage.go()
        signupPage.fillForm(deliver)
        signupPage.submit()
        
        signupPage.alertMessageShouldBe('Oops! CPF inválido')
    })
    
    it('incorrect email', () => {
        var deliver = signupFactory.deliver()
        deliver.email = 'user.com.br'
        signupPage.go()
        signupPage.fillForm(deliver)
        signupPage.submit()

        signupPage.alertMessageShouldBe('Oops! Email com formato inválido.')
        
    })

    context('Required fields', () => {
        const messages = [
            { field: 'name', output: 'É necessário informar o nome'},
            { field: 'cpf', output: 'É necessário informar o CPF'},
            { field: 'email', output: 'É necessário informar o email'},
            { field: 'postalcode', output: 'É necessário informar o CEP'},
            { field: 'number', output: 'É necessário informar o número do endereço'},
            { field: 'delivery_method', output: 'Selecione o método de entrega'},
            { field: 'cnh', output: 'Adicione uma foto da sua CNH'}
        ]

        before(() => {
            signupPage.go()
            signupPage.submit()
        })

        messages.forEach((msg) => {
            it(`${msg.field} is required`, () => {
                signupPage.alertMessageShouldBe(msg.output)
            })
        })
    })
})