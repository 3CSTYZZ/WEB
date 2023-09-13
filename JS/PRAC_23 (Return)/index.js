// I
function findCardIndex(cards, wantedCard = "Туз") {
  console.log("Ищем в колоде карту" + wantedCard);

  for (let index in cards) {
    let card = cards[index];
    console.log(`Из колоды вытянута карта ${card}`);
    if (card === wantedCard) {
      console.log(`Мы нушли карту ${wantedCard}`);
      return index;
    }
  }
  console.log(`В колоде нет карты ${wantedCard}`);

  return -1;
}

let myCards = ["2", "Король", "Туз", "5", "6", "Король"];

let aceIndex = findCardIndex(myCards);
let jackIndex = findCardIndex(myCards, "Валет");

console.log("aceIndex");
console.log("jackIndex");

// II
function checkAdult(age) {
  console.log(`Вам ${age} лет`);
  if (age >= 18) return;
  console.log("Школота!");
  console.log(`Потерпи ещё ${18 - age} лет до совершеннолетия`);
}

// сообщения будут выведены
checkAdult(2);

// функция перестанет выполняться после первого сообщения
checkAdult(23);
