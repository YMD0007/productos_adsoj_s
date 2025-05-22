  import { useEffect } from "react";
    import { getproductoById } from "./bases/export";
    import { getproductoByNombre } from "./bases/export";
    import React, { useState } from "react";
    import ReactDOM from "react-dom/client";
    import "./index.css";




       
const realizarVentaAsync = (id, cantidad) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const producto = getproductoById(id);
      if (!producto) {
        reject(" Producto no encontrado.");
      } else if (producto.stock >= cantidad) {
        producto.stock -= cantidad;
        resolve(`Venta realizada: ${cantidad} unidad(es) de "${producto.nombre}". Stock restante: ${producto.stock}`);
      } else {
        reject(` Stock insuficiente. Solo hay ${producto.stock} unidad(es) de "${producto.nombre}".`);
      }
    }, 5000);
  });
};
realizarVentaAsync(3, 30)
  .then(console.table)
  .catch(console.error);



    const getProductoByIdAsync = (id) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const producto = getproductoById(id);
          if (producto) {
            resolve(producto);
          
          } else {
            reject("No se encontró el producto");
          }
        }, 5000);
      });
    }
 getProductoByIdAsync(1)
  .then((producto) => {
    console.table(producto);
  })
  .catch((error) => {
    console.table(error);
  });


    const getproductoByNombreAsync = (nombre) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const producto = getproductoByNombre(nombre);
          if (producto) {
            resolve(producto);
          
          } else {
            reject("No se encontró el producto");
          }
        }, 5000);
      });
    }





 getproductoByNombreAsync("Monitor 24 pulgadas")
  .then((producto) => {
    console.table(producto);
  })
  .catch((error) => {
    console.table(error);
  });


// const mostrarTodosAsync = () => {
//   return new Promise((resolve) => {

//     setTimeout(() => {
//         const productos = mostrarTodosAsync()
//       resolve(productos);
//     }, 1000);
//   });
// };


//   const app =()=>{

//   const [productos, setProductos] = useState([]);

//     useEffect(()=>{
//       mostrarTodosAsync().then(setProductos)
//     },[])
//   return(
//    <div className="App">
//       <h1>Productos</h1>

//       <div className="inputs">
//         <input type="text" placeholder="nombre del producto" id="nombre" />
//         <input type="number" placeholder="cantidad" id="cantidad" />
//         <input type="number" placeholder="id" id="id" />
//       </div>

//       <div className="botones">
//         <button className="boton" onClick={mostrarTodos}>
//           Mostrar Todos
//         </button>
//         <button
//           className="boton"
//           onClick={() =>
//             getproductoByNombreAsync(document.getElementById("nombre").value)
//           }
//         >
//           Producto por Nombre
//         </button>
//         <button
//           className="boton"
//           onClick={() => getProductoByIdAsync(document.getElementById("id").value)}
//         >
//           Producto por Id
//         </button>
//         <button
//           className="boton"
//           onClick={() =>
//             comprar(
//               document.getElementById("nombre").value,
//               document.getElementById("cantidad").value
//             )
//           }
//         >
//           Comprar
//         </button>
//       </div>
//       <table className="table">
//         <thead className="thead">
//           <tr>
//             <td>Id</td>
//             <td>Nombre</td>
//             <td>Precio</td>
//             <td>Stock</td>
//           </tr>
//         </thead>
//         <tbody className="tbody">
//           {productos.map((producto) => (
//             <tr key={producto.id}>
//               <td
//                 onDoubleClick={() =>
//                   (document.getElementById("id").value = producto.id)
//                 }
//               >
//                 {producto.id}
//               </td>
//               <td
//                 onDoubleClick={() =>
//                   (document.getElementById("nombre").value = producto.nombre)
//                 }
//               >
//                 {producto.nombre}
//               </td>
//               <td>{producto.precio}</td>
//               <td>{producto.stock}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>

//     )
//     }

//     ReactDOM.createRoot(document.getElementById("root")).render(<app />);
  