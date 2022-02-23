//write a function that keeps track of how many times it has been called

function myFunc() {
  let count=0

  return function() {
    //The functionality would be in here.  You might want to prevent this from running more than a certain number of times
    //You can have logic tied to the count to do different things, etc. based on how many times it has run
    count++
    return count
  }
}

console.log(myFunc()) //returns a function, so we can assign the function to a constant

const instanceOne = myFunc()
const instanceTwo = myFunc()

console.log('Instance one: ', instanceOne())
console.log('Instance one: ', instanceOne())
console.log('Instance one: ', instanceOne())

console.log('Instance two: ', instanceTwo())
console.log('Instance two: ', instanceTwo())
console.log('Instance two: ', instanceTwo())
console.log('Instance two: ', instanceTwo())