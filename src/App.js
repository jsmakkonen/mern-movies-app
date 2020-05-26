import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ListMovies from './components/ListMovies';
import AddMovie from './components/AddMovie';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Route path="/" exact component={ListMovies} />
        <Route path="/create" component={AddMovie} />
      </div>
    </Router>
  );
}

export default App;
