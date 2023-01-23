/*-----------------------
 * *********ANAGRAMS***********
 * Example : evil and live 
 * !Example : evil and evis, evil and avil, evil and edil
 *
*/
let evil = "freddie"
let live = "redfade"

function anagram(w1, w2){
  let check = true
  let i = 0
  while(i < w1.length){
    let count = 0
    l1 = w1[i]
    console.log(l1)
    for(let j = 0; j < w2.length ; j++){
      l2 = w2[j]
      if(l1 === l2){
        count = count + 1
        break
      }else{
        continue
      }

    }
    if(count > 1 || count === 0){
      check = false
      continue
    }else{
      count = 0
      i = i + 1
    }
  }
  return check
}
console.log(anagram(evil, live))

