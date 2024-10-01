import React from "react";
import { Header } from "./Components/Header";
import 'boxicons';
import { BrowserRouter as Router } from "react-router-dom";
import { Pages } from "./Components/pages.js"; 
import { DataProvider } from "./context/DataProvider.js";
import { Carrito } from "./Components/Carrito/Index.js";



function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Header />
          <Carrito />
          <Pages />
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
