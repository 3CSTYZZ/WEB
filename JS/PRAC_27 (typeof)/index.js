// простые
typeof 1; // number
typeof "abc"; // string
typeof false; // boolean
typeof 123n; // bigInt
typeof Symbol(); // symbol

// составные
typeof {}; // object
typeof []; // object
typeof function () {}; // function (but type is object)

// нулевые
typeof undefined; // undefined
typeof null; // object (syntax feature, but it's null)
