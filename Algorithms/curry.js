// function getProduct(num1,num2){
//   return num1*num2
// }

//curry the function

function getProduct(num1){
  return function(num2){
    return num1*num2
  }
}

console.log(getProduct(10)(20))

//Practical example, distance in units of km, speep units km/h
// function getTravelTime(distance,speed){
//   return distance/speed  
// }

// console.log(getTravelTime(600,50)) 

function getTravelTime(distance){
  return function(speed){
    return distance/speed
  }
}

const bostonTripTime = getTravelTime(400)
const travelTimeMiamiAlanta = getTravelTime(600)

console.log(bostonTripTime(55))
console.log(bostonTripTime(65))

