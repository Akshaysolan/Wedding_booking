import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); 

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8087/api/admin/login", {
        username,
        password,
      });
  
      // Store token in localStorage
      localStorage.setItem("token", response.data.token);
  
      navigate("/dashboard"); // Redirect to dashboard after login
    } catch (error) {
      setError("Invalid credentials!");
    }
  };
  

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Admin Login</h2>
        
        <input 
          type="text" 
          placeholder="Username" 
          value={username}
          onChange={(e) => setUsername(e.target.value)} 
          required
        />
        
        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          required
        />
        
        <button onClick={handleLogin}>Login</button>
        
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
}

export default Login;
