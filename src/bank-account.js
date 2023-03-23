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

    if(this.isOpened == true)
    {
      throw new ValueError();
    }
    else
    {
      this.isOpened = true;
    }

  }
  close() {
    if(this.isOpened == false)
    {
      throw new ValueError();
    }
    else
    {
      this.isOpened = false;
      this.total=0;
    }

  }

  deposit(amount) {
    if(this.isOpened == false)
    {
      throw new ValueError();
    }
    this.total = this.total + amount;
  }

  withdraw(amount) {
    if (this.isOpened == false) {
      throw new ValueError();
    } else if (amount > this.total) {
      throw new ValueError();
    } else if (amount < 0) {
      throw new ValueError();
    } else {
      this.total = this.total - amount;
    }

   
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