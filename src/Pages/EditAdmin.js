// EditAdmin.js
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function EditAdmin() {
  const { id } = useParams(); // احصل على معرف المشرف من عنوان URL
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  // جلب بيانات المشرف الحالية باستخدام المعرف
  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const response = await Axios.get(`http://localhost:8000/admin/getAdmin/${id}`);
        setUsername(response.data.username);
        setPassword(response.data.password);
      } catch (error) {
        console.error('Error fetching admin data:', error);
      }
    };

    fetchAdminData();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.put(`http://localhost:8000/admin/updateAdmin/${id}`, {
        username,
        password,
      });

      if (response.data.message === "Admin updated successfully") {
        alert(response.data.message);
        navigate('/Main/Admin'); // العودة إلى صفحة قائمة المشرفين
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      console.error('Error updating admin:', error);
      setMessage('An error occurred while updating the admin.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Edit Admin</h2>
      <form onSubmit={handleUpdate}>
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
        <button type="submit" className="btn btn-primary">Update Admin</button>
      </form>
    </div>
  );
}

export default EditAdmin;
