//carrito con lista de productos
//operación de CRUB

class Carrito {

    //si quiero empezar un carrito con ya una lista de productos:
    constructor(lista) {
        this.lista = lista;
    }

    listarItems() {
        //mostrar items del carrito 
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

