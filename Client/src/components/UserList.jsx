import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/UserList.css";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/users");
        if (!response.ok) throw new Error("Failed to fetch users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="user-list">
      <h2>Total Users: {users.length}</h2>
      {users.length === 0 ? (
        <p>No users available.</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li
              key={user._id}
              onClick={() => {
                console.log("Navigating to User ID:", user._id);
                navigate(`/user-detail/${user._id}`);
              }}
            >
              <span className="user-name">{user.user}</span>
              <span className="user-email">{user.email}</span>
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => navigate("/")} className="add-user-btn">
        Add New User
      </button>
    </div>
  );
};

export default UserList;
