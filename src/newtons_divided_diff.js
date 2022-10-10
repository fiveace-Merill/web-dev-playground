const data1 = [
	{x: 2, y: 3.48},
	{x: 4, y: 14.68},
	{x: 6, y: 33.88},
	{x: 8, y: 61.08}
]
const data2 = [
	{x: 1, y: 24},
	{x: -1, y: 0},
	{x: 2, y: 60},
	{x: 3, y: 120}
]

function interpolate(sample, value){
	const first = []
	const second = []
	//first order divided differences
	for(let i = 0; i < sample.length - 1; i++){
		let result = (sample[i + 1].y - sample[i].y) / (sample[i + 1].x - sample[i].x)
		first.push(result)
		result = 0;
	}
	//second order divided differences
	for(let i = 0; i < first.length - 1; i++){
		let result = (first[i + 1] - first[i]) / (sample[i + 2].x - sample[i].x)
		second.push(result)
		result = 0
	}
	//newtons interpolating polynomial	
	let fx = sample[0].y + (value - sample[0].x) * first[0] + (value - sample[0].x) * (value - sample[1].x) * second[0]
	console.log(`The approximate value of ${value} is ${Math.floor(fx)}`)
}
interpolate(data1, 5)
interpolate(data2, 4)