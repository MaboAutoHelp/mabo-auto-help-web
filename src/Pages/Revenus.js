import React, { useState, useEffect } from 'react';
import Axios from "axios";

function Revenus() {
  const [Revenus, setRevenus] = useState([]);
  const [admins, setAdmins] = useState({}); // لتخزين أسماء الإدارات
  const [totalRevenu, setTotalRevenu] = useState(0); // لتخزين مجموع الإيرادات

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await Axios.get("http://localhost:8000/Revenus/getAllRevenus");
        setRevenus(response.data);

        // حساب المجموع من response.data
        const total = response.data.reduce((acc, item) => acc + item.Revenu, 0);
        setTotalRevenu(total);

        // Fetch admin names
        const adminNames = {};
        for (const item of response.data) {
          if (item.IDadmin && !adminNames[item.IDadmin]) {
            const adminResponse = await Axios.get(`http://localhost:8000/Ziza/getZizaRevenus/${item.IDadmin}`);
            adminNames[item.IDadmin] = adminResponse.data.name; // Assuming admin name is stored in "name" field
          }
        }
        setAdmins(adminNames);
        
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserData();

  }, []);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Revenus Page - Total: {totalRevenu}</h1>
      
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Revenue</th>
            <th>Date</th>
            <th>Admin</th>
          </tr>
        </thead>
        <tbody>
          {Revenus.length > 0 ? (
            Revenus.map((item) => (
              <tr key={item._id}>
                <td>{item.username}</td>
                <td>{item.Revenu}</td>
                <td>{new Date(item.date).toLocaleDateString()}</td>
                <td>{admins[item.IDadmin] || "Loading..."}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">No Revenue data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Revenus;
