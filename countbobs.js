function countChar(str, char) {
    console.log("Finding %s char at %s string…", char, str);
    var totalChar = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === char) totalChar += 1;
    }
    console.log("\'%s\' character found %d times.", char, totalChar);
    return totalChar;
}

countChar("Boobs", "o");
