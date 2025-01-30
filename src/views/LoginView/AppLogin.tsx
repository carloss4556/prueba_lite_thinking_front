import React, { useState } from 'react';
import axios from 'axios';
import './AppLogin.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = { email, password };

    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', loginData);
      
      // Assuming the response contains the JWT token
      const { token } = response.data;

      // Save the token in localStorage
      localStorage.setItem('authToken', token);

      // Maneja la respuesta, por ejemplo, guardando el token en localStorage
      console.log('Login exitoso', response.data);

      // Redirect or take appropriate action after login (e.g., navigate to the dashboard)
      // For example, use history.push or window.location.href to navigate to another page
      // history.push('/dashboard'); // If using React Router
      // window.location.href = '/dashboard'; // To refresh the page

    } catch (error) {
      setError('Credenciales incorrectas o error en el servidor');
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;
