//The curried version of the tripleAdd1 function
function tripleAdd(num1) {
  return function (num2){
    return function (num3) {
      return num1+num2+num3
    }
  }
}

function tripleAdd1(num1,num2,num3){
  return num1+num2+num3
}

console.log(tripleAdd(10)(20)(30))
console.log(tripleAdd1(10,20,30))