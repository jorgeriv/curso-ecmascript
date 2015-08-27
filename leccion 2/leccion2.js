/**
 * Funciones en Javascript
 * 
 * Como mencionamos en la leccion anterior practicamente todo en javascript son Objetos
 * y las funciones no son diferentes.
 */
 
 // Declarcion de una funcion
 
 function calcularAreaCuadrado(){
     var lado = 5;
     console.log(lado * lado);
 }
 
 /**
  * Las funciones nos sirven para declarar un bloque de codigo que puede ser
  * llamado multiples veces
  */
  
  // Invocar o ejecutar una funcion
  
  calcularAreaCuadrado();
  
  // Funciones con parametros
  function calcularAreaTriangulo(b, h){ // <-- Lo que esta dentro de los parentesis se llaman parametros y son variables que se envian a la funcion
      console.log((b * h)/2);
  }
  
  // Pro tip: puedes usar parentesis para agrupar operaciones y asi modificar el orden de ejecucion
  
  // Funciones con retorno
  function calcularAreaCirculo(r){
      return Math.PI * Math.pow(r, 2);
  }
  
  var areaCirculo = calcularAreaCirculo(10);
  
  console.log(areaCirculo);
  
  /**
   * Nota:
   * Existen dos convenciones para el nombrado de variables y funciones que comprenden dos o mas palabras
   * 1.- camelCase
   * 2.- sneak_case
   * 
   * Puedes usar cualquiera de las convenciones pero es bueno ser consistente
   * Por convencion todos los nombres de variables y funciones se escriben con letras minusculas
   * a excepcion de dos casos especiales:
   * 
   * CONSTANTES se escriben todas en mayusculas y se usa sneak case para separar palabras
   * Constructores siempre inician con letra mayuscula y se puede usar camelCase o sneak_case para separar palabras
   */

  
 
 