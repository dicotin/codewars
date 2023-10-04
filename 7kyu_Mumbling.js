function accum(s) {
    let res = '';
    let str = s.split('');
    for(let i = 1; i<=str.length; i++){
        res = res.concat(str[i-1].toUpperCase());

        for (let k = i-1;k !== 0;k--){
            res = res.concat(str[i-1].toLowerCase());
        }
        res = res.concat('-');
    }
    return res.slice(0,-1)
}

function accum2(s) {
    let r = s.split('');
    r.map((x,index) => x.toUpperCase()+Array(index+1).join(x.toLowerCase())).join('-');
}

console.log(accum2("ZpglnRxqenU"));