function isPalindrome(string){
  //return true if it is a palindrome
  string = string.toLowerCase()
  let charactersArr = string.split('')
  const validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('')

  let lettersArr = []
  charactersArr.forEach(char=>{
    if(validCharacters.indexOf(char)> -1) lettersArr.push(char)  //returns -1 if the argument is not in the array
  })

  if (lettersArr.join('')=== lettersArr.reverse().join('')) return true
  else return false

}

console.log(isPalindrome("Madam I'm Adams"))