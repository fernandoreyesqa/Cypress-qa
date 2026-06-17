const inputUsername = "[data-test='username']"
const inputPassword = "[data-test='password']"
const btnLogin = "[data-test='login-button']"
const mensajeError = "[data-test='error']"
const titleIventory = ".app_logo"
const errorCredenciales = "#login_button_container > div > form > div.error-message-container.error > h3"

class loginPage {

    /**
     * Se ingresa al login de Saucedemo
     */
    ingresoLogin(url){
        cy.visit(url)

        cy.get(inputUsername, {timeout:10000}).should('be.visible')

    }
    /**
     * Ingreso login 
     */

    loginPositivo(usser, pass){
        //se ingresa lase credenciales
        cy.get(inputUsername, {timeout:10000}).should('be.visible').type(usser)
        cy.get(inputPassword, {timeout:10000}).should('be.visible').type(pass)
        //Se hace clic en el boton
        cy.get(btnLogin, {timeout:10000}).click()
        //Se valida el ingreso
        cy.get(titleIventory, {timeout: 10000}).should('be.visible')
    }

    /**
     * Login con username y password faltante
     */

    loginUsernamePasswordFaltante(){

        cy.get(inputPassword, {timeout:10000}).should('be.visible')
        cy.get(inputUsername, {timeout:10000}).should('be.visible')
        //Se hace clic en el boton
        cy.get(btnLogin, {timeout:10000}).click()
        //Se valida mesnaje de error
        cy.get(mensajeError,{timeout:10000}).should('be.visible')
    }
    /**
     * Login con passwor faltante
     */
    loginPasswordFaltane(user){
        cy.get(inputUsername, {timeout:10000}).should('be.visible').type(user)
        cy.get(inputPassword, {timeout:10000}).should('be.visible')
        
        //Se hace clic en el boton
        cy.get(btnLogin, {timeout:10000}).click()
        //Se valida mesnaje de error
        cy.get(mensajeError,{timeout:10000}).should('be.visible')
    }

    /**
     * 
     */
    loginPassErroneo(user, pass){
        cy.get(inputUsername, {timeout:10000}).should('be.visible').type(user)
        cy.get(inputPassword, {timeout:10000}).should('be.visible').type(pass)
        //Se hace clic en el boton
        cy.get(btnLogin, {timeout:10000}).click()

        cy.get(errorCredenciales, {timeout: 10000}).should('be.visible')
    }

    errorFalla(){
        cy.get('.fallla-error-foto').should('be.visible')
    }
}
const LoginPage = new loginPage
export default LoginPage