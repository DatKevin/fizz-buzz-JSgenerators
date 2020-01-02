let evaluation = function (num) {
	if (num % 3 == 0 && num % 5 == 0) return (" Fizzbang!")
	else if (num % 3 == 0) return (" Fizz")
	else if (num % 5 == 0) return (" Buzz")
	else return 0
}
function* fizzbang() {
	for (let i = 1; i <=100; i++)
		yield (i + evaluation(i))
}
	
let x = fizzbang()

console.log(...fizzbang())