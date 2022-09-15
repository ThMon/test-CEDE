import React from "react";
import "./styles/App.scss";
import Home from "./components/Home";
import Search from "./components/Search";
import Container from "./components/layout/container";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
