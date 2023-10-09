(function () {
  // создаём и возвращаем заголовок приложения
  function createAppTitle(title) {
    let appTitle = document.createElement("h2");
    appTitle.innerHTML = title;
    return appTitle;
  }

  // создаём и возвращаем форму для создание дела
  function createToDoItemForm() {
    // создаём элементы
    let form = document.createElement("form");
    let input = document.createElement("input");
    let buttonWrapper = document.createElement("div");
    let button = document.createElement("button");

    // добавляем классы и текстовый контент
    form.classList.add("input-group", "mb-3");
    input.classList.add("form-control");
    input.placeholder = "New note";
    buttonWrapper.classList.add("input-group-append");
    button.classList.add("btn", "btn-info");
    button.textContent = "Add";

    buttonWrapper.append(button);
    form.append(input);
    form.append(buttonWrapper);

    return {
      form,
      input,
      button,
    };
  }

  // создаём и возвращаем список элементов
  function createToDoList() {
    let list = document.createElement("ul");
    list.classList.add("list-group");
    return list;
  }

  // создаём группу кнопок да/нет
  function createToDoItem(name) {
    let item = document.createElement("li");
    let buttonGroup = document.createElement("div");
    let doneButton = document.createElement("button");
    let deleteButton = document.createElement("button");

    // стили для элемента списка
    item.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );
    item.textContent = name;
    buttonGroup.classList.add("btn-group", "btn-group-sm");
    doneButton.classList.add("btn", "btn-success");
    doneButton.textContent = "Done";
    deleteButton.classList.add("btn", "btn-danger");
    deleteButton.textContent = "Delete";

    // вкладываем кнопки в отдельный элемент
    buttonGroup.append(doneButton);
    buttonGroup.append(deleteButton);
    item.append(buttonGroup);

    // приложению нужен доступ к самому элементу и кнопкам, чтобы обрабатывать события нажатия
    return {
      item,
      doneButton,
      deleteButton,
    };
  }

  // единый узел
  function createToDoApp(container, title = "Reminders") {
    let toDoAppTitle = createAppTitle(title);
    let toDoItemForm = createToDoItemForm();
    let toDoList = createToDoList();

    container.append(toDoAppTitle);
    container.append(toDoItemForm.form);
    container.append(toDoList);

    toDoItemForm.form.addEventListener("submit", function (e) {
      // строчка необходима, чтобы предотвратить стандартное действие браузера - перезагрузку
      e.preventDefault();

      // игнорируем создание елемента, если юзер ничего не ввёл
      if (!toDoItemForm.input.value) {
        return;
      }

      let toDoItem = createToDoItem(toDoItemForm.input.value);

      // добавляем обработчики на кнопки
      toDoItem.doneButton.addEventListener("click", function () {
        toDoItem.item.classList.toggle("list-group-item-success");
      });
      toDoItem.deleteButton.addEventListener("click", function () {
        if (confirm("Are you sure?")) {
          toDoItem.item.remove();
        }
      });

      // создаём и добавляем новое дело
      toDoList.append(toDoItem.item);

      // обнуляем значение в поле ввода
      toDoItemForm.input.value = "";
    });
  }

  window.createToDoApp = createToDoApp;
})();
