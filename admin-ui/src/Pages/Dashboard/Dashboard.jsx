import { Link } from "react-router"
import './Dashboard.css'

export function Dashboard(){
    const data = 
    [
    { id: 1, first_name: "First1", last_name: "Last1", email: "example1.com" },
    { id: 2, first_name: "First2", last_name: "Last2", email: "example2.com" },
    { id: 3, first_name: "First3", last_name: "Last3", email: "example3.com" },
    ]

    return(
        <div className='dashboard-container'>
            <div className="dashboard-header">
                <div className="dashboard-text">Admin Dashboard</div>
                <div className="dashboard-underline"></div>
            </div>
            <table className="dashboard-table">
                <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                </tr>
                {data.map((val) => {                    
                    return (
                        <tr key={val.id} className="dashboard-table-header">
                            <td className="dashboard-table-data">{val.id}</td>
                            <td className="dashboard-table-data">{val.first_name}</td>
                            <td className="dashboard-table-data">{val.last_name}</td>
                            <td className="dashboard-table-data">{val.email}</td>
                        </tr>
                    )
                    })}
            </table>
    
            <div className="dashboard-submit-container">
                <div className="dashboard-submit">
                <Link to="/registration" className="dashboard-submit-link">Submit Invitation</Link>
                </div>
                <div className="dashboard-submit">
                <Link to="/" className="dashboard-submit-link">Logout</Link>
                </div>
            </div>
        </div>
    )
}