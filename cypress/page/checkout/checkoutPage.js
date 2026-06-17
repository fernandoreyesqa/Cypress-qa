const inputFirstName = '[data-test="firstName"]'
const inputLastName = '[data-test="lastName"]'
const inputPostalCode = '[data-test="postalCode"]'
const btnContinuar = '[data-test="continue"]'
const mensajeError = '.error-message-container'
const tituloOveriew = '[data-test="title"]'
const nombreProducto = '[data-test="inventory-item-name"]'
const titleProducto = '.inventory_details_desc_container'
const btnFinish = '[data-test="finish"]'
const mensajeCompra = '[data-test="complete-header"]'


class checkoutPage {

    //Se ingresa los datos del checkout
    ingresoDatos(firstName,lastName,code){
        cy.get(inputFirstName, {timeout: 10000}).should('be.visible').type(firstName)

        cy.get(inputLastName, {timeout: 10000}).should('be.visible').type(lastName)

        cy.get(inputPostalCode, {timeout: 10000}).should('be.visible').type(code)
    }

    //Validar que input first name sea obligatorio
    validarFirstName(lastName,code){
        cy.get(inputFirstName, {timeout: 10000})

        cy.get(inputLastName, {timeout: 10000}).should('be.visible').type(lastName)

        cy.get(inputPostalCode, {timeout: 10000}).should('be.visible').type(code)

        cy.get(btnContinuar).click()

        cy.get(mensajeError, {timeout: 10000}).should('be.visible')
    }
    //Validar que el input de last name sea obligatorio
    validarLastName(firstName, code){
        cy.get(inputFirstName, {timeout: 10000}).should('be.visible').type(firstName)

        cy.get(inputLastName, {timeout: 10000}).should('be.visible')

        cy.get(inputPostalCode, {timeout: 10000}).should('be.visible').type(code)

        cy.get(btnContinuar).click()

        cy.get(mensajeError, {timeout: 10000}).should('be.visible')
    }

    //validar que el input postal code sea obligatorio
    validarPostalCode(firstName,lastName){
        cy.get(inputFirstName, {timeout: 10000}).should('be.visible').type(firstName)

        cy.get(inputLastName, {timeout: 10000}).should('be.visible').type(lastName)

        cy.get(inputPostalCode, {timeout: 10000}).should('be.visible')

        cy.get(btnContinuar).click()

        cy.get(mensajeError, {timeout: 10000}).should('be.visible')
    }

    //ingreso al checkout Overview
    ingresoOverview(){
        cy.get(btnContinuar).click()
        cy.get(tituloOveriew).should('be.visible')
    }

    //Ingresar al detalle del producto desde overview
    ingresoDetalleOverview(){
        cy.get(nombreProducto).click()

        //Se valida el ingreso al detalle
        cy.get(titleProducto).should('be.visible')
    }

    //Click en el boton finish
    clickFinish(){
        cy.get(btnFinish).click()
        cy.get(mensajeCompra).should('be.visible')
    }


    
}const CheckoutPage = new checkoutPage
export default CheckoutPage