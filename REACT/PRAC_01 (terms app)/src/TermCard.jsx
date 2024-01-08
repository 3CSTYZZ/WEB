import "./TermCard.css";

export const TermCard = ({ title, descr, onDelete, id }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="term-card">
      <h2 className="term-card__title">{title}</h2>
      {/* {descr ? <p className="term-card__description">{descr}</p> : null} */}
      {descr && <p className="term-card__description">{descr}</p>}

      <button type="button" className="term-card-del" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
