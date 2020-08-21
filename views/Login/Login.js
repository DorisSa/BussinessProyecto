
function entrar(event) {
    event.preventDefault();


    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var terminos = document.getElementById("terminos");

    if (email == "" || password == ""|| terminos == "") {

        alert("Llene por favor todo los campos");
        return false;

    }
    if (!terminos.checked) {
        alert("Debe aceptar terminos y condiciones");
        return false;
    }

    else {
        alert("Mensaje enviado correctamente");
        document.getElementById('email').value = "";
        document.getElementById('password').value = "";
        document.getElementById('terminos').checked = 0;
    }

}

function mostrarContrasena() {
    var input = document.getElementById("password");
    if (input.type == "password"){
		input.type = "text";
		document.getElementById("boton").innerHTML = "<i class='fa fa-eye'></i>"
    } else {
		input.type = "password";
		document.getElementById("boton").innerHTML = "<i class='fa fa-eye-slash'></i>"
		
    }
}






