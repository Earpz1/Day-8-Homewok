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

let carsForRent = [car1, car2, car3, car4, car5]
console.log(carsForRent)
carsForRent.shift()
carsForRent.pop()
console.log(carsForRent)
