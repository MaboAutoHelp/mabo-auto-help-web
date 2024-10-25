
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from './Pages/Home.js';
import Login from './Pages/Login.js';
import Main from './Pages/Main.js';

import Admin from './Pages/Admin.js';
import Revenus from './Pages/Revenus.js';
import Service from './Pages/Service.js';
import List from './Pages/ListService.js'

import CreateAdmin from './Pages/CreateAdmin.js';
import EditAdmin from './Pages/EditAdmin.js';
import Factures from './Pages/Factures.js';

import EditService from './Pages/EditService .js';

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
          <Route path="List" element={<List/>} />
        </Route>
        <Route path="/admin/create" element={<CreateAdmin />} />
        <Route path="/admin/edit/:id" element={<EditAdmin />} />
        <Route path="/factures/:id" element={<Factures />} />

        <Route path="/List/edit/:id" element={<EditService />} />



      
      
      
      
      
    </Routes>
  </Router>
    
  );
}

export default App;
