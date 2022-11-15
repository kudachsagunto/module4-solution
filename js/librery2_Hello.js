(function(window){

  var varHello = {};

  var HelloWord = "Hello";

  //Aqui nombre, hace referencia al nombre que viene del array
  varHello.speak = function (nombre){

    console.log(HelloWord + " " + nombre);

  }

  window.varHello = varHello;

}
)(window);