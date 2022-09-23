import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Context from "./Context";

// components
import Navbar from "./components/Navbar";

// Views
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";

export default function App() {
  const [fotografias, setFotografias] = useState([]);
  //const galeria = { fotografias, setFotografias };

  const endpoint = "/fotos.json";
  //Función que llama a la API
  const obtenerFotos = async () => {
    const res = await fetch(endpoint);
    let dataArray = await res.json();
    let dataFiltrada = dataArray.photos.map((e) => ({
      id: e.id,
      src: e.src.tiny,
      description: e.alt,
      favorito: false,
    }));
    setFotografias(dataFiltrada);
    console.log(dataFiltrada);
  };

  //Usar el hook useEffect para ejecutar los cambios al array
  useEffect(() => {
    obtenerFotos();
  }, []);

  return (
    <div className="App">
      <Context.Provider value={{ fotografias, setFotografias }}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}
