// Interface it use just for object but type it use for all data type like string, number, boolean, array, tuple, union, intersection etc.

interface User {
  id: number;
  name: string;
  email: string;
  age?: number; // Optional property
}

const user1: User = {
  id: 1,
  name: "Ajmir",
  email: "ajmerfaqiri14.af@gmail.com",
};

const user2: User = {
  id: 2,
  name: "John Doe",
  email: "aaaaaaaaaaaaaaaaaaaa",
  age: 30,
};

function getUserInfo(user: User): void {
  console.log(
    `User Info: ID=${user.id}, Name=${user.name}, Email=${user.email}, Age=${user.age ?? "N/A"}`,
  );
}
getUserInfo(user1);

// Type

type Product = {
  id: number;
  name: string;
  price: number;
  description?: string; // Optional property
};

const product1: Product = {
  id: 101,
  name: "Laptop",
  price: 999.99,
};
const product2: Product = {
  id: 102,
  name: "Smartphone",
  price: 499.99,
  description: "A high-end smartphone with great features.",
};
function getProductInfo(product: Product): void {
  console.log(
    `Product Info: ID=${product.id}, Name=${product.name}, Price=$${product.price}, Description=${product.description ?? "N/A"}`,
  );
}
getProductInfo(product1);
getProductInfo(product2);

type NumberArray = number[];
const value1: NumberArray = [1, 2, 3];

type Person = [string, number];
const person1: Person = ["Ajmir", 25];
