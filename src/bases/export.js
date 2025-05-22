import productos from "../data/productos";
export const getproductoById = (id) => productos.find((productos) => productos.id === id);
export const getproductoByNombre = (nombre) => productos.find((productos) => productos.nombre === nombre);
