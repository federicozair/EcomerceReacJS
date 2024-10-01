import React, { useContext, useState, useEffect } from 'react';
import { DataContext } from "../../context/DataProvider";
import { useParams } from "react-router-dom";

export const ProductoDetalle = () => {
  const value = useContext(DataContext);
  const [productos] = value.productos;
  const [detalle, setDetalle] = useState(null);
  const params = useParams();

  useEffect(() => {
    const productoEncontrado = productos.find(producto => producto.id === parseInt(params.id));
    if (productoEncontrado) {
      setDetalle(productoEncontrado);
    }
  }, [params.id, productos]);

  if (!detalle) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="detalles">
      <h2>{detalle.title}</h2>
      <p className="price">${detalle.price}</p>
      <div className="grid">
        <p className="nuevo">Nuevo</p>
        <div className="size">
          <select placeholder="Tamaño">
            <option value="1">1</option>
            <option value="1">2</option>
            <option value="1">3</option>
            <option value="1">4</option>
            <option value="1">5</option>
            <option value="1">6</option>
            <option value="1">7</option>
            <option value="1">8</option>
            <option value="1">9</option>
          </select>
          <p>Tamaño</p>
        </div>
      </div>
      <button>Añadir al carrito</button>
      
      <div className="img-description">
        <img src={detalle.image} alt={detalle.title} />
        <div className="description">
          <p>Descripción del producto:</p>
          <p>loremasdas asdasdas</p>
        </div>
      </div>
    </div>
  );
};
