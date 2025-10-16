import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="home-title">Bienvenido a la Pokédex React</h1>
      <p className="home-subtitle">
        Explorá tus Pokémon favoritos, descubrí sus estadísticas y aprendé más sobre ellos.
      </p>

      <div className="pokeball-container">
        <div className="pokeball"></div>
      </div>

      {/* BOTÓN ANIMADO */}
      <button className="btn-ver" onClick={() => navigate("/list")}>
        Ver Pokémons
      </button>

      <p className="home-footer-text">
        Proyecto final desarrollado por <strong>Santiago Torres</strong>.
      </p>
    </div>
  );
}

export default Home;
