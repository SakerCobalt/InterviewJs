console.log(typeof null)
console.log(typeof undefined)
console.log(typeof {})
console.log(typeof [])

//How to tell if a piece of data is an array since typeof doesn't tell us this?
console.log(Array.isArray([])) //returns true if it is an array
console.log([] instanceof Array)