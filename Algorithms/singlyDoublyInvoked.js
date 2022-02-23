function getTotal() {
  //arguments - key word - gives the arguments passed into the function.
  // Turns the arguments object into an array.  Possible because the arguments object is array like
  let args = Array.prototype.slice.call(arguments) //Bind the context of the slice method to the arguments object
  console.log('arguments: ',arguments,' args: ',args)

  if (args.length === 2) {
    return args[0]+args[1]
  } else if (args.length ===1){
    return function(num2){
      return args[0] + num2
    }
  }
}

//Should return the name number regardless of which way it is called
console.log(getTotal(10,20))
console.log(getTotal(10)(20))