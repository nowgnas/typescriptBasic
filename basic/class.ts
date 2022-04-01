class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  say() {
    return "hello" + this.name;
  }
}

const person = new Person("lee");
console.log(person);

// class Animal {
//   public name: string;
//   constructor(Name: string) {
//     this.name = Name;
//   }
// }

// // new Animal("Cat").name;

// class Animal {
//   private name: string;
//   constructor(parameters) {
//     this.name = parameters;
//   }
// }

// // new Animal("cat").name;
// // // Property 'name' is private and only accessible within class 'Animal'.
