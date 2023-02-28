function extra(a, b){
    console.log(total);
    const sum = a + b;
    if(a> 3){
        const total = sum + a + b;
        return total;
    }
    else{
        var total = sum - (a + b);
        return total;
        
    }
}

const result = extra(5, 5);
console.log(result);