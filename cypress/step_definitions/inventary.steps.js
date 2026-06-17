import { Given, When, Then, Before } from '@badeball/cypress-cucumber-preprocessor'
import LoginPage from '../page/login/loginPage'
import InventoryPage from '../page/inventory/inventoryPage'


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

When('El usuario visualiza la pagina de inventory', () =>{
    InventoryPage.ingresoIventary()
})

When('El usuario contara los productos en el inventario',() =>{
    InventoryPage.cantidadDeProductos();
})

When('El usuario ingresa al detlla del producto', () => {
    InventoryPage.ingresoIventary()
})

Then('El sistema mostrara el detalle del producto', () =>{
    InventoryPage.ingresarDetalleProducto()
})

When('El usuario filtra por precio menor', () =>{
    InventoryPage.ingresoIventary()
})

Then('El sistema muestra el primer producto mas barato', () => {
    InventoryPage.ordenarProductoPrecio();
})

When('El usuario filtra por precio mayor', () =>{
    InventoryPage.ingresoIventary();
})

Then('El sistema mostara el primer producto mas caro', () =>{
    InventoryPage.ordenarProductoMasCaro()
})

When('El usuario agrega un producto al carro', () =>{
    InventoryPage.ingresoIventary();
})

Then('El sistema mostrara el producto en el carro', () =>{
    InventoryPage.agregarProductoAlCarro()
})