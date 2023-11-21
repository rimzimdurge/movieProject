// Login.js
import React, { useState } from 'react';
import './Login.css'; // Import the CSS for styling

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isCardOpen, setIsCardOpen] = useState(true); // State to track card visibility

  const handleLogin = () => {
    // Implement your login logic here
    // For this example, let's just log the entered username and password
    console.log('Username: ', username);
    console.log('Password: ', password);
  };

  const handleCloseCard = () => {
    setIsCardOpen(false); // Close the card
  };

  return (
    // Use a conditional rendering to show/hide the card
    isCardOpen && (
      <div className="login-container">
        <div className="login-card">
          <button className="close-button" onClick={handleCloseCard}>
            Back to movies
          </button>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    )
  );
}

export default Login;

