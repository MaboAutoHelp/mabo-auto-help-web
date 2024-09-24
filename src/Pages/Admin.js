import React, { useState, useEffect } from 'react';
import Axios from "axios";
import { Link } from 'react-router-dom';

function Admin() {
  const [admin, setAdmin] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
        try {
            
            const response = await Axios.get("http://localhost:8000/admin/getAllAdmin,{}");
             setAdmin(response.data);
        } catch (error) {
            console.log(error);
        }
    };
  
    fetchUserData();
    
}, []);

const filteredadmin = admin.filter(admin =>
  admin.username.toLowerCase().includes(searchTerm.toLowerCase())
);
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <h2>admin</h2>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to={""} className="link-opacity-25-hover">
                                    <i className="bi bi-plus-square"></i> Create admin
                                </Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setSearchTerm(e.target.value)}></input>
                        </form>
                    </div>
                </div>
            </nav>

            <table className="medecins-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>password</th>
                        <th>Revenu</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {filteredadmin.map(admin => (
                        <tr key={admin._id}>
                            <td>{admin.username}</td>
                            <td>{admin.password}</td>
                            <td>{admin.Revenu}</td>
                            
                            <td>
                                <button className="btn btn-outline-success">
                                <Link to={``} className="link" >
                                    Rendez
                                 </Link>
                                 </button>
                            </td>
                            <td >
                                <div class="d-grid gap-2 d-md-flex justify-content-md">
                                
                                   <button className="btn btn-outline-warning">
                                      <Link to={``} className="link" >
                                         <i className="bi bi-pencil-square"></i> Edit
                                      </Link>
                                    </button>
                                     <button className="btn btn-outline-danger" >
                                         <i className="bi bi-trash3-fill"></i> Delete
                                     </button>
                                
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
    </div>
  );
}