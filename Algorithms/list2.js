//passing data by reference, pointers
const list1 = [1,2,3,4,5]
const list2 = list1

list1.push(6,7,8)

console.log(list2)

//passing by value
const myNum = 10
const myString = 'hello world'
const myString2 = myString

//You can copy an array to make sure that the new array is pointing to a unique object
const list3 = list1.slice()  // makes a copy of list1
const list4 = list1.concat([]) //makes a copy

list1.push(9,10)
console.log(list1)
console.log(list2)
console.log(list3)
console.log(list4)