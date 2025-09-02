import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // TODO: Implement actual authentication with Vercel backend
      console.log('Login attempt:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For now, just show success message
      alert('Login functionality will be implemented with Vercel backend');
      
    } catch (err) {
      setError('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="container">
        <div className="login-container">
          <div className="login-header">
            <h1>Sign In</h1>
            <p>Access your SP3FCK Ham Tools account</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            {error && (
              <div className="error-message">
                {error}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.callsign@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Enter your password"
              />
            </div>

            <div className="form-group checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                />
                <span className="checkmark"></span>
                Remember me
              </label>
            </div>

            <button 
              type="submit" 
              className="btn btn-primary btn-full"
              disabled={loading}
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </button>

            <div className="login-links">
              <Link to="/forgot-password" className="forgot-link">
                Forgot your password?
              </Link>
            </div>
          </form>

          <div className="login-footer">
            <p>
              Don't have an account? {' '}
              <Link to="/register" className="register-link">
                Create one here
              </Link>
            </p>
          </div>

          <div className="features-preview">
            <h3>With an account you can:</h3>
            <ul>
              <li>✓ Configure custom iframe layouts</li>
              <li>✓ Save your favorite photo selections</li>
              <li>✓ Upload your own ham radio photos</li>
              <li>✓ Access advanced gallery features</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
