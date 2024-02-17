arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function myBlend(array){
    let end = array.length - 1;
    for (let i = array.length -1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }
}

myBlend(arr);
console.log("after my sort: " + arr);