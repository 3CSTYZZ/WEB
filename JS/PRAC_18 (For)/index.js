// for
let fibo = [];

fibo.push(1);
fibo.push(1);
fibo.push(2);
fibo.push(3);
fibo.push(5);
fibo.push(8);
fibo.push(13);

// используем for
let fibonachi = [1, 1];

for (let i = 1; i < 49; ++i) {
  fibonachi.push(fibonachi[i] + fibonachi[i - 1]);
}

// console.log(fibonachi)

/*
let i = 1;
i < 49 - 1 < 49
[1, 1, 2];
++i; i = 2;
i < 49 - 2 < 49;
[1, 1, 2, 3];
...
i < 49 - 49 < 49
*/

// for of
let fruits = ["Яблоко", "Банан", "Апельсин"];

console.log("Сегодня я съел:");

for (let fruit of fruits) {
  console.log(fruit);
}

// for in
let rating = ["Максим", "Анна", "Роман"];

console.log("Рейтинг студентов:");

for (let i in rating) {
  console.log("${parseInt(i) + 1} место: ${rating(i)}");
}
