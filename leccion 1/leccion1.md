Conceptos basicos
=================

Que es JavaScript?
------------------
JavaScript es un lenguaje de programacion interpretado, orientado a objetos basado en prototipos.

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