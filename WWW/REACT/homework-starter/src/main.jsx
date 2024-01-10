// imports
import ReactDOM from "react-dom/client";
import { products } from "./products";
import { ProductList } from "./ProductList/ProductList";
import "./main.css";

// root
const reactRoot = ReactDOM.createRoot(document.getElementById("root"));

// refresh data
reactRoot.render(<ProductList products={products} />);