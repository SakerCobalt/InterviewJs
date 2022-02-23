// function func(){
//   if (/*base case*/) { //case in which we can take something in and return the same thing to get the correct answer
//     return something
//   } else { //recursive case
//     func()
//   }
// }

function factorial (num) {
  if (num === 1) {
    return num;
  } else {
    return num * factorial (num-1)
  }
}

console.log(factorial (4))