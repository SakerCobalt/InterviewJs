class HashTable {
  constructor (size){
    this.buckets = Array(size)
    this.numBuckets = this.buckets.length
  }

  hash (key){
    let total = 0
    for(let i=0; i<key.length; i++){
      total += key.charCodeAt(i)
    }
    const basket = total % this.numBuckets
    return basket
  }

  insert (key,value){
    const index = this.hash(key)
    if (!this.buckets[index]) this.buckets[index] = new HashNode (key,value)
    else if (this.buckets[index].key === key) {
      this.buckets[index].value = value
    } else {
      let currentNode = this.buckets[index]
      while (currentNode.next) {
        if (currentNode.next.key === key) {
          currentNode.next.value = value
          return
        }
        currentNode = currentNode.next
      }
      currentNode.next = new HashNode(key,value)
    }
  }

  get (key) {
    const index = this.hash(key)
    if (!this.buckets[index]) return null
    let currentNode = this.buckets[index]
    while(currentNode) {
      if (currentNode.key === key) return currentNode.value
      currentNode = currentNode.next
    }
    return null
  }

  retrieveAll (){
    let data = []
    for (let i=0; i<this.buckets.length;i++){
      let currentNode = this.buckets[i]
      while (currentNode){
        data.push(this.buckets[i].value)
        currentNode = currentNode.next
      }
    }
    return data
  }
}

class HashNode {
  constructor(key,value,next = null){
    this.key = key
    this.value = value
    this.next = next
  }
}

const myHT = new HashTable(30)

myHT.insert('Dean','dean@gmail.com')
myHT.insert('Megan','megan@gmail.com')
myHT.insert('Dane','dane@yahoo.com')
myHT.insert('Dean','dean2@gmail.com')
myHT.insert('Joe','joey@facebook.com')
myHT.insert('Samantha','sammy@twitter.com')


console.log(myHT.buckets)
console.log(myHT.get('Megan'))
console.log(myHT.retrieveAll())