import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Packages.css";

const Packages = () => {
  const [packages, setPackages] = useState([]);

  const fetchPackages = async () => {
    try {
      const response = await axios.get("http://localhost:8087/api/packages");
      setPackages(response.data);
    } catch (error) {
      console.error("Error fetching packages:", error);
    }
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  return (
    <div className="packages">
      <h1>Wedding Packages</h1>
      <p className="packages-intro">
        We offer customizable packages to suit your wedding needs. All packages include 
        basic setup and cleanup. Additional services can be added à la carte.
      </p>

      <div className="package-cards">
        {packages.slice(0, 3).map((pkg, index) => (
          <div key={pkg.id} className="package-card">
            <h2>
              {index === 0 ? "Basic Package" : index === 1 ? "Standard Package" : "Premium Package"}
            </h2>
            <div className="package-price">{pkg.price}</div>
            <ul className="package-features">
              {pkg.includes.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <div className="package-best-for">
              <strong>Best for:</strong> {pkg.bestFor}
            </div>
          </div>
        ))}
      </div>

      <div className="custom-options">
        <h2>Custom Options Available</h2>
        <p>
          Don't see exactly what you need? We're happy to create a custom package 
          tailored to your specific wedding vision. Contact us to discuss your ideas.
        </p>
      </div>
    </div>
  );
};

export default Packages;
