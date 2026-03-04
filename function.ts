function add(x: number, y: number): number {
  return x + y;
}

console.log(add(5, 3)); // Output: 8

function greet(name: string): string {
  return `Hello, ${name}!`;
}
console.log(greet("Ajmir")); // Output: "Hello, Ajmir!"

function calculateArea(radius: number): number {
  return Math.PI * radius * radius;
}
console.log(calculateArea(5)); // Output: 78.53981633974483

function isEven(num: number): boolean {
  return num % 2 === 0; // Returns true if the number is even, false otherwise
}
console.log(isEven(4)); // Output: true
console.log(isEven(7)); // Output: false

function logMessage(message: string): void {
  console.log(`This is the Message: ${message}`);
}

logMessage("Hello, TypeScript!"); // Output: "This is the Message: Hello, TypeScript!"

function personInfo(name: string, age?: number): string {
  return age ? `Hello ${name} you are ${age} years old.` : `Hello ${name}`;
}

console.log(personInfo("Ajmir", 25)); // Output: "Hello Ajmir you are 25 years old."
console.log(personInfo("Ajmir")); // Output: "Hello Ajmir"

function greeting(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}!`;
}
console.log(greeting("Ajmir")); // Output: "Hello, Ajmir!"
console.log(greeting("Ajmir", "Hi")); // Output: "Hi, Ajmir!"
