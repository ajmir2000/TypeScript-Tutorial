// public is the default access modifier, it can be omitted
// private members are only accessible within the class they are declared in
// protected members are accessible within the class they are declared in and in subclasses

class User {
  public name: string;
  private password: string;
  protected email: string;

  constructor(name: string, password: string, email: string) {
    this.name = name;
    this.password = password;
    this.email = email;
  }
  public getUserName(): void {
    console.log(`Name is: ${this.name}`);
  }
  private updatePassword(newPassword: string): void {
    this.password = newPassword;
    console.log(`this is new passsword ${this.password}`);
  }
  protected getEmail(): string {
    return this.email;
  }
}

class Admin extends User {
  constructor(name: string, password: string, email: string) {
    super(name, password, email); // Call the constructor of the parent class (User)
  }
  public displayEmail(): void {
    console.log(`Admin email is: ${this.getEmail()}`);
  }
  // This method can access the protected getEmail() method from the User class
}
const user1 = new User("Ajmir", "password123", "ajmir@example.com");
user1.getUserName(); // Output: Name is: Ajmir

// user1.updatePassword("newpassword456"); // Error: Property 'updatePassword' is private and only accessible within class 'User'.

// console.log(user1.getEmail()); // Error: Property 'getEmail' is protected and only accessible within class 'User' and its subclasses.
