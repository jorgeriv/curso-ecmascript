Conceptos basicos
=================

Que es JavaScript?
------------------
JavaScript es un lenguaje de programacion interpretado, orientado a objetos basado en prototipos.

---

Javascript es un lenguaje de programacion interpretado no tipado que nacio para agregar interactividad a paginas web. Actualmente es el lenguaje mas utilizado en la web para agregar desde validacion de formularios hasta aplicaciones web.

---

Javascript es un lenguaje interpretado, esto significa que existe una aplicacion encargada de convertir el codigo fuente en instrucciones que puedan ser ejecutadas por el procesador en tiempo real a diferencia de un lenguaje compilado que es cambiado a codigo maquiuna para su posterior ejecucion.

Que es EcmaScript?
------------------
EcmaScript es el nombre correcto del estandard.

Breve historia de JavaScript
----------------------------
El lenguaje fue desarrollado por Brendan Eich para ser incluido en el navegador Netscape en 1995, originalmente se llamo *LiveScript* y posteriormente renombrado como *JavaScript* por propocitos publicitarios debido a la popularidad del entonces nuevo lenguade de programacion Java.

Poco despues del lanzamiento en Netscape JavaScript fue adoptado en otros navegadores como Microsoft Internet Explorer 3 de microsoft.

En noviembre de 1996 Netscape inicio el proceso para convertir JavaScript a un estandar enviandolo para su consideracion a Ecma International. En Junio de 1997 se publico la primera edicion de la especificacion ECMA-262.

Debido a que JavaScript es una marca registrada de Oracle, el estandar fue nombrado EcmaScript.

La ultima version del estandar es EcmaScript6 lanzada en Junio del 2015, esta version implementa muchas de las mejoras propuestas en la version 4 que fue abandonada sin llegar a convertirse en un estandar, pasando asi de la version 3 a la 5.

Motores de JavaScript
---------------------

Un motor de JavaScript (tambien conocidos como runtime environment) se refiere a la implementacion de un interprete del lenguaje, en otras palabras es el programa que procesa el codigo javascript y se encarga de cargarlo en memoria y ejecutarlo en el procesador de la computadora.

Algunos de los interpretes mas populares  son:
 * SpiderMonkey - Mozilla
 * Rhino - Mozilla
 * V8 - Google
 * Blink - Microsoft
 * Nitro - Apple
 
 
Comentarios
-----------

Los comentarios son bloques de codigo que son ignorados por el interprete de javascript.
Existen dos maneras de agregar comentarios:

```javascript

// Comentarios de una linea

/*
Bloque comentario,
multi-linea
*/


```
Declaraciones
-------------

```javascript
var edad = 30;

let nombre = "Jorge";

const PI = 3.141598;
```
### Punto y coma opcional
Para terminar cada declaracion en JavaScript se utiliza un punto y coma, sin embargo esto es una formalidad y no es obligatorio en todos los casos.
Considera el siguiente codigo:
```javascript
var a = 2, b = 5, c; c = Math.pow(a, b) // punto y coma obligatorios para separar dos declaraciones
console.log(c) // El uso del punto y coma no es obligatorio
```
TODO: Add more examples where semicolon are mandatory

Aun que el punto y coma no sea necesario en todos los casos es recomendable usarlo para mejorar la consistencia y tratar de evitar errores, sin embargo  esta regla es ampliamente debatida y dependera mucho del estilo del programador o equipo de desarrollo con el que se trabaje. En este curso utilizaremos siempre el punto y coma.

** NOTA: ** *Nombres validos de identificadores en javascript deben iniciar con una letra, guion bajo (_) o signo de pesos ($); el resto de los caracteres pueden incluir numeros*

** Pro tip: ** _Valores CONSTATES por convencion son escritos con todas sus letras en mayusculas_

Tipos de datos primitivos en JavaScript
---------------------------------------
 * Boolean
 * String
 * Number
 * Object
 * Array
 * Null
 * Undefined
 * Symbol
 
Uso de una variable sin definir provoca un error 'variable is not defined';
Una variable se puede definir sin asingarle ningun valor lo que dara una variable con valor 'undefined';


