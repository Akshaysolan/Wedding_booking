import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Packages.css";

const Pack = () => {
  const [packages, setPackages] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedPackage, setEditedPackage] = useState({});
  const [newPackage, setNewPackage] = useState({
    name: "",
    price: "",
    bestFor: "",
    includes: "",
  });
  const [showAddForm, setShowAddForm] = useState(false);

  // Fetch packages from the backend
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

  // Handle input change for adding new package
  const handleNewPackageChange = (e, field) => {
    setNewPackage({ ...newPackage, [field]: e.target.value });
  };

  // Handle form submission for adding a package
  const handleAddPackage = async () => {
    try {
      const includesArray = newPackage.includes.split(",").map((item) => item.trim());
      const response = await axios.post("http://localhost:8087/api/packages", {
        ...newPackage,
        includes: includesArray,
      });
      setPackages([...packages, response.data]);
      setShowAddForm(false);
      setNewPackage({ name: "", price: "", bestFor: "", includes: "" });
    } catch (error) {
      console.error("Error adding package:", error);
    }
  };

  // Handle input changes for editing a package
  const handleInputChange = (e, field) => {
    setEditedPackage({ ...editedPackage, [field]: e.target.value });
  };

  // Start editing a package
  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditedPackage({ ...packages[index] });
  };

  // Update the package in the database
  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:8087/api/packages/${editedPackage.id}`, editedPackage);
      fetchPackages();
      setEditingIndex(null);
      setEditedPackage({});
    } catch (error) {
      console.error("Error updating package:", error);
    }
  };

  // Delete a package
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8087/api/packages/${id}`);
      setPackages(packages.filter((pkg) => pkg.id !== id));
    } catch (error) {
      console.error("Error deleting package:", error);
    }
  };

  return (
    <div className="packages">
      <h1>Wedding Packages</h1>
      <p className="packages-intro">
        We offer customizable packages to suit your wedding needs. All packages include 
        basic setup and cleanup. Additional services can be added à la carte.
      </p>

      <button className="package-button add-button" onClick={() => setShowAddForm(!showAddForm)}>
        {showAddForm ? "Cancel" : "Add Package"}
      </button>

      {showAddForm && (
        <div className="add-package-form">
          <input type="text" value={newPackage.name} onChange={(e) => handleNewPackageChange(e, "name")} placeholder="Package Name" />
          <input type="text" value={newPackage.price} onChange={(e) => handleNewPackageChange(e, "price")} placeholder="Price" />
          <input type="text" value={newPackage.bestFor} onChange={(e) => handleNewPackageChange(e, "bestFor")} placeholder="Best For" />
          <textarea value={newPackage.includes} onChange={(e) => handleNewPackageChange(e, "includes")} placeholder="Includes (comma-separated)" />
          <button className="package-button" onClick={handleAddPackage}>Save</button>
        </div>
      )}

      <div className="package-cards">
        {packages.map((pkg, index) => (
          <div key={pkg.id} className="package-card">
            {editingIndex === index ? (
              <>
                <input type="text" value={editedPackage.name} onChange={(e) => handleInputChange(e, "name")} placeholder="Package Name" />
                <input type="text" value={editedPackage.price} onChange={(e) => handleInputChange(e, "price")} placeholder="Price" />
                <input type="text" value={editedPackage.bestFor} onChange={(e) => handleInputChange(e, "bestFor")} placeholder="Best For" />
                <textarea value={editedPackage.includes?.join(", ")} onChange={(e) => handleInputChange(e, "includes")} placeholder="Includes (comma-separated)" />
                <button className="package-button" onClick={handleUpdate}>Save</button>
              </>
            ) : (
              <>
                <h2>{pkg.name}</h2>
                <div className="package-price">{pkg.price}</div>
                <ul className="package-features">
                  {pkg.includes.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="package-best-for">
                  <strong>Best for:</strong> {pkg.bestFor}
                </div>
                <button className="package-button" onClick={() => handleEdit(index)}>Edit</button>
                <button className="package-button delete-button" onClick={() => handleDelete(pkg.id)}>Delete</button>
              </>
            )}
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

export default Pack;
