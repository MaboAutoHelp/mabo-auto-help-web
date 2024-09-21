import React from 'react';
import Axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Login() {
  const [name, setname] = useState("");
  const [pwd, setpwd] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await Axios.post("http://localhost:8000/Ziza/login", {
      name: name,
      pwd: pwd
    });

    if (response.data.message === "Ziza already exists!" || response.data.message === "username or password is not correct") {
      alert(response.data.message);
      console.log("error");
    } else {
      // حفظ التوكن في localStorage
      window.localStorage.setItem("token", response.data.token);
      
      // الانتقال إلى الصفحة الرئيسية
      navigate("/Main");
    }
  }

  return (
    <>
      <div>
        <h1>login Admin</h1>
        <form onSubmit={onSubmit}>
          <label>Email address :</label>
          <input type='text' value={name}
            onChange={e => setname(e.target.value)}
            className='input' />
          
          <br />
          <label>Password : </label>
          <input type='password' value={pwd}
            onChange={e => setpwd(e.target.value)}
            className='input' />
          <br />
          <button type="submit">login</button>
        </form>
      </div>
    </>
  );
}

export default Login;
