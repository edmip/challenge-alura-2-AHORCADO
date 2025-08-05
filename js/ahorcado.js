var boton = document.querySelector("#iniciar-juego");
boton.addEventListener("click", iniciarJuego);

var boton_insertar = document.querySelector("#nueva-palabra");
boton_insertar.addEventListener("click", agregarPalabra);

var array_incorrectas = [];
var array_correctas= [];
//var intentos= 0;
var partida = true;

function dibujarLetra (palabra, letra){
	
	if(!array_correctas.includes(letra)){

		
		
		x= 412;
		var compara = false;
		for(var i = 0; i < palabra.length; i++){

			if(letra == palabra[i]){
				compara=true;
				pincel.font = "30px Coming Soon, Arial";
				pincel.fillText(palabra[i], x, 495);
				array_correctas.push(letra);
				
			}
			
			x = x + 30;
		}

		if(!compara){
			
			
			letraIncorrecta(letra,intentos);
		}
		
		if(array_correctas.length == palabra.length) {

			gano(palabra);
			return partida=false;
		}

		x=412;

	}

	
}


function letraIncorrecta(letra,partida){
	
	
	if(!array_incorrectas.includes(letra)){
		
		dibujarHorca();	
		array_incorrectas.push(letra);
		

	if(array_incorrectas.length==9){

		perdio(palabra);
		return partida= false;
	}else{

		for(var i = 0; i < array_incorrectas.length; i++){
		
			x= 410 +(30*i);
			pincel.font = "30px Coming Soon, Arial";
			pincel.fillText(array_incorrectas[i], x, 250);

		}
		return;
	}

	}
	
	return;
	//console.log(array_incorrectas.includes(letra));
	
}


function agregarPalabra(){// Agregar palabra al array de palabras
    var input = document.querySelector("#input-nueva-palabra");
    var palabra_agregada = input.value.trim().toUpperCase();

    // Solo letras mayúsculas, sin espacios ni signos
    var expresion = /^[A-Z]+$/;

    if (!expresion.test(palabra_agregada)) {
        noAceptaPalabra();
		setTimeout(function(){
            limpiarSpan();
        }, 3000);
        return;

    } else {
		// Verificar si la palabra ya existe en el array
        arrayPalabras.push(palabra_agregada);
        siAceptaPalabra();
        setTimeout(function(){
            limpiarSpan();
        }, 3000);
        input.value="";
        return;
    }
}





