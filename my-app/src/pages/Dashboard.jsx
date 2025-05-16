import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const [adminName, setAdminName] = useState("");

  useEffect(() => {
    const fetchAdminName = async () => {
      const token = localStorage.getItem("token"); 
  
      if (!token) {
        navigate("/login"); 
        return;
      }
  
      try {
        const response = await axios.get("http://localhost:8087/api/admin/profile", {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        });
  
        setAdminName(response.data.username);
      } catch (error) {
        console.error("Error fetching admin details:", error);
        setAdminName("Unknown Admin");
      }
    };
  
    fetchAdminName();
  }, []);
  
  return (
    <div className="dashboard-container">
      <h1>Admin Dashboard</h1>
      <p>Welcome, {adminName}</p>

      <div className="dashboard-content">
        <h2>Dashboard Overview</h2>

        <div className="dcard-container">
          <div className="dcard blue" onClick={() => navigate("/manage-images")}>
            <h3>Manage Images</h3>
            <p>Upload, edit, and delete images.</p>
          </div>

          <div className="dcard green" onClick={() => navigate("/manage-packages")}>
            <h3>Manage Packages</h3>
            <p>Create and update packages.</p>
          </div>

          <div className="dcard yellow" onClick={() => navigate("/contact-details")}>
            <h3>Contact Details</h3>
            <p>View and update contact information.</p>
          </div>

          <div className="dcard red" onClick={() => navigate("/inquiry-details")}>
            <h3>Inquiry Details</h3>
            <p>Track and respond to inquiries.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
