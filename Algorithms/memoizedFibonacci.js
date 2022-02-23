//Store the fibonacci numbers we need to use so we only have to calculate it one time.  Gives O(n) runtime
function fibMemo(index,cache){
  //index of number in fibonacci sequence we want to retrieve
  //cache: an array used as memory
  cache = cache || []
  if (cache[index]) return cache[index]
  else {
    if (index < 3) return 1
    else {
      cache[index]=fibMemo(index-1,cache)+fibMemo(index-2,cache)
    }
  }
  return cache[index]
}

console.log(fibMemo(12))
console.log(fibMemo(20))
console.log(fibMemo(50)) //This crashed the O(2^n) version
console.log(fibMemo(1000))