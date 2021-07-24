// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], 
// make a function that organizes these into individual array that is ordered. 
// For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
// Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

// input = array of numbers
// output = array of ordered arrays of numbers that are the same


const inputArr = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
function arraySort(arr) {
	let outputArr = [];
	arr.sort(function (a, b) {
		return a - b;
	})
	const counts = {}

	for (const num of arr) {
		counts[num] = counts[num] ? counts[num] + 1 : 1;
	}

	Object.entries(counts).forEach(a => {
		if (a[1] === 1) {
			outputArr.push(Number(a[0]));
		} else {
			outputArr.push(Array(a[1]).fill(Number(a[0])));
		}
	})
	console.log(outputArr);
}
arraySort(inputArr);

///////////////////////////////////////////////////


//  Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]
const inputArr = [1, "2", "3", 2]
function arraySort(arr) {
	// we initialize an array that contains two other arrays, one for numbers and one for string
	let outputArr = [[], []];
	arr.sort(function (a, b) {
		return a - b;
	})
	const counts = {}
	for (let num of arr) {
		if (typeof(num) === "number") {
			counts[num] = counts[num] ? counts[num] + 1 : 1;
		} else {
			num = [num, 'string'];
			counts[num] = counts[num] ? counts[num] + 1 : 1;
		}
	}
	// check each item in counts object, see if it has the "string" string inside, if yes, add to the corresponding array 
	Object.entries(counts).forEach(a => {
		let [key, value] = [a[0], a[1]];
		console.log(key, value);
		//if the key contains the 'string' string, push without using Number, to the second array in the outputArr
		if (key.includes('string')) {
			if (value === 1) {
				outputArr[1].push(key.split(",")[0]);
			} else {
				outputArr[1].push(Array(value).fill(key.split(",")[0]));
			}
		} else {
			if (value === 1) {
				outputArr[0].push(Number(key));
			} else {
				outputArr[0].push(Array(value).fill(Number(key)));
			}
		}
	})
	console.log(outputArr);
}
