import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getUserById, updateUser } from "../services/api";
import { toast } from "react-toastify";
import "../styles/EditUser.css"; 

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    user: "",
    age: "",
    email: "",
    mobile: "",
    interest: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUserById(id);
        setFormData({
          user: userData.user,
          age: userData.age,
          email: userData.email,
          mobile: userData.mobile,
          interest: userData.interest.join(", "), 
        });
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [id]);

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
      await updateUser(id, formattedData);
      toast.success("User updated successfully!");
      setTimeout(() => {
        navigate(`/user-detail/${id}`); 
      }, 1000);
    } catch (error) {
      toast.error("Failed to update user");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="edit-user-form">
      <h2>Edit User</h2>
      <input
        type="text"
        name="user"
        value={formData.user}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="mobile"
        value={formData.mobile}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="interest"
        value={formData.interest}
        onChange={handleChange}
        required
      />
      <button type="submit">Save Changes</button>
      <button type="button" onClick={() => navigate(-1)}>
        Cancel
      </button>
    </form>
  );
};

export default EditUser;
