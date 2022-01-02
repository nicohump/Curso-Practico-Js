
function Discount (){

    let precioOrigin = parseInt(document.getElementById ("precioOriginal").value);
    let descuentoAplic = parseInt(document.getElementById ("descuentoAplicado").value);    

    let precioFinal;

    precioFinal = (precioOrigin * (100 - descuentoAplic)) / 100;

    document.getElementById("precioFinal").innerText = `El precio final es: $ ${precioFinal} `;


}




