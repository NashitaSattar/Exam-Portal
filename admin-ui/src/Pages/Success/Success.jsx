import { Link } from "react-router"
import './Success.css'

export function Success(){
    return(
        <div className='success-container'>
                    <div className="success-header">
                        <div className="success-text">Success</div>
                        <h1 className="success-text-message">The invitation has been sent</h1>
                        <div className="success-underline"></div>
                    </div>
                    <div className="success-submit-container">
                        <div className="success-submit">
                            <Link to="/dashboard" className="success-submit-link">Back to Dashboard</Link>
                        </div>
                        <div className="success-submit">
                            <Link to="/registration" className="success-submit-link">Send Another Invitation</Link>
                        </div>
                    </div>
                </div>
    )
}