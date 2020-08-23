	
function enviarRp(event){
	event.preventDefault();


	var nombreRp = document.getElementById('nombreRp').value;
	var apellidoRp = document.getElementById('nombreRp').value;
	var telefonoRp= document.getElementById('telefonoRp').value;
	var emailRp = document.getElementById('emailRp').value;
	var password2 = document.getElementById('password2').value;
	var terminosRp = document.getElementById("terminosRp");

	if(nombreRp=="" || apellidoRp=="" || telefonoRp==""|| emailRp=="" || password2=="" ||terminosRp==""){

		alert("Llene por favor todo los campos");
			return false;

	}
	if(!terminosRp.checked){
	alert("Debe aceptar terminos y condiciones");
	return false;
	}

	else{
		alert( "Mensaje enviado correctamente");
		document.getElementById('nombreRp').value = "";
		document.getElementById('apellidoRp').value = "";
		document.getElementById('telefonoRp').value= "";
		document.getElementById('emailRp').value="";
		document.getElementById('password2').value="";
		document.getElementById('terminosRp').checked=0;


	}

} 

function mostrarContrasena() {
    var input = document.getElementById("password2");
    if (input.type == "password"){
		input.type = "text";
		document.getElementById("boton").innerHTML = "<i class='fa fa-eye'></i>"
    } else {
		input.type = "password";
		document.getElementById("boton").innerHTML = "<i class='fa fa-eye-slash'></i>"
		
    }
}



