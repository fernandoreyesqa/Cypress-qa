import LoginPage from "../../page/login/loginPage";
import InventoryPage from "../../page/inventory/inventoryPage";
import CarroPage from "../../page/carro/carroPage";

describe('Casos del carro de compra', () =>{

    beforeEach(function () {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    const ambiente = Cypress.env('AMBIENTE') || 'dev'

    cy.fixture(`${ambiente}/datos.json`).then((datos) => {
        this.datos = datos;
    });
  });

  it('Carro - ingreso carro de compra', function()  {
    LoginPage.ingresoLogin(this.datos.url.url)
    LoginPage.loginPositivo(this.datos.usuarioPositivo.usser,this.datos.usuarioPositivo.pass)
    InventoryPage.ingresoIventary();
    InventoryPage.agregarProductoAlCarro()
    CarroPage.ingresoCarroCompra()
  });

  it('Carro - Eliminar producto del carro', function() {
    LoginPage.ingresoLogin(this.datos.url.url)
    LoginPage.loginPositivo(this.datos.usuarioPositivo.usser,this.datos.usuarioPositivo.pass)
    InventoryPage.ingresoIventary();
    InventoryPage.agregarProductoAlCarro();
    CarroPage.ingresoCarroCompra();
    CarroPage.eliminarProducto()
  });

  it('Carro - ingresar al detalle del producto', function () {
    LoginPage.ingresoLogin(this.datos.url.url)
    LoginPage.loginPositivo(this.datos.usuarioPositivo.usser,this.datos.usuarioPositivo.pass)
    InventoryPage.ingresoIventary();
    InventoryPage.agregarProductoAlCarro();
    CarroPage.ingresoCarroCompra();
    CarroPage.ingresarDetalleCarro();
    
  });

  it('Carro - Eliminar producto desde el detalle', function () {
    LoginPage.ingresoLogin(this.datos.url.url)
    LoginPage.loginPositivo(this.datos.usuarioPositivo.usser,this.datos.usuarioPositivo.pass)
    InventoryPage.ingresoIventary();
    InventoryPage.agregarProductoAlCarro();
    CarroPage.ingresoCarroCompra();
    CarroPage.ingresarDetalleCarro();
    CarroPage.eliminarProductoDetalle();
  });

  it('Carro - ingreso al checkout', function() {
    LoginPage.ingresoLogin(this.datos.url.url)
    LoginPage.loginPositivo(this.datos.usuarioPositivo.usser,this.datos.usuarioPositivo.pass)
    InventoryPage.ingresoIventary();
    InventoryPage.agregarProductoAlCarro();
    CarroPage.ingresoCarroCompra();
    CarroPage.ingresoCheckout()
  });
})