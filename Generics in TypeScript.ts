// function showfirst(arr: string[]): string{
//   return arr[0];
// }

// function showfirst(arr: string[]): string;
// function showfirst(arr: number[]): number;
// function showfirst(arr: any[]): any {
//   return arr[0];
// }

// Generics in TypeScript allow us to create reusable components that can work with different types of data. We can define a generic function that can accept an array of any type and return the first element of that array. Here's how we can implement this:
function showfirst<T>(arr: T[]): T | undefined {
  return arr[0];
}

console.log(showfirst(["apple", "banana", "cherry"])); // Output: apple
console.log(showfirst([200, 500, 1000]));

const vlaue: Array<number> = [1, 2, 3];

interface Box<T> {
  content: T;
}

const box1: Box<string> = { content: "Hello, World!" };
console.log(box1.content); // Output: Hello, World!

const box2: Box<number> = { content: 42 };
console.log(box2.content); // Output: 42

type Pair<K, V> = {
  key: K;
  value: V;
};
const pair1: Pair<string, number> = { key: "age", value: 30 };
console.log(pair1); // Output: { key: 'age', value: 30 }
const pair2: Pair<number, string> = { key: 1, value: "one" };
console.log(pair2); // Output: { key: 1, value: 'one' }

class DataContainer<T> {
  private data: T;
  constructor(value: T) {
    this.data = value;
  }

  getData(): T {
    return this.data;
  }
}

const stringContainer = new DataContainer<string>("Hello, TypeScript!");
console.log(stringContainer.getData()); // Output: Hello, TypeScript!
const numberContainer = new DataContainer<number>(12345);
console.log(numberContainer.getData()); // Output: 12345
