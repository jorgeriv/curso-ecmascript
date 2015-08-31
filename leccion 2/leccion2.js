/**
 * 
 * Lenguaje Compilado vs lenguaje interpretado
 * 
 * compilado (c, c++, etc) --> compilador --> codigo maquina (.exe) --> procesador
 * interpetado (php, perl, python, javascript) --> interprete --> procesador
 * 
 * Javascript procesa el codigo fuente en dos etapas
 * 1.- Lee las declaraciones de funciones y variables y las guarda en memoria
 * 2.- Ejecuta las instrucciones del programa
 * 
 * Para declarar una variable dentro del scope de una funcion utilizamos la palabra reservada 'var'
 * Las variables declaradas sin 'var' se convierten en variables globales mediante el mecanismo de hoisting
 * 
 *  file.js --> Interprete (javascript engine) --> OS --> Processor
 * 
 * Javascript es el nombre de una implementacion del estandar EcmaScript
 * Javascript es una marca comercial que le pertenece a Oracle
 * Cuando crearon Javasceript el lenguaje Java era muy popular y pensaron que seria 
 * una buena idea llamarlo como el hermanito menor de Java 'JavaScript' aunque el
 * nombre pudiera sugerirnos que existe una relacion entre ambos lenguajes realmente
 * no tienen mucho mas que ver aparte del nombre.
 * Gracias a un acuerdo comercial entre mozilla y Java mozilla puede usar el nombre JavaScript
 * pero al momento de nombrar el standard no se pudo registrar bajo ese nombre que ya le pertenecia a
 * la empresa que hace java. Pero otras empresas no puede utilizar el nombre de javascript
 * 
 */


/************************************
 * STRINGS - Cadena (de caracteres) *
 ************************************/
// No existe un limite especifico en el estandar EcmaScript, el limite del tamano de una cadena de texto depende de la implementacion y regularmente esta en funcion de la memoria disponible en el sistema. 

 // Constructor
 var cadena = new String('Esta es una cadena de caracteres');
 
 // Literales
 var miNombre = "Jorge Rivera";
 var tuNombre = 'Yolanda Ribas';
 // Pro tip: Elije una forma para declarar los strings literals y apegate a ella
 // Pro tip: Prefiere siempre las declaraciones literales sobre los constructores

/*******************
 * NUMBER - Numero *
 *******************/
var numero_uno = new Number(1); // Constructor
var numero_dos = 2; // Literal

/*******************
 * OBJECT - Objeto *
 *******************/
var objeto_const = new Object();
var objeto_liter = {};


/*********************
 * BOOLEAN - Boleano *
 *********************/
 
 var verdadero = new Boolean(true); // Constructor
 var falso = false; // Literal
 
 
/******************
 * ARRAY - Matriz *
 ******************/
 var miArray = new Array();
 var miVector = [];
 
 
var invalida = null; // esta definida pero no tiene  ningun valor significativo (tiene valor nulo)

var undefinida = undefined; // Esta variable no esta definida o tiene un valor indefinido

console.log(nueva_variable);

// Pro tip: null es diferente a unidefined


