console.log("Ejercicio 7 test");

const ejercicio7Data = [
    [4, 1, "Hole-in-one"],
    [4, 2, "Eagle"],
    [4, 3, "Birdie"],
    [4, 4, "Par"],
    [4, 5, "Boger"],
    [4, 6, "Double boger"],
    [4, 7, "Gome Home!"],
];

ejercicio7Data.forEach(element => {

    const rTestS = golfCode(element[0], element[1]);

    console.log( rTestS ===  element[2] ? "🟢" : "❌", rTestS, " | ", element[2] );
});