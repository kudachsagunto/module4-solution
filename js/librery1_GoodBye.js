(function(window){

  
  var HastaLuego ={};

  var HastaLuegoWord = "Good Bye";

  HastaLuego.speak =function(nombre){
    console.log(HastaLuegoWord + " " + nombre);
  }

  window.HastaLuego = HastaLuego;

})(window);
  