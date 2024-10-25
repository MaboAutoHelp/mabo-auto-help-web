import React, { useState, useEffect } from 'react';
import Axios from "axios";
import { Link } from 'react-router-dom';

function ListService() {
    const [list, setList] = useState([]);
    const [selectedVersion, setSelectedVersion] = useState('v1'); // حالة للاختيار

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await Axios.get(`http://localhost:8000/ListService/getVservice/${selectedVersion}`);
                setList(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchUserData();
    }, [selectedVersion]); // تنفيذ useEffect عند تغيير selectedVersion

    return (
        <>
            <div>
                {/* واجهة اختيار القيم */}
                <label htmlFor="version-select">اختر الخدمة:</label>
                <select
                    id="version-select"
                    value={selectedVersion}
                    onChange={(e) => setSelectedVersion(e.target.value)} // تحديث القيمة المختارة
                >
                    <option value="v1">v1</option>
                    <option value="v2">v2</option>
                    <option value="v3">v3</option>
                    <option value="v4">v4</option>
                    <option value="v5">v5</option>
                </select>
            </div>

            <table className="medecins-table">
                <thead>
                    <tr>
                        <th>serviceName</th>
                        <th>prix</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map(item => (
                        <tr key={item._id}>
                            <td>{item.serviceName}</td>
                            <td>{item.prix}</td>
                            <td>
                                <div className="d-grid gap-2 d-md-flex justify-content-md">
                                    <button className="btn btn-outline-warning">
                                        <Link to={`/List/edit/${item._id}`} className="link">
                                            <i className="bi bi-pencil-square"></i> Edit
                                        </Link>
                                    </button>
                                    <button className="btn btn-outline-danger"
                                        onClick={() => { /* التعامل مع الحذف */ }}
                                    >
                                        <i className="bi bi-trash3-fill"></i> off
                                    </button>
                                    <button className="btn btn-outline-success"
                                        onClick={() => { /* التعامل مع التفعيل */ }}
                                    >
                                        <i className="bi bi-toggle-on"></i> on
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default ListService;


/*import React, { useState, useEffect } from 'react';
import Axios from "axios";
import { Link } from 'react-router-dom';

function ListService() {
    const [list, setList] = useState([]);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                
                const response = await Axios.get("http://localhost:8000/ListService/getVservice/v2");
                setList(response.data);
            } catch (error) {
                console.log(error);
            }
        };
    
        fetchUserData();
        
    }, []);


return (
    <>
    <table className="medecins-table">
                <thead>
                    <tr>
                        <th>serviceName</th>
                        <th>prix</th>
                        
                        
                    </tr>
                </thead>
                <tbody>
                    {list.map(list => (
                        <tr key={list._id}>
                            <td>{list.serviceName}</td>
                            <td>{list.prix}</td>
                            
                            
                            
                            <td >
                                <div class="d-grid gap-2 d-md-flex justify-content-md">
                                
                                <button className="btn btn-outline-warning">
                                <Link to={`/admin/edit/${list._id}`} className="link">
                                    <i className="bi bi-pencil-square"></i> Edit
                                </Link>

                                </button>
                                <button className="btn btn-outline-danger"
                                onClick={()=>{}}
                                >
                                <i className="bi bi-trash3-fill"></i> off
                                </button>
                                <button className="btn btn-outline-success"
                                onClick={() =>{}}
                                >
                                <i className="bi bi-toggle-on"></i> on
                                </button>

                                
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
    
    
    </>
);
}

export default ListService;*/