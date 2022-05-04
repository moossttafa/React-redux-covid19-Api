import React from 'react'; 
import {
  BrowserRouter as Router,
  Routes,
  Route, 
} from "react-router-dom";
import './App.css';
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
  </Router> 
    </div>
  );
}

export default App;
