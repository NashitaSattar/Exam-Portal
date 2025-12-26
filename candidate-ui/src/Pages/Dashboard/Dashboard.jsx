import { Link } from "react-router"
import user_icon from "../../Components/Assets/person.png"
import './Dashboard.css'
import { useState } from "react";

export function Dashboard(){
    const[cam, setCam] = useState(false);

    const handleClick = () => {
    setCam(true);
    };

    return(
        <div className='dashboard-container'>
                    <div className="dashboard-header">
                        <div className="dashboard-text">Pending Exams</div>
                    </div>
                    <div className="dashboard-submit-container">
                        <div className="dashboard-group">
                            <p className="dashboard-text-message">Exam 1</p>
                            <div className="dashboard-submit-camera">
                            <Link to="/camera" className="dashboard-submit-link">Check Camera</Link>
                            </div>
                        </div>
                        <div className="dashboard-group">
                            <p className="dashboard-text-message">Exam 2</p>
                            <div className="dashboard-submit-camera">
                                <Link to="/camera" className="dashboard-submit-link">Check Camera</Link>
                            </div>
                        </div>
                        <div className="dashboard-group">
                            <p className="dashboard-text-message">Exam 3</p>
                            <div className="dashboard-submit-camera">
                                <Link to="/camera" className="dashboard-submit-link">Check Camera</Link>
                            </div>
                        </div>
                        <div className="dashboard-submit-logout">
                            <Link to="/login" className="dashboard-submit-link">Logout</Link>
                        </div>
                    </div>
                </div>
    )
}