const arrayOfStrings = ['Hello', 'Everybody', 'Today', 'is', 'Thursday']
console.log(arrayOfStrings)
for (i = 0; i < arrayOfStrings.length; i++) {
  arrayOfStrings.splice(i, 1, arrayOfStrings[i].length)
}
console.log(arrayOfStrings)
