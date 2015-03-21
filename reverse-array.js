function reverseArray(arr) {
    var res = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        res.push(arr[i]);
    }
    return res;
}

function reverseArrayInPlace(arr) {
    for (var i=0; i < Math.floor(arr.length / 2); i++) {
        var tmp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = tmp;
    }
    return arr;
}

console.log(reverseArray(["A", "B", "C"]));

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
