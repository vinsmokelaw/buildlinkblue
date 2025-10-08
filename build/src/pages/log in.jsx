import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaGoogle,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaEye,
  FaEyeSlash
} from 'react-icons/fa';
import './Log_in.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);  // <--- Add this!
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Real auth logic goes here
    console.log('Remember me:', rememberMe); // just to check for now
    navigate('/home');  // Redirect to the homepage after login
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-left">
          <h2>Welcome Back 👋</h2>
          <p>Login to continue building with BuildLink.</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="johndoe"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <div className="password-wrapper">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <span
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
              style={{ cursor: 'pointer' }}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="login-options">
            <a href="#">Forgot password?</a>
          </div>

          {/* Remember Me checkbox */}
          <div className="remember-me">
            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              Remember me
            </label>
          </div>

          <button type="submit" className="login-btn">Login</button>
        </form>

        <div className="social-login-section">
          <p>Or sign in with</p>
          <div className="social-buttons">
            <button className="social-btn google">
              <FaGoogle /> Google
            </button>
            <button className="social-btn facebook">
              <FaFacebookF /> Facebook
            </button>
            <button className="social-btn twitter">
              <FaTwitter /> Twitter
            </button>
            <button className="social-btn linkedin">
              <FaLinkedinIn /> LinkedIn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
