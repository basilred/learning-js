function arrayToList(array) {
    var list = {};
    var previous = { value: array[array.length-1], rest: null };
    for (var i = array.length - 2; i >= 0; i--) {
        list = { value: array[i], rest: previous };
        previous = list;
    }
    return list;
}

function listToArray(list) {
    var array = [];
    for (var node = list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
}

function prepend(value, list) {
    return { value: value, rest: list };
}


console.log(arrayToList([1,2,3, "four", "five", "six", 777]));

console.log(listToArray(arrayToList([1,2,3, "four", "five", "six", 777])));

console.log(prepend(10, prepend(20, null)));
