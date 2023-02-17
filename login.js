function login() {
    var user, password

    user = document.getElementById("usuario").value;
    password = document.getElementById("contrasena").value;

    if (user == "admin" && password == "1234") {
        window.location = "sesion.html";
    } else {
        alert("DATOS INCORRECTOS")
        // alert("PARA INICIAR SESIÓN INGRESE LOS SIGUIENTES DATOS\n\nUSUARIO = admin\nCONTRASEÑA = 1234")
    }
}

function olvidoContrasena() {
   alert("FUNCIÓN NO DISPONIBLE EN ESTE PROYECTO")
}

