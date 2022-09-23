import Galeria from "../components/Galeria";

export default function Home() {
  return (
    <div id="Home">
      <h1>Natural Pic</h1>

      <Galeria />
    </div>
  );
}


// const fotoFavorita = (id) => {
//   const fotoIndex = fotografias.findIndex((f) => f.id === id);
//   fotografias[fotoIndex].favorito = !fotografias[fotoIndex].favorito;
//   setFotografias([...fotografias]);
// };