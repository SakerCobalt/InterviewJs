//The numArray must be sorted prior to binary search
function binarySearch(numArray, key){
  let middleIndex = Math.floor(numArray.length/2)
  let middleElem = numArray[middleIndex]
  if (middleElem === key) return true
  else if (middleElem < key && numArray.length>1) {
    return binarySearch(numArray.splice(middleIndex,numArray.length),key) //passes the second half of the array
  } else if (middleElem > key && numArray.length>1) {
    return binarySearch(numArray.splice(0,middleIndex),key)
  } else return false
}

console.log(binarySearch([5,7,12,16,36,39,42,56,71],5))