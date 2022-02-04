class LinkedList {
  constructor (){
    this.head = null
    this.tail = null
  }

  addToHead (value){
    let newNode = new Node(value,this.head, null)
    if(this.head) this.head.prev = newNode
    else this.tail = newNode
    this.head = newNode
  }

  addToTail (value){
    let newNode = new Node(value,null,this.tail)
    if(this.tail) this.tail.next = newNode
    else this.head = newNode
    this.tail=newNode
  }

  removeHead (){
    if(!this.head) return null
    let val = this.head.value
    this.head = this.head.next
    if(this.head) this.head.prev = null
    else this.tail=null
    return val
  }

  removeTail (){
    if(!this.tail) return null
    let val = this.tail.value
    if(this.tail) this.tail.next = null
    else this.head = null
    return val
  }

  search(value){
    let currentNode = this.head
    while(currentNode) {
      if(currentNode.value === value) return currentNode.value
      currentNode = currentNode.next
    }
    return null
  }

  indexOf (value){
    let indices = []
    let index = 0
    let currentNode = this.head
    while (currentNode){
      if (currentNode.value === value) indices.push(index)
      currentNode = currentNode.next
      index ++
    }
    return indices
  }
}

class Node {
  constructor (value,next,prev){
    this.value = value
    this.next = next
    this.prev = prev
  }
}

let LL = new LinkedList()

LL.addToHead(12)
LL.addToHead(24)
LL.addToHead(48)
LL.addToTail(6)
LL.addToTail(24)
LL.addToHead(24)


// console.log(LL)
// console.log(LL.removeHead())
// console.log(LL.removeTail())
// console.log(LL.search(35))
console.log(LL.indexOf(24))
