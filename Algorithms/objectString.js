//Work through in your head and determine what the output of the following would be

let string1 = 'Tampa'
let string2 = string1

string1 = 'Venice'

console.log(string2) //strings and simple variables are saved by value in javascript

let person1 = {
  name: 'Alex',
  age: 30
}

let person2 = person1
person2.name = 'Kyle'

console.log(person1) //objects are saved by pointers, they are both references to the same object