function maxStockProfit(pricesArr){
  //takes in array of prices in time order as parameter
  //returns the max possible profit of the day
  let maxProfit = -1  //-1 indicates that no profit can be made
  let buyPrice = 0
  let sellPrice = 0
  let changeBuyPrice = true

  for (let i=0; i < pricesArr.length; i++){
    // console.log('Loop: ',maxProfit,buyPrice,sellPrice,changeBuyPrice)
    if (changeBuyPrice) buyPrice = pricesArr[i]
    sellPrice = pricesArr[i+1]

    if (sellPrice<buyPrice) {
      changeBuyPrice = true
    } else {
      let tempProfit = sellPrice - buyPrice
      if (tempProfit>maxProfit) maxProfit = tempProfit
      changeBuyPrice = false
    }
  } 

  return maxProfit
}

console.log(maxStockProfit([32,46,26,38,40,48,42]))
console.log(maxStockProfit([10,18,4,5,9,6,16,12]))
console.log(maxStockProfit([1,2]))