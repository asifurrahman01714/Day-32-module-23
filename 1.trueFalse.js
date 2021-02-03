//In javascript 0 means false and 
const age = 0;
if (age) {
    console.log('condition is true');
} else {
    console.log('condition is false');
}


//1<= means true
const age1 = 1;
if (age1) {
    console.log('condition is true');
} else {
    console.log('condition is false');
}

//1<= means true
const age2 = 4;
if (age2) {
    console.log('condition is true');
} else {
    console.log('condition is false');
}

// Falsy string: only empty string
const age3 = "";
if (age3) {
    console.log('condition is true');
} else {
    console.log('condition is false');
}


// truly string: 1." ", 2."asif"
const age4 = " ";
if (age4 && age4.length && age4.length >= 1) {
    console.log('condition is true');
} else {
    console.log('condition is false');
}

// undefined
let name;
console.log(name);

//null
let name1 = null;
console.log(name1);
if (name1) {
    console.log('condition is true');
} else {
    console.log('condition is false');
}

//NaN is false
let name2 = NaN;
console.log(name2);
if (name2) {
    console.log('condition is true');
} else {
    console.log('condition is false');
}


//
let name4 = 0;
if (name4 || name4 == 0) {
    console.log('condition is true');
} else {
    console.log('condition is false');
}
//
let name5 = [];
console.log(name5);
if (name5) {
    console.log(true);
} else {
    console.log(false);
}