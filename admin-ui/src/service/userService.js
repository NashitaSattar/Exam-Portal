import axiosInstance from "../api/axiosInstance"

// GET - fetch all users
export const getUsers = () =>{
    return axiosInstance.get("/users");
}

// GET - fetch user by id
export const getUserById = (id) =>{
    return axiosInstance.get(`/users/${id}`);
}

// POST - create a new user
export const createUser = (userData) => {
    return axiosInstance.post("/users", userData);
}

// Patch - update existing users
export const updateUser = (id, updatedTaskData) => {
    return axiosInstance.patch(`/users/${id}`, updatedTaskData);
} 

// Delete - Remove existing task
export const deleteUser = (id) => {
    return axiosInstance.delete(`/users/${id}`);
}
