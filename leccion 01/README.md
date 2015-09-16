Conceptos basicos
=================

Que es JavaScript?
------------------
JavaScript es un lenguaje de programacion interpretado, debilmente tipado, orientado
a objetos basado en prototipos. Es decir que el codigo fuente es ejecutado directamente 
por un interprete en lugar de ser convertido a codigo maquina por un compilador previamente,
no es necesario declarar el tipo de una variable y estas pueden guardar multiples 
tipos, perimite implementar el paradigma de orientacion a objetos pero a diferencia
de la mayoria de los lenguajes actuales utiliza prototipos en lugar de Clases.

**Nota:** Se hablara con mas detalle de cada una de las caraceristicas de javascript
en las siguientes lecciones.


Que es EcmaScript?
------------------
EcmaScript es el nombre del estandar que describe el lenguage.

Breve historia de JavaScript
----------------------------
El lenguaje fue desarrollado por Brendan Eich para ser incluido en el navegador 
Netscape en 1995, originalmente se llamo *LiveScript* y posteriormente fue renombrado 
como *JavaScript* por propocitos publicitarios debido a la popularidad del entonces 
nuevo lenguade de programacion Java.

Poco despues del lanzamiento en Netscape JavaScript fue adoptado en otros navegadores 
como Microsoft Internet Explorer 3 de microsoft.

En noviembre de 1996 Netscape inicio el proceso para convertir JavaScript a un estandar 
enviandolo para su consideracion a Ecma International. En Junio de 1997 se publico 
la primera edicion de la especificacion ECMA-262.

Debido a que JavaScript es una marca registrada de Oracle, el estandar fue nombrado 
EcmaScript.

La ultima version del estandar es EcmaScript6 lanzada en Junio del 2015, esta version 
implementa muchas de las mejoras propuestas en la version 4 que fue abandonada sin 
llegar a convertirse en un estandar, pasando asi de la version 3 a la 5.

Motores de JavaScript
---------------------

Un motor de JavaScript (tambien conocidos como runtime environment) se refiere a 
la implementacion de un interprete del lenguaje, en otras palabras es el programa 
que procesa el codigo javascript y se encarga de cargarlo en memoria y ejecutarlo 
en el procesador de la computadora.

Algunos de los interpretes mas populares  son:

 * SpiderMonkey (Mozilla)
 * Rhino (Mozilla)
 * V8 (Google)
 * Chakra (Microsoft)
 * Nitro (Apple)
 
 
Introduccion al lenguaje
------------------------

###Comentarios
Los comentarios son bloques de codigo que son ignorados por el interprete de javascript.
Existen dos maneras de agregar comentarios:

```javascript

// Comentarios de una linea

/*
Bloque comentario,
multi-linea
*/


```
###Declaraciones


```javascript
var edad = 30;

let nombre = "Jorge";

const PI = 3.141598;
```
### Punto y coma opcional
Para terminar cada declaracion en JavaScript se utiliza un punto y coma, sin embargo 
esto es una formalidad y no es obligatorio en todos los casos.
Considera el siguiente codigo:
```javascript
var a = 2, b = 5, c; c = Math.pow(a, b) // punto y coma obligatorios para separar dos declaraciones
console.log(c) // El uso del punto y coma no es obligatorio
```

Aun que el punto y coma no sea necesario en todos los casos es recomendable usarlo 
para mejorar la consistencia y tratar de evitar errores, sin embargo  esta regla 
es ampliamente debatida y dependera mucho del estilo del programador o equipo de 
desarrollo con el que se trabaje. En este curso utilizaremos siempre el punto y coma.
