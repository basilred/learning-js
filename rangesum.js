/**
 * Returns array of int from begin to end.
 * @param {integer} begin - Beginning of array
 * @param {integer} end - End of array
 */
function range(begin, end, step) {
    var res = [];
    for (var i = begin; i <= end; step ? i += step : i++) {
        res.push(i);
    }
    return res;
}

function sum(array) {
    var total = 0;
    for (var i in array) {
        total += array[i];
    }
    return total;
}

console.log(sum(range(1, 10)));
console.log(range(5, 2, -1));   //FIXIT не выполняется с отрицательным шагом
