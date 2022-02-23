//Immediately Invoked Function Expression
//Function exectued righ after it is created
function doubleNumber(num){
  return num*2
}

console.log(doubleNumber(5));

//IIFE
(function doubleNumber2(num){
  let result = num*2
  console.log(result)
  return result
})(10)