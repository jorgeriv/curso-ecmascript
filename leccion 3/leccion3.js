/**
 * Ciclos
 * 
 * Un ciclo se refiere a un bloque de codigo que se ejecuta (cicla) un cierto numero
 * de veces.
 */
 
 /*******
  * FOR *
  *******/
  
  
  // Declaracion del contador; condicion; incremento del contador
 
  for(var contador = 0; contador < 10; contador = contador + 1){
     console.log(contador); 
  }
  
  // Ciando contador no es menor que 10 (en este caso cuando contador = 10)
  // El ciclo termina y continua ejecutando el codigo aqui...
  

/*********
 * While *
 *********/
 
 var i = 0;
 while(i < 10){
     console.log(i);
     i++; // esto es igual que i = i + 1;
 }
 
 // Pro tip: el uso de la letra 'i' como contador es tradicionalmente utilizado en programacion
 // y tiene que ver con los cilos que se usaban en el lenguaje ***
 // cuando tenemos 2 contadores es costumbre utilizar la letra 'j' como el segundo contador
 
 // Pro tip: Puedes utilizar el operador ++ en lugar de variable = variable + 1;
 
 // Pro tip: Puedes usar tanto ++i como i++ pero ten en cuenta que te daran diferente resultado

 var j = 5;
 console.log(++j);
 // i se aumenta en 1
 console.log(j++);
 console.log(j);
 