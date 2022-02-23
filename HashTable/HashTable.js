//Lookup O(1), Insertion O(1)
//Used to store data with a key and value
//Hash the key to a number


function HashTable(size) {
  this.buckets = Array(size)
  this.numBuckets = this.buckets.length
}

function HashNode(key,value,next) {
  this.key = key
  this.value = value
  this.next = next || null //chain for each bucket
}

HashTable.prototype.hash = function (key){
  let total = 0
  for (let i = 0; i<key.length; i++){
    total += key.charCodeAt(i)
  }
  const bucket = total % this.numBuckets  //gives you a number between 0 and the number of buckets-1 (fits the array 0 to size-1)
  return bucket
}

HashTable.prototype.insert = function (key,value){
  let index = this.hash(key)
  if (!this.buckets[index]) this.buckets[index] = new HashNode(key,value)
  //Add the else if to check if we are updating the first node in the hash table bucket
  else if (this.buckets[index].key === key) {
    this.buckets[index].value = value
  } else {
    let currentNode = this.buckets[index]
    while (currentNode.next) {
      //Allow for updates with if
      if(currentNode.next.key === key){
        currentNode.next.value = value
        //return after the update so another node is not added
        return
      }
      currentNode = currentNode.next
    }
    currentNode.next = new HashNode(key,value)
  }
}

HashTable.prototype.get = function (key){
  const index = this.hash(key)
  if (!this.buckets[index]) return null
  else {
    let currentNode = this.buckets[index]
    while(currentNode) {
      if (currentNode.key === key) return currentNode.value
      currentNode = currentNode.next
    }
  }
  return null //if the key is not found
}

HashTable.prototype.retrieveAll = function () {
  let index = 0
  let data = []
  while (index < this.buckets.length){
    if (this.buckets[index]) {
      let currentNode = this.buckets[index]
      while(currentNode) {
        value = currentNode.value
        data.push(value)
        currentNode = currentNode.next
      }
    }
    index ++
  }
  return data
}

let myHT = new HashTable(30)

myHT.insert('Dean','dean@gmail.com')
myHT.insert('Megan','megan@gmail.com')
myHT.insert('Dane','dane@yahoo.com')
myHT.insert('Dean','dean2@gmail.com')
myHT.insert('Joe','joey@facebook.com')
myHT.insert('Samantha','sammy@twitter.com')


console.log(myHT.buckets)
console.log(myHT.get('Megan'))
console.log(myHT.retrieveAll())