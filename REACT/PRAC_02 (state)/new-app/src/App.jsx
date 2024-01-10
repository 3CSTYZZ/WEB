import { SearchList } from "./SearchList";
import "./App.css";
import { Form } from "./Form";
import { FocusOnInput } from "./FocusOnInput";
import { Timer } from "./Timer";

const list = [
  {
    id: 1,
    title: "Him",
  },
  {
    id: 2,
    title: "Her",
  },
];

function App() {
  return (
    <>
      <SearchList list={list} />
      <Form />
      <FocusOnInput />
      <Timer />
    </>
  );
}

export default App;
