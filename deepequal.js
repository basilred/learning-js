function deepEqual(obj1, obj2) {
    if (typeof obj1 == typeof obj2 == "object") {
        // сравнение двух однотипных величин, объектов

        var propObj1Count = propObj2Count = 0;

        for (var prop in obj1)
            propObj1Count += 1;

        for (var prop in obj2) {
            propObj2Count += 1;
            if (obj1[prop] === obj2[prop]) return true;
        }

    } else if (typeof obj1 == typeof obj2) {
        // сравнение двух однотипных величин, но не объектов
        return (obj1 === obj2) ? true : false;
    } else
        return false;
}

var obj = {here: {is: "an"}, object: 2};
// console.log(deepEqual(obj, obj));
// // → true
// console.log(deepEqual(obj, {here: 1, object: 2}));
// // → false
// console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// // → true

console.log(deepEqual("Boobs","Boobs"));
