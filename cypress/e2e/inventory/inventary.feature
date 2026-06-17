# language: es
Característica: Inventary Saucedemo

    Antecedentes:
        Dado el usuario ingresa a la página de login
        Cuando ingresa credenciales válidas

    Escenario: Inventary - ingreso pagina inventary
        Cuando El usuario visualiza la pagina de inventory

    Escenario: Inventary - Contar productos
        Cuando El usuario visualiza la pagina de inventory
        Entonces El usuario contara los productos en el inventario

    Escenario: Inventary - Ingreso detalle producto
        Cuando El usuario ingresa al detlla del producto
        Entonces El sistema mostrara el detalle del producto

    Escenario: Inventary - filtrar por precio menor
        Cuando El usuario filtra por precio menor
        Entonces El sistema muestra el primer producto mas barato

    Escenario: Inventary - Filtrar por precio mayor
        Cuando El usuario filtra por precio mayor
        Entonces El sistema mostara el primer producto mas caro

    Escenario: Inventary - agregar al carro de compra
        Cuando El usuario agrega un producto al carro
        Entonces El sistema mostrara el producto en el carro