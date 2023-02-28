// System one to find truthy or falsy
let x = ' ';

if(x){
    console.log('This is Truthy')
}
else{
    console.log('This is Falsy')
};

// System two to find truthy or falsy
let z = null;

if(!z){
    console.log('This is falsy');
}
else{
    console.log('This is Truthy');
};

if(!!z){
    console.log('Truthy');
}
else{
    console.log('Falsy');
};