console.log("Ejercicio 2");

function promedioStudent(matricula, califArray) {
    
    let suma = 0;
    for(var i = 0; i < califArray.length; i++){
        suma += califArray[i];
    }
    let promedio = (suma/6);
    promedio.toFixed(2);

    return matricula.toString() + " " + promedio.toFixed(2).toString();
}