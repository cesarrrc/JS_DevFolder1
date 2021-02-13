// 1. do...while loop
let i = 0;
let numbers = [];
do{
  i +=1;
  numbers.push(i)
} while(i < 1000)

console.log("*1*", numbers)

// 2. Create an object
let person = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
}

console.log("*2*", person)

// 3. Create a function that logs out the keys of the object

let objKeys = (obj) => {
  return Object.keys(obj)
}

console.log("*3*", objKeys(person))

// 4. Create a function that logs out the keys and values of the object

let objKeyValuePairs = (obj) => {
  return Object.entries(obj)
}

console.log("*4*", objKeyValuePairs(person))

// 5. Create an [arrayOfPersons] that contains multiple "people" objects.

let arrayOfPersons = [
  {
    firstName: "Cesar",
    lastName: "Cisneros",
    birthDate: "June 25, 1988",
    gender: "Male"
  },
  {
    firstName: "PorkChop",
    lastName: "TheDog",
    birthDate: "Dec 20, 2009",
    gender: "Male"
  },
  {
    firstName: "Aaron",
    lastName: "Wilson",
    birthDate: "Sept 27, 1993",
    gender: "Male"
  },  
  {
    firstName: "Adriana",
    lastName: "Cisneros",
    birthDate: "August 8, 1986",
    gender: "Female"
    }
]

console.log("*5*", arrayOfPersons)

// 6. Create a function that uses a for...of loop and an if statement to console.log the value
//    associated with the key birthDate of each object if the birth year is an odd number

let oddBD = []
for (let element of arrayOfPersons){
  let oddYear = element.birthDate.slice(-4)
  if(oddYear % 2 == 1){
    oddBD.push(element)
  }
}
console.log("*6*", oddBD)

// 7. use .map() to map over the [arrayOfPersons] and console.log their info

let newArrayOfPeople = arrayOfPersons.map(function(element){
  return element
})

console.log("*7*", newArrayOfPeople)

// 8. use .filer() to filter the [arrayOfPersons] array and console.log only males

let theBoys = arrayOfPersons.filter(function(element){
  return element.gender == "Male"
})

console.log("*8*", theBoys)

// 9. create a function that returns true if the value of [birthDate]
//    is before Jan 1, 1990

let genX = (element) => {
  let birthYear = element.birthDate.slice(-4)
  if(birthYear < 1990){
    return true
  }
}

console.log(genX(arrayOfPersons[0]))

// 10.  Use .filter() to filter the persons array and console.log
//      only the people that were born before 1990.

let genXPeople = arrayOfPersons.filter(function(element){
  return genX(element)
})

console.log("*10*", genXPeople)

// Bonus 1: Create a function that returns true if the date passed to
//        it is >= 21 years in the past.

let over21 = (element) => {
  let birthYear = element.birthDate.slice(-4);
  let today = new Date();
  let year = today.getFullYear();
  let age = year - birthYear;
  if(age > 21){
    return true
  } else {
    return false
  }
}

console.log("Bonus 1: ", over21(arrayOfPersons[1]))

let underAge = arrayOfPersons.filter(function(element){
  if(over21(element) == false){
    return element
  }
})

console.log("Bonus 2: ", underAge)