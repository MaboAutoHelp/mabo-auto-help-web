import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom'; // استيراد Link

function Service() {
  const [services, setServices] = useState([]);
  const [admins, setAdmins] = useState({}); 

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await Axios.get('http://localhost:8000/Service/getAllServicesYes');
        setServices(response.data);

        const adminNames = {};
        for (const item of response.data) {
          if (item.MicanicienID && !adminNames[item.MicanicienID]) {
            const adminResponse = await Axios.get(`http://localhost:8000/admin/getAdmin/${item.MicanicienID}`);
            adminNames[item.MicanicienID] = adminResponse.data.username;
          }
        }
        setAdmins(adminNames);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="container mt-5">
      <h1>Service Page</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Service Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Car Type</th>
            <th>Location</th>
            <th>Price</th>
            <th>Name Micanicien</th>
            <th>Factures</th> {/* إضافة العمود الجديد */}
          </tr>
        </thead>
        <tbody>
          {services.length > 0 ? (
            services.map((service) => (
              <tr key={service._id}>
                <td>{service.name}</td>
                <td>{service.teluser}</td>
                <td>{service.serviceName}</td>
                <td>{new Date(service.date).toLocaleDateString()}</td>
                <td>{service.time}</td>
                <td>{service.carType}</td>
                <td>{service.lieu}</td>
                <td>{service.prix}</td>
                <td>{admins[service.MicanicienID] || "Loading..."}</td>
                <td>
                  <Link to={`/factures/${service._id}`} className="btn btn-primary">Factures</Link> {/* إضافة زر Factures */}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="10" className="text-center">No services found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Service;
