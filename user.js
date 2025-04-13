export class User {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }
  
    displayInfo() {
      console.log(`User: ${this.name}, 
    Email: ${this.email}`);
    }
  }