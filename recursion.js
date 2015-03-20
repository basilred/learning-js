function isEven(number) {
    if (number < 0) return;
    if (number === 0) {
        return true;
    } else if (number === 1) {
        return false;
    } else {
        return isEven(number - 2);
    }
}

console.log(isEven(42));    //true
console.log(isEven(13));    //false
console.log(isEven(-3));    //undefined
