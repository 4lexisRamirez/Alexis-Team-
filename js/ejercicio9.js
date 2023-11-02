// realize un programa que lleve a cabo un descuento a los clientes de una tienda utilizando
//  el siguiente criterio: 
//  Si monto < 500 No hay descuento
//  Si monto e [500, 1000) 5% de descuento
//     Si monto e [1000, 7000) 11% de descuento
//         Si monto e [7000, 15,000) 18% de descuento
//             Si monto >=15,000  25% de descuento

function funcionDescuentoCliente(monto) {
    nuevoMonto=0;

     if (monto < 500){
        descuento = monto;

    } else if (monto >= 500 && monto < 1000){
        nuevoMonto = monto * .5;
        descuento = monto + nuevoMonto;

    } else if (monto >= 1000 && monto < 7000){
        nuevoMonto = monto * .11;
        descuento = monto + nuevoMonto;

    } else if (monto >= 7000 && monto < 15000){
        nuevoMonto = monto * .18;
        descuento = monto + nuevoMonto;

    } else if (monto >= 15000) {
        nuevoMonto = monto * .25;
        descuento = monto + nuevoMonto;
    } else{
        
    }

    return descuento;
}