
function enviarRe(event){
	event.preventDefault();
	var nombre = document.getElementById('nombre').value;
	var email = document.getElementById('email').value;
	var password1 = document.getElementById('password1').value;
	var terminos = document.getElementById("terminos");

	if(nombre=="" || email==""|| password1==""||terminos==""){

		alert("Llene por favor todo los campos");
			return false;

	}
	if(!terminos.checked){
		alert("Debe aceptar terminos y condiciones");
		return false;
	}
	
	else{
		alert( "Mensaje enviado correctamente");
		document.getElementById('nombre').value = "";
		document.getElementById('email').value="";
		document.getElementById('password1').value="";
		document.getElementById('terminos').checked=0;
		window.location.href ="../RedEmpresarial/InicioEmpresarial.html";


	}

} 
function mostrarContrasena() {
    var input = document.getElementById("password1");
    if (input.type == "password"){
		input.type = "text";
		document.getElementById("boton").innerHTML = "<i class='fa fa-eye'></i>"
    } else {
		input.type = "password";
		document.getElementById("boton").innerHTML = "<i class='fa fa-eye-slash'></i>"
		
    }
}



