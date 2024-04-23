// cara compile typescript ke javascript "tsc nama-file.ts"

let jual: number = 123_456_789;
let belajar: string = 'TypeScript';
let keluar: boolean = true;

let level;
function render(document: any) {
    console.log(document);
}

// Array
let numbers: number[] = [1, 2, 3];
numbers.forEach(n => n)

// tuples
let user: [number, string] = [1, 'Mosh'];
user.push(1);

// enums
const kecil = 1;
const medium = 2;
const large = 3;

//pascalCase
enum Size {Kecil = 1, Medium, Large};
let mySize: Size = Size.Medium;
console.log(mySize);

// functions
function hitungPajak(income: number, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}

hitungPajak(10_000);

// Object
// type aliases
type employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
    
} 
let employee: employee = {
     id: 1, 
    name: 'Faris',
    retire: (date: Date) => {
        console.log(date);
    }
    };

// union type
function kgToLbs(weight: number | string): number {
    if(typeof weight === 'number')
        return weight * 2.2;
    else 
        return parseInt(weight) * 2.2;
}

kgToLbs(10);
kgToLbs('10Kg');

// intersection types
type draggable = {
    drag: () => void
};

type resizeable = {
    resize: () => void
};

type UIWidget = draggable & resizeable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

// literal types
type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = 'cm' | 'inch';

// nullable type
function greet(name: string | null | undefined) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('hola!');
}

greet(undefined);

// optional chaining
type Customer = {
    birthday: Date
};

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : {birthday: new Date() };
}

let customer = getCustomer(1);
console.log(customer?.birthday?.getFullYear());

let log: any = null;
log?.('a');