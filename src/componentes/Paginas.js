import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Inicio from './Inicio';
import {ProductoLista} from './Productos/index';
import {ProductosDetalles} from './Productos/ProductoDetalles';



export const Paginas = () => {
  return (
    <section>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/productos' exact element={<ProductoLista/>}/>
        <Route path='/producto/:id' exact element={<ProductosDetalles/>} />
      </Routes>
    </section>
  )
}

export default Paginas




