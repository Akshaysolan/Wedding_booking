import { useState } from "react";
import axios from "axios";

function UpdateAdmin() {
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setMessage("Not authenticated!");
        return;
      }

      await axios.put(
        "http://localhost:8087/admin/update",
        { username: newUsername, password: newPassword },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage("Admin updated successfully!");
    } catch (error) {
      setMessage("Update failed!");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">Update Admin</h2>
        
        <input 
          type="text" 
          placeholder="New Username" 
          className="w-full p-3 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setNewUsername(e.target.value)} 
        />
        
        <input 
          type="password" 
          placeholder="New Password" 
          className="w-full p-3 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setNewPassword(e.target.value)} 
        />
        
        <button 
          className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition"
          onClick={handleUpdate}
        >
          Update
        </button>

        {message && (
          <p className={`text-sm mt-3 text-center ${message.includes("successfully") ? "text-green-500" : "text-red-500"}`}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default UpdateAdmin;
