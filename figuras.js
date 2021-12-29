
// Codigo del cuadrado

function perimetroCuad (lado){

    return lado * 4;
}

function areaCuad (lado){

    return lado * lado; 
}

// Codigo del triangulo

function perimetroTrian (lado1, lado2, lado3){

    return lado1 + lado2 + lado3;
}

function areaTrian (base, altura){

    return (base + altura) / 2;
}

//Codigo del circulo

function perimetroCirc (radio){
    const PI = Math.PI;
    return PI * (radio * 2);
}

function areaCirc (radio){
    const PI = Math.PI;
    return PI * (radio * radio);

}

