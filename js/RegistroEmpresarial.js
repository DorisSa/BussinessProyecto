
function enviarRe(event){
		event.preventDefault();


		var nombre = document.getElementById('nombre').value;
        var email = document.getElementById('email').value;
        var terminos = document.getElementById("terminos");

        if(nombre=="" || email==""){

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


        }

	} 
     

/*function validarFormularioRe(){
	

	var nombre = document.getElementById("nombre");
	var email= document.getElementById("email");
	var terminos = document.getElementById("terminos");
	if(nombre.value.length ==0){
		alert("debe ingresar el nombre de su empresa");
		nombre.focus();
		return false;
	}
	if(email.value.length ==0){
		alert("debe ingresar el email de su empresa");
		email.focus();
		return false;
	}
	if(!terminos.checked){
		alert("Debe aceptar terminos y condiciones");
		return false;
	}
}
*/