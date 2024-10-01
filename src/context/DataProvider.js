import React, { useEffect, createContext, useState } from "react"; 
import Data from "../Data.js"; 

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [productos, setProductos] = useState([]); 
    const [menu, setMenu] = useState(false);
    const [carrito, setCarrito] = useState([]); 

    useEffect(() => {
        const producto = Data.items;
        if (producto) {
            setProductos(producto);
        } else {
            setProductos([]);
        }
    }, []);

    useEffect(() => {
        const dataCarrito = JSON.parse(localStorage.getItem("dataCarrito")); 
        console.log("Carrito cargado desde localStorage:", dataCarrito); // Debug
        if (dataCarrito) {
            setCarrito(dataCarrito);
        }
    }, []);

    useEffect(() => {
        console.log("Carrito guardado en localStorage:", carrito); // Debug
        localStorage.setItem("dataCarrito", JSON.stringify(carrito));
    }, [carrito]);

    const addCarrito = (id) => {
        const check = carrito.every(item => {
            return item.id !== id;
        });
        if (check) {
            const data = productos.filter(producto => {
                return producto.id === id;
            });
            setCarrito([...carrito, ...data]);
        } else {
            alert("El producto ya ha sido añadido");
        }
    };

    const value = {
        productos: [productos], 
        menu: [menu, setMenu],
        addCarrito: addCarrito,
        carrito: [carrito, setCarrito]
    };

    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    );
};
