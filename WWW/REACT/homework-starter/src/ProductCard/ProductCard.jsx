// card's stucture
import "./ProductCard.css";

export const ProductCard = ({ title, price, discount, imageUrl }) => {
  return (
    <div className="card__wrapper">
      <img className="card__img" src={imageUrl} />
      {discount ? (
        <>
          <span className="card__discount">{discount}</span>
          <span className="card__price">{price}</span>
        </>
      ) : (
        <span className="card__price--only">{price}</span>
      )}
      <p className="card__title">{title}</p>
    </div>
  );
};
