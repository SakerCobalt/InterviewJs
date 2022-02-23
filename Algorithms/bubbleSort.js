//return array, sorted with bubble sort
//fully sorted in array.length-1 number of passes
function bubbleSort(array) {
  if (array.length ===1) return array[1]
  let n = 1
  while(n<array.length){
    for (let i = 0; i<array.length-n; i++){
      if (array[i]>array[i+1]){
        const temp = array[i+1]
        array[i+1]=array[i]
        array[i]=temp
      }
    }
    n++
  }
  return array
}

console.log(bubbleSort([4,1,6,9,3,7,18,2]))
console.log(bubbleSort([5,3,-88,2,-1,12,4]))
console.log(bubbleSort([20,20,31,56,1,12,12]))