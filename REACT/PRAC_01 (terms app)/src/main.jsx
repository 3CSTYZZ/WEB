import "./index.css";
import { createRoot } from "react-dom/client";
import { TermList } from "./TermList";

// localStorage
function saveTermList() {
  localStorage.setItem("termList", JSON.stringify(terms));
}

function restoreTermList() {
  const rawTermList = localStorage.getItem("termList");

  if (!rawTermList) {
    return [];
  }

  return JSON.parse(rawTermList);
}

// array of termins
let terms = [];
terms = restoreTermList();

// descr list init
const descriptionList = document.getElementById("description-list");
const reactRoot = createRoot(descriptionList);

// render function
function syncTermList() {
  saveTermList(terms);
  reactRoot.render(<TermList terms={terms} onDelete={deleteTerm} />);
}

// add to list
function addTerm(title, description) {
  terms.push({
    // id: crypto.randomUUID(),
    id: Date.now(),
    title,
    description,
  });

  terms.sort((termA, termB) => (termA.title < termB.title ? -1 : 1));

  syncTermList();
}

// delete from list
function deleteTerm(id) {
  terms = terms.filter((term) => term.id !== id);

  syncTermList();
}

syncTermList();

// form
const form = document.getElementById("add-description");
form.addEventListener("submit", (event) => {
  // Отменяем поведение по умолчанию
  event.preventDefault();

  // Получаем значения полей формы
  const title = form.elements["title"].value;
  const description = form.elements["description"].value;

  // Сбрасываем форму
  form.reset();

  addTerm(title, description);
});
