// 'random count of titles' function
let randomizer = () => Math.round(Math.random() * 10);
let result1 = randomizer();
let result2 = randomizer();

// 'who is a winner' function
function champion() {
  if (playersArr[0].titles > playersArr[1].titles) {
    return `${playersArr[0].name} is a champion!`;
  } else {
    return `${playersArr[1].name} is a champion!`;
  }
}

// players data in array
let playersArr = [
  {
    name: "Misha",
    age: 20,
    exp: "[5 years]",
    titles: [`${result1}`],
  },
  {
    name: "Maxim",
    age: 25,
    exp: "[2 years]",
    titles: [`${result2}`],
  },
];

//cls
console.log("Here is a list of players:", playersArr);
console.log(champion());
