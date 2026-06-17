# language: es
Característica: checkout Saucedemo

    Antecedentes:
        Dado el usuario ingresa a la página de login
        Cuando ingresa credenciales válidas

    Escenario: Checkout - rellenar formulario
        Cuando El usuario agrega un producto al carro
        Y ingresa al carro de compra
        Y ingresa al checkout
        Entonces el usuario rellena el formulario