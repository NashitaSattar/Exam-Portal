import { Link } from "react-router"
import './Sign_up.css'

import user_icon from "../../Components/Assets/person.png"
import email_icon from "../../Components/Assets/email.png"
import password_icon from "../../Components/Assets/password.png"

export function Sign_up(){
    return(
        <div className='signup-container'>
            <div className="signup-header">
                <div className="signup-text">Sign Up</div>
                <div className="signup-underline"></div>
            </div>
            <div className="signup-inputs">
                <div className="signup-input">
                    <img src={user_icon} alt=""/>
                    <input type="text" placeholder="Full Name"/>
                </div>
                <div className="signup-input">
                    <img src={email_icon} alt=""/>
                    <input type="email" placeholder="Email"/>
                </div>
                <div className="signup-input">
                    <img src={password_icon} alt=""/>
                    <input type="password" placeholder="Password"/>
                </div>
                <div className="signup-input">
                    <img src={password_icon} alt=""/>
                    <input type="password" placeholder="Confirm Password"/>
                </div>
            </div>
            <div className="signup-submit-container">
                <div className="signup-submit">
                    <Link to="/dashboard" className="signup-submit-link">Sign Up</Link>
                </div>
                <div className="signup-submit">
                    <Link to="/login" className="signup-submit-link">Login</Link>
                </div>
            </div>
        </div>
    )
}