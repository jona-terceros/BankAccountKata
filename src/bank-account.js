//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this.total=0
    //throw new Error("Remove this statement and implement this function");
  }

  open() {
    //throw new Error("Remove this statement and implement this function");
  
  }

  close() {
    throw new Error("Remove this statement and implement this function");
  }

  deposit() {
    throw new Error("Remove this statement and implement this function");
  }

  withdraw() {
    throw new Error("Remove this statement and implement this function");
  }

  get balance() {
    //throw new Error("Remove this statement and implement this function");
    return this.total;
  }
}

export class ValueError extends Error {
  constructor() {
    super("Bank account error");
  }
}
