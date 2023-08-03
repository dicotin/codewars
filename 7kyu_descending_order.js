function descendingOrder(n){
    let str = new String(n);
    let arr = str.split('');
    arr.sort((a,b)=>b-a);
    return Number(new String(arr).replaceAll(',',''));
}
console.log(typeof descendingOrder(42145))
console.log(descendingOrder(145263))
console.log(descendingOrder(123456789))