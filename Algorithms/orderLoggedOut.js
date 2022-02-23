//The callback functions are added to event loop queue and are nut run until after all the synchronous functions are completed

function logNumbers(){
  console.log(1)
  setTimeout(function(){console.log(2)},1000)
  setTimeout(function(){console.log(3),0})
  console.log(4)
}

logNumbers()