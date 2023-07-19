// Typescript: Typescript is a superset of JavaScript that compiles to plain JavaScript. It adds optional static typing and class-based object-oriented programming to the language.

// 1. Define a strict type for a variable.
// 2. Use the same type throughout the code.

let message = 'Hello World'; // we cannot change the type of message variable to number or boolean.

// 3. Typescript compiler will throw an error if we try to assign a different type to the variable.
// message = 23; // Type '23' is not assignable to type 'string'.
// message = true; // Type 'true' is not assignable to type 'string'.

let age = 18;
// age = '18'; // Type '"18"' is not assignable to type 'number'.

let ageWithTypes: number = 18; // we can define the type of variable while declaring it.

ageWithTypes = 23;

let isUpdated: boolean = true;

// And also we can use multiple types for a variable.
let multiType: number | boolean;
multiType = 23;
multiType = true;

// Array
let hobbies = ['Cricket', 'Football', 'Basketball'];
// hobbies.push(12); // Argument of type 'number' is not assignable to parameter of type 'string'.

let hobbiesWithTypes: string[];
hobbiesWithTypes = ['Cricket', 'Football', 'Basketball'];
// hobbiesWithTypes.push(12); // Argument of type 'number' is not assignable to parameter of type 'string'.

let mixedArray: (string | number)[];
mixedArray = ['Cricket', 12, 'Football', 23, 'Basketball', 34];

// Objects
let person = {
    name: 'John',
    age: 23,
    isAdmin: true,
};

// person.age = "eighteen"; // Type '"eighteen"' is not assignable to type 'number'.

// person.phone = 1234567890;
// Property 'phone' does not exist on type '{ name: string; age: number; isAdmin: boolean; }'.

let personWithTypes: {
    name: string;
    age: number;
    isAdmin: boolean;
};

personWithTypes = {
    name: 'John',
    age: 23,
    isAdmin: true,
};

// we cannot add a new property to the object. or we cannot left any property.

let personWithTypes2: {
    name: string;
    age: number;
    isAdmin: boolean;
    phone?: number;
    // ? means optional property. we can add or left this property. but if we add this property then it should be a number. otherwise it will throw an error.
};

personWithTypes2 = {
    name: 'John',
    age: 23,
    isAdmin: true,
    phone: 1234567890,
};

// ANY : any type is used to assign any type of value to a variable.

let anyType; // Variable 'anyType' implicitly has an 'any' type, but a better type may be inferred from usage.
anyType = 23;
anyType = '23';
anyType = true;
anyType = ['Cricket', 12, 'Football', 23, 'Basketball', 34];
anyType = {
    name: 'John',
    age: 23,
    isAdmin: true,
};

// Functions

function greet() {
    console.log("Hii");
}

let greet2 = () => {
    console.log("Hii...");
}

let funRetrunString = (): string => {
    return "Hello";
}

let funRetrunNumber = (): number => {
    return 23;
}

let multiple = (a: number, b: number) => {
    return a * b;
}

let multiple2 = (a: number, b: number): number => {
    return a * b;
}

// Function with optional parameter
let multiple3 = (a: number, b?: number): number => {
    if (b) {
        return a * b;
    }
    return a;
}

// Function with default parameter
let multiple4 = (a: number, b: number = 1): number => {
    return a * b;
}

// Function with rest parameter
let multiple6 = (a: number, ...args: number[]): number => {
    return args.reduce((a, b) => a * b);
}

// Function with object parameter
let multiple5 = (obj: { a: number, b: number }): number => {
    return obj.a * obj.b;
}

// TYPE ALIAS
// Type aliases are used to create a new name for a type. Type aliases are sometimes similar to interfaces, but can name primitives, unions, tuples, and any other types that you’d otherwise have to write by hand.

type StringOrNumber = string | number;

type User = {
    name: string;
    age: number;
    isAdmin: boolean;
    phone?: number;
};

let user: User = {
    name: 'John',
    age: 23,
    isAdmin: true,
    phone: 1234567890,
};

let betterUser = (user: User) => {
    return `Hello ${user.name}`;
}

type myFunc = (a: number, b: string) => void;

let write: myFunc = (num, srt) => {
    console.log(num + "times" + srt);
}

type user2 = {
    name: string;
    age: number;
    isAdmin: boolean;
    phone?: number;
    theme: "Dark" | "Light"; // Literal Type
}

let user3: user2 = {
    name: 'John',
    age: 23,
    isAdmin: true,
    phone: 1234567890,
    theme: "Dark" // we cannot assign any other value to theme property. 
};


// UNION TYPE
// Union types are used to combine multiple types into one type. Union types are denoted using the pipe character (|) between the types.

let unionType: string | number;
unionType = 23;
unionType = '23';
// unionType = true; // Type 'true' is not assignable to type 'string | number'.

// INTERSECTION TYPE
// Intersection types are closely related to union types, but they are used very differently. An intersection type combines multiple types into one. This allows you to add together existing types to get a single type that has all the features you need.

type FirstType = {
    name: string;
    age: number;
};

type SecondType = {
    name: string;
    isAdmin: boolean;
};

type CombinedType = FirstType & SecondType;

let combinedType: CombinedType = {
    name: 'John',
    age: 23,
    isAdmin: true,
};

// TYPE GUARDS
// Type guards and type assertions are ways to tell the compiler “trust me, I know what I’m doing.” A type guard is some expression that performs a runtime check that guarantees the type in some scope.

let typeGuard: string | number;
typeGuard = 23;
typeGuard = '23';

if (typeof typeGuard === 'string') {
    console.log(typeGuard.toUpperCase());
} else {
    console.log(typeGuard);
}

// TYPE INFERENCE
// Type inference is a TypeScript feature that provides static typing based on the variable values. TypeScript infers types when there is no explicit information available in the form of type annotations.

let typeInference = 23; // Type '23' is not assignable to type 'string'.
// typeInference = '23'; // Type '"23"' is not assignable to type 'number'.

// TYPE ASSERTIONS
// Sometimes you’ll end up in a situation where you’ll know more about a value than TypeScript does. Usually this will happen when you know the type of some entity could be more specific than its current type.

let typeAssertion: any = '23';
let typeAssertion2 = typeAssertion.toUpperCase();

// NON-NULL ASSERTION OPERATOR
// The ! non-null assertion operator removes null and undefined from the type, so that you can access the property of an object without checking for undefined or null.

let nonNullAssertion: string | null;
nonNullAssertion = '23';
nonNullAssertion = null;

let nonNullAssertion2 = nonNullAssertion!.toUpperCase();
// ! non-null assertion operator removes null and undefined from the type.

// LITERAL TYPE
// A literal is a more concrete sub-type of a collective type. What this means is that "Hello World" is a string, but a string is not "Hello World" inside the type system.

let literalType: 'Hello World';
literalType = 'Hello World';
// literalType = 'Hello'; // Type '"Hello"' is not assignable to type '"Hello World"'.

let literalType2: 'Hello' | 'World';
literalType2 = 'Hello';
literalType2 = 'World';
// literalType2 = 'Hello World'; // Type '"Hello World"' is not assignable to type '"Hello" | "World"'.

// ENUM
// An enum is a way of giving more friendly names to sets of numeric values.

enum Color {
    Red,
    Green,
    Blue,
}

let color: Color = Color.Green;
console.log(color); // 1

enum Color2 {
    Red = 5,
    Green,
    Blue,
}

let color2: Color2 = Color2.Green;
console.log(color2); // 6

enum Color3 {
    Red = 5,
    Green = 10,
    Blue = 15,
}

let color3: Color3 = Color3.Green;
console.log(color3); // 10

enum Color4 {
    Red = 'Red',
    Green = 'Green',
    Blue = 'Blue',
}

let color4: Color4 = Color4.Green;
console.log(color4); // Green

// TYPE CASTING

let typeCasting: any = '23';
let typeCasting2 = (<string>typeCasting).toUpperCase();
let typeCasting3 = (typeCasting as string).toUpperCase();

// NULLABLE TYPES
// In TypeScript, by default null and undefined are assignable to all types. This can be quite annoying as it allows bugs to sneak into your codebase. Luckily, TypeScript 2.0 allows you to turn this behavior off.

let nullableType: string | null;
nullableType = '23';
nullableType = null;

// nullableType = undefined; // Type 'undefined' is not assignable to type 'string | null'.

// INTERFACE
// An interface is a syntactical contract that an entity should conform to. In other words, an interface defines the syntax that any entity must adhere to.

interface IUser {
    name: string;
    age: number;
    email: string;
}

interface IEmployee extends IUser {
    employeeId: number;
}

const employee: IEmployee = {
    name: 'John',
    age: 23,
    email: 'john@emp.com',
    employeeId: 123,
};

const client: IUser = {
    name: 'John',
    age: 23,
    email: 'client@fuck.com'
}

// GENERICS

interface IAuthor {
    authId: number;
    authName: string;
}

interface ICategory {
    catId: number;
    title: string;
}

interface IPost {
    postId: number;
    title: string;
    desc: string;
    extra: IAuthor[] | ICategory[];
    // If any post have more than one author and categories then..
}

// What if we need anything else to add in future, but don't know now what will we add. So we can't come and change interfaces each time, here generic comes

interface IPostBetter<T> {
    postId: number;
    title: string;
    desc: string;
    extra: T[];
}

const testGeneric: IPostBetter<string> = {
    postId: 1,
    title: 'Post Title',
    desc: 'Post Description',
    extra: ["Str1", 'str2'],
}

interface IPostEvenBetter<T extends object> {
    postId: number;
    title: string;
    desc: string;
    extra: T[];
}

// const testGeneric2: IPostEvenBetter<string> = { // Type 'string' does not satisfy the constraint 'object'.
const testGeneric2: IPostEvenBetter<{id: number, name: string}> = {
    postId: 1,
    title: 'Post Title',
    desc: 'Post Description',
    extra: [{id: 1, name: 'John'}],
}
const testGeneric3: IPostEvenBetter<IAuthor> = {
    postId: 1,
    title: 'Post Title',
    desc: 'Post Description',
    extra: [{authId: 1, authName: 'John'}],
}