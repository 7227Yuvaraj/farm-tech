import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Yuvaraj() {
  // State variables for username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  let navigate = useNavigate()

  function onClickFunc(){
    navigate('/landingpage')
  }

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here, such as sending a request to authenticate the user
    console.log('Username:', username);
    console.log('Password:', password);
    // Reset the form fields after submission
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" onClick={onClickFunc}>Login</button>
      </form>
    </div>
  );
}
export default Yuvaraj
