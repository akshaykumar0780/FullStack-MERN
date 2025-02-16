const API_BASE_URL = "http://localhost:8000/api/users";

export const getUsers = async () => {
  const response = await fetch(`${API_BASE_URL}`);
  if (!response.ok) throw new Error("Failed to fetch users");
  return response.json();
};

export const getUserById = async (id) => {
  const response = await fetch(`${API_BASE_URL}/${id}`);
  if (!response.ok) throw new Error("User not found");
  return response.json();
};

export const createUser = async (userData) => {
  const response = await fetch(`${API_BASE_URL}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to create user");
  }

  return response.json();
};

export const updateUser = async (id, updatedData) => {
  const response = await fetch(`${API_BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedData),
  });

  if (!response.ok) throw new Error("Failed to update user");
  return response.json();
};

export const deleteUser = async (id) => {
  const response = await fetch(`${API_BASE_URL}/${id}`, { method: "DELETE" });
  if (!response.ok) throw new Error("Failed to delete user");
  return response.json();
};
