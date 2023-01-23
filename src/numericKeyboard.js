let numTxt = "444446666"
function numericBoard(input){
    let wordTxt = ""
    const board = {
        [1] : ["", ".", ",", "?", "!"],
        [2] : ["A", "B", "C"],
        [3] : ["D", "E", "F"],
        [4] : ["G", "H", "I"],
        [5] : ["J", "K", "L"],
        [6] : ["M", "N", "O"],
        [7] : ["P", "Q", "R", "S"],
        [8] : ["T", "U", "V"],
        [9] : ["W", "X", "Y", "Z"]
    }
    let count = 0
    for(let i = 0; i < input.length; i++){
        if(i === input.length){
            wordTxt = wordTxt + board[input[i]][count]
            break
        }
        if(input[i] === input[i + 1] && count < board[input[i]].length - 1){
            count = count + 1
        }else{
            wordTxt = wordTxt + board[input[i]][count]
            count = 0
        }
    }   
    return wordTxt
}
console.log(numericBoard(numTxt))