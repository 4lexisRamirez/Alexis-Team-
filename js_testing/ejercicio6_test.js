console.log("Ejercicio 6 test");

const ejercicio6Data = [
    [8, 6.92, 27.68],
    [4, 3, 6],
    [10, 42, 210],
    [5, 5, 12.5 ],
    [10, 10, 50]
    
];

ejercicio6Data.forEach(element => {

    const rTestS = superficieTriangulo(element[0], element[1]);


    console.log( rTestS ===  element[2] ? "🟢" : "❌", rTestS, " | ", element[2] );
});