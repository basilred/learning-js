function* quips(name) {
    yield "привет, " + name + "!";
    yield "я надеюсь, вам нравятся статьи";
    if (name.startsWith("X")) {
        yield "Как круто, что ваше имя начинается с Х, " + name;
    }
    yield "Увидимся!";
}

var iter = quips("Heisenberg");
console.log(typeof iter);
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
