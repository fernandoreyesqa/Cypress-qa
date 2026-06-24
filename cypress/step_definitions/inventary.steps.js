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

Given('que el usuario está en la página de inventario', () =>{
    InventoryPage.ingresoIventary();
})

Then('se muestran exactamente 6 productos en la grilla', () => {
    InventoryPage.validarCantidadProductos();
})

When('cada producto contiene un elemento con el título visible', () =>{
    InventoryPage.validarTitulo();
})

When('cada producto contiene un elemento con la descripción visible', () =>{
    InventoryPage.validarTitulo();
})

When('cada producto contiene un elemento con el precio visible', () =>{
    InventoryPage.validarPrecios();
})

When('cada producto contiene un botón Add to cart', () =>{
    InventoryPage.validarAddToCard();
})

Then('el inventario contiene el producto {string} con precio {string}', (nombre,precio) =>{
    InventoryPage.validarProductoPrecio(nombre, precio);
})

When('el badge del carrito no está visible', () => {
    InventoryPage.validarBadgeNoVisible();
})

When('hace clic en el botón Add to cart del producto {string}', (producto) =>{
    InventoryPage.agregarProductoAlCarrito(producto);
})

When('el badge del carrito muestra el valor {string}', (cantidad) =>{
    InventoryPage.validarBadgeCantidad(cantidad);
})

When('hace clic en el botón Remove', () => {
    InventoryPage.clickBotonRemove();
})

Then('el botón del producto cambia su texto a "Add to cart"', () => {
    InventoryPage.cantidadBtnAddToCard();
})

When('hace clic en el ícono del carrito ubicado en el header', () =>{
    InventoryPage.ingresarCarroCompra();
})

When('selecciona la opción Name A to Z del selector de ordenamiento', () => {
  InventoryPage.ordenarAZ();
})

Then('el primer producto de la grilla es {string}', (nombre) =>{
    InventoryPage.primerProducto(nombre);
})

When('selecciona la opción Name Z to A del selector de ordenamiento', () => {
  InventoryPage.ordenarZA();
})

When('selecciona la opción Price low to high del selector de ordenamiento', () => {
    InventoryPage.ordenarProductoPrecio();
})

Then('el primer producto de la grilla es {string} con precio {string}', (nombre, precio) => {
    InventoryPage.primerProductoPrecio(nombre,precio);
})

When('selecciona la opción Price high to low del selector de ordenamiento', () => {
    InventoryPage.ordenarProductoMasCaro();
})

When('ha abierto el menú hamburguesa', () =>{
    InventoryPage.ingresoMenu();
})

When('hace clic en la opción Logout', () =>{
    InventoryPage.clickLogout();
})