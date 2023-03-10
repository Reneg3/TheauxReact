import React, { useState, useEffect } from "react";
import { Carrito } from "../Carrito";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/dist/sweetalert2.css';

export const Payment = ({carrito, total}) => {

  const [mostrarAlerta, setMostrarAlerta] = useState(false);

  const reiniciarContador = () => {
    localStorage.setItem('contador', 0);
  }

  const cancelarCompra = () => {
    window.location.href = "/productos";
  }

  useEffect(() => {
    if (mostrarAlerta) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Su compra ha sido confirmada. ¡Muchas gracias!',
        showConfirmButton: false,
        timer: 1500,
        allowOutsideClick: false
      }).then(() => {
        setMostrarAlerta(false);
        reiniciarContador();
        window.location.href = "/";
      });
    }
  }, [mostrarAlerta]);

  const handleConfirmarCompra = () => {
    setMostrarAlerta(true);
  }

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
        <button 
          onClick={handleConfirmarCompra}
          className='btn'
          style={{ 
            backgroundColor: 'green', 
            color: 'white', 
            padding: '10px', 
            borderRadius: '5px',
            marginTop: '20px',
            cursor: 'pointer'
          }}
        >
          Confirmar compra
        </button>
        <button 
          onClick={cancelarCompra}
          className='btn'
          style={{ 
            backgroundColor: 'red', 
            color: 'white', 
            padding: '10px', 
            borderRadius: '5px',
            marginTop: '20px',
            marginLeft: '10px',
            cursor: 'pointer'
          }}
        >
          Cancelar compra
        </button>
      </div>
    )
  } else {
    reiniciarContador();
    return <Carrito/>
  };
};
