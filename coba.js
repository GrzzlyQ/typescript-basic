"use strict";
// cara compile typescript ke javascript "tsc nama-file.ts"
var _a;
let jual = 123456789;
let belajar = 'TypeScript';
let keluar = true;
let level;
function render(document) {
    console.log(document);
}
// Array
let numbers = [1, 2, 3];
numbers.forEach(n => n);
// tuples
let user = [1, 'Mosh'];
user.push(1);
// enums
const kecil = 1;
const medium = 2;
const large = 3;
//pascalCase
var Size;
(function (Size) {
    Size[Size["Kecil"] = 1] = "Kecil";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
let mySize = Size.Medium;
console.log(mySize);
// functions
function hitungPajak(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
hitungPajak(10000);
let employee = {
    id: 1,
    name: 'Faris',
    retire: (date) => {
        console.log(date);
    }
};
// union type
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs('10Kg');
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 100;
// nullable type
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('hola!');
}
greet(undefined);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let log = null;
log === null || log === void 0 ? void 0 : log('a');
