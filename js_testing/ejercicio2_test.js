console.log("Ejercicio 2 test");

const promedioStudentData = [
    [11111111, [100, 70, 82, 50, 30 ,90], "11111111 70.33"],
    [10101010, [95, 80, 59, 72, 65, 72], "10101010 73.83"],
    [22011810, [67, 19, 31, 94, 89, 99], "22011810 66.50"],
    [2201011027, [57, 88, 98, 85, 69, 0], "2201011027 66.17"]
];

promedioStudentData.forEach(element => {

    const cadTest = promedioStudent(element[0], element[1]);


    console.log( cadTest ===  element[2] ? "🟢" : "❌", cadTest, " | ", element[2] );
});