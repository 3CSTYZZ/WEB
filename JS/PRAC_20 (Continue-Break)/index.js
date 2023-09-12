// continue
// колода
let cards = ["2", "Король", "Туз", "5", "6", "Король", "Дама"];
// карты в руке
let hand = [];

for (let card of cards) {
  if (card !== "Король" && card !== "Туз") continue;
  hand.push(card);
  console.log("Карта " + card + " добавлена в руку");
}

console.log("Карты в руке", hand);

// break
// колода
let cardsNew = ["2", "Король", "Туз", "5", "Дама", "6", "Король"];
console.log("Ищем даму в колоде...");

let found = false;

for (let cardNew of cards) {
  console.log(`Из колоды вытянута карта ${cardNew}`);
  if (cardNew === "Дама") {
    found = true;
    break;
  }
}

console.log(found ? "Мы нашли даму!" : "В колоде нет дам :(");

//for or while
let i;

console.log("Цикл for");

for (i = 0; i < 11; i += 2) {
  console.log(i);
}

//for or while
console.log("Цикл while");

i = 0;

while (true) {
  if (i > 10) break;
  console.log(i);
  i += 2;
}
