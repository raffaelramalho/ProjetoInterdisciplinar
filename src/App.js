import "./App.css";

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import { Container } from "semantic-ui-react";

//Páginas
import Create from "./components/create";
import Read from "./components/read";
import Update from "./components/update";
import Home from "./components/home";
import About from "./components/about";


function App() {
  return (
    <div className="App main">
      <Navbar />
      <Container className="">
        <Routes>
          <Route path="/" element={<Read />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update" element={<Update />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          
        </Routes>
      </Container>
    </div>
  );
}
export default App;
