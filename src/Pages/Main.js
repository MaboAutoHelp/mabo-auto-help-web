/*import React, { useEffect, useState } from 'react';
import {  Outlet } from 'react-router-dom'
import Axios from 'axios';
import Navbarr from './Navbarr';

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
      <Navbarr />
      <Outlet />
    </div>
  );
}

export default Main;*/
import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom'; // استخدم useNavigate لإعادة التوجيه
import Axios from 'axios';
import Navbarr from './Navbarr';

function Main() {
  const [ziza, setZiza] = useState(null);
  const navigate = useNavigate(); // استخدام useNavigate

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
  
  const handleLogout = () => {
    // إزالة التوكن من localStorage
    window.localStorage.removeItem("token");
    // إعادة توجيه المستخدم إلى صفحة تسجيل الدخول
    navigate('/login'); // تأكد من أن المسار صحيح لصفحة تسجيل الدخول
  };

  return (
    <div>
      <h1>Main Page</h1>
      {ziza ? (
        <div>
          <p>Welcome, {ziza.name}!</p>
          <button onClick={handleLogout}>Logout</button> {/* زر تسجيل الخروج */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <Navbarr />
      <Outlet />
    </div>
  );
}

export default Main;

