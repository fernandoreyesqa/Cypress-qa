const btnCarro = "#shopping_cart_container"
const tituloCarro = "#header_container > div.header_secondary_container > span"
const cardProducto = '#cart_contents_container > div > div.cart_list > div.cart_item'
const tituloCard = '[data-test="inventory-item-name"]'
const detalleProducto = '#inventory_item_container > div > div > div.inventory_details_desc_container'
const btnCheckout = '[data-test="checkout"]'
const tituloCheckout = '[data-test="title"]'


class carroPage {
    //Ingreso al carro de compra
    ingresoCarroCompra(){
        cy.get(btnCarro,{timeout: 10000}).should('be.visible').click();
        cy.get(tituloCarro,{timeout:10000}).should('be.visible')
        cy.get(cardProducto).should('be.visible')
    }

    //Eliminar producto del carro de compra
    eliminarProducto(){
        cy.contains('Remove').should('be.visible').click()
        //Se valida que la card no aparesca al momento de elminar el producto
        cy.get(cardProducto).should('not.exist')
    }
    //Se ingresa al detalle del producto
    ingresarDetalleCarro(){
        cy.get(tituloCard, {timeout: 10000}).should('be.visible').click()
        //Se valida el ingreso al detalle del procuto
        cy.get(detalleProducto, {timeout: 10000}).should('be.visible')
    }

    //Eliminar porducto del carro desde el detalle
    eliminarProductoDetalle(){
        cy.contains('Remove').should('be.visible').click()

        cy.contains('Remove').should('not.exist')
    }

    //Ingresar al checkout
    ingresoCheckout(){
        cy.get(btnCheckout, {timeout: 10000}).click()
        //Se valida el ingreso al checkou
        cy.get(tituloCheckout).should('be.visible')
    }



}const CarroPage = new carroPage
export default CarroPage