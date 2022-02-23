// function reverseWords (string) {
//   let wordArray = string.split(' ')
//   let reversed = ''
//   wordArray = wordArray.forEach((word)=>{
//     const index = word.length
//     let reversedWord = ''
//     for (let i=index-1; i>=0; i--){
//       reversedWord += word[i]
//     }
//     reversed += ' ' +reversedWord
//   })
//   return reversed
// }

function reverseWords (string){
  const wordsArray = string.split(' ')
  let reversedWordsArray = []

  wordsArray.forEach(word =>{
    let reversedWord = ''
    for (let i = word.length-1; i>=0; i--){
      reversedWord += word[i]
    }
    reversedWordsArray.push(reversedWord)
  })

  return reversedWordsArray.join(' ')
}

//sihT si a .tset
console.log(reverseWords('This is a test.'))

//gnidoC tpircsavaJ
console.log(reverseWords('Coding Javascript'))
