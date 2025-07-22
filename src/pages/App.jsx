import Navbar from "../components/Navbar.jsx";
import { Routes, Route } from "react-router";
import About from "./About.jsx";
import Recipes from "./Recipes.jsx";
import Stories from "./Stories.jsx";

function App() {
  return (

    <div className="body">
        <Navbar />
        <Routes>
          <Route path="/about" element={ <About />}/> 
          <Route path="/recipes" element={ <Recipes />}/> 
          <Route path="/stories" element={ <Stories />}/> 
        </Routes>
    </div>

);
}

export default App;
