function arrayToList(array) {
    var list = {};
    var previous = { value: array[array.length-1], rest: null };
    for (var i = array.length - 2; i >= 0; i--) {
        list = { value: array[i], rest: previous };
        previous = list;
    }
    return list;
}

console.log(arrayToList([1,2,3]));
