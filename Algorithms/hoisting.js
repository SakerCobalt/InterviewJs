console.log(color)
//variable declarations are hoisted to the top of the file, but the values are not set until 
//the execution reaches the appropriate location in the file
var color = 'blue'

console.log(color)

//Can not access let and const until they are actually declared, but they are still
//hoisted

//Function declarations are hoisted in whole i.e. function getAge() {}

//var keyword is function scopped
//let and const are block scopped, only hoisted to the top of the block