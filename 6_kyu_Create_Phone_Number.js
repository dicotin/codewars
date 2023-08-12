function createPhoneNumber(numbers){
    let result = '';
    for(let i = 0;i<numbers.length;i++){
        if(i === 0) result = result.concat('(')
        if(i === 3) result = result.concat(') ')
        if(i === 6) result = result.concat('-')
        result = result.concat(numbers[i]);
    }
    return result;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));