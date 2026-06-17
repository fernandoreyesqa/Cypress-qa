# language: es
Característica: Login Saucedemo

  Antecedentes:
    Dado el usuario ingresa a la página de login

  Escenario: Login exitoso con credenciales válidas
    Cuando ingresa credenciales válidas
    Entonces debería ver el inventario de productos

  Escenario: Login sin usuario ni contraseña
    Cuando intenta iniciar sesión sin credenciales
    Entonces debería ver un mensaje de error

  Escenario: Login sin contraseña
    Cuando ingresa solo el usuario
    Entonces debería ver un mensaje de error

  Escenario: Login con contraseña incorrecta
    Cuando ingresa credenciales incorrectas
    Entonces debería ver el mensaje de credenciales erróneas

  Escenario: login falla 
    Cuando ingresa mal las credeciales