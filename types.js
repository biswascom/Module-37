let a = 4;
let b = a;
b = 7;
console.log(a, b);

let student1 = { name: 'akash', age: 33 };
let student2 = student1;
student2.name = 'batas';
student1.job = 'bankar';
student2.isMarried = false;
student2 = { name: 'Tom Cruise', age: 40 };
student2.age = 50;

console.log(student1, student2);

let array1 = [22, 32, 11];
let array2 = array1;
array1.push(99);
array2.pop();
array2 = [99, 55, 88, 77];
console.log(array1, array2);

let arr = [1, 2, 3, 4, 5];
console.log(arr);
// const new1 = arr.slice(1, 3);
// console.log(new1);
arr.splice(1, 3);
console.log(arr);

console.log(typeof arr);
console.log(Array.isArray(arr));
console.log(Array.isArray(student1));