const fibonacci = function (fibonacciNumber) {
    let a = 0, b = 1, c, i;
    if(typeof(fibonacciNumber)=="string"){
        parseInt(fibonacciNumber);
    }
    if(fibonacciNumber <0){
        return "OOPS";
    }
    if( fibonacciNumber == 0)
        return a;
    for(i = 2; i <= fibonacciNumber; i++)
    {
    c = a + b;
    a = b;
    b = c;
    }
    return b;
};
//console.log(fibonacci(4));
// Do not edit below this line
module.exports = fibonacci;
