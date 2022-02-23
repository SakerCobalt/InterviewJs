//Fibonacci Sequence: 1,1,2,3,5,8,13,21,34,...  Every number is the sum of the 2 numbers before it
// Every time we call function here, it calls itself twice.  This gives an O(2^n)
// It is recalculating the same numbers over and over again
function fibonacci(position){
  //position indicates the number that we want returned from the fibonacci sequence
  if (position < 3) return 1
  else return fibonacci(position-1)+fibonacci(position-2)
}

console.log(fibonacci(6))
console.log(fibonacci(20))