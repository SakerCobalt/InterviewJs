function harmlessRansomNote(noteText, magazineText){
  let noteArr = noteText.split(' ')
  let magazineArr = magazineText.split(' ')
  let magazineObj = {}

  magazineArr.forEach(word => {
    if (!magazineObj[word]) magazineObj[word] = 0
    magazineObj[word] ++
  });

  let noteIsPossible = true
  noteArr.forEach(word => {
    if (magazineObj[word]) {
      magazineObj[word] --
      if (magazineObj[word]<0) noteIsPossible = false
    }
    else noteIsPossible = false
  })
  return noteIsPossible
}

const result = harmlessRansomNote('this is a secret note for you from a secret admirer',
'this is all note for this is a secret note for you from a secret admirer you the magazine text in the magazine admirer a secret secret from a')
console.log(result)