const board = [
  {[1] : ["", ".", ",", "?", "!"]},
  {[2] : ["A", "B", "C"]},
  {[3] : ["D", "E", "F"]},
  {[4] : ["G", "H", "I"]},
  {[5] : ["J", "K", "L"]},
  {[6] : ["M", "N", "O"]},
  {[7] : ["P", "Q", "R", "S"]},
  {[8] : ["T", "U", "V"]},
  {[9] : ["W", "X", "Y", "Z"]}
]
const keys = Object.keys(board)

//numeric representation of "HELLO,WORLD"
let  helloWorld = "443355515556661119666777555311111"

function numericBoard(input){
  let output = ""
  let i = 0
  let count = 0
  while(i < input.length){
    if(input[i] === input[i + 1]){
      count += 1
      i = i + 1
      continue
    }else{
      for(let j = 0; j < keys.length; j++){
         if(input[i] !== Object.keys(board[j])[0]){
           continue
        }else{
          output = output + board[j][j + 1][count]
          break
        }
      }
      count = 0
      i = i + 1
    }
  }
  console.log(output)
}
numericBoard(helloWorld)