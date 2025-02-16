import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../services/api";
import { toast } from "react-toastify";
import "../styles/UserForm.css";

const UserForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    user: "",
    age: "",
    email: "",
    mobile: "",
    interest: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedData = {
      ...formData,
      interest: formData.interest.split(",").map((item) => item.trim()), 
    };

    try {
      const response = await createUser(formattedData);
      console.log("User created response:", response); 

      if (!response.userId) {
        throw new Error("User ID missing in response");
      }

      toast.success("User Details submitted successfully!");
      setTimeout(() => {
        navigate(`/user-detail/${response.userId}`); 
      }, 1000);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <h2>Add User</h2>
      <input
        type="text"
        name="user"
        placeholder="User Name"
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="mobile"
        placeholder="Mobile"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="interest"
        placeholder="Enter interests (comma-separated)"
        onChange={handleChange}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
