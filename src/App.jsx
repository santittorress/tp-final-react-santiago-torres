import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import PokemonList from "./pages/PokemonList";
import PokemonDetail from "./pages/PokemonDetail";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<PokemonList />} />
        <Route path="/pokemon/:id" element={<PokemonDetail />} />
        <Route path="/about" element={<About />} /> {/* ✅ AGREGADA */}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;


