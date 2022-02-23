class BST {
  constructor(value){
    this.value = value
    this.left = null
    this.right = null
  }

  insert (value){
    if(value < this.value) {
      if(!this.left) this.left = new BST(value)
      else this.left.insert(value)
    } else if (value > this.value) {
      if(!this.right) this.right = new BST (value)
      else this.right.insert(value)
    }
  }

  contains (value){
    if(value === this.value) return true
    if (value < this.value) {
      if (this.left) return this.left.contains(value)
      else return false
    }
    else if (value > this.value) {
      if (this.right) return this.right.contains(value)
      else return false
    }
  }

  depthFirstTraversal (iteratorFunc,order){
    if(order ==='pre-order') iteratorFunc(this.value)
    if(this.left) this.left.depthFirstTraversal(iteratorFunc,order)
    if (order === 'in-line') iteratorFunc(this.value)
    if(this.right) this.right.depthFirstTraversal(iteratorFunc,order)
    if (order === 'post-order') iteratorFunc(this.value)
  }

  breadthFirstTraversal (iteratorFunc){
    let queue = [this] //pass in the current node
    while (queue.length){
      const currentNode = queue.shift()
      iteratorFunc(currentNode.value)
      if(currentNode.left) queue.push(currentNode.left)
      if(currentNode.right) queue.push(currentNode.right)
    }
  }

  getMinValue() {
    if(this.left) return this.left.getMinValue()
    else return this.value
  }

  getMaxValue() {
    if(this.right) return this.right.getMaxValue()
    else return this.value
  }
}

const bst = new BST(50)

bst.insert(30)
bst.insert(70)
bst.insert(20)
bst.insert(45)
bst.insert(60)
bst.insert(100)
bst.insert(10)
bst.insert(35)
bst.insert(59)
bst.insert(85)
bst.insert(105)

console.log(bst)
console.log(bst.contains(50))
console.log(bst.contains(85))
console.log(bst.contains(86))

const displayValue = function (value) {
  console.log(value)
}
bst.depthFirstTraversal(displayValue,'in-line')
bst.depthFirstTraversal(displayValue,'pre-order')
bst.depthFirstTraversal(displayValue,'post-order')
bst.breadthFirstTraversal(displayValue)
console.log(bst.getMinValue())
console.log(bst.getMaxValue())