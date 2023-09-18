let name = "Максим";
let surname = "Алексеев";
let middle = "Алексеевич";

let me = {
  name: name,
  surname,
  middleName: middle,
  birthDate: { year: 1998, month: 8, day: 31 },
  occupation: "Ученик",
  married: false,
  // undefined в качестве примера
  "property with spaces": null,
  "property.with.dots": undefined,
};

// добавляем новое свойство объекта
me.education = "МГУУ ПМ";

// изменяем существующее свойство объекта
me.occupation = "Работаю";

// те же действия со строками
me["property with spaces"] = 42;
me["property.with.dots"] = 42;

// удаляем свойство из объекта
delete me.education;
delete me["property with spaces"];

// получеаем значения свойства
let myName = me.name;
let birthYear = me.birthYear.year;
let fourtyTwo = me["property with spaces"];

// пустой объект
let emptyObj = {};

// функции в объекте
function printObjectProperty(obj, propName) {
  console.log(obj[propName]);
}

// снова используем объект me
// let me = {...}

printObjectProperty(me, "name"); // Максим
printObjectProperty(me, "middleName"); // Алексеевич
