// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   introduce() {
//     {
//       console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
//     }
//   }
// }

// const person1 = new Person("Ajmir", 20);
// person1.introduce();

//output: Hi, I'm Ajmir and I'm 20 years old.
// But have error because of missing type annotations in the constructor parameters. To fix this, we can add type annotations to the constructor parameters like this:

class Person2 {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  introduce(): void {
    {
      console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    }
  }
}

const person2 = new Person2("Ajmir", 25);
person2.introduce();
//output: Hi, I'm Ajmir and I'm 25 years old.

class Car {
  band: string;
  model: string;
  year: number;
  constructor(band: string, model: string, year: number) {
    this.band = band;
    this.model = model;
    this.year = year;
  }
  getCarInfo(): string {
    return `This is a ${this.year} ${this.band} ${this.model}.`;
  }
}

const car1 = new Car("Toyota", "Camry", 2020);
console.log(car1.getCarInfo());
//output: This is a 2020 Toyota Camry.