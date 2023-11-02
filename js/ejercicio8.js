// quiero saber un programa que dado dos valores regresa el resultado
// de la siguiente función
console.log("Ejercicio 8");

function funcionSwitch(num, v) {
    let val = 0;

    switch (num) {
        case 1:
        val = (100 * v);
            break;
        case 2:
        val = 100**v;    
            break;
        case 3:
        val = (100/v);    
            break;    
    
        default:
            val = 0;
    }

    return val;
}