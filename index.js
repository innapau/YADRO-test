function balance(str) {
    let acc = 0;
    for (let i = 0; i < str.length; i += 1) {
        const symbol = str[i];
        acc = symbol === '(' || symbol === '{' || symbol === '[' ? acc + 1 : acc - 1;
        if (acc < 0) {
            return false;
        }
    }
    return acc === 0;
};

console.log(balance('([])'))