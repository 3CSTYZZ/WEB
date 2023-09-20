// let cars = {
//   model: "mustang",
//   gen: "IV",
//   color: ["red with black stripes"],
// };

// for (const car of Object.entries(cars)) {
//   console.log(car)
// }

let motherBoard = {
  usbPort: 8,
  chipset: "AMD X570",
  socket: "AM3/AM4",
};

let cpu = {
  coreCount: 8,
  cpuManufacturer: "AMD",
  socket: "AM4",
};

let videoCard = {
  videoCardModel: "NVidia GeForce GTX 1060",
  videoMemory: 4096,
};

let ram = {
  ramType: "DDR4",
  ramVolume: 8192,
  ramFrequency: 3200,
};

let computer = {
  price: 100000,
  ...motherBoard,
  // св-во socket из объекта motherBoard будет заменено на такое же св-во из cpu
  ...cpu,
  ...videoCard,
  ...ram,
};

let computerWithAssign = Object.assign(
  // целевой объект, в который будут 'замешаны' следующие
  {
    price: 100000,
  },
  // объекты, 'подмешиваемые' в первый
  motherBoard,
  cpu,
  videoCard,
  ram
);

console.log(computer);
console.log(computerWithAssign);

console.log(Object.keys(computer));
console.log(Object.values(computer));
console.log(Object.entries(computer));

// ссылка
let digit = 20;
let otherDigit = digit;

// исходное значение не меняется, так как otherDigit копирует значение из digit
otherDigit += 5; // digit 20, otherDigit 25

let obj = { model: "VM Polo" };
let otherObj = obj;

// obj и otherObj ссылаются на один же объект, поэтому свойства поменяются и там, и там
otherObj.model = "Volkswagen Polo";

// если не хотим видоизменять объект
let me = {
  name: "Тимофей",
};

// подмешиваем свойства в свежесозданный пустой объект...
let newMe = Object.assign({}, me, {
  name: "Не Тимофей",
  surname: "Не Тиунов",
});

// или делаем тоже самое с помщью spread
let newMeWithSpread = { ...me, name: "Не Тимофей", surname: "Не Тиунов" };

console.log(me);
