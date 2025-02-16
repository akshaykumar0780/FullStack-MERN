import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { deleteUser } from "../services/api";
import "../styles/UserDetail.css";
import { toast } from "react-toastify";

const UserDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/users/${id}`);
        const data = await response.json();
        if (!response.ok) throw new Error(data.message);
        setUser(data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [id]);

  const handleDelete = async () => {
    try {
      await deleteUser(id);
      toast.success("User deleted successfully!");

      setTimeout(() => {
        navigate("/user-list");
      }, 1000);
    } catch (error) {
      toast.error("Failed to delete user");
    }
  };

  const handleEdit = () => {
    navigate(`/edit-user/${id}`);
  };

  if (!user) return <p>Loading user details...</p>;

  return (
    <div className="user-detail">
      <h2>User Details</h2>
      <p>
        <strong>Name:</strong> {user.user}
      </p>
      <p>
        <strong>Age:</strong> {user.age}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Mobile:</strong> {user.mobile}
      </p>
      <p>
        <strong>Interest:</strong>
        {Array.isArray(user.interest)
          ? user.interest.join(", ")
          : user.interest}
      </p>

      <div className="action-buttons">
        <button onClick={handleEdit} className="edit-btn">
          Edit
        </button>
        <button onClick={handleDelete} className="delete-btn">
          Delete
        </button>
      </div>

      <button onClick={() => navigate("/user-list")} className="list-btn">
        List View
      </button>
    </div>
  );
};

export default UserDetail;
