// while
let teaVolume = 200;

console.log("Вы налили себе" + teaVolume + "мл чая");

while (teaVolume > 0) {
  teaVolume -= 10;
  console.log("В чашке осталось" + teaVolume + "мл чая");
}

console.log("Вы выпили весь чай");

// do-while
/*
В пистолете 5 патрон 
Вероятность выстрела в игре русская рулетка 20%
*/
do {
  console.log("Нажимаем на курок");
} while (Math.random() > 0.2);

console.log("Похоже вам не повезло");
