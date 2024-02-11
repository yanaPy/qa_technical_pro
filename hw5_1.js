function isNaNmain(value) {
    return typeof value === "number" && value !== value;
}

let a = 'qwerty' / 10;

console.log(isNaNmain(a));
console.log(isNaNmain(undefined));
console.log(isNaNmain(NaN));
console.log(isNaNmain("qwee"));