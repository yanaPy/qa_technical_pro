function pow(x,y){
    
    var sum = x;
    for(let i = 1; i < y; i++){
        sum*=x;
    }
    console.log(x + "^" + y + "=" + sum);
}

pow(2,3);