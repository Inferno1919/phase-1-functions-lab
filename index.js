const hqStreet = 42;


function distanceFromHqInBlocks(userStreet){

    if(userStreet < 42){
        return (hqStreet - userStreet);
    } else {
        return (userStreet - hqStreet);
    }
}

function distanceFromHqInFeet(userStreet){
    return (distanceFromHqInBlocks(userStreet) * 264);
}

function distanceTravelledInFeet(start, des){
    if(start - des > 0) {
        return ((start - des) * 264);
    } else {
        return ((des - start) * 264);
    }
}
function calculatesFarePrice(start, des){
    let disTra = distanceTravelledInFeet(start, des);
    if(disTra <= 400){
        return 0;
    }
    if(disTra > 400 && disTra <= 2000){
        return ((disTra - 400) * .02);
    }
    if(disTra > 2000 && disTra <= 2500){
        return 25;
    }
    if(disTra > 2500){
        return "cannot travel that far";
    }
}