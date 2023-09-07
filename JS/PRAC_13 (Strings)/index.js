// способы записи строк
let singleQuote = "Строка в одиночных кавычках";
let singleDouble = "Строка в двойных кавычках";
let tickQuote = `Строка в обратных кавычках`;

// многострочные тексты
let multiline1 = "Строка\nс переносом";
let multiline2 = `Строка
с переносами`;

let str1 = "Первая строка";
let str2 = "Вторая строка";

let contact = str1 + "\n" + str2; // первая строка\nвторая строка

let tickContact = `${str1}
${str2}`; // первая строка\nвторая строка

let greetings = "Привет";
let nameIt = "Тимофей";
console.log(`${greetings}, ${nameIt}! Добро пожаловать`); // Привет, Тимофей! Добро пожаловать
