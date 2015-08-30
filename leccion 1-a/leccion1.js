/**
 * Que es Javascript
 * Javascript es un lenguaje de programacion interpretado no tipado que nacio para 
 * agregar interactividad a paginas web. Actualmente es el lenguaje mas utilizado
 * en la web para agregar desde validacion de formularios hasta aplicaciones web.
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
 * Variables JavaScript
 * 
 * JavaScript tiene 8 tipos de variables basicas que son
 * -Boolean
 * -String
 * -Number
 * -Object
 * -Array
 * -Null
 * -Undefined
 * -Symbol <--
 * 
 * 
 * Para declarar una variable dentro del scope de una funcion utilizamos la palabra reservada 'var'
 * Las variables declaradas sin 'var' se convierten en variables globales mediante el mecanismo de hoisting
 * 
 * Scope: El scope se refiere a el ambito en el cual una variable esta definida
 * Hoisting: Se refiere a la etapa en la que el interprete del lenguaje lee las declaraciones
 * 
 * Javascript es un lenguaje interpretado, esto significa que existe una aplicacion encargada de convertir
 * el codigo fuente en instrucciones que puedan ser ejecutadas por el procesador en tiempo real a diferencia
 * de un lenguaje compilado que es cambiado a codigo maquiuna para su posterior ejecucion.
 * 
 * Algunos de los interpretes mas populares (tambien conocidos como runtime environment) son:
 * SpiderMonkey - Mozilla
 * Rhino - Mozilla
 * V8 - Google
 * Blink - Microsoft
 * Nitro - Apple
 * 
 *  file.js --> Interprete (javascript engine) --> OS --> Processor
 * 
 * Javascript es el nombre de una implementacion del estandar EcmaScript
 * Javascript es una marca comercial que le pertenece a Java
 * Cuando crearon Javasceript el lenguaje Java era muy popular y pensaron que seria 
 * una buena idea llamarlo como el hermanito menor de Java 'JavaScript' aunque el
 * nombre pudiera sugerirnos que existe una relacion entre ambos lenguajes realmente
 * no tienen mucho mas que ver aparte del nombre.
 * Gracias a un acuerdo comercial entre mozilla y Java mozilla puede usar el nombre JavaScript
 * pero al momento de nombrar el standard no se pudo registrar bajo ese nombre que ya le pertenecia a
 * la empresa que hace java. Pero otras empresas no puede utilizar el nombre de javascript
 * 
 * En la practica EcmaScript es mejor conocido como JavaScript
 * 
 * Nombres validos para las variables son todos aquellos que inician con un caracter alfabetico o un guion bajo, solo incluyen esos caractertes mas numeros y no son una palabra reservada del lenguaje
 * 
 */


/************************************
 * STRINGS - Cadena (de caracteres) *
 ************************************/
 
 // Constructor
 var cadena = new String('Esta es una cadena de caracteres');
 
 // Literales
 var MiNombre = "Jorge Rivera"; // Hay algun limite maximo de caracteres?
 var TuNombre = 'Yolanda Ribas';
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


