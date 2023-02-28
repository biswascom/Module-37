function stopwatch(num, num2){
    let multi = 0;
    let number = 5;
    return function(){
        multi = num * num2 * number;
        return multi;
    }
};

const result = stopwatch(5, 4);
console.log(result());