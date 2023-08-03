function highAndLow(numbers){
    let split = numbers.split(' ');

    return Math.max(...split) + ' ' + Math.min(...split);
}