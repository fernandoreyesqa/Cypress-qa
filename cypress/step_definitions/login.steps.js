import { Given, When, Then, Before } from '@badeball/cypress-cucumber-preprocessor'
import LoginPage from '../page/login/loginPage'

Before(() => {
  Cypress.on('uncaught:exception', () => false)
})

let datos

Before(() => {
  const ambiente = Cypress.env('AMBIENTE') || 'dev'
  cy.fixture(`${ambiente}/datos.json`).then((fixture) => {
    datos = fixture
  })
})



Given('el usuario ingresa a la página de login', () => {
  LoginPage.ingresoLogin(datos.url.url)
})

When('ingresa credenciales válidas', () => {
  LoginPage.loginPositivo(datos.usuarioPositivo.usser, datos.usuarioPositivo.pass)
})

When('intenta iniciar sesión sin credenciales', () => {
  LoginPage.loginUsernamePasswordFaltante()
})

When('ingresa solo el usuario', () => {
  LoginPage.loginPasswordFaltane(datos.usuarioPositivo.usser)
})

When('ingresa credenciales incorrectas', () => {
  LoginPage.loginPassErroneo(datos.passIncorrecta.user, datos.passIncorrecta.pass)
})

Then('debería ver el inventario de productos', () => {
  cy.url({ timeout: 10000 }).should('include', '/inventory')
})

Then('debería ver un mensaje de error', () => {
  cy.get("[data-test='error']").should('be.visible')
})

Then('debería ver el mensaje de credenciales erróneas', () => {
  cy.get('#login_button_container > div > form > div.error-message-container.error > h3')
    .should('be.visible')
})

When('ingresa mal las credeciales', () =>{
  LoginPage.errorFalla()
})