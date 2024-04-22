import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./component/nav";
import Home from "./pages/home";
import About from "./pages/About";
import SingleCocktail from "./pages/singleCocktail";
import Error from "./pages/error";

export default function App() {
  return (
    <main>
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cocktail/:id" element={<SingleCocktail />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </main>
  );
}
