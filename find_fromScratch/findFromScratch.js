const people = [
  {
    name: "cesar",
    job: "programmer",
    age: 32
  },
  {
    name: "sam",
    job: "programmer",
    age: 23
  },
  {
    name: "aaron",
    job: "restaurant manager",
    age: 27
  },
  {
    name: "carlos",
    job: "sushi chef",
    age: 23
  },
  {
    name: "trex",
    job: "dinosaur",
    age: null
  }
]

/**
 * This is a function that takes no parameter but rather returns a value. 
 * Inside the function we have a forLoop that loops through each iteration of the Object Array
 * "people" and its whole length. After every iteration, it goes up by one and checks the next.
 * 
 * Condition: the condition loooks through the iterations [i] "object[i].job" and checks to see
 * if the "job" key matches the value "programmer". If there is a match, it pushes the iteration
 * into a new array using "array.push(obj[i].name)" and stores only the name by sepcification.
 * 
 * Returns: the new "programmers" array.
 * 
 * This will return every instance the condition meets, which makes it a stronger function
 * then using the .find() callback method which can only return the first instance the
 * condition meets. 
 */
let listOfProgrammers = () => {
  programmers = [];
  for(i = 0; i < people.length; i++) {
    if(people[i].job == "programmer") {
      programmers.push(people[i].name)
    }
  }
  return programmers
}

console.log(`These are the "programmers" from the Object Array list of "people":`, listOfProgrammers());
console.log("_______________________________________")

/**
 * This is a variale that stores a method with a callback function which results are returned
 * to define the variable "findProgammer."
 * 
 * 
 * From MDN Web Doc:
 * The .find() method returns the value of the first element in the provided array that satisfies
 * the provided testing function. If no values satisfies the testing function, undefined 
 * is returned.
 * 
 * This .find() method is called on an array "people.find" and stores a callback function that
 * stores an element. This callback function is executed on each element and can accept between
 * 1 and 3 arguments: current element in the array, the index(optional) of the current element
 * in the array, and the array(optional) that find was called on. 
 * 
 * Returns: this callback will return the 1st instance that [obj.job] matches the value "programmer".
 *          This will return and store an object of the 1st instance in its entirety.
 * 
 */
let findProgrammer = people.find(function(obj, index){
  return obj.job == "programmer"
})

console.log(findProgrammer)
// You can access the objects key-values of the result using dot-notation. since only 1 result is
// is returned, no need to sepcify an index. 
console.log('This is the first "programmer" instance found using the .find() method: ', findProgrammer.name)
console.log("_______________________________________")

/**
 * .filter() is a similar method that uses a callback function. But instead of returning just one
 * instance, it will return all instances that match your condition and store it in an array. 
 * 
 * Returns: an array of elements that match your condition.
 */
let findProgrammers = people.filter(function(obj){
  return obj.job == "programmer"
})

console.log(findProgrammers)
//You can access the objects key values the same way here with dot-notation. Since there is more
//than one result, you can use an index to specify which name to display.
console.log(`These are the "programmers" filtered out of the Object Array list of "people: `, findProgrammers[0].name, findProgrammers[1].name)