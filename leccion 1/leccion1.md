Conceptos basicos
=================

Que es JavaScript?
------------------
JavaScript es un lenguaje de programacion interpretado, orientado a objetos basado en prototipos.

Que es EcmaScript?
------------------
EcmaScript es el nombre correcto del estandard.




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
 * 
 
Uso de una variable sin definir provoca un error 'variable is not defined';
Una variable se puede definir sin asingarle ningun valor lo que dara una variable con valor 'undefined';

Falsy & Truly values
--------------------

Existen varios valores que ese evaluan como verdadero o falso sin ser extrictamente los valores boleaos 'true' y 'false'.

Los siguientes valores seran tomados como verdaderos en una condicioiom
1. Numero diferente de cero (1)
2. Un objeto ({})
3. Un array ([])
4. Un string no vacio ('a')
5. el boleano true (obviamente)

Los siguientes valores son evaluados como false
1. 0
2. ''
3. null
4. undefined
5. false

if('yolanda'){
    // Este codigo se ejecuta porque el string se evalua como 'true'
}


if(''){ 
    // Este codigo no se ejecuta porqe un string vacio se evalua como 'false'
}