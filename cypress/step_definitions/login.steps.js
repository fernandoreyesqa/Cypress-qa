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

Given('que el usuario ingresa el nombre de usuario {string}', (usuario) => {
  LoginPage.ingresoUsuario(usuario);
})

When('el usuario ingresa la contraseña', () =>{
  LoginPage.ingresoContrasena(datos.usuarioPositivo.pass)
})

When('el usuario hace clic en el boton de login', () =>{
  LoginPage.clicLogin();
})

Then('el sistema redirige al usuario a {string}', (url) =>{
  LoginPage.validarUrl(url)
})

Then('el sistema mostrara un mensaje de error', () =>{
  LoginPage.validarMensajeError();
})

Given('que el campo de usuario está vacío', ()=>{
  LoginPage.loginVacio();
})

When('el campo de contraseña está vacío', () =>{
  LoginPage.loginVacio();
})

When('el usuario ingresa la contraseña {string}', (pass)=>{
  LoginPage.ingresoConstrasena(pass)
})

Then('el sistema muestra el mensaje de error {string}', (texto) =>{
  LoginPage.validarMensaje(texto);
})

Given('que el usuario no ha iniciado sesión', () => {
  LoginPage.ingresoLogin(datos.url.url);
})

When('el usuario navega directamente a {string}',(url) =>{
  LoginPage.navegarDirrecion(url);
})

Then('el sistema redirige al usuario a la página de login', ()=>{
  LoginPage.ingresoLogin(datos.url.url)
})

