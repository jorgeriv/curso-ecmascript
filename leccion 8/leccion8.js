/**
 * Ciclos
 * While
 * Do while
 * for
 * forEach
 * for in
 */
 
 
 /**
  * While (mientras)
  */
  console.log('\n WHILE'); 
  var i = 0;
  while(i < 10){
      console.log('El ciclo while va en la iteracion %s', ++i);
  }
 console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
 
 /**
  * Do While(Hacer mientras que...)
  */
console.log('\n DO WHILE'); 
 var j = 10;
 do{
     console.log('Iteracion No. %s', j--);
 } while(j > 0);
  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
 
 /**
  * for
  */
console.log('\n FOR'); 
for(var k = 0 ; k < 10; k++){
  console.log('Iteracion %s del ciclo \'for\'', k);
}
 console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
 
/**
* forEach (por cada uno)
*/
console.log('\n FOR EACH'); 
var lugaresReservados = 0;
var invitados = ['Carmen', 'Francisco', 'Jose', 'Maria'];

function reservar(element, index, array){
    lugaresReservados++;
   console.log('Se ha reservado un lugar para %s', element);
}

invitados.forEach(reservar);

console.log('Se han reservado %s lugares', lugaresReservados);
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');

/**
 * for in
 */
console.log('\n FOR IN'); 
 var carro = {
     color: 'Rojo',
     modelo: 'Cambry',
     anyo: 2001
 }
 var caracteristica;
 for(caracteristica in carro){
     console.log(caracteristica + ' es: ' + carro[caracteristica]);
 }