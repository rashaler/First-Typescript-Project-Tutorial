// let is scoped to the immediate enclosing block {}
let myNum: number = 3;
let myString: string;
let myBoolean: boolean;
let myAny: any;
let myUnknown: unknown; //requires type casting

// var is scoped to the immediate function body (function f() {}
var val: null = null;
var val2: undefined = undefined;
var nums: number[] = [1, 2, 3];
var obj: [string, number] = ["Richard", 74]; // tuple
var obj2: object = { name: "Richard", age: 74 };

// myString will only take a string value
myString = "hello";
// myAny will take and type value
myAny = "you";

// Custom types (types you create)
//  Types are often placed in a separate file where exported
//  and imported where needed.
//  ? after a property means optional

//  Animal is a custom type
type Animal = {
  name: String;
  age: number;
  colors: string[] | string;
  legs?: number;
};

// nested types
type Farm = {
  animals: Animal[];
  animalNamesToObjects: {
    [name: string]: Animal;
  };
};

type Monkey = {
  diet: string;
} & Animal;

const m: Monkey = {
  diet: "food",
  name: "little monkey",
  age: 3,
  colors: ["brown", "red"],
};

console.log(m);

const s1 = new Set<number>();
// or
const s2: Set<number> = new Set();

type Fish = {
  name: string;
  swim: () => void;
} & Animal;

type Dog = {
  name: string;
  bark: () => void;
};

const printName = (animal: Dog | Fish) => {
  console.log(animal.name);
};

const f: Fish = {
  name: "goldfish",
  age: 5,
  colors: ["gold"],
  swim: () => {},
};

printName(f);

// interfaces
interface AnimalInterface {
  name: string;
}

const printNameWithInterace = (animal: Animal) => {
  console.log(animal.name);
};

printNameWithInterace(f);

// combining types
const printAnimal = (animal: Animal) => {
  console.log(animal.name, animal.age);
  const xy = (animal.legs !== undefined ? animal.legs : 0) + 2;
};

const dog: Animal = {
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

// another example of interface
type CarKeys = "mercedes" | "mercedes_sedan" | "mercedes_hatch";

interface ICar {
  color: string;
  model: number;
}

const carType: Record<CarKeys, ICar> = {
  mercedes: { color: "red", model:1 },
  mercedes_sedan: { color: "yellow", model: 2 },
  mercedes_hatch: { color: "black", model: 88 },
}; // carType cannot be created with wrong key or value type

console.log(carType);

// or

type CarKeys2 = "mercedes" | "mercedes_sedan" | "mercedes_hatch";

interface ICar2 {
  color: string;
}

const KEY_MAP: { [P in CarKeys2]: P } = {
  mercedes: "mercedes",
  mercedes_sedan: "mercedes_sedan",
  mercedes_hatch: "mercedes_hatch",
};

const carType2: Record<CarKeys2, ICar2> = {
  [KEY_MAP.mercedes]: { color: "green" },
  [KEY_MAP.mercedes_sedan]: { color: "orange" },
  [KEY_MAP.mercedes_hatch]: { color: "yellow" },
}; // no issues

console.log(carType2);
