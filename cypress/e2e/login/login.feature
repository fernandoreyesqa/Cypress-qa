# language: es
Característica: Login Saucedemo
    como usuario 
    Quiero iniciar sesion con mis credenciales
    Para acceder al inventario de productos

  Antecedentes:
    Dado el usuario ingresa a la página de login

  Escenario: Login exitoso con usuario estándar
    Dado que el usuario ingresa el nombre de usuario "standard_user"
    Y el usuario ingresa la contraseña
    Cuando el usuario hace clic en el boton de login
    Entonces el sistema redirige al usuario a "/inventory.html"

  Escenario: Login fallido con usuario bloqueado
    Dado que el usuario ingresa el nombre de usuario "locked_out_user"
    Y el usuario ingresa la contraseña
    Cuando el usuario hace clic en el boton de login
    Entonces el sistema mostrara un mensaje de error

  Escenario: Login fallido con campos vacíos
    Dado que el campo de usuario está vacío
    Y el campo de contraseña está vacío
    Cuando el usuario hace clic en el boton de login
    Entonces el sistema muestra el mensaje de error "Epic sadface: Username is required"

  Escenario: Login fallido con contraseña vacía
    Dado que el usuario ingresa el nombre de usuario "standard_user"
    Y el campo de contraseña está vacío
    Cuando el usuario hace clic en el boton de login
    Entonces el sistema muestra el mensaje de error "Epic sadface: Password is required"

  Escenario: Login fallido con contraseña incorrecta
    Dado que el usuario ingresa el nombre de usuario "standard_user"
    Y el usuario ingresa la contraseña "wrong_password"
    Cuando el usuario hace clic en el boton de login
    Entonces el sistema muestra el mensaje de error "Epic sadface: Username and password do not match any user in this service"

  Escenario: Login fallido con credenciales completamente incorrectas
    Dado que el usuario ingresa el nombre de usuario "fake_user"
    Y el usuario ingresa la contraseña "fake_password"
    Cuando el usuario hace clic en el boton de login
    Entonces el sistema muestra el mensaje de error "Epic sadface: Username and password do not match any user in this service"

  Escenario: Acceso directo a inventario sin sesión activa
    Dado que el usuario no ha iniciado sesión
    Cuando el usuario navega directamente a "https://www.saucedemo.com/inventory.html"
    Entonces el sistema redirige al usuario a la página de login
    Y el sistema muestra el mensaje de error "Epic sadface: You can only access '/inventory.html' when you are logged in."
    