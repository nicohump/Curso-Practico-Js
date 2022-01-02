
function Discount (){

    let precioOrigin = parseInt(document.getElementById ("precioOriginal").value);
    let cuponSeleccionado = document.getElementById ("cupones").value;    

    let precioFinal;

    const Cupones = {
        miniDescuento : 10,
        superDescuento : 25,
        megaDescuento : 40
    };

    for (const prop in Cupones) {
        if (prop == cuponSeleccionado) descuentoAplic = Cupones[prop]; 
    }

    precioFinal = (precioOrigin * (100 - descuentoAplic)) / 100;

    document.getElementById("precioFinal").innerText = `El precio final es: $ ${precioFinal} `;
    document.getElementById("descuentoAplicado").innerText = `El descuento aplicado es: ${descuentoAplic} %`;
}







