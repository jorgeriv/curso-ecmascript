Lecccion 1
==========

Javascript variables
--------------------

### Scope (ambito) de las variables

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
*Nota: Las funciones se veran en mas detalle en la leccion 5*

La variable **resultado** esta definida dentro de la funcion "sumar" y solo puede ser accedida dentro del ambito de la misma funcion. La primera llamada a console.log(resultado) que se encuentra dentro de la funcion tendra una referencia valida en memoria que apunta hacia la variable e imprimira en la consola el resultado de la operacion 2 + 2, sin embargo la segunda referencia a la variable dara un error de referencia a una variable no definida.



#### variables de ambito de bloque



### Hoisting (elevacion)