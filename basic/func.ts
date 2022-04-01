function hello(name) {
  return name;
}

const hello2 = function (name) {
  return name;
};

const hello3 = (name) => {
  return name;
};

const hello4 = (name) => name;

function world(name: string): string {
  return name;
}

// function person(name: string, age: number, gender?: string) {
//   return `hello ${name} age is ${age} gender is ${gender}`;
// }

// const lee = person("lee", 20, "male ");
