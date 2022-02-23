
function mergeSort (arr){
  //take in a single, unsorted array
  //split the array into two halves
  if(arr.length<2) return arr  //Array of length 0 or 1 is already sorted
  let middleIndex = Math.floor(arr.length/2)
  let firstHalf = arr.slice(0,middleIndex)
  let secondHalf = arr.slice(middleIndex) //To the end of the array writen like this
  return merge(mergeSort(firstHalf),mergeSort(secondHalf))
}

function merge(array1,array2){
  //takes in two sorted arrays as parameters
  //merges those sored arrays into one sored array
  //returns one sorted array
  let result = []
  while (array1.length && array2.length) { //runs while neither array is empty
    let minElem
    if (array1[0]<array2[0]) minElem = array1.shift()
    else minElem = array2.shift()
    result.push(minElem)
  }

  if (array1.length) result = result.concat(array1)
  else result = result.concat(array2)
  return result
}

console.log(mergeSort([4,3,2,1]))
console.log(mergeSort([6000,34,203,3,746,200,984,198,764,1,9,1]))
console.log(mergeSort([100,-20,40,-30,16,-100,-101]))