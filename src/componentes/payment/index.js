import React from "react";
import { Carrito } from "../Carrito"
import Swal from 'sweetalert2/dist/sweetalert2.js'




export const Payment = ({carrito, removeProducto, total}) => {

  const mostrarAlerta = () =>{
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Su compra ha sido confirmada',
      showConfirmButton: false,
      timer: 1500
    })
  }
console.log(carrito)
console.log(removeProducto)
if (carrito && carrito.length > 0) {
    return (
       <div>
        {carrito.map((producto) =>( 
           <div className='carrito__item' key={producto.id}>
             <img src={producto.image} alt=""/>
             <div>
               <h3>{producto.title}</h3>
               <p className='price'> precio por unidad: ${producto.price}   </p>
               <p className='cantidad'>Cantidad: {producto.cantidad}</p>
               <p>Total: ${producto.price * producto.cantidad}</p>
             </div>
           </div>
         ))}
         <p>Total de su compra: ${total}</p>
         <button onClick={mostrarAlerta} className='btn'>Confirmar compra</button>
         </div>)
} else {
  return <Carrito/>
};

    
} 


