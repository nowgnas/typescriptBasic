// const str: string = "hello";
// const isSucc: boolean = true;
// const nums: number = 7;

// function funcName(params: object): void {
//   console.log("hello this is function");
// }

// const arr: number[] = [1, 2, 3];
// const arr2: Array<number> = [1, 2, 3];

// const arr3: [string, number] = ["hi", 8];
// enum Car {
//   bus = 1,
//   taxi = 2,
//   sun = 3,
// }
// const bus: Car = Car.bus;
// const bus1: String = Car[1];

// const Any: any = "hi";

// const unknown: void = undefined;
// function sayHi(params: string): void {}

// function newverEnd(params: string): never {
//   while (true) {}
// }
// // ------------------------------

// interface Todo {
//   title: string;
//   description: string;
// }

// function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
//   return { ...todo, ...fieldsToUpdate };
// }

// const todo1 = {
//   title: "title",
//   description: "helo",
// };

// const todo2 = updateTodo(todo1, {
//   description: "world",
// });

// console.log(todo2);

// const todoReadonly: Readonly<Todo> = {
//   title: "hello ",
//   description: "des",
// };

// //  ------------------

// interface PageInfo {
//   title: string;
// }

// type Page = "home" | "about" | "contact";

// const x: Record<Page, PageInfo> = {
//   about: { title: "about" },
//   contact: { title: "contact" },
//   home: { title: "hone" },
// };
// // ------------
// interface Todos {
//   title: string;
//   description: string;
//   completed: boolean;
// }

// type TodoPreview = Pick<Todos, "title" | "completed" | "description">;

// const todos: TodoPreview = {
//   title: "clean room",
//   completed: false,
//   description: "description", //is not assignable to type 'TodoPreview'
// };

// -----------------
// > omit
// interface Todo {
//   title: string;
//   description: string;
//   completed: boolean;
// }

// type TodoPreview = Omit<Todo, "description">;

// const todoL: TodoPreview = {
//   title: "clean room",
//   completed: false,
//   description: "description", //is not assignable to type 'TodoPreview'.
// };
// > Exclude
// type T0 = Exclude<"a" | "b" | "c", "a">;

// type T1 = Exclude<"a" | "b" | "c", "a" | "b">;

// type T2 = Exclude<string | number | (() => void), Function>;
// > Extract
// type T0 = Extract<"a" | "b" | "c", "a" | "f">;

// type T1 = Extract<string | number | (() => void), Function>;
// > Parameters
// declare function f1(arg: { a: number; b: string }): void;

// type T0 = Parameters<() => string>; // []
// type T1 = Parameters<(s: string) => void>; // [string]
// type T2 = Parameters<<T>(arg: T) => T>; // [unknown]
// type T4 = Parameters<typeof f1>; // [{a:number, b: string}]
// type T5 = Parameters<any>; // unknown[]
// type T6 = Parameters<never>;
// > ConstructorParameter<T>
// type error = ConstructorParameters<ErrorConstructor>; // [(string | undefined)?]
// type func = ConstructorParameters<FunctionConstructor>; // string[]
// type RegEx = ConstructorParameters<RegExpConstructor>; // [string, (string | undefined)?]

// interface inter1 {
//   new (args: string): Function;
// }
// type interType = ConstructorParameters<inter1>; // [string]

// function f1(a: interType) {
//   a[0];
//   a[1]; // Tuple type '[args: string]' of length '1' has no element at index '1'.
// }
// > ReturnType<T>
// declare function f1(): { a: number; b: string };

// type t1 = ReturnType<() => string>; //string
// type t2 = ReturnType<(s: string) => void>; // void
// type t3 = ReturnType<<T>() => T>; // {}
// type t4 = ReturnType<<T extends U, U extends number[]>() => T>; // number[]
// type t5 = ReturnType<typeof f1>; // {a:number, b:string}
// > Required<T>
// interface Props {
//   a?: number;
//   b?: string;
// }

// const obj: Props = { a: 5 };
// const obj2: Required<Props> = { a: 5 }; // Property 'b' is missing in type '{ a: number; }' but required in type
