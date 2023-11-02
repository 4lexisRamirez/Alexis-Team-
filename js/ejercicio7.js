function validarParStrokes(par, strokes){
    if (par >= 4 && strokes > 0) {
        return true;
    } else {
        return false;
    }
}

function golfCode(par, strokes){
    if (validarParStrokes(par, strokes) == false){
        return "Valores no validos"
    }

    if (strokes === 1) {
        return "Hole-in-one";
    } else if(strokes <= par - 2){
        return "Eagle";
    } else if(strokes == par - 1){
        return "Birdie";
    } else if(strokes == par){
        return "Par";
    } else if(strokes == par + 1){
        return "Boger";
    } else if(strokes == par + 2){
        return "Double boger";
    } else if(strokes >= par + 3){
        return "Gome Home!";
    } else{
        return "Valores no válidos"
    }
}