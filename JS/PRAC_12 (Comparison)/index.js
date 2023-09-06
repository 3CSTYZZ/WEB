let x = 10;
let y = 20;

console.log(x === y); // false
console.log(x === 10); // true

console.log(x !== y); // true
console.log(y !== 20); // false

console.log(x > y); // false
console.log(x < y); // true

let test = 2e6;
console.log(test);

// practice
/*
Вычисляем расстояние между двумя точками.
Даны координаты х, у 2-х точек. Нужно вывести расстояние между ними.
Вычисляем по теореме Пифагора.
*/

let x1 = 10;
let y1 = 2;

let x2 = -3;
let y2 = 3;

let cathetus1 = Math.abs(x1 - x2);
let cathetus2 = Math.abs(y1 - y2);

console.log(Math.sqrt(Math.pow(cathetus1, 2) + Math.pow(cathetus2, 2)));

/*
Сравниваем 2 дробных числа с указанной точностью.
Даны 2 числа и кол-во знаков после запятой, которое необходимо учитывать.
Вывести информацию, равны ли эти числа, больше ли первое число или меньше второго.
*/

let first = 0.1 + 0.3 + 0.033;
let second = 0.33334;
let precision = 3;

let firstNormalized = Math.round(first * Math.pow(10, precision));
let secondNormalized = Math.round(second * Math.pow(10, precision));

console.log("Исходные числа равны", first === second); //false
console.log("Числа равны", firstNormalized === secondNormalized); //true
console.log("Первое число больше", firstNormalized > secondNormalized);
console.log("Первое число меньше", firstNormalized < secondNormalized);

/*
Генератор случайных целых чисел между n и m.
Учесть, что n необязательно меньше, чем m!
*/

let n = -100;
let m = 350;

let range = Math.abs(m - n);
let numberInRange = Math.round(Math.random() * range);
let min = Math.min(n, m);

console.log(min + numberInRange);

/*
Выводим отдельную целую и дробную части числа с точностью n.
*/

let precision1 = 3;
let number = 0x12f + 0.3 + 0.1;

console.log("Исходное число", number);

console.log("Целая часть", Math.floor(number));

console.log(
  "Дробная часть",
  Math.round((number % 1) * Math.pow(10, precision1))
);
