const add = function (number1, number2) {
  return number1 + number2;
};

const subtract = function (number1, number2) {
  return number1 - number2;
};

const sum = function (array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

const multiply = function (array) {
  let number;
  if (array.length == 2) { return array[0] * array[1] }
  else if(array.length>2){
    for(let i =0;i<array.length;i++){
        if(i ==0){
          number =array[i];
        }else{
          number = number *array[i];
        }
        
    }
    return number;
  }

};

const power = function (number1,number2) {
  multiplier = number1;
  for (let i=1;i<number2;i++){
    number1 = number1*multiplier;
  }
  return number1;
};

const factorial = function () {

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
