'use strict';
let arrayOfFriends = [
  {
    name: "Cesar",
    gamerTag: "GoingKerouac",
    age: 32,
    weapon: "BR"
  },
  {
    name: "Sam",
    gamerTag: "DrWalnut",
    age: 23,
    weapon: "Sniper"

  },
  {
    name: "Aaron",
    gamerTag: "ElectricAvenue",
    age: 27,
    weapon: "Needler"
  },
  {
    name: "Nathan",
    gamerTag: "InTheShadow",
    age: 26,
    weapon: "Gravity Hammer"
  },
  {
    name: "Trevor",
    gamerTag: "MiTexTrevor",
    age: 23,
    weapon: "Plasma Sword"
  },
  {
    name: "Connor",
    gamerTag: "2StonedBirds",
    age: 23,
    weapon: "Rocket Launcher"
  },
  {
    name: "Frankie",
    gamerTag: "FrankDaTank",
    age: 27,
    weapon: "Sniper"
  },
  {
    name: "Michael",
    gamerTag: "Caboose",
    age: 25,
    weapon: "BR"
  },
  {
    name: "Jacob",
    gamerTag: "GamerGuy",
    age:25,
    weapon: "Assault Rifle"
  }
];

let showListButton = document.getElementById("showList");
let friendsInServer = document.getElementById("friendsInServer");
let addToServer = document.getElementById("addToServer");
let blueTeam = document.getElementById("blueTeam");
let redTeam = document.getElementById("redTeam");

class Friend {
  constructor(name, gamerTag, age, weapon) {
    this.name = name;
    this.gamerTag = gamerTag;
    this.age = age;
    this.weapon = weapon
  }

  friendsList(){
    let friendDiv = document.getElementById(`${this.name}Info`);
    friendDiv.remove();

    let teamMember = document.createElement('li');
    teamMember.id = `${this.name}Info`

    let blueButton = document.createElement('button');
    blueButton.innerText = "Blue Team";
    blueButton.addEventListener('click', this.addToBlueTeam);
    blueButton.id = `${this.name}Blue`;
    teamMember.appendChild(blueButton);

    let redButton = document.createElement('button');
    redButton.innerText = "Red Team";
    redButton.addEventListener('click', this.addToRedTeam);
    redButton.id = `${this.name}Red`;
    teamMember.appendChild(redButton);

    let playerInfo = document.createTextNode(`${this.gamerTag} - ${this.name}`);
    teamMember.appendChild(playerInfo);

    friendsInServer.appendChild(teamMember);
    };

    addToBlueTeam(){
      let currentPlayer = this.id.replace('Blue', '');

      arrayOfFriends.forEach(function(person){
        if (person.name == currentPlayer) {
          let newTeamMate = new TeamMember(person.name, person.gamerTag, person.age, person.weapon, 'Blue');
          newTeamMate.blueTeamMember();
        }
      })
    };

    addToRedTeam(){
      let currentPlayer = this.id.replace('Red', '');

      arrayOfFriends.forEach(function(person){
        if (person.name == currentPlayer) {
          let newTeamMate = new TeamMember(person.name, person.gamerTag, person.age, person.weapon, 'Red');
          newTeamMate.redTeamMember();
        }
      })
    };
};

class TeamMember extends Friend {
  constructor(name, gamerTag, age, weapon, color){
    super(name, gamerTag, age, weapon);
    this.color = color;
  }

  blueTeamMember(){
    let friendDiv = document.getElementById(`${this.name}Info`);
    friendDiv.remove();

    let teamMember = document.createElement('li');
    teamMember.id = `${this.name}Blue`;

    let playerInfo = document.createTextNode(`${this.gamerTag} - Starting Weapon: ${this.weapon}`)
    teamMember.appendChild(playerInfo);

    blueTeam.appendChild(teamMember);
  }

  redTeamMember(){
    let friendDiv = document.getElementById(`${this.name}Info`);
    friendDiv.remove();

    let teamMember = document.createElement('li');
    teamMember.id = `${this.name}Red`;

    let playerInfo = document.createTextNode(`${this.gamerTag} - Starting Weapon: ${this.weapon}`)
    teamMember.appendChild(playerInfo);

    redTeam.appendChild(teamMember);
  }
};

let teamGenerator = function(){

  arrayOfFriends.map(function(player){
    let newElement = document.createElement('li');
    newElement.id = `${player.name}Info`

    let button = document.createElement('button');
    button.innerText = "Add to Server";
    button.addEventListener('click', addToList);
    newElement.appendChild(button);

    let playerInfo = document.createTextNode(`${player.name} - ${player.gamerTag}`)
    newElement.appendChild(playerInfo);

    addToServer.appendChild(newElement)
  })
  showListButton.removeEventListener('click', teamGenerator)
}

showListButton.addEventListener('click', teamGenerator)

let addToList = function(){
  let currentPlayer = this.parentElement.id.replace('Info', '');
  console.log(currentPlyer)
  arrayOfFriends.forEach(function(person){
    if(person.name == currentPlayer) {
      let newPlayer = new Friend(person.name, person.gamerTag, person.age, person.weapon);
      newPlayer.friendsList();
    }
  })
}