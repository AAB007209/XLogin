import { useState } from 'react'
import './App.css'

function App() {

  const [username, setUserName] = useState('');
  const [password, setPassWord] = useState('');
  const [message, setMessage] = useState('');

  function userName(e) {
    setUserName(e.target.value);
  }

  function passWord(e) {
    setPassWord(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    if (username === "user" && password === "password") {
      setMessage("Welcome, user!");
    } else {
      setMessage("Invalid username or password");
    }
  }

  return (
    <div>
      <h1>Login Page</h1>
      {message && <p>{message}</p>}
      {
        message !== "Welcome, user!" && <form onSubmit={handleClick}>
          <label htmlFor="username">Username:</label>
          <input type="text" placeholder='username' required onChange={userName} />
          <br />
          <label htmlFor="password">Password:</label>
          <input type="password" placeholder='password' required onChange={passWord} />
          <br />
          <button type='submit'>Submit</button>
        </form>
      }
    </div>
  )
}

export default App
