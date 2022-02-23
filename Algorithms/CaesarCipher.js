function caesarCipher (str, shift) {
  shift = shift%26
  //Shifts backwards if a negative shift is entered
  let lowerCaseStr = str.toLowerCase()
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'

  newString = ''

  for (let i=0; i< lowerCaseStr.length; i++) {
    const currentLetter = lowerCaseStr[i]
    if (currentLetter === ' ') {
      newString += currentLetter
      continue
    }
    const currentIndex = alphabet.indexOf(currentLetter)
    let newIndex = currentIndex + shift
    while (newIndex >= alphabet.length) newIndex -= 26
    while (newIndex <0) newIndex += 26

    if(str[i] === str[i].toUpperCase()) newString += alphabet[newIndex].toUpperCase()
    else newString += alphabet[newIndex]
  }
  return newString
}

console.log(caesarCipher('Javascript',-900))
