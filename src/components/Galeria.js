import "../assets/css/galeria.css";
//import Heart from "./Heart";
import Context from "../Context";
import { useContext } from "react";

export default function Galeria() {
  const { fotografias, setFotografias } = useContext(Context);

  const fotoFavorita = (id) => {
    const fotografiaIndex = fotografias.findIndex((f) => f.id === id);
    fotografias[fotografiaIndex].favorito =
      !fotografias[fotografiaIndex].favorito;
    setFotografias([...fotografias]);
  };

  return (
    <div className="galeria grid-columns-5 p-3" id="contenedor_galeria">
      {fotografias.map((elem, id) => (
        <div className="foto" key={id}>
          <img className="hover" src={elem.src} ></img>
          <p className="descripcion"> {elem.description} </p>
          <svg
              onClick={() => fotoFavorita(elem.id)}
              width="38px"
              viewBox="0 0 24 24"
              className="hover"
            >
              <path
                fill={elem.favorito ? "red" : "white"}
                d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
              />
            </svg>
            
        </div>
      ))}
    </div>
  );
}
