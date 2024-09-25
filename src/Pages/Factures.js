import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';

function Factures() {
  const { id } = useParams(); // الحصول على ID من الرابط
const [service, setService] = useState(null);

useEffect(() => {
    const fetchServiceData = async () => {
    try {
        const response = await Axios.get(`http://localhost:8000/Service/getServiceIDFactures/${id}`);
        setService(response.data);
    } catch (error) {
        console.error('Error fetching service details:', error);
    }
    };

    fetchServiceData();
}, [id]);

return (
    <div className="container mt-5">
    <h1>Factures Page</h1>
    {service ? (
        <div>
        <p><strong>Name:</strong> {service.name}</p>
        <p><strong>Phone:</strong> {service.teluser}</p>
        <p><strong>Service Name:</strong> {service.serviceName}</p>
        <p><strong>Date:</strong> {new Date(service.date).toLocaleDateString()}</p>
        <p><strong>Time:</strong> {service.time}</p>
        <p><strong>Car Type:</strong> {service.carType}</p>
        <p><strong>Location:</strong> {service.lieu}</p>
        <p><strong>Price:</strong> {service.prix}</p>
        </div>
    ) : (
        <p>Loading...</p>
    )}
    </div>
);
}

export default Factures;
