let myNum: number = 3;
let myString: string;
let myBoolean: boolean;
let myAny: any;
let myUnknown: unknown; //requires type casting

var val: null = null;
var val2: undefined = undefined;
var nums: number[] = [1, 2, 3];
var obj: [string, number] = ["Richard", 74 ] // tuple
var obj2: object = { name: "Richard", age: 74 };

myString = "hello";
myAny = "you";

// accepts two number & returns void
function z(num1: number, num2: number): void { 
    console.log("hello");
}

// Custom types (types you create)
//  Types are often placed in a separate file where exported
//  and imported where needed.
//  ? after a property means optional

//  Animal is a custom  

type Animal = {
    name: String;
    age: number;
    colors: string[] | string;
    legs?: number;
}

// nested types
type Farm = {
    animals: Animal[]
    animalNamesToObjects: {
        [name: string]: Animal
    }
}
// combining types

const printAnimal = (animal: Animal) => {
    console.log(animal.name, animal.age)
    const xy = (animal.legs !== undefined ? animal.legs : 0) + 2
}

const dog: Animal= {
    name: "rex",
    age: 3,
    colors: ["black", "white"],
};

// accepts two number & returns void
function zy(num1: number, num2: number): void { 
    console.log("Hello World");
}
// accepts two number & returns number
function zz(num1: number, num2: number): number { 
    return num1 + num2;
}


