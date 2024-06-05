import {cardComponent} from "../components/cardComponent.js";
import {products} from "../data/products.js";

let render = document.querySelector("#card-area");

// products
//     .filter((product) => product?.category?.name === "Shoes")

//     .map(
//     (product) => {
//         render.innerHTML += cardComponent(product);
//     }
// )

const BASE_URL = "http://127.0.0.1:5500/data/products.json";
fetch(BASE_URL).then((res) => res.json())
.then((data) => {
    data.map((product) => {
        render.innerHTML += cardComponent(product);
    })
})