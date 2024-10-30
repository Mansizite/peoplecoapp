import { useContext, useState } from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import { authContext } from './store';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const { state, setState } = useContext(authContext);
  const navigate = useNavigate();

  const sendData = (e) => {
    e.preventDefault();
    if (email === 'mansi@gmail.com' && pass === '1234') {
      setState(true);
      navigate('/navigation/overview');
    } else {
      alert('Invalid Email or Password');
    }
  };

  return (
    <div className="login">
      <Container className="d-flex justify-content-center align-items-center login-container">
        <div className="login-box">
          <h2 className="login-title">Welcome Back!</h2>
          <p className="login-description">
            Sign in to access your dashboard and explore our latest features.
          </p>
          <Form onSubmit={sendData} className="login-form">
            <Form.Group controlId="formBasicEmail" className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mt-3 login-button">
              Login
            </Button>
          </Form>

          <div className="login-footer">
            <a href="#" className="forgot-password-link">Forgot Password?</a>
            <p className="signup-message">
              New here? <a href="/signup" className="signup-link">Create an account</a>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};
