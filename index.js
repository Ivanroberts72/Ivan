// pages/index.js
import { useState } from 'react'

export default function Home() {
  const [mode, setMode] = useState('login');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function handleSubmit() {
    const res = await fetch(`/api/${mode}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    const data = await res.json();
    setMessage(data.message);
    if (data.success) setIsLoggedIn(true);
  }

  if (isLoggedIn) return (
    <div style={styles.box}>
      <h2>Welcome, {username}!</h2>
      <p>This is protected content.</p>
      <button onClick={() => setIsLoggedIn(false)}>Logout</button>
    </div>
  );

  return (
    <div style={styles.box}>
      <h2>{mode === 'login' ? 'Login' : 'Sign Up'}</h2>
      <input placeholder="Username" onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleSubmit}>{mode === 'login' ? 'Login' : 'Sign Up'}</button>
      <p style={{ color: 'red' }}>{message}</p>
      <p>
        {mode === 'login' ? 'Need an account?' : 'Have an account?'}{' '}
        <a onClick={() => setMode(mode === 'login' ? 'signup' : 'login')} style={{ cursor: 'pointer', color: 'blue' }}>
          {mode === 'login' ? 'Sign up' : 'Login'}
        </a>
      </p>
    </div>
  )
}

const styles = {
  box: {
    width: '300px',
    margin: '100px auto',
    padding: '20px',
    textAlign: 'center',
    background: '#f0f0f0',
    borderRadius: '10px'
  }
}