function enviarRe(event){
		event.preventDefault();


		var nombre = document.getElementById('nombre').value;
        var email = document.getElementById('email').value;
        var terminos = document.getElementById("terminos");

        if(nombre=="" || email==""||terminos==""){

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
		 document.getElementById('terminos').checked=0;


        }

	} 
     
function enviarRp(event){
		event.preventDefault();


		var nombreRp = document.getElementById('nombreRp').value;
		var apellidoRp = document.getElementById('nombreRp').value;
		var telefonoRp= document.getElementById('telefonoRp').value;
        var emailRp = document.getElementById('emailRp').value;
        var terminosRp = document.getElementById("terminosRp");

        if(nombreRp=="" || apellidoRp=="" || emailRp=="" || telefonoRp==""||terminosRp==""){

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
		 document.getElementById('terminosRp').checked=0;


        }

	} 