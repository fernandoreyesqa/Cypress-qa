import 'cypress-xpath'

const productos = ".inventory_item"
const nombreProducto = ".inventory_item_name "
const nombreProductoDetalle = "#inventory_item_container > div > div > div.inventory_details_desc_container > div.inventory_details_name.large_size"
const selectFiltros = "[data-test='product-sort-container']"
const primerPrecio = ".inventory_item_price"
const btnAgregarCarro = ".btn_inventory"
const imgpProducto = '.inventory_item_img'
const btnAddToCard = '.btn_inventory'
const badgeCarrito = '.shopping_cart_badge'
const btnCarro = '#shopping_cart_container'
const menuHamburgueza = '#react-burger-menu-btn'
const menuLogout = '#logout_sidebar_link'



class inventoryPage {

    clickLogout(){
        cy.get(menuLogout,{timeout: 10000}).should('be.visible').click();
    }

    ingresoMenu(){
        cy.get(menuHamburgueza).should('be.visible').click();
    }

    ingresarCarroCompra(){
        cy.get(btnCarro).should('be.visible').click();
    }

    cantidadBtnAddToCard(){
        cy.get(btnAgregarCarro).should('have.length', 6);
    }

    clickBotonRemove(){
        cy.contains('Remove').should('be.visible').click();
    }

    validarBadgeCantidad(cantidad) {
        cy.get(badgeCarrito).should('be.visible').and('have.text', cantidad)
    }

    agregarProductoAlCarrito(nombre) {
        cy.contains(nombreProducto, nombre)
            .closest(productos)
            .within(() => {
                cy.get(btnAgregarCarro).click()
            })
    }

    validarBadgeNoVisible(){
        cy.get(badgeCarrito).should('not.exist')
    }


    validarProductoPrecio(nombre, precio) {
    // Buscar la fila que contiene el nombre del producto
    cy.contains(nombreProducto, nombre)
        .closest(productos)
        .within(() => {
            cy.get(primerPrecio).should('have.text', precio)
        })
}

    validarAddToCard(){
          cy.get(btnAddToCard).each(($el) => {
            cy.wrap($el).should('be.visible');
            cy.wrap($el).should('not.be.empty')
        })
    }


     validarPrecios(){
        cy.get(primerPrecio).each(($el) => {
            cy.wrap($el).should('be.visible');
            cy.wrap($el).should('not.be.empty')
        })
    }


    validarTitulo(){
        cy.get(nombreProducto).each(($el) => {
            cy.wrap($el).should('be.visible');
            cy.wrap($el).should('not.be.empty')
        })
    }

    validarCantidadProductos(){
        cy.get(productos).should('have.length', 6)
    }

    //Se valida el ingreso a la pagina de iventary
    ingresoIventary(){

        cy.get(productos, {timeout: 10000}).should('be.visible')
    }

    //Cuenta la cantidad de productos
    cantidadDeProductos(){
        cy.get(productos).then((items) => {
            const count = items.length
            cy.log('Cantidad: ' + count)
            console.log('Cantidad de productos: ', count)
        })
    }

    //Se ingresa al detalle del producto
    ingresarDetalleProducto(){
        cy.get(nombreProducto).then((items) =>{
            const randomIndex = Math.floor(Math.random() * items.length)
            const seleccionItem = items[randomIndex]

            const nombre = seleccionItem.innerText

            cy.wrap(nombre).as('nombreSeleccionado')
            cy.wrap(seleccionItem).click()
        })

        cy.get('@nombreSeleccionado').then((nombre) => {
            cy.get(nombreProductoDetalle).should('have.text', nombre)
        })

    }

    primerProducto(nombre){
        cy.get(nombreProducto,{timeout: 10000}).first().should('contain.text', nombre)
    }

    ordenarAZ(){
        cy.get(selectFiltros,{timeout:10000}).select('Name (A to Z)');
    }

    ordenarZA(){
        cy.get(selectFiltros,{timeout:10000}).select('Name (Z to A)');
    }

    primerProductoPrecio(nombre,precio){
        cy.get(nombreProducto,{timeout: 10000}).first().should('contain.text', nombre)
        cy.get(primerPrecio,{timeout: 10000}).first().should('contain.text', precio)
    }

    //Ordenar prodcutos por precio mas bajo
    ordenarProductoPrecio(){
        cy.get(selectFiltros,{timeout:10000}).select('Price (low to high)');
    }
    //Ordenar productos por el precio mas caro
    ordenarProductoMasCaro(){
        cy.get(selectFiltros,{timeout:10000}).select('Price (high to low)');
        //Se valida que el primer elemento tenga el valor mas alto
        
    }

    //Agregar un producto al carro
    agregarProductoAlCarro(){
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        // El botón cambia de "Add to cart" a "Remove"
        cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible');
        // Validamos que el icono del carrito muestre el número 1
        cy.get('.shopping_cart_badge').should('have.text', '1');
    }

}
const InventoryPage = new inventoryPage
export default InventoryPage