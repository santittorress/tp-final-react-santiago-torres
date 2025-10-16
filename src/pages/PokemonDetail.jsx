import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function PokemonDetail() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data))
      .catch((error) => console.error("Error al obtener el detalle:", error));
  }, [id]);

  if (!pokemon) return <p style={{ textAlign: "center" }}>Cargando detalles...</p>;

  const mainImage = pokemon.sprites.other["official-artwork"].front_default;

  return (
    <div className="detalle">
      <h1 className="detalle__titulo">{pokemon.name.toUpperCase()}</h1>
      <div className="detalle__contenido">
        <img
          src={mainImage}
          alt={pokemon.name}
          className="detalle__imagen"
        />
        <div className="detalle__info">
          <p><strong>Altura:</strong> {pokemon.height}</p>
          <p><strong>Peso:</strong> {pokemon.weight}</p>
          <p><strong>Tipos:</strong> {pokemon.types.map((t) => t.type.name).join(", ")}</p>
          <p><strong>Habilidades:</strong> {pokemon.abilities.map((a) => a.ability.name).join(", ")}</p>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetail;

