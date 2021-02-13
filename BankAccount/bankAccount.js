'use strict'

class BankAccount{
  accountNumber;
  owner;
  transactions = [];
  
    constructor(owner){
      let randomNumber = Math.floor((Math.random() * 1000000000))
      this.accountNumber = randomNumber;
      this.owner = owner;
    };
  

  deposit(amt){
    if(amt > 0){
      let deposit = new Transaction(amt, "deposit");
      this.transactions.push(deposit)
    } else {
      console.log(`Your deposit seems to be a negative amount, please try again.`)
    }
  };

  balance(){
    let sum = 0;
    for(let i = 0; i < this.transactions.length; i++) {
      sum += this.transactions[i].amount
      console.log("i am at position: " , [i])
    }
    return sum
  }
  
  charge(payee, amt){
    if(this.balance() >= amt) {
      let charge = new Transaction((amt * -1), payee)
      this.transactions.push(charge)
    } else {
      console.log(`Transaction declined, insuffucuent funds.`)
    }
  }
}

class Transaction {
  date;
  amount;
  payee;

    constructor(amount, payee) {
      this.date = new Date();
      this.amount = amount;
      this.payee = payee;
    }
}




let cesarrrc = new BankAccount("Cesar Cisneros")

console.log(`Your current balance is: `, cesarrrc.balance())

cesarrrc.deposit(20)
cesarrrc.deposit(30)
cesarrrc.deposit(30)

cesarrrc.charge("Target", 15)

cesarrrc.deposit(30)

cesarrrc.charge("Target", 4)

console.log(`Your current balance is: `, cesarrrc.balance())

console.log()

console.log(cesarrrc)

