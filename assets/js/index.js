//import {productos} from "./data.js"
import { Carrito } from "./script.js"
import { Producto } from "./producto.js"
import { renderList } from "./utils.js";

const carrito = new Carrito();
//console.log(carrito)

/*
const producto1 = new Producto(
    1,
    "valija", 
    20500, 
    true);

const producto2 = new Producto (
    2,
    "carry on", 
    15000, 
    true);

const producto3 = new Producto (
    3,
    "handbag",
    9000, 
    true);

const producto4 = new Producto (
    4, 
    "mochila", 
    7500, 
    true);

carrito.agregarItem(producto1)
carrito.agregarItem(producto2)
carrito.agregarItem(producto3)
*/

console.log(carrito)
const productos = carrito;
renderList('productos-lista', productos)