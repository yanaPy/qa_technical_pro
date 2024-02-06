function converter(unit, quantity){
    var convertedQuantity = quantity * 1000;
    var message=quantity + unit + " це " + convertedQuantity;
switch(unit){
    case "км":{
        console.log(message + "м.");
        break;

    }
    case "г":{
        convertedQuantity = quantity * 60;
        console.log(message + "хв.");
        break;
    }
    case "кг":{
        console.log(message + "грм.");
        break;
    }
    default: console.log("Пожалуйста используйте только: 'км', 'г' или 'кг' ");

}
}

converter("км", 1);
converter("г", 1);
converter("кг", 1);
converter("тест", 1);
