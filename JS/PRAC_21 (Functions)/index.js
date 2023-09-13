// объявление функции с названием functionName
function functionName() {
  // тело функции
  console.log("Вызвана функция");
}

// вызов функции
functionName();

// присваиваем функцию переменной, название после function можно опустить
let functionAsVariable = function () {
  // тело функции
  console.log("Вызвана функция из переменной");
};

// используем название переменной
functionAsVariable();
