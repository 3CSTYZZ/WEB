const array = [];

array.push("in the end");
array.unshift("in the start");

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// метод удаляет из массива первый элемент и сразу же возвращает его
const first = numbers.shift();
console.log(first); // 0
console.log(numbers); // 1, 2, 3...

// и похожий метод, которой удаляет и возвраещает послений элемент массива
const last = numbers.pop();
console.log(last); // 9
console.log(numbers); // 1, 2, 3, 4, 5, 6, 7, 8

while (numbers.length) {
  // на каждой итерации цикла массив "худеет" на один элемент
  console.log(`Another one bites the dust: ${numbers.pop()}`);
}

const middle = numbers.splice(4, 2);
console.log(middle); // 4, 5
console.log(numbers); // 0, 1, 2, 3, 6, 7...

numbers.splice(4, 0, 4, 5);
console.log(numbers); // 1, 2, 3, 4, 5, 6...

const numbersReversed = numbers.reverse();
console.log(numbersReversed); // reversed

numbersReversed.sort(); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
numbersReversed.push(10, 11);
numbersReversed.sort(); // [0, 1, 10, 11, 2, 3, 4, 5...]

numbersReversed.sort((a, b) => a - b); // 0, 1, 2, 3.., 11

numbers.slice(); // полная копия массива
numbers.slice(3); // копия от элемента с индексом 3 и до конца (3, 4.., 9)
numbers.slice(-5); // копия 5-ти последних элементов (5, 6.., 9)
numbers.slice(3, 5); // копия от индекса 3 до индекса 5, последний не включается (3, 4)
numbers.slice(2, -2); // копия от индекса 2 до пред-последнего элемента (2-7)

numbers.includes(100); // false
numbers.includes(8); // true
numbers.indexOf(100); // -1
numbers.indexOf(0); // 0
numbers.lastIndexOf(0); // 10, индекс последнего значения 0 в массиве

const students = [
  { name: "Vasiliy", age: 18 },
  { name: "Gennadiy", age: 23 },
  { name: "Andrew", age: 17 },
  { name: "Timofey", age: 29 },
  { name: "Innokentiy", age: 17 },
];

students.includes({ name: "Vasiliy", age: 18 }); // false, так как это не тот Василий

students.find((student) => student.name === "Vasiliy" && student.age === 18); // stud obj {}

students.findIndex(
  (student) => student.name === "Vasiliy" && student.age === 18
); // index 0

students.every((student) => student.age < 30); // true, все студенты младше 30

students.some((student) => student.age < 18); // true, есть несовершеннолетние

// только несовершеннолетние студенты
const kids = students.filter((student) => student.age < 18);
/* 
[
  {name: 'Andrew', age: 17},
  {name: 'Innokentiy', age: 17},
]
*/

// все кроме Андреев
const notAndrew = students.filter((student) => student.name !== "Andrew");
/* 
[
  { name: "Vasiliy", age: 18 },
  { name: "Gennadiy", age: 23 },
  { name: "Timofey", age: 29 },
  { name: "Innokentiy", age: 17 },
]
*/

students.map((student) => student.name); // Vasiliy, Gennadiy...

// товары в корзине
const cartItems = [
  { name: "Гречка, 500гр", price: 50, quantity: 3 },
  { name: "Сок яблочный", price: 100, quantity: 1 },
  { name: "Перфоратор", price: 8000, quantity: 2 },
];

// посчитаем сумму к оплате
cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

students.forEach((student, index) => {
  console.log(`Student №${index + 1}: ${student.name}`);
});
