import { TermCard } from "./TermCard";
import "./TermList.css";

export const TermList = ({ terms, onDelete }) => {
  return (
    <ul className="term-list">
      {terms.map((el) => (
        <li className="term-list__item" key={el.id}>
          <TermCard
            title={el.title}
            descr={el.descr}
            onDelete={onDelete}
            id={el.id}
          />
        </li>
      ))}
    </ul>
  );
};
