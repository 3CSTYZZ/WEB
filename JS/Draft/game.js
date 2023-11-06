// функция создания массива чисел
function createNumbersArray(count) {
  // создаём пустой массив для чисел
  const array = [];

  // цикл позволяет добавлять в массив по два одинаоквых числа
  for (let i = 1; i <= count; i++) {
      array.push(i);
      array.push(i);
  }
  // возвращает массив с числами
  return array;
}

// функция перемешивания массива
function shuffle(arr) {
  // перемешивание массива
  arr.sort(() => Math.random() - 0.5);
  // возвращает перемешанный массив чисел
  return arr;
}

// функция создания контейнера со всеми нужными элементами без игрового поля
function createContainer() {
  // создаю нужные элементы для игры: контейнер, заголовок, общий блок для ввода числа и кнопки, поле для ввода чисел, кнопка
  const container = document.createElement('div');
  const header = document.createElement('h1');
  const inputBtnWrapper = document.createElement('div');
  const input = document.createElement('input');
  const button = document.createElement('button');

  // создаю классы для элементов, наполняю их контентом и правилами
  container.classList.add('container');
  header.classList.add('title');
  header.textContent = 'Игра в пары';
  inputBtnWrapper.classList.add('wrapper');
  input.classList.add('input');
  input.placeholder = 'Введите количество карточек для игры';
  input.setAttribute("type", "number");
  button.classList.add('btn', 'btn-primary');
  button.textContent = 'Начать игру';

  // задаю стили для заголовка
  header.style.margin = '0';
  header.style.fontSize = '50px';

  // задаю стили для контейнера
  container.style.position = 'relative';
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.alignItems = 'center';
  container.style.margin = '20px auto 10px';
  container.style.maxWidth = '1400px';
  container.style.gap = '20px';
  container.style.textAlign = 'center';

  // задаю стили для общего блока для ввода чисел и кнопки
  inputBtnWrapper.style.display = 'flex';
  inputBtnWrapper.style.flexDirection = 'column';

  // задаю стили для поля для ввода
  input.style.width = '300px';

  // добавляю поле для ввода и кнопку в общий блок
  inputBtnWrapper.append(input);
  inputBtnWrapper.append(button);
  // добавляю заголовок и общий блок с полем и кнопкой 
  container.append(header);
  container.append(inputBtnWrapper);

  // возвращает контейнер, поле для ввода и кнопку
  return {
      container,
      input,
      button,
  };
}

// функция создания игрового поля
function createPlayTable(count) {
  // нахожу контейнер по классу и добавляю в него игровое поле
  const table = document.querySelector('.container');
  const playTable = document.createElement('div');
  // задаю по умолчанию количество пропусков между блоками на одной строке
  let offsets = 3;

  // создаю класс для игрового поля
  playTable.classList.add('play-table');

  // задаю стили для игрового поля
  playTable.style.display = 'flex';
  playTable.style.flexWrap = 'wrap';
  playTable.style.justifyContent = 'center';
  playTable.style.width = '1300px';
  playTable.style.gap = '5px';

  // данные условия позволяют задавать количество пропусков между блоками на одной строке, 
  // учитывая количество карточек для игры. Позволяет расположить все карточки в диапазоне
  // от 16 до 64 на 4 строчках игрового поля
  if (count > 16 && count <= 20) {
      offsets = 4;
  } else if (count > 20 && count <= 24) {
      offsets = 5;
  } else if (count > 24 && count <= 28) {
      offsets = 6;
  } else if (count > 28 && count <= 32) {
      offsets = 7;
  } else if (count > 32 && count <= 38) {
      offsets = 8;
  } else if (count > 36 && count <= 40) {
      offsets = 9;
  } else if (count > 40 && count <= 44) {
      offsets = 10;
  } else if (count > 44 && count <= 48) {
      offsets = 11;
  } else if (count > 48 && count <= 52) {
      offsets = 12;
  } else if (count > 52 && count <= 56) {
      offsets = 13;
  } else if (count > 56 && count <= 60) {
      offsets = 14;
  } else if (count > 60 && count <= 64) {
      offsets = 15;
  }

  // приравниваем новый созданный массив к перемешанному массиву чисел
  const arrayNumbers = shuffle(createNumbersArray(count / 2));

  // данный цикл позволяет создать кнопки, являющиеся карточками на игровом поле
  for (let i = 0; i < count; i++) {
      // создаю кнопку
      const button = document.createElement('button');
      // задаю стили для кнопки
      button.style.width = `calc((100% - (${offsets * 5}px)) / ${offsets + 1})`;
      button.style.height = '150px';
      button.style.fontSize = '0';
      button.style.outline = '1px solid black';
      button.style.cursor = 'pointer';
      // контент кнопки приравниваю элементу из нового массива, который был приравнён перемешанному массиву чисел
      button.textContent = arrayNumbers[i];

      // добавляю кнопку в игровое поле
      playTable.append(button)
  }

  // добавляю игровое поле в контейнер
  table.append(playTable)
}

// функция запуска игры
function gameLaunch (time) {
  // создаю массив со всеми кнопками на сайте
  const buttons = document.querySelectorAll('button');
  // создаю временный массив для манипуляций данными
  let tempMemory = [];
  //создаю счётчик для правильных ответов
  let correctAnswerCount = 0;
  // Задаю цикл для того, чтобы обработать событие нажатия всех кнопок на игровом поле
  for (let i = 1; i < buttons.length; i++) {
      buttons[i].addEventListener('click', () => {
          // задаю условие, которое позволит либо скрыть, либо показать контент нажатой кнопки
          if (getComputedStyle(buttons[i]).fontSize === '0px') {
              buttons[i].style.fontSize = '24px';
          } else {
              buttons[i].style.fontSize = '0';
          }
          // добавляю во временную память контент кнопки и саму кнопку
          tempMemory.push(buttons[i].textContent);
          tempMemory.push(buttons[i]);
          // данное условие поможет узнать нажаты ли уже две кнопки на игровом поле
          if (tempMemory.length === 4) {
              // данное условие позволяет проверить равны ли контенты двух нажатых кнопок
              if (tempMemory[0] === tempMemory[2]) {
                  // блокирую правильно нажатые кнопки, чтобы пользователь не смог нажать на них второй раз
                  tempMemory[1].disabled = true;
                  tempMemory[3].disabled = true;
                  // обнуляю временный массив для манипуляций
                  tempMemory = [];
                  // прибавляю единицу к счётчику приавильных ответов
                  correctAnswerCount++;
                  // условие позволяет понять равно ли количество правильных ответов пользователя количеству пар на игровом поле
                  if (correctAnswerCount === (buttons.length - 1) / 2) {
                      // нахожу главный контейнер по классу и добавляю туда новую кнопку, которая позволит перезапустить игру
                      const table = document.querySelector('.container');
                      const newButton = document.createElement('button');
                      newButton.classList.add('resetButton');
                      newButton.textContent = 'Сыграть ещё раз';
                      table.append(newButton);
                      // останавливаю время, поскольку игра завершена
                      clearInterval(time);
                      // создаю обработчик нажатия на кнопку для перезапуска игры
                      newButton.addEventListener('click', () => {
                          // данный цикл позволяет скрыть контент со всех кнопок на игровом поле
                          for (let i = 1; i < buttons.length; i++) {
                              buttons[i].style.fontSize = '0';
                          }
                          // удаляю кнопку перезапуска игру
                          const deleteButton = document.querySelector('.resetButton');
                          const parentButton = deleteButton.parentNode;
                          parentButton.removeChild(deleteButton);
                          // удаляю таймер
                          const timerBlock = document.querySelector('.timer');
                          const parentTimer = timerBlock.parentNode;
                          parentTimer.removeChild(timerBlock);
                          // удаляю предыдущее игровое поле для создания нового в дальнейшем
                          const playTable = document.querySelector('.play-table');
                          const parentTable = playTable.parentNode;
                          parentTable.removeChild(playTable)
                          // создаю новое игровое поле 4Х4 (по умолчанию)
                          createPlayTable(16);
                          // вызываю по новой данную функцию для запуска игры заново
                          gameLaunch()
                      });
                  }
              // если контенты нажатых кнопок не равны, то контент первой нажатой кнопки скрывается, 
              // а контент второй кнопки остаётся во временном массиве для дальнейших манипуляций
              } else {
                  tempMemory[1].style.fontSize = '0';
                  tempMemory = [tempMemory[2], tempMemory[3]];
              }
          }
      });
  }
}

// функция запуска таймера
function startTimer() {
  // нахожу главный контейнер
  const table = document.querySelector('.container');
  // создаю массив со всеми кнопками
  const buttons = document.querySelectorAll('button');
  // создаю блок для таймера
  const timerBlock = document.createElement('div');
  // создаю таймер
  let timer = null;

  // создаю класс для блока таймера
  timerBlock.classList.add('timer');

  // задаю стили для блока таймера
  timerBlock.style.position = 'absolute';
  timerBlock.style.left = '100px';
  timerBlock.style.top = '20px';
  timerBlock.style.fontSize = '100px';

  // добавляю блок таймера в контейнер
  table.append(timerBlock);

  // функция для работы таймера
  function sec() {
      // данное условие позволяет уменьшать контент блока таймера на единицу, если его контент больше нуля,
      // в противном же случае останавливает таймер
      if (timerBlock.textContent > 0) {
          timerBlock.textContent = timerBlock.textContent - 1;
      } else {
          clearInterval(timer);
          // выдаёт сообщению пользователю об остановке таймера
          alert('К сожалению, из-за нехватки времени вы проиграли:(');
          // данный цикл позволяет скрыть контент со всех кнопок на игровом поле
          for (let i = 1; i < buttons.length; i++) {
              buttons[i].style.fontSize = '0';
          }
          // удаляю блок таймера
          const parentTimer = timerBlock.parentNode;
          parentTimer.removeChild(timerBlock);
          // удаляю предыдущее игровое поле для создания нового в дальнейшем
          const playTable = document.querySelector('.play-table');
          const parentTable = playTable.parentNode;
          parentTable.removeChild(playTable)
          // создаю новое игровое поле 4Х4 (по умолчанию)
          createPlayTable(16);
          // вызываю функцию для запуска игры заново
          gameLaunch();
      }
  }
  // останавливаю время
  clearInterval(timer);
  // задаю таймеру контент 60 для запуска таймера 
  timerBlock.textContent = 60;
  // создаю таймер с интервалом в одну секунду
  timer = setInterval(sec, 1000);
  // возвращает таймер
  return timer;
}

document.addEventListener('DOMContentLoaded', () => {
  // создаю контейнер и приравниваю к переменной вызовом функции
  const table = createContainer();
  // создаю переменную с указанием количества карточек по умолчанию (16)
  let numberOfCards = 16;
  // создаю переменную для дальнейших манипуляций над таймером
  let resetTheTime = 0;

  // данное условие позволяет выключить кнопку запуска игры, если в поле для ввода пусто
  if (!table.input.value) {
      table.button.disabled = true;
  }

  // создаю обработчик ввода в поле чисел
  table.input.addEventListener('input', () => {
      // данное условие позволяет включить кнопку запуска игры, если в поле для ввода есть контент
      if (table.input.value) {
          table.button.disabled = false;
      }
  });

  // добавляю на сайт главный контейнер
  document.body.append(table.container);

  // создаю обработчик нажатия на кнопку для запуска игры
  table.button.addEventListener('click', () => {
      // выключаю кнопку после её нажатия
      table.button.disabled = true;
      // передаю занчение поля для ввода переменной для указания количества карточек на игровом поле
      numberOfCards = table.input.value;
      // обнуляю поле для ввода
      table.input.value = '';
      // данное условие позволяет удалить блок таймера, если он был запущен не первый раз
      if (resetTheTime !== 0) {
          const timerBlock = document.querySelector('.timer');
          const parentTimer = timerBlock.parentNode;
          parentTimer.removeChild(timerBlock);
      }
      // данное условие позволяет выдать польозвателю сообщение о том, что он ввёл неверное значение
      if (numberOfCards < 16 || numberOfCards > 64) {
          resetTheTime = 0;
          alert('Введите число от 16 до 64');
      // данное условие позволяет выдать польозвателю сообщение о том, что он ввёл неверное значение
      } else if (numberOfCards % 2 !== 0) {
          resetTheTime = 0;
          alert('Введите чётное число');
      } else {
          resetTheTime++;
          // запускаю таймер
          const time = startTimer();
          // удаляю предыдущее игровое поле для создания нового в дальнейшем
          const playTable = document.querySelector('.play-table');
          const parentTable = playTable.parentNode;
          parentTable.removeChild(playTable)
          // создаю игровое поле с количество карточек указанной в переменной
          createPlayTable(numberOfCards);
          // вызываю функцию для запуска игры заново и передаю ей таймер
          gameLaunch(time);
      }
  });
  // создаю новое игровое поле 4Х4 (по умолчанию)
  createPlayTable(numberOfCards);
  // вызываю функцию для запуска игры
  gameLaunch();
});