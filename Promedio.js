
//ordenamiento del array

function ordenArray (lista) {

let aux;
for (let i = 1 ; i<lista.length ; i++){
    for(let j = i; j > 0; j--){
       
        if (lista[j]<lista[j - 1]){
                                 
                                 aux = lista [j -1];
                                 lista [j -1] = lista [j];
                                 lista [j] = aux;
        } 
        aux = 0;
    }

}

console.log("Cantidad de elementos " + lista.length);
console.log("Array ordenado");

for (i in lista){
    console.log(lista[i])
}

}

//CALCULO DE LA MEDIA ARITMETICA

function promedio (lista) {

let sumaPromedio = 0;

for (let i in lista) {

    sumaPromedio = sumaPromedio + lista[i];
}

const promedio = sumaPromedio / lista.length;

console.log (`El promedio es ${promedio}`);

}

//CALCULO DE LA MEDIANA
function medianArray (lista){    

    ordenArray (lista);

    let mediana;
    let posLista;
    const cantValores = lista.length % 2;

    if (cantValores != 0) {
        posLista = Math.floor(lista.length / 2);
        mediana = lista[posLista];
    }
    else {
        posLista = lista.length / 2;
        mediana = (lista[posLista] + lista[posLista - 1]) / 2; 
    }



    console.log("La mediana es: " + mediana);
}

//CALCULO DE LA MODA

function modArray (lista){

    ordenArray (lista);
    
    let iModa = 0;
    let modaFrec = [];  
    let moda = [];
    let c = 1;
    let flag = false;

    for (let i=1; i < lista.length; i++){
        
        while (lista[i] == lista [i-1]){
            c++;   
            i++;
            flag = true;
        }   
        if (flag){
        modaFrec[iModa] = c; 
        moda [iModa] = lista [i -1];  
        iModa ++;
        flag = false;
        c = 1;
        }
    }

    for (p in moda){
    console.log (`La moda ${moda [p]} se repite ${modaFrec [p]} veces`);
    }
}

//CALCULO DE LA MODA UTILIZANDO PROPIEDADES DE ARRAY

  function modArrayPrope (lista){

  const lista1Count = {}; //TRANSFORMA LA LISTA EN UN OBJETO
  
  lista1.map(
    function (elemento) {
      if (lista1Count[elemento]) {
        lista1Count[elemento] += 1;
      } else {
        lista1Count[elemento] = 1;
      }
    }
  );
  
  const lista1Array = Object.entries(lista1Count).sort(      //TRANSFORMA EL OBJETO NUEVAMENTE EN UNA LISTA
    function (elementoA, elementoB) {
      return elementoA[1] - elementoB[1];
    }
  );
  
   console.log(lista1Array[lista1Array.length - 1]);

  
} 