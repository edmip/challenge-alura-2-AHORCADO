var mensaje = document.querySelector("#eti-span");

function perdio(palabra){


		pincel.fillStyle = "red";
		pincel.font = "30px Coming Soon, Arial";
		pincel.fillText("USTED HA PERDIDO ", 370, 320);
		pincel.fillText(" EL JUEGO", 430, 350);
		pincel.fillStyle = "black";
		pincel.fillText("PALABRA: " + palabra, 370, 385);
		return;
}

function gano(palabra){

		pincel.fillStyle = "green";
		pincel.font = "30px Coming Soon, Arial";
		pincel.fillText("USTED HA GANADO..!! ", 370, 320);
		pincel.fillText(" EL JUEGO", 430, 350);
		pincel.fillStyle = "black";
		pincel.fillText("PALABRA: " + palabra, 370, 385);
		return;
}

function noAceptaPalabra(){
	mensaje.classList.remove("aceptada");
	mensaje.classList.add("no-aceptada");
	mensaje.innerHTML="Palabra introdicida no es valida, solo se permiten letras, sin espacios ni numeros";
}

function siAceptaPalabra(){

	mensaje.classList.add("aceptada");
	mensaje.innerHTML="Palabra exitosamente introdicida a la lista";
}

function limpiarSpan(){
	mensaje.innerHTML="";
}

