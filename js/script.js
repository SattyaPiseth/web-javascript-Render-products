import {cardComponent} from "../components/cardComponent.js";
import {products} from "../data/products.js";

let render = document.querySelector("#card-area");

products.map(
    (product) => {
        render.innerHTML += cardComponent(product);
    }
)