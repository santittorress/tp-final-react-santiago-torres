import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Pokédex React</h1>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/list">Pokémons</Link>
      </nav>
    </header>
  );
}

export default Header;
