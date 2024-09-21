import React, { useEffect, useState } from 'react';
import Axios from 'axios';

function Main() {
  const [ziza, setZiza] = useState(null);

  useEffect(() => {
    const token = window.localStorage.getItem("token");
  
    if (token) {
      Axios.get("http://localhost:8000/Ziza/getZiza", {
        headers: {
          Authorization: `Bearer ${token}` 
        }
      })
      .then(response => {
        setZiza(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    }
  }, []);
  

  return (
    <div>
      <h1>Main Page</h1>
      {ziza ? (
        <p>Welcome, {ziza.name}!</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Main;
