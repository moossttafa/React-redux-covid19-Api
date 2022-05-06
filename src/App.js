import React from 'react'; 
import {
  BrowserRouter as Router,
  Routes,
  Route, 
} from "react-router-dom";
import './App.css';
import About from './components/About/About';
import Copy from './components/Copy/Copy';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
    <Router>
    <Header />
    <Routes>
      <Route path="/" exact element={<Home />} />    
    </Routes>
    <Footer />
    <Copy />
  </Router> 
    </div>
  );
}

export default App;
