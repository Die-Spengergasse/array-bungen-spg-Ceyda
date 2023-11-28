
//index of
const names = ['Franz', 'Hans', 'Lili', 'Peter'];
const FranzIndex = names.indexOf('Franz');
console.log(FranzIndex);

//push/unshift
let array1 = [1, 2, 3, 4, 5];
array1.push(5);
console.log(array1); 

//pop/shift
let array2 = [1, 2, 3, 4, 5];
array2.pop();
console.log(array2);

//includes
let array3 = [1, 2, 3, 4, 5];
const hasTwo = array3.includes(2);
console.log(hasTwo); 

//slice
let array4 = [1, 2, 3, 4, 5];
const newArray = array4.slice(1, 4);
console.log(newArray); 

//splice
let array5 = [1, 2, 3, 4, 5];
array.splice(3, 2, 'c', 'a');
console.log(array5); 

//of
const newArray6 = Array.of(1, 2, 3, 4, 5);
console.log(newArray6);

//in
let obj = { a: 1, b: 2, c: 3, d:4, e:5};
for (let key in obj) {
  console.log(key, obj[key]);
}

//map
let array8 = ['world', 'there', 'you'];
const newArray8 = array8.map(w => `Hello ${w}`);
console.log(newArray8); 

//filter
let array9 = [1, 2, 3, 4, 5];
const newArray9 = array9.filter(element => element > 5);
console.log(newArray9); 

//split
let str = 'Hello World';
const newArray10 = str.split(' ');
console.log(newArray10);

//join
let array11 = ['Hello', 'World'];
const newStr = array11.join(', ');
console.log(newStr); 

//some
let array12 = [1, 2, 3, 4, 5];
const hasOdd = array12.some(element => element % 2 !== 0);
console.log(hasOdd); 

//reverse
let array13 = [1, 2, 3, 4, 5];
array13.reverse();
console.log(array13); 

//reduce
let array14 = [1, 2, 3, 4, 5];
const sum = array14.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); 

//Spread Operator
let array15 = [1, 2, 3, 4, 5];
let a = [...array15];
console.log(a); 