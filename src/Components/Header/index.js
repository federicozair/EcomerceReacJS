import React, { useContext } from 'react';
import Logo from "../../Assets/Logo.png";
import { Link } from 'react-router-dom';
import { DataContext } from "../../context/DataProvider";

export const Header = () => {

  const value = useContext(DataContext);
  const [menu, setMenu] = value?.menu || [false, () => {}];  // Validación si value es undefined
  const [carrito] = value?.carrito || [[]];  // Validación si carrito es undefined, valor por defecto []

  const toogleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header>
      <Link to="#"> 
        <div className="logo">
          <img src={Logo} alt="logo" width="150" />
        </div>
      </Link>
      <ul>
        <li>
          <Link to="/"> INICIO </Link>
        </li>
        <li>
          <Link to="/productos"> PRODUCTOS </Link>
        </li>
      </ul>
      <div className="cart" onClick={toogleMenu}>
        <box-icon name="cart"></box-icon>
        <span className='item_total'>{carrito.length}</span>  {/* Asegurando que carrito esté definido */}
      </div>
    </header>
  );
};
