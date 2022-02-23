//Returns the prime numbers up to the input value
function sieveOfEratosthenes(num){
  let primes = Array(num+1).fill(true)
  
  let index = 0
  while (index <= Math.sqrt(num)){
    if (index < 2) primes[index]= false
    else {
      let subIndex = 2
      while(subIndex*index <= num){
        primes[subIndex*index] = false
        subIndex ++
      }

    }
    index ++
  }

  index = 0
  let result =[]
  while (index <num){
    if (primes[index]) result.push(index)
    index ++
  }  

  return result
}

function sieveOfEratosthenes2(n){
  let primes = []
  for (let i=0; i<=n; i++){
    primes[i] = true
  }

  primes[0]=false
  primes[1]=false

  for (let i = 2; i<=Math.sqrt(n); i++){
    for (let j=2; j*i<=n; j++){
      primes[i*j] = false
    }
  }

  let result = []
  for (let i=0; i<primes.length; i++){
    if (primes[i]) result.push(i)
  }

  return result
}

console.log(sieveOfEratosthenes(200))
console.log(sieveOfEratosthenes2(200))