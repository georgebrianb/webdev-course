// Question 2: Write a javascript function that takes an array of numbers and a target number. 
// The function should find two different numbers in the array that, when added together, 
// give the target number. For example: answer([1,2,3], 4)should return [1,3]


function answer(arr, target) {
	pairs = []
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if ((arr[i] + arr[j]) === target) {
				pairs.push([arr[i], arr[j]]);
			}
		}
	}
	return pairs;
}

console.log(answer([1,2,3], 4)); // returns [1, 3]
console.log(answer([1,2,3,5,6,5,10,14,22,100], 122)); // returns [22, 100]
console.log(answer([1,2,3,5,6,5,10,14,22,100], 123)); // returns []
console.log(answer([1,2,3,4,5,6,4,3], 8)); // returns an array with 4 arrays: [[2, 6], [3, 5], [4, 4], [5, 3]]
