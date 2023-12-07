console.log("Ejercicio 9 test");

const ejercicio9Data = [
    [490, 490],
    [700, 1050],
    [3000, 3330],
    [7005, 8265.9],
    [150000, 187500]
    
];

ejercicio9Data.forEach(element => {

    const rTestS = funcionDescuentoCliente(element[0]);


    console.log( rTestS ==  element[1] ? "🟢" : "❌", rTestS, " | ", element[1] );
});
