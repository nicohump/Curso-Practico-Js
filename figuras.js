
// Codigo del cuadrado

console.group("Cuadrado");

const  squareSide = 5;
console.log("Los lados del cuadrado miden " + squareSide);

const perimetroCuad = squareSide * 4;

console.log ("El perimetro del cuadrado es: " + perimetroCuad + " cm");

const areaCuad = squareSide * squareSide;

console.log ("El area del cuadrado es: " + areaCuad + " cm2");

console.groupEnd();

// Codigo del triangulo

console.group("Triangulo");

const triangleBase = 4;
const triangSide = 6;
const triangleHeigth = 5; 

console.log("La base del triangulo mide " 
+ triangleBase 
+ " cm" 
+ " y los lados opuestos miden " 
+ triangSide 
+ " cm"
);

const perimetroTrian = triangSide * 2 + triangleBase;

console.log ("El perimetro del cuadrado es: " + perimetroTrian + " cm");

const areaTrian = (triangleBase * triangleHeigth) / 2;

console.log ("El area del triangulo es: " + areaTrian + " cm2");

console.groupEnd();

//Codigo del circulo

console.group("Circulo");

const radioCirc = 4;

const PI = Math.PI;

const circunsferencia = PI * (radioCirc * 2);

console.log ("La circunsferencia del circulo mide " + circunsferencia + " cm");

const areaCirc = PI * (radioCirc * radioCirc);

console.log ("El area del circulo es " + areaCirc + " cm");

console.groupEnd();



