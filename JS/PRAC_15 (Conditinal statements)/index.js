// if
if (condition) {
  // код с условием
}

if (condition) {
  // код с условием
} else {
  // код в обратном варианте
}

if (condition1) {
  // при первом условии
} else if (condition2) {
  // при втором условии
} else if (condition3) {
  // при третьем условии
} else {
  // если ни одно условие не соблюдено
}

// switch
let fruit = "Яблоко";

switch (fruit) {
  case "Яблоко":
    console.log("Перед нам яблоко");
    break;
  case "Банан":
    console.log("Перед нам банан");
    break;
  case "Арбуз":
  case "Вишня":
  case "Клубника":
    console.log("Это ягода, а не фрукт");
    break;
  default:
    console.log("Не знаю этого фрукта");
}
