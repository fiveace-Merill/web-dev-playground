let input = document.getElementById("input")
let submit = document.getElementById("button")

let word = ""
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

input.addEventListener("change", (event)=>{
	word = event.target.value
});
submit.addEventListener("click", ()=>{
 ceasarCipher(word, 3) 
})
