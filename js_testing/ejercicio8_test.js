console.log("Ejercicio 8 test");

const ejercicio8Data = [
    [1, 2, 200],
    [2, 5, 10000000000],
    [3, 2, 50],
    [4, 0, 0]
    
];

ejercicio8Data.forEach(element => {

    const rTestS = funcionSwitch(element[0], element[1]);


    console.log( rTestS ==  element[2] ? "🟢" : "❌", rTestS, " | ", element[2] );
});

