//
const numbers = [2,3,4,5];
const square = [];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const squareNumbers = element * element;
    square.push(squareNumbers);
    
}
console.log(square);

// with map
const numbers1 = [2,3,4,5];

/* function square1(element) {
    return element * element;
} 
numbers1.map(square1); */

/* 
    const square = element => element * element;
    const square = x => x*x;

*/

numbers1.map(function (element ,index, array) {
    console.log(element , index, array);
})

//
const numbers2 = [2,3,4,5]
const result = numbers2.map(function (element) {
    return element * element;
})
console.log(result);


//
const numbers3 = [2,3,4,5]
const result1 = numbers3.map(x => x*x)
console.log(result1);

//filter
const numbers4 = [2,3,4,5,6,7,8];
const biggerThan5 = numbers4.filter(x => x>5);
console.log(biggerThan5);

//finde
const numbers5 = [2,3,4,5,7,8,89];
const isThere = numbers5.find(x => x>5);
console.log(isThere);