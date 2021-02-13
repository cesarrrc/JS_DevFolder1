'use strict';
const assert = require('assert');

// This is an object that has types of jobs and the values each provide.
const jobTypes = {
  pilot: 'MAV',
  mechanic: 'Repair Ship',
  commander: 'Main Ship',
  programmer: 'Any Ship!'
};

// Your code will go here
class CrewMember {
  name;
  job;
  specialSkill;
  ship;

    constructor(name, job, specialSkill){
      this.name = name;
      this.job = job;
      this.specialSkill = specialSkill;
      this.ship = null
    }


    enterShip(assignment){
      this.ship = assignment
      assignment.crew.push(this)
      } 
    
      
      // enterShip(assignment){
      //   for(let jobType in jobTypes){
      //     if(this.job == jobType && assignment.type == jobTypes[jobType]){
      //     this.ship = assignment
      //     assignment.crew.push(this)
      //     } else {
      //       return "Can't perform a mission yet."
      //     }
      //   }
      // }
}

class Ship {
  name;
  type;
  ability;
  crew = [];

    constructor(name, type, ability){
      this.name = name;
      this.type = type;
      this.ability = ability;
    }

    missionStatement(){
      if(this.crew.length > 0){
        return this.ability
      } else {
        return "Can't perform a mission yet."
      }
    }
}

let crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry')
let crewMember2 = new CrewMember('Commander Lewis', 'commander', 'geology');

let hermes = new Ship('Hermes', 'Main Ship', 'Interplanetary Space Travel');
let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');

crewMember1.enterShip(mav)
crewMember2.enterShip(hermes)

console.log(crewMember1)
console.log(mav)
console.log(mav.missionStatement())

console.log(crewMember2)
console.log(hermes)
console.log(hermes.missionStatement())



// Begin by reading the tests and building a function that will full each one.
// As you build, you might not have to build them in order, maybe you do...
// These are the tests
if (typeof describe === 'function'){
  describe('CrewMember', function(){
    it('should have a name, a job, a specialSkill and ship upon instantiation', function(){
      // this creates a CrewMember and passes the following arguments into its constructor:
      // 'Rick Martinez', 'pilot', 'chemistry'
      const crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      assert.equal(crewMember1.name, 'Rick Martinez');
      assert.equal(crewMember1.job, 'pilot');
      assert.equal(crewMember1.specialSkill, 'chemistry');
      assert.equal(crewMember1.ship, null);
    });

    it('can enter a ship', function(){
      // this creates a new Ship. Can you build a class that can be called so that this Ship can be built?
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      const crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      crewMember1.enterShip(mav);
      assert.equal(crewMember1.ship, mav);
      assert.equal(mav.crew.length, 1);
      assert.equal(mav.crew[0], crewMember1);
    });
  });

  describe('Ship', function(){
    it('should have a name, a type, an ability and an empty crew upon instantiation', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      assert.equal(mav.name, 'Mars Ascent Vehicle');
      assert.equal(mav.type, 'MAV');
      assert.equal(mav.ability, 'Ascend into low orbit');
      assert.equal(mav.crew.length, 0);
    });

    it('can return a mission statement correctly', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      const crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      let hermes = new Ship('Hermes', 'Main Ship', 'Interplanetary Space Travel');
      const crewMember2 = new CrewMember('Commander Lewis', 'commander', 'geology');
      assert.equal(mav.missionStatement(), "Can't perform a mission yet.");
      assert.equal(hermes.missionStatement(), "Can't perform a mission yet.");

      crewMember1.enterShip(mav);
      assert.equal(mav.missionStatement(), "Ascend into low orbit");

      crewMember2.enterShip(hermes);
      assert.equal(hermes.missionStatement(), "Interplanetary Space Travel");
    });
  });
}