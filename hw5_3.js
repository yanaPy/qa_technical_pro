function heckProbabilityTheory(count){
    var elenNums=0;
    var noElenNums=0;
    for(let i=0; i<count;i++ ){

        var num = Math.random() * (1000 - 100) + 100;
        num=Math.round(num);

        if(num%2==0){
             elenNums++;

        } else{
             noElenNums++;

        }
    }
    console.log("Кількість згенерованих чисел: ", count)
    console.log("Кількість парних чисел: ", elenNums)
    console.log("Кількість не парних чисел", noElenNums)

    calcPercent(elenNums, noElenNums)
}

function calcPercent(firstElem, secondElem){
    var total = firstElem + secondElem;
    var percentFirst = Math.round((firstElem / total) * 100);
    var percentSecond = Math.round((secondElem / total) * 100);

    console.log("Відсоток парних чисел: ", percentFirst + "%");
    console.log("Відсоток не парних чисел:", percentSecond + "%");
}


heckProbabilityTheory(100);