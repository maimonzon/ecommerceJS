//carrito con lista de productos
//operación de CRUB

class Carrito {

    //si quiero empezar un carrito con ya una lista de productos:
    constructor(lista) {
        this.lista = lista;
    }

    listarItems() {
        //mostrar items del carrito 
        return this.lista;
    }

    agregarItem (item) {
        //agregar item al carrito
    }

    encontrarItem(item) {
        //mostrar item
    }

    actualizarItem(item, nuevoItem) {
        //actualizar item a nuevoItem
    }

    eliminarItem(item) {
        //eliminar item
    }
}




class Producto {

    constructor(codigo, nombre, precio, stock) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    getNombre() {
        return this.nombre;
    }

    getPrecio() {
        return this.precio;
    }

    noStock() {
        this.stock = false;
    }
}

const producto1 = new Producto(001, "valija", 10500, true);
const producto2 = new Producto (002, "carry on", 7000, true);
const producto3 = new Producto (003, "bolso de mano", 6000, true);
const producto4 = new Producto (004, "mochila", 4500, true);



const carrito = new Carrito([producto1, producto2, producto3, producto4])


//obtener los elementos del carrito
console.log(carrito.listarItems())

const productosDiv = document.getElementById('productos')
console.log( productosDiv )

//agregar título desde JS
const title = document.createElement('h1')
title.innerText = 'Encontrá todo para tu viaje'
document.body.appendChild(title)