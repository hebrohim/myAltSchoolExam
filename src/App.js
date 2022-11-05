import "./App.css";
import Header from "./components/Header";
import Button from "./components/Button";
import Footer from "./components/Footer";
import About from "./components/About";
import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div class="container ">
      <Routes>
        <Route path="/" element={<App />}/>

        <Route path="/About" element={<About />}  />
      </Routes>
     
      <nav>
        <Header />
        <Link to="/">
          <Button content="Home" />
        </Link>
        <Link to="/about">
          <Button content="About Me" />
        </Link>
        <Link>
          <Button content="My projects" />
        </Link>

        <Link>
          <Button content="Contact Me" />
        </Link>
      </nav>
      
      <Footer />
     
    </div>
  );
}

export default App;
