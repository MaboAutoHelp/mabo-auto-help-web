
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from './Pages/Home.js';
import Login from './Pages/Login.js';
import Main from './Pages/Main.js';

import Admin from './Pages/Admin.js';
import Revenus from './Pages/Revenus.js';
import Service from './Pages/Service.js';

import CreateAdmin from './Pages/CreateAdmin.js';
import EditAdmin from './Pages/EditAdmin.js';
import Factures from './Pages/Factures.js';

function App() {
  return (
    <Router>
    <Routes>
      
      
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path='/Main' element={<Main/>}/>

      <Route path="/Main" element={<Main />}>
          <Route path="Admin" element={<Admin />} />
          <Route path="Revenus" element={<Revenus />} />
          <Route path="Service" element={<Service />} />
        </Route>
        <Route path="/admin/create" element={<CreateAdmin />} />
        <Route path="/admin/edit/:id" element={<EditAdmin />} />
        <Route path="/factures/:id" element={<Factures />} />



      
      
      
      
      
    </Routes>
  </Router>
    
  );
}

export default App;
