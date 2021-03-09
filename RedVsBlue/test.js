'use strict';
const assert = require('assert');

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

console.log(arrayOfFriends[0])

class Friend {
  constructor(name, gamerTag, age, weapon) {
    this.name = name;
    this.gamerTag = gamerTag;
    this.age = age;
    this.weapon = weapon
  }

  friendsList(){
  
    };

    addToBlueTeam(){

      arrayOfFriends.forEach(function(person){
        if (person.name == currentPlayer) {
          let newTeamMate = new TeamMember(person.name, person.gamerTag, person.age, person.weapon, 'Blue');
          newTeamMate.blueTeamMember();
        }
      })
    };

    addToRedTeam(){

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
   
  }

  redTeamMember(){
   
  }
};

let friend2 = new Friend(arrayOfFriends[0].name, arrayOfFriends[0].gamerTag, arrayOfFriends[0].age, arrayOfFriends[0].weapon)
console.log(friend2)

// Tests
if (typeof describe === 'function') {

  describe('Friend', function() {
      it('can make a new friend using the class method', function() {
          let newFriend1 = new Friend("PorkChop", "PorkyPoo", 10, "needler");
          assert.equal(newFriend1.name, "PorkChop");
          assert.equal(newFriend1.gamerTag, "PorkyPoo");
          assert.equal(newFriend1.age, "10");
          assert.equal(newFriend1.weapon, "needler");
      });
    
      it('can take an array and use the class method to create new class', function(){
          let newFriend2 = new Friend(arrayOfFriends[0].name, arrayOfFriends[0].gamerTag, arrayOfFriends[0].age, arrayOfFriends[0].weapon)
          assert.equal(newFriend2.name, "Cesar");
          assert.equal(newFriend2.gamerTag, "GoingKerouac");
          assert.equal(newFriend2.age, "32");
          assert.equal(newFriend2.weapon, "BR");      
          });
      });
    
  describe('TeamMember', function(){
      it('can add team color as an extension to Friend class', function(){
          let newFriend1 = new TeamMember("PorkChop", "PorkyPoo", 10, "needler", "blue");
          assert.equal(newFriend1.color, "blue")
          });
    });
  }