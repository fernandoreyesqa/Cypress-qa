import LoginPage from "../../page/login/loginPage";
import InventoryPage from "../../page/inventory/inventoryPage";
import CarroPage from "../../page/carro/carroPage";
import CheckoutPage from "../../page/checkout/checkoutPage";


describe("Casos de pruebas del checkout",() =>{
    beforeEach(function () {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    const ambiente = Cypress.env('AMBIENTE') || 'dev'

    cy.fixture(`${ambiente}/datos.json`).then((datos) => {
        this.datos = datos;
    });
  });

  it('Checkout - Rellenar fomrmulario', function()  {
    LoginPage.ingresoLogin(this.datos.url.url)
    LoginPage.loginPositivo(this.datos.usuarioPositivo.usser,this.datos.usuarioPositivo.pass)
    InventoryPage.ingresoIventary();
    InventoryPage.agregarProductoAlCarro();
    CarroPage.ingresoCarroCompra();
    CarroPage.ingresoCheckout()
    CheckoutPage.ingresoDatos(this.datos.FormularioCheckout.firstName,this.datos.FormularioCheckout.inputLastName,this.datos.FormularioCheckout.inputPostalCode )
  });

  it('Checkout - Validar campo obligatorio First name', function() {
    LoginPage.ingresoLogin(this.datos.url.url)
    LoginPage.loginPositivo(this.datos.usuarioPositivo.usser,this.datos.usuarioPositivo.pass)
    InventoryPage.ingresoIventary();
    InventoryPage.agregarProductoAlCarro();
    CarroPage.ingresoCarroCompra();
    CarroPage.ingresoCheckout()
    CheckoutPage.validarFirstName(this.datos.FormularioCheckout.inputLastName,this.datos.FormularioCheckout.inputPostalCode)
  });

  it('Checkout - validar campo obligatorio last name', function () {
    LoginPage.ingresoLogin(this.datos.url.url)
    LoginPage.loginPositivo(this.datos.usuarioPositivo.usser,this.datos.usuarioPositivo.pass)
    InventoryPage.ingresoIventary();
    InventoryPage.agregarProductoAlCarro();
    CarroPage.ingresoCarroCompra();
    CarroPage.ingresoCheckout()
    CheckoutPage.validarLastName(this.datos.FormularioCheckout.firstName,this.datos.FormularioCheckout.inputPostalCode)
  });

  it('Checkout - Validar campo obligatorio Postal code', function () {
    LoginPage.ingresoLogin(this.datos.url.url)
    LoginPage.loginPositivo(this.datos.usuarioPositivo.usser,this.datos.usuarioPositivo.pass)
    InventoryPage.ingresoIventary();
    InventoryPage.agregarProductoAlCarro();
    CarroPage.ingresoCarroCompra();
    CarroPage.ingresoCheckout()
    CheckoutPage.validarPostalCode(this.datos.FormularioCheckout.firstName, this.datos.FormularioCheckout.inputLastName)
  });

  it('Checkout - Ingreso al checkout Overview', function() {
    LoginPage.ingresoLogin(this.datos.url.url)
    LoginPage.loginPositivo(this.datos.usuarioPositivo.usser,this.datos.usuarioPositivo.pass)
    InventoryPage.ingresoIventary();
    InventoryPage.agregarProductoAlCarro();
    CarroPage.ingresoCarroCompra();
    CarroPage.ingresoCheckout()
    CheckoutPage.ingresoDatos(this.datos.FormularioCheckout.firstName,this.datos.FormularioCheckout.inputLastName,this.datos.FormularioCheckout.inputPostalCode );
    CheckoutPage.ingresoOverview()
  });

  it('Checkout - ingreso detalle desde el overview', function() {
    LoginPage.ingresoLogin(this.datos.url.url)
    LoginPage.loginPositivo(this.datos.usuarioPositivo.usser,this.datos.usuarioPositivo.pass)
    InventoryPage.ingresoIventary();
    InventoryPage.agregarProductoAlCarro();
    CarroPage.ingresoCarroCompra();
    CarroPage.ingresoCheckout()
    CheckoutPage.ingresoDatos(this.datos.FormularioCheckout.firstName,this.datos.FormularioCheckout.inputLastName,this.datos.FormularioCheckout.inputPostalCode );
    CheckoutPage.ingresoOverview()
    CheckoutPage.ingresoDetalleOverview();
  });

  it.only('Checkout - ', function () {
    LoginPage.ingresoLogin(this.datos.url.url)
    LoginPage.loginPositivo(this.datos.usuarioPositivo.usser,this.datos.usuarioPositivo.pass)
    InventoryPage.ingresoIventary();
    InventoryPage.agregarProductoAlCarro();
    CarroPage.ingresoCarroCompra();
    CarroPage.ingresoCheckout()
    CheckoutPage.ingresoDatos(this.datos.FormularioCheckout.firstName,this.datos.FormularioCheckout.inputLastName,this.datos.FormularioCheckout.inputPostalCode );
    CheckoutPage.ingresoOverview()
    CheckoutPage.clickFinish()
  });
})