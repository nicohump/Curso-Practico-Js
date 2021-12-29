
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

    return (base * altura) / 2;
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

//----------------------------------------------------------------------------------------------
//IMPLEMENTACION DE FUNCIONES PARA HTML

function calcularPerCuad (){
    const input = document.getElementById("inputCuad");
    const value = input.value;

    const perimetro = perimetroCuad(value);

    document.getElementById("outputCuad").value = perimetro;
}

function calcularAreaCuad (){
    const input = document.getElementById("inputCuad");
    const value = input.value;

    const area = areaCuad(value);

    document.getElementById("outputCuad").value = area;
}

function calcularPerTri (){
    const base = parseInt(document.getElementById("base").value);
    const lado2 = parseInt(document.getElementById("lado2").value);
    const lado3 = parseInt(document.getElementById("lado3").value);

    const perimetro = perimetroTrian(base, lado2, lado3);

    document.getElementById("outputTri").value = perimetro;

}const value = input.value;

function calcularAreaTri (){
    const base = document.getElementById("base").value;
    const altura = document.getElementById("altura").value;
    

    const area = areaTrian(base, altura);

    document.getElementById("outputTri").value = area;
}

function calcularPerCir(){
    const radio = document.getElementById("radio").value;
    
    const perimetro = Math.round(perimetroCirc(radio));

    document.getElementById("outputCir").value = perimetro;
}

function calcularAreaCir(){
    const radio = document.getElementById("radio").value;

    const area = Math.round(areaCirc(radio));


    document.getElementById("outputCir").value = area;
}

