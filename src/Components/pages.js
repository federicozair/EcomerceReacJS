import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Inicio } from "./Inicio";
import { Productoslista } from "./Productos/index";
import { ProductoDetalle } from './Productos/ProductoDetalle';

export const Pages = () => {
  return (
      <section>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<Productoslista />} />
          <Route path="/producto/:id" element={<ProductoDetalle/>} />
        </Routes>
      </section>
  );
}
