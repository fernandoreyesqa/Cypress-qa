import LoginPage from "../../page/login/loginPage"

describe('Casos de login', () => {

 beforeEach(function () {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    const ambiente = Cypress.env('AMBIENTE') || 'dev'

    cy.fixture(`${ambiente}/datos.json`).then((datos) => {
        this.datos = datos;
    });
  });


  it('Login - Visualizar login', function () {
    LoginPage.ingresoLogin(this.datos.url.url)
    
  })

  it('Login - ingreso positivo', function () {
    LoginPage.ingresoLogin(this.datos.url.url)
    LoginPage.loginPositivo(this.datos.usuarioPositivo.usser,this.datos.usuarioPositivo.pass)
  });

  it('Login - sin username y password', function ()  {
    LoginPage.ingresoLogin(this.datos.url.url)
    LoginPage.loginUsernamePasswordFaltante()
  });

  it('Login - password faltante', function ()  {
    LoginPage.ingresoLogin(this.datos.url.url)
    LoginPage.loginPasswordFaltane(this.datos.usuarioPositivo.pass)
  });

  it.only('Login - credenciales erroneas', function(){
    LoginPage.ingresoLogin(this.datos.url.url)
    LoginPage.loginPassErroneo(this.datos.passIncorrecta.user,this.datos.passIncorrecta.pass)
  });
})