import React from 'react';
import Axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';

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
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <Card style={{ width: '400px' }}>
        <Card.Body>
          <h2 className="text-center mb-4">Login Admin</h2>
          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter your email" 
                value={name}
                onChange={e => setname(e.target.value)} 
                required 
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Enter your password" 
                value={pwd}
                onChange={e => setpwd(e.target.value)} 
                required 
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Login;
