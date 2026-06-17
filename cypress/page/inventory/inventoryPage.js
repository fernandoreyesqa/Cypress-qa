import 'cypress-xpath'

const productos = ".inventory_item"
const nombreProducto = ".inventory_item_name "
const nombreProductoDetalle = "#inventory_item_container > div > div > div.inventory_details_desc_container > div.inventory_details_name.large_size"
const selectFiltros = "[data-test='product-sort-container']"
const primerPrecio = ".inventory_item_price"
const btnAgregarCarro = "#add-to-cart-sauce-labs-fleece-jacket"



class inventoryPage {

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

    //Ordenar prodcutos por precio mas bajo
    ordenarProductoPrecio(){
        cy.get(selectFiltros,{timeout:10000}).select('Price (low to high)');
        //Se valida que el primer elemento tenga el valor mas bajo
        cy.get(primerPrecio,{timeout:10000}).first().should('contain.text', '$7.99');
        
    }
    //Ordenar productos por el precio mas caro
    ordenarProductoMasCaro(){
        cy.get(selectFiltros,{timeout:10000}).select('Price (high to low)');
        //Se valida que el primer elemento tenga el valor mas alto
        cy.get(primerPrecio,{timeout:10000}).first().should('contain.text', '$49.99');
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