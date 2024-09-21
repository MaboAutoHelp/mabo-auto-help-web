
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from './Pages/Home.js';
import Login from './Pages/Login.js';
import Main from './Pages/Main.js';


function App() {
  return (
    <Router>
    <Routes>
      
      
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path='/Main' element={<Main/>}/>

      
      
      
      
      
    </Routes>
  </Router>
    
  );
}

export default App;
