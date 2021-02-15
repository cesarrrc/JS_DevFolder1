let assert = require("assert");

class Car  {
  mpg;  
  tankCapacity;  
  fuelLevel = 0;  
  id;  
  odometer = 0;  

  constructor(inputMpg, inputTankCapacity) {
   
    let randomNumber = Math.floor((Math.random() * 10000))
      this.id = randomNumber
      this.mpg = inputMpg;
      this.tankCapacity = inputTankCapacity
  };
  
  addFuel(gallons) {
    if((this.fuelLevel + gallons) <= this.tankCapacity) {
      this.fuelLevel = this.fuelLevel + gallons
      console.log(`Your Fuel level is currently at ${this.fuelLevel} gallons.`)
    } 
    else{
      let leftOverAmt = this.tankCapacity - (this.fuelLevel + gallons)
      this.fuelLevel = (this.fuelLevel + gallons) + leftOverAmt;
      console.log(`You were over by this many gallons: ${leftOverAmt}, I filled her up for ya! Your Fuel level is currently at ${this.fuelLevel} gallons. Make sure you get a refund!`)
    }
  };

  drive(distance) {
    let milesTillEmpty = this.mpg * this.fuelLevel;
    if(milesTillEmpty < distance){
      this.fuelLevel = 0;
      this.odometer = this.odometer + milesTillEmpty;
      console.log(this.odometer)
      console.log(`You ran out of gas bud`)
    } else{
    this.odometer = this.odometer + distance;
    let fuelUsed = distance / this.mpg;
    this.fuelLevel = this.fuelLevel - fuelUsed;
    }
  }
};

let pinto = new Car(26, 11); 

pinto.addFuel(8);
pinto.addFuel(4);
pinto.drive(300);
console.log("after driving Fuel: ", pinto.fuelLevel)
console.log(pinto.odometer) 

if(typeof describe == 'function'){
  describe("test set 1", function(){
    it("not over fill", function(){

      let c1 = new Car(10, 2);
      c1.addFuel(100)
      let expected = 2;
      assert.equal(c1.fuelLevel, expected)
    })
    
    it("not drive past empty", function(){
      let c2 = new Car(10, 2);
      c2.addFuel(2);
      c2.drive(1000);
      assert.equal(c2.odometer, 20)
      assert.equal(c2.fuelLevel, 0)
    })
  })
}