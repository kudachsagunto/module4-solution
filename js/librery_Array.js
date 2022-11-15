/*This will be the js of all the names*/
( function(){

		var nombres = [
			"Carlos",
			 "Juan",
			 "Fernando",
			"Margarita",
			"Leonor",
			"Feliciano",
			"Juan Vicente",
			"Teodoro",
			"Benjamin",
			"Josefa"]

			/*nombres[0] = "Carlos";
			nombres[1] = "Juan";
			nombres[2] = "Fernando";
			nombres[3] = "Margarita";
			nombres[4] = "Leonor";
			nombres[5] = "Feliciano";
			nombres[6] = "Juan Vicente";
			nombres[7] = "Teodoro";
			nombres[8] = "Benjamin";
			nombres[9] = "Josefa";*/

			//console.log(array);

			for (var i = 0; i <nombres.length; i++){

				/*funcion para obtener la primera letra y posteriormente compararla*/
				
				var primeraLetra = nombres[i].substring(0,1);
				if (primeraLetra.toLocaleLowerCase() == "j" || primeraLetra.toLocaleLowerCase() == "J"){
					HastaLuego.speak(nombres[i]);
				} else {
					varHello.speak(nombres[i]);
				}

			}

	}
	
)();
