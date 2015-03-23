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

function nth(list, n) {
    if (!list)
        return undefined;
    else if (n == 0)
        return list.value;
    else
        return nth(list.rest, n - 1);
}

var array = [1,2,3, "four", "five", "six", 777];

console.log(arrayToList(array));
console.log(listToArray(arrayToList(array)));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList(array), 5));
