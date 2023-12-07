console.log("Ejercicio 5 test");

const ejercicio5Data = [
    [1000, 600, 400],
    [100, 100, 0],
    [540, 500, 40],
    [5000, 4000, 1000],
    [2, 2, 0]
    
];

ejercicio5Data.forEach(element => {

    const rTestS = cambioCliente(element[0], element[1]);


    console.log( rTestS ===  element[2] ? "🟢" : "❌", rTestS, " | ", element[2] );
});