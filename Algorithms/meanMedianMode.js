function getMean(array){
  let sum = 0
  array.forEach(element => {
    sum+=element
  });
  const mean = sum/array.length
  return mean
}

function getMedian(array){
  array.sort(function(a,b) {return a-b})
  let median

  if(array.length%2) {
    median = array[Math.floor(array.length/2)]
  } else {
    let mid1 = array[array.length/2-1]
    let mid2 = array[array.length/2]
    median = (mid1+mid2)/2
  }
  return median
}

function getMode(array) {
  let modeObject = {}
  array.forEach(num=>{
    if (!modeObject[num]) modeObject[num]=0
    modeObject[num]++
  })
  
  let maxFrequency = 0
  let modes = []
  for(let num in modeObject) {
    if (modeObject[num]>maxFrequency) {
      modes = [num]
      maxFrequency = modeObject[num]
    } else if (modeObject[num] === maxFrequency) modes.push(num)
  }

  if (modes.length ===Object.keys(modeObject).length) modes = []
  return modes
}

function meanMedianMode(array){
  return {
    mean: getMean(array),
    median: getMedian(array),
    mode: getMode(array)
  }
}

// console.log(meanMedianMode([1,2,3,4,5,4,6,1]))
console.log(meanMedianMode([9,10,23,10,23,9]))