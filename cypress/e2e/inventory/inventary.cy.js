import LoginPage from "../../page/login/loginPage";
import InventoryPage from "../../page/inventory/inventoryPage";

describe("Casos pagina inventary", () => {
    beforeEach(function () {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    const ambiente = Cypress.env('AMBIENTE') || 'dev'

    cy.fixture(`${ambiente}/datos.json`).then((datos) => {
        this.datos = datos;
    });
  });

  it('inventary - ingreso pagina inventary', function() {
    LoginPage.ingresoLogin(this.datos.url.url)
    LoginPage.loginPositivo(this.datos.usuarioPositivo.usser,this.datos.usuarioPositivo.pass)
    InventoryPage.ingresoIventary();
  });

  it('Inventary - Contar productos', function () {
    LoginPage.ingresoLogin(this.datos.url.url)
    LoginPage.loginPositivo(this.datos.usuarioPositivo.usser,this.datos.usuarioPositivo.pass)
    InventoryPage.ingresoIventary();
    InventoryPage.cantidadDeProductos();
  });

  it('Inventary - Ingreso detalle producto', function () {
    LoginPage.ingresoLogin(this.datos.url.url)
    LoginPage.loginPositivo(this.datos.usuarioPositivo.usser,this.datos.usuarioPositivo.pass)
    InventoryPage.ingresoIventary();
    InventoryPage.ingresarDetalleProducto()
  });

  it('Inventary - filtrar por precio menor', function () {
    LoginPage.ingresoLogin(this.datos.url.url)
    LoginPage.loginPositivo(this.datos.usuarioPositivo.usser,this.datos.usuarioPositivo.pass)
    InventoryPage.ingresoIventary();
    InventoryPage.ordenarProductoPrecio();
  });

  it('Invetary - Filtrar por precio mayor ', function () {
    LoginPage.ingresoLogin(this.datos.url.url)
    LoginPage.loginPositivo(this.datos.usuarioPositivo.usser,this.datos.usuarioPositivo.pass)
    InventoryPage.ingresoIventary();
    InventoryPage.ordenarProductoMasCaro()
  });

  it.only('Inventary - agregar al carro de compra', function () {
    LoginPage.ingresoLogin(this.datos.url.url)
    LoginPage.loginPositivo(this.datos.usuarioPositivo.usser,this.datos.usuarioPositivo.pass)
    InventoryPage.ingresoIventary();
    InventoryPage.agregarProductoAlCarro()
  });
})