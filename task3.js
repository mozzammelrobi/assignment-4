function deleteInvalids(array){
    const result = [];
    if(!Array.isArray(array)){
        return "Invalid Array"
    }
    for(const number of array){
        if(typeof number === 'number' && !isNaN(number)){
            result.push(number);
        }
    }
    return result;
}

const result = deleteInvalids([1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }])
console.log(result)