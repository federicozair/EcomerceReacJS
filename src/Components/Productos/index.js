import React, {useContext} from 'react';
import { DataContext } from "../../context/DataProvider"
import { ProductoItem } from './productoitem';

export const Productoslista = () => {

  const value = useContext(DataContext)
  const [productos] = value.productos 


  return (
   <>
      <h1 className="titulo">Productos</h1>
      <div className="productos">
        {
          productos.map(producto =>(
            <ProductoItem 
            key={producto.id}
            id={producto.id}
            title={producto.title}
            price={producto.price}
            image={producto.image}
            category={producto.category}
            cantidad={producto.cantidad}
            />
          ))}
      </div>
      </>
  );
}
