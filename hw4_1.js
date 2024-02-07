function drawTriangle(height, symbol){
    var symbolDubed=symbol;
    for(let i=0; i<height; i++){
    console.log(symbol)
    symbol=symbol+symbolDubed;
    }   
}

function drawTriangleAnother(height, symbol){
    var dubbedSymbol=symbol;
    i=height;
    do{
    console.log(symbol)
    symbol=symbol+dubbedSymbol;
    i++;
    } while(height!=i)
}

drawTriangle(5, "*");
drawTriangle(6, "+");