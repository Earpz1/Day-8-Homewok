/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

const arrayOfNumbers = [1, 2, 3, 4, 5]

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

const aboutMe = {
  name: 'Daniel',
  surname: 'Earp',
  email: 'dan.earp@icloud.com',
  age: 32,
}
console.log(aboutMe)

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/

const aboutMe2 = {
  name: 'Daniel',
  surname: 'Earp',
  email: 'dan.earp@icloud.com',
  age: 32,
}
console.log(aboutMe2)
aboutMe2.drivingLicense = true
console.log(aboutMe2)

/* EXERCISE 4
 Remove from the previously created object the age property.
*/

const aboutMe3 = {
  name: 'Daniel',
  surname: 'Earp',
  email: 'dan.earp@icloud.com',
  age: 32,
}
console.log(aboutMe3)
aboutMe3.drivingLicense = true
console.log(aboutMe3)
delete aboutMe3.age
console.log(aboutMe3)

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

const aboutMe4 = {
  name: 'Daniel',
  surname: 'Earp',
  email: 'dan.earp@icloud.com',
  age: 32,
}
const aboutYou = {
  name: 'Joe',
  surname: 'Bloggs',
  email: 'JoeBloggs@someemail.com',
  age: 22,
}

uniqueEmail = aboutMe4.email !== aboutYou.email
console.log(uniqueEmail)

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

let totalShoppingCart = 0
let shippingCost = 10
let shoppingCart = [2, 14, 4, 8, 12, 44]

for (i = 0; i < shoppingCart.length; i++) {
  totalShoppingCart += shoppingCart[i]
}
if (totalShoppingCart > 50) {
  shippingCost = 0
}
console.log(
  `The total of your shopping cart is $${totalShoppingCart}. Your shipping cost is $${shippingCost}`,
)

/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

let totalShoppingCart1 = 0
let shippingCost1 = 10
let shoppingCart1 = [2, 14, 4, 8, 12, 444]

for (i = 0; i < shoppingCart1.length; i++) {
  totalShoppingCart1 += shoppingCart1[i]
}
if (totalShoppingCart1 > 50) {
  shippingCost1 = 0
}

//Take 20% off the final bill and create a variable with the final amount
let discount = (totalShoppingCart1 / 100) * 20
let totalIncludingDiscount = totalShoppingCart1 - discount

console.log(
  `The total of your shopping cart is $${totalIncludingDiscount}, including a $${discount} discount. Your shipping cost is $${shippingCost1}`,
)

/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

//Create the initial object with car details

const carDetails = {
  brand: 'Ford',
  model: 'Focus',
  licensePlate: '123ABC',
}

//Make 5 copies of the original object, changing the licensePlate each time
const car1 = Object.assign({}, carDetails)
car1.licensePlate = '456DEF'
const car2 = Object.assign({}, carDetails)
car2.licensePlate = '789XYZ'
const car3 = Object.assign({}, carDetails)
car3.licensePlate = '123HYR'
const car4 = Object.assign({}, carDetails)
car4.licensePlate = 'FER542'
const car5 = Object.assign({}, carDetails)
car5.licensePlate = 'PLD864'

/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

let carsForRent = [car1, car2, car3, car4, car5]

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

//Remove the first array and returns it (if not assigned to anything, it's lost)
carsForRent.shift()
//Remove the last array and returns it (if not assigned to anything, it's lost)
carsForRent.pop()

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

/* WRITE YOUR ANSWER HERE */
