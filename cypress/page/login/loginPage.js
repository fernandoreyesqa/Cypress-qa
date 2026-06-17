const inputUsername = "[data-test='username']"
const inputPassword = "[data-test='password']"
const btnLogin = "[data-test='login-button']"
const mensajeError = "[data-test='error']"
const titleIventory = ".app_logo"
const errorCredenciales = "#login_button_container > div > form > div.error-message-container.error > h3"

class loginPage {

    /**
     * Navegar dirrecion url
     */
    navegarDirrecion(url){
        cy.visit(url, { failOnStatusCode: false });
    }

    /**
     * validar mensaje
     */

    validarMensaje(texto){
        cy.contains(texto).should('be.visible');
    }
    /**
     * ingreso de contraseña
     */
    ingresoConstrasena(pass){
        cy.get(inputPassword).should('be.visible').type(pass)
    }

    /**
     * ingreso login sin usuario ni contrasena
     */

    loginVacio(){
        cy.get(inputUsername).should('be.visible');
        cy.get(inputPassword).should('be.visible');
    }
    
    /**
     * Se ingresa al login de Saucedemo
     */
    ingresoLogin(url){
        cy.visit(url)

        cy.get(inputUsername, {timeout:10000}).should('be.visible');

    }

    /**
     * Se valida el mensaje de error
     */

    validarMensajeError(){
        cy.get(mensajeError, {timeout: 10000}).should('be.visible');
    }

    /**
     * 
     * @param {se valida la url ingresada} url 
     */
    validarUrl(url){
        cy.url().should('include', url)
    }

    /**
     * ingreso usuario
     */

    ingresoUsuario(usuario){
        cy.get(inputUsername, {timeout: 10000}).should('be.visible').type(usuario);
    }

    /**
     * Ingreso contraseña
     */

    ingresoContrasena(pass){
        cy.get(inputPassword, {timeout: 10000}).should('be.visible').type(pass);
    }

    clicLogin(){
        cy.get(btnLogin, {timeout: 10000}).should('be.visible').click();
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