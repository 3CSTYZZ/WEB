const students = [
  { name: "Vasiliy", age: 18 },
  { name: "Gennadiy", age: 23 },
  { name: "Andrew", age: 17 },
  { name: "Timofey", age: 29 },
  { name: "Innokentiy", age: 17 },
];

students.forEach((student) => {
  console.log(student.name, student.age);
});

const newStudents = students.map((newbies) => {
  return `${newbies.age} ${newbies.name}`;
});

const adults = students.filter((el) => el.age >= 18);

const sumUp = students.reduce((sum, el) => (sum += el.age), 0);

const bartender = students.find((person) => person.name === "Andrew");

const bartenderIndex = students.findIndex((person) => person.name === "Andrew");

const idols = students
  .filter((student) => student.age >= 18 && student.age <= 27)
  .map((newObj) => {
    return {
      info: `${newObj.name} is ${newObj.age} old`,
    };
  });

let starsArr = ["Max", "Anya", "Kreed", "BD"];
starsArr.splice(1, 0, 'BBC');

const newTest = starsArr.slice(0, 1)

const collapse = starsArr.concat('Paul', 'Samu')

let digits = [0, 1, 20, 3, 22, 13]
digits.sort((first, second) => first - second)

let str = 'Max,Anya,Kreed,BD'
const strArr = str.split(',')

const arrStr = starsArr.join(' ')
console.log(arrStr)



