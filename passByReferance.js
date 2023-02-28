let student1 = { name: 'Ferdous', age: 22 };
const student2 = { name: 'Saint Root', age: 43 };

function show(paraOne, paraTwo) {
    paraOne.name = 'Raihan Khan';
    // paraOne = {name: 'Sakib Hossain', age: 22, job: 'Corporate'}; 
    console.log(paraOne, paraTwo);
    // return paraOne;
};

console.log(student1);

show(student1, student2);
// const newOne = show(student1, student2);
// console.log(newOne);

console.log(student1);