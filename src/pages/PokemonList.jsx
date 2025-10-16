import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then((res) => res.json())
      .then(async (data) => {
        const detailedPokemons = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            const details = await res.json();
            return {
              id: details.id,
              name: details.name,
              image: details.sprites.front_default,
            };
          })
        );
        setPokemons(detailedPokemons);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener pokemons:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando pokemons...</p>;

  return (
  <div>
    <h1>Listado de Pokemons</h1>
    <div className="listado">
      {pokemons.map((pokemon) => (
        <div
          key={pokemon.id}
          className="card"
          onClick={() => navigate(`/pokemon/${pokemon.id}`)}
        >
          <img src={pokemon.image} alt={pokemon.name} />
          <p>{pokemon.name}</p>
        </div>
      ))}
    </div>
  </div>
);
}

export default PokemonList;
