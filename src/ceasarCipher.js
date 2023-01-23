//EACH LETTER IN THE ORIGINAL MESSAGE IS SHIFTED BY 3 PLACES
//E.G A becomes D, B becomes E, C becomes F, D becomes G ...
//LAST THREE LETTERS ARE WRAPPED AROUND THE BEGINNING: X becomes A, Y becomes B and Z becomes C
//NON LETTER CHARACTERS ARE NOT MODIFIED BY CIPHER

let word = "Oi freddie, we attack at first light, communists must fall all hail the liberals"

function ceasarCipher(text, shift){
  let cipher = ""
  let num = /[0-9\W]/
  let i = 0
  console.log(`Initial Text : ${text}`)
  while(i < text.length - 1){
    if(num.test(text[i]) === true){
      //keep numbers and white spaces intact
      cipher = cipher + text[i]
      i = i + 1
    }else{
      //shift the letters in word, alphabet is context
      let index = text.charCodeAt(i) - 97
      index = (index + shift) % 26
      subs = String.fromCharCode(index + 97)
      cipher = cipher + subs
      i = i + 1
    }
  }
   console.log(`Ciphered Text: ${cipher}`);
}
ceasarCipher(word, 3);
