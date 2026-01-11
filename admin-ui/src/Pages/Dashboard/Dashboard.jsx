import { Link } from "react-router-dom";
import "./Dashboard.css";
import { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../../service/userService";
import { useParams } from "react-router-dom";

export function Dashboard() {
    const {id} = useParams();
    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await getUsers();
            setUsers(response.data);
        } catch (error) {
            setError("Failed to fetch users");
        }
    };

    const handleDelete = async (id) => {
        const result = window.confirm("Are you sure you want to delete this user?")
        if (!result) {
            return;
        }
        try {
            await deleteUser(id)
            fetchUsers();
        } catch (error) {
            setError("Error occured when deleting task")
        }
    };

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <div className="dashboard-text">Admin Dashboard</div>
                <div className="dashboard-underline"></div>
            </div>

            {error && <p className="text-danger">{error}</p>}

            <div>
                <table className="dashboard-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody className="dashboard-table-data">
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                                <td>{user.status}</td>
                                <td className="dashboard-actions">
                                    <Link to={`/update/${user.id}`} className="dashboard-update-button">Update</Link>
                                    <button onClick={e => handleDelete(user.id)} className="dashboard-delete-button ">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="dashboard-submit-container">
                <div className="dashboard-submit">
                    <Link to="/registration" className="dashboard-submit-link">
                        Submit Invitation
                    </Link>
                </div>
                <div className="dashboard-submit">
                    <Link to="/" className="dashboard-submit-link">
                        Logout
                    </Link>
                </div>
            </div>
        </div>
    );
}
