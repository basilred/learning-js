for (var i = 1; i <= 100; i++) {
    if ( !(i % 3) && !(i % 5) ) {
        console.log(i, "FizzBuzz");
    } else if ( !(i % 3) ) {
        console.log(i, "Fizz");
    } else if ( !(i % 5) ) {
        console.log(i, "Buzz");
    }
}
