import "./App.css";
import Header from "./components/Header";
import Button from "./components/Button";
import Footer from "./components/Footer";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Project from "./components/Projects";
import Search from "./components/Search";
import List from "./components/List";
import { Routes, Route, Link } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
function App() {
  return (
    <div className="container ">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="project" element={<Project />}>
          <Route path="search" element={<Search />} />
          <Route path="list" element={<List />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <nav>
        <Header />
        <Link to="/">
          <Button content="Home" />
        </Link>
        <Link to="/about">
          <Button content="About Me" />
        </Link>
        <Link to="/project">
          <Button content="My projects" />
        </Link>

        <Link to="/contact">
          <Button content="Contact Me" />
        </Link>
      </nav>

      <Footer />
    </div>
  );
}

export default App;
