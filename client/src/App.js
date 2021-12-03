import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
//import components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
//import pages
import Home from './pages/Home';
import About from "./pages/About";
import Game from './pages/Game'

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/game" element={<Game />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </div>
  );
}

export default App;
