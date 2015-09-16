Operadores logicos
==================

Los siguientes son los operadores logicos

1. && (AND)
2. || (OR) <-- los 'palitos' se llaman pipes
3. ! (NOT)
4. & (AND bitwise)
5. | (OR bitwise)

A = 1;
B = 0;
A OR B = 1
<<<<<<<<<<

A = 1;
B = 1;
A AND B = 1
<<<<<<<<<<<

A = 1;
NOT A = 0


|Base 10 | Base 2|
|--------|-------|
|  4     |  001  |
|--------|-------|
|  7     |  111  |
|--------|-------|

 1   2   3   4       n
2^0 2^1 2^2 2^3 ... 2^n
 1   2   4   8
 
0 | 000
1 | 100
2 | 010
3 | 110
4 | 004


(4 | 7) = 7
(4 || 7) = true

var y = 10;
var x = y || 4; 


Agrupar operaciones logicas

(true || false ) && true
