// Additional assignments for Day 8

/* EXTRA 1
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/

const arrayNotReverse = [2, 4, 6]
const arrayReversed = array.reverse()

/* EXTRA 2
 Write a piece of code for getting the maximum numerical value from an array.
*/

const arrayLargestNumber = [0, 1, 0]
let largestNumber = arrayLargestNumber[0]

for (i = 0; i < arrayLargestNumber.length; i++) {
  if (arrayLargestNumber[i] > largestNumber) {
    largestNumber = arrayLargestNumber[i]
  }
}
console.log(`The biggest number of the array is ${largestNumber}`)

/* EXTRA 3
 Write a piece of code for getting the minimum numerical value from an array.
*/

const arraySmallestNumber = [5, 44, 55]
let smallestNumber = arraySmallestNumber[0]

for (i = 0; i < arraySmallestNumber.length; i++) {
  if (arraySmallestNumber[i] < smallestNumber) {
    smallestNumber = arraySmallestNumber[i]
  }
}
console.log(`The smallest number in the array is ${smallestNumber}`)

/* EXTRA 4
 Write a piece of code for getting only even numerical values from an array.
*/

const array1 = [5, 44, 55, 6, 22, 46, 47, 49, 10]
let evenNumbersOnly = []

for (i = 0; i < array1.length; i++) {
  if (array1[i] % 2 == 0) {
    evenNumbersOnly.push(array1[i])
  }
}
console.log(`${evenNumbersOnly} are the only even numbers from the array`)

/* EXTRA 5
 Write a piece of code for deleting only even entries from an array.
*/

const array2 = [4, 55, 6, 47, 49, 10]

for (i = 0; i < array2.length; i++) {
  if (array2[i] % 2 == 0) {
    array2.splice(i, 1)
  }
}
console.log(
  `After the even numbers have been deleted, we are left with ${array2}`,
)

/* EXTRA 6
 Write a piece of code for removing all the vowels from a string.
*/

let string = 'Hello World'
//Replace the vowels using string.replace. Use Regex to remove multiple patterns
let stringWithoutVowels = string.replace(/[aeiou]/gi, '')

/* EXTRA 7
 Write a piece of code for increasing all the numerical values in a array by 1.
*/

let array = [1, 2, 3, 4, 5]
let arrayPlusOne = []

for (i = 0; i < array.length; i++) {
  arrayPlusOne.push(array[i] + 1)
}

/* EXTRA 8 
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/
const arrayOfStrings = ['Hello', 'Everybody', 'Today', 'is', 'Thursday']
console.log(arrayOfStrings)
for (i = 0; i < arrayOfStrings.length; i++) {
  arrayOfStrings.splice(i, 1, arrayOfStrings[i].length)
}
console.log(arrayOfStrings)
