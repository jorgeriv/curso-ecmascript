Lecccion 2 - Javascript variables
=================================


### Declaracion de variables

Nombres validos para las variables son todos aquellos que inician con un caracter alfabetico o un guion bajo, solo incluyen esos caractertes mas numeros, no son una palabra reservada del lenguaje y no contiene espacios intermedios.

---
TODO: Put this code in its place

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


---

```javascript
// Nombres validos
var _nombre = 'Jorge';
var $nombre = 'Yolanda';
var nombre3 = 'Jose';

// Nombres invalidos;
var 123 = 'foo';
var @usuario = 'bar'
var mi nombre = 'Celina'
```

#### Sencibilidad de mayusculas/minusculas
Considera el siguiente codigo

```javascript
var minombre, miNombre, MiNombre, MINOMBRE;
```
Cada una de las variables definidas en el bloque de codgo superior son diferentes.

#### Convenciones
Existen algunas reglas no escritas o convenciones que usamos a la hora de programar para mejorar la legibilidad del codigo e identificacion de tipos de variables de una manera mas rapida.

#### Clases, CONSTANTES y variables
variables

#### camelCase y sneak_case
Debido a que los espacios no son permitidos en el nombre de las variables es comun separar palabras usando una de dos tecnicas

**camelCase:** Se refiere a usar la primera letra de cada palabra en mayuscula para asi poder detectar facilmente el final e inicio de cada palabra
```javascript
var variableMultipalabra;
```
**sneak_case:** Se refiere a separar cada palabra con un guion bajo intermedio
```javascript
var variable_multipalabra;
```
**Nota:** Ambas formas son correctas, pero se aconseja mantener la consistencia en todo el codigo, en este curo por ejemplo usaremos camelCase en los ejemplos.

**Nota 2:*** En caso de elegir camelCase el unico uso aceptable de sneak_case es en el nombre de constantes.

#### Buenas practicas

Trata que el nombre de una variable sea suficientemente descriptivo (evita nombres como var x);



### Scope (ambito) de las variables
El scope(en ingles) o ambito se refiere a el ambito en el cual una variable esta definida

#### variables de ambito global

#### variables de ambito funcional

Creamos una variable de ambito funcional cuando definimos una variable dentro de una funcion, esta variable solo podra ser usada dentro de esta misma funcion y una vez que la ejecucion de la funcion termine la variable sera removida de la memoria.

Considera el siguiente codigo

```javascript
function sumar(a, b){
    var resultado;
    
    resultado = a + b;
    
    console.log(resultado);
}

sumar(2, 2);
console.log(resultado);

```
**Nota:** 
* *Las funciones se veran en detalle en la leccion 5*
* *Los operadores aritmeticos se veran en detalle en la leccion 3*

La variable **resultado** esta definida dentro de la funcion "sumar" y solo puede ser accedida dentro del ambito de la misma funcion. La primera llamada a console.log(resultado) que se encuentra dentro de la funcion tendra una referencia valida en memoria que apunta hacia la variable e imprimira en la consola el resultado de la operacion 2 + 2, sin embargo la segunda referencia a la variable dara un error de referencia a una variable no definida.



#### variables de ambito de bloque

Considera el siguiente codigo

```javascript
function potencia(base, exponente){
    var contador = 0,
        resultado = base;
        
    while(contador < exponente){
        resultado = resultado * base;
    }
}


### Hoisting (elevacion)
**Hoisting:** Se refiere a la etapa en la que el interprete del lenguaje lee las declaraciones y eleva las variables definidas dentro de una funcion o bloque de codigo al scope donde es definida, si no encuentra la definicion en ningun scope su perior hasta llegar al scope principal, la variable se convierte en global.