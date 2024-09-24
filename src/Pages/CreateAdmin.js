// CreateAdmin.js
import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateAdmin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post('http://localhost:8000/admin/register', {
        username,
        password,
      });

      if (response.data.message === "Admin created successfully") {
        alert(response.data.message);
        navigate('/Main/Admin'); // Navigate back to the admin list page
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      console.error('Error creating admin:', error);
      setMessage('An error occurred while creating the admin.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Create Admin</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username:</label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {message && <div className="alert alert-danger">{message}</div>}
        <button type="submit" className="btn btn-primary">Create Admin</button>
      </form>
    </div>
  );
}

export default CreateAdmin;
