// list's structure
import { ProductCard } from "../ProductCard/ProductCard";
import "./ProductList.css";

export const ProductList = ({ products }) => {
  return (
    <div className="container">
      <ul className="card__list">
        {products.map((el) => (
          <li className="card__item" key={el.id}>
            <ProductCard
              id={el.id}
              title={el.title}
              discount={el.discount && el.price - el.price * el.discount + "₽"}
              price={el.price + "₽"}
              imageUrl={el.imageUrl}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
