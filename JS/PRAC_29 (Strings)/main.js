const str = "На ёлке ежи ёжики ещё не перевелись";

str.replace("ё", "е"); // на елке ёжики ещё не перевелись

str.split(" "); // ['на', 'ёлке', 'ёжики', 'ещё', 'не', 'перевелись']

str.split("ё").join("е"); // на елке ежики еще не перевелись

"\n\t 123 \n\t".trim(); // 123

"0123456789".substring(3); // 3456789
"0123456789".substring(3, 2); // 34
"0123456789".substring(-5); // 56789
"0123456789".substring(-5, 2); // 56

const fullName = "Maxim Alexeevich Alexeev";
const surname = "Alexeev";

const surnameIndex = fullName.indexOf(surname);

if (surnameIndex > 0) {
  console.log(
    `Surname starts with index ${surnameIndex}, replacing it to start`
  );
  console.log(surname + " " + fullName.replace(surname, "").trim());
} else {
  console.log(fullName);
}
