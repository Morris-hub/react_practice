import React, { useState } from 'react';
import './LoginForm.css'; // Importiere das CSS

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ username, password });
  };


  return (
    <div className="login-form"> {/* Zusätzliche Klasse hinzugefügt */}
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="login-input" // Zusätzliche Klasse hinzugefügt
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input" // Zusätzliche Klasse hinzugefügt
        />
        <button className='login-button' type="submit">Login</button>
      </form>
    </div>
  );
  
};

export default LoginForm;
