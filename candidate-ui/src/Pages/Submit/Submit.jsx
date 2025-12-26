import { Link } from "react-router"
import './Submit.css'

export function Submit(){
    return(
        <div className='submit-container'>
            <div className="submit-header">
                <div className="submit-text">Exam Successfully Submitted</div>
                <h1 className="submit-text-message">Thank you for taking the time to complete this examination</h1>
                <div className="submit-underline"></div>
            </div>
            <div className="submit-submit-container">
                <div className="submit-submit">
                            <Link to="/dashboard" className="submit-submit">Back to Dashboard</Link>
                </div>
                <div className="submit-submit">
                            <Link to="/login" className="submit-submit">Logout</Link>
                </div>
            </div>

        </div>
    )
}