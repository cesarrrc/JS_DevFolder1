'use strict'

console.log("main.js is connected") //this will help me identify whether or not the JS Doc is conencted to the HTML

//This is an array of friends I created to help with my code.
let arrayOfFriends = [
  {
    name: "Cesar",
    gamerTag: "GoingKerouac",
    email: "randomemail1@email.com",
    age: 32,
    loaction: "San Marcos, TX"
  },
  {
    name: "Sam",
    gamerTag: "DrWalnut",
    email: "randomemail2@email.com",
    age: 23,
    loaction: "San Marcos, TX"

  },
  {
    name: "Aaron",
    gamerTag: "ElectricAvenue",
    email: "randomemail1@email.com",
    age: 27,
    loaction: "San Marcos, TX"
  },
  {
    name: "Nathan",
    gamerTag: "InTheShadow",
    email: "randomemail3@email.com",
    age: 26,
    loaction: "San Antonio, TX"
  },
  {
    name: "Trevor",
    gamerTag: "MiTexTrevor",
    email: "randomemail4@email.com",
    age: 23,
    loaction: "Austin, TX"
  },
  {
    name: "Connor",
    gamerTag: "2StonedBirds",
    email: "randomemail5@email.com",
    age: 23,
    loaction: "Dallas, TX"
  },
  {
    name: "Frankie",
    gamerTag: "FrankDaTank",
    email: "randomemail6@email.com",
    age: 27,
    loaction: "Austin, TX"

  },
  {
    name: "Michael",
    gamerTag: "Caboose",
    email: "randomemail7@email.com",
    age: 25,
    loaction: "San Antonio, TX"

  },
  {
    name: "Jacob",
    gamerTag: "GamerGuy",
    email: "randomemail8@email.com",
    age:25,
    loaction: "Austin, TX"
  }
];

//I added 3 arrays to .push() elements into and store information
const newArrayOfFriends = [];
const blueTeam = [];
const redTeam = []

//This class will create a new object and push it into the newArrayOfFriends
class OnlineFriends {
  constructor(gamerTag, name){
    this.gamerTag = gamerTag;
    this.name = name; 

  }
  addFriendsToNewArray(){
    newArrayOfFriends.push(this)
  }
}

//This class constructor is an extenstion and will add: color, weapon, and character
class TeamMember extends OnlineFriends {
  constructor(gamerTag, name, color, weapon, character){
    super(gamerTag, name);
    this.color = color;
    this.weapon = weapon;
    this.character = character  
  }
}

//This function will create a new parent element andd attaches new li's for every instance
//we pass through
const friendsOnline = () => {
  //this finds the HTML id "friends" so we can add to it. 
const newList = document.getElementById("friends");
  //.map() will loop through every instance of the array and proccess them using the same method
arrayOfFriends.map(person => {
    //a new li for every instance
  const li = document.createElement("li");
    //giving the li and id of current iterations "name"
  li.id = person.name;
    //create a new button on the same li
  const button = document.createElement("button");
    //enter text inside the button
  button.innerHTML= "Join Server";
    //add an event listener to the button that when clicked will call on another function to do
    //something else
  button.addEventListener('click', function(){
    addPerson(person)
    })
    //attach the button to Parent Element as a Child Element
  li.appendChild(button);
    //attach text to the same li which will refer to the iterations "gamerTag" and "name"
    //and display it
  li.appendChild(document.createTextNode(`${person.gamerTag} - ${person.name}`));
  newList.append(li);
  })
}

//This function is the next step after the list of friends is already displayed 
//This will work with the event listener from before and when clicked, will refer to each instance
//and proccess it the same way
const addPerson = (person) => {
  //Using the constructor, we pass the instance and push the new class into a new Array
  let newPlayerClass = new OnlineFriends(person.gamerTag, person.name)
  newArrayOfFriends.push(newPlayerClass)
  console.log(newPlayerClass)
  
  //this finds the HTML tag "friendsInServer"
  const joinServer = document.getElementById("friendsInServer");
  //new div is generated when button is clicked
  const friendDiv = document.createElement("li");
  //give the div an id of the current instance "name"
  friendDiv.id = person.name;
  //add text to the div
  friendDiv.appendChild(document.createTextNode(`${person.gamerTag} - ${person.name}`))
  //add the whole div to the HTML tag referred to earlier "friendsInServer"
  joinServer.append(friendDiv)
  //removes the instance after being "clicked"
  document.getElementById(person.name).remove()

  //redButton generated
  const redButton = document.createElement("button"); 
  //"red team" inserted as text in button 
  redButton.innerHTML = "Red Team";
  //attach the button to the end of li
  friendDiv.appendChild(redButton)
  //add an event listener to do something when 'clicked'
  redButton.addEventListener('click', function(){addRedTeam(person)})

  //same as the button above ^^^^
  const blueButton = document.createElement("button");
  blueButton.innerHTML = "Blue Team";
  friendDiv.appendChild(blueButton);
  blueButton.addEventListener('click', function(){addBlueTeam(person)})
  }


//this function will add someone to the red team. it takes in the same parameter when the
//event listener is clicked and will proccess it the same for every instance
const addRedTeam = function(person) {

  //we will use the class extender here to add new properties to the class and push it into a new
  //array in reference to the color of button clicked
  let newPlayerClass2 = new TeamMember(person.gamerTag, person.name, "Red Team", "Arbiter", "Carbine Rifle")
  redTeam.push(newPlayerClass2)

  //this refers to the "red team" HTML tag
  let playerList = document.getElementById("redTeam");
  //creates a new "li" element
  let newPlayer = document.createElement("li");
  //add text to the new element using the instances "gamerTag" and using the new extension, will also
  //use the "character" and "weapon" which is modified differently for both colors
  newPlayer.appendChild(document.createTextNode(`${newPlayerClass2.gamerTag} - ${newPlayerClass2.character} - ${newPlayerClass2.weapon}`))
  //add the newly generated element into the parent element
  playerList.append(newPlayer)

  //removes the instance when clicked
  document.getElementById(person.name).remove()
}

//this code the same as above but with "blueteam"
const addBlueTeam = function(person) {

  let newPlayerClass2 = new TeamMember(person.gamerTag, person.name, "Blue Team", "Spartan", "Battle Rifle")
  blueTeam.push(newPlayerClass2)

  let playerList = document.getElementById("blueTeam");
  let newPlayer = document.createElement("li");
  newPlayer.appendChild(document.createTextNode(`${newPlayerClass2.gamerTag} - ${newPlayerClass2.character} - ${newPlayerClass2.weapon}`))
  playerList.append(newPlayer)

  document.getElementById(person.name).remove()
}
  /** Test Ideas */

  /**
   * I am not sure how exactly to run tests on GUIs, but I did make a seperate JS document
   * and should be submitted along with this assignment.
   * 
   * Here are some tests I would like to run if I had the knowledge:
   * 1. When "Friends List" is clicked, should generate a list of people form an array.
   * 2. Can click "Join Server" button which will move a "div" element to a new Parent Element.
   * 3. "Red Team" button will remove the div and add one to Red Team Parent element.
   * 4. "Blue Team" button will remove the div and add one to Blue Team Parent element.
   * 
   * The other attached JS document will have unit tests based on the classes.
   */