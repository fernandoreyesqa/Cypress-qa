import { Given, When, Then, Before } from '@badeball/cypress-cucumber-preprocessor'
import LoginPage from '../page/login/loginPage'
import InventoryPage from '../page/inventory/inventoryPage'
import CarroPage  from '../page/carro/carroPage'
import CheckoutPage from '../page/checkout/checkoutPage'

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

When('ingresa al carro de compra', () =>{
    InventoryPage.ingresoIventary();
    InventoryPage.agregarProductoAlCarro();
    CarroPage.ingresoCarroCompra();
})

when('ingresa al checkout', () =>{
    CarroPage.ingresoCheckout()
})

Then('el usuario rellena el formulario', ()=> {
    CheckoutPage.ingresoDatos(datos.FormularioCheckout.firstName,datos.FormularioCheckout.inputLastName,datos.FormularioCheckout.inputPostalCode)
})