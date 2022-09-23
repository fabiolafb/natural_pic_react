import Context from "../Context";
import { useContext } from "react";

export default function Favoritos() {
  const { fotografias, setFotografias } = useContext(Context);

  const borrarFavorita = (id) => {
    const fotografiaIndex = fotografias.findIndex((f) => f.id === id);
    fotografias[fotografiaIndex].favorito = !fotografias[fotografiaIndex].favorito;
    setFotografias([...fotografias]);
  };

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <h4> Presiona sobre la imagen para eliminar de favoritas</h4>
      <div className="p-3 galeria grid-columns-4">
        {fotografias
          .filter((elem) => elem.favorito)
          .map((elem, id) => (
            <img
              src={elem.src}
              alt=""
              onClick={() => borrarFavorita(elem.id)}
              key={id}
            />
          ))}
      </div>
    </div>
  );
}
