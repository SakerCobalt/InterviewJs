//Used to store data.  Very fast to search through and retrieve data.  Also very quick to insert and delete data.
//With every step you take toward an answer, you are discarding half the data you have to search through
//O(log n)
//only works well if your head node is near middle of data set values
//Dictionary, phone book, users stored by user id

function BST(value){
  this.value = value
  this.left = null
  this.right = null
}

BST.prototype.insert = function (value){
  if (value <= this.value){
    if(!this.left) this.left = new BST(value)
    else this.left.insert(value)
  } else if (value > this.value){
    if(!this.right) this.right = new BST(value)
    else this.right.insert(value)
  } 
}

BST.prototype.contains = function (value) {
  if (value === this.value) return true
  if (value < this.value) {
    if (!this.left) return false
    else return this.left.contains(value)
  } else if (value > this.value) {
    if(!this.right) return false
    else return this.right.contains(value)
  }
}

BST.prototype.depthFirstTraversal = function (iteratorFunc,order) {
  //order can have 3 values: inOrder, preOrder, postOrder
  //Least to greatest (In-Order) Depth First Traversal
  //Pre-Order touches the parent node first and then each branch.  Useful to making a copy of the tree
  //Post-Order process all the left children, then right children, then parent.  Useful for safely delet nodes from BST

  if (order === 'preOrder') iteratorFunc(this.value)
  if (this.left) this.left.depthFirstTraversal(iteratorFunc,order)
  if (order === 'inOrder') iteratorFunc(this.value)
  if (this.right) this.right.depthFirstTraversal(iteratorFunc,order)
  if (order === 'postOrder') iteratorFunc(this.value)
}

BST.prototype.breadthFirstTraversal = function (iteratorFunc){
  //Can see what is in higher levels.
  let queue = [this] //the route node of any given BST
  while (queue.length) {
    let treeNode = queue.shift() //returns the first element of an array and then removes it from the array
    iteratorFunc(treeNode)
    if (treeNode.left) queue.push(treeNode.left)
    if (treeNode.right) queue.push(treeNode.right)
  }

}

BST.prototype.getMinVal = function () {
  if (this.left) return this.left.getMinVal()
  else return this.value
}

BST.prototype.getMaxVal = function () {
  if (this.right) return this.right.getMaxVal()
  else return this.value
}

let bst = new BST(50) //BST with no child nodes

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

// console.log(bst)
// console.log(bst.right.right.value)
// console.log(bst.left.right.left.value)

// console.log(bst.contains(50))
// console.log(bst.contains(61))

// bst.depthFirstTraversal(log,'inOrder')
// bst.depthFirstTraversal(log,'preOrder')
// bst.depthFirstTraversal(log,'postOrder')
// bst.breadthFirstTraversal(log)

console.log(bst.getMinVal())
console.log(bst.getMaxVal())

function log (value) {
  if (!value.value) console.log(value)
  else console.log(value.value)
}