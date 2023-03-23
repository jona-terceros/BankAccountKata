//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this.isOpened = false;
    this.total = 0;
    
  }
  open() {

    this.isOpened = true;
  }
  close() {
    this.isOpened = false;

  }

  deposit(amount) {
    if(this.isOpened == false)
    {
      throw new ValueError();
    }
    this.total = this.total + amount;
  }

  withdraw(amount) {
    //throw new Error("Remove this statement and implement this function");
    this.total=this.total-amount; 
  }

  get balance() {

  if (this.isOpened == false) {
    throw new ValueError();
  }
  return this.total;
  }
}



export class ValueError extends Error {
  constructor() {
    super("Bank account error");
  }
}