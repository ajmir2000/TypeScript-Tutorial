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

// Interface we can use extends but in type we can use intersection (&) to extend another type.

interface person {
  name: string;
  age: number;
}

interface Employee extends person {
  employeeId: number;
  jobTitle: string;
}

const employee1: Employee = {
  name: "Ajmir",
  age: 25,
  employeeId: 12345,
  jobTitle: "Software Engineer",
};

interface Address {
  street: string;
  city: string;
  country: string;
}
interface Company {
  name: string;
  address: Address;
}

const company1: Company = {
  name: "Tech Company",
  address: {
    street: "123 Main St",
    city: "Tech City",
    country: "Techland",
  },
};

type Child = {
  name: string;
  age: number;
};
type Student = Child & {
  studentId: number;
  grade: string;
};
const student1: Student = {
  name: "Ajmir",
  age: 25,
  studentId: 67890,
  grade: "A",
};

type parent = { name: string; age: number; children: Child };
const parent1: parent = {
  name: "John Doe",
  age: 50,
  children: {
    name: "Jane Doe",
    age: 20,
  },
};
