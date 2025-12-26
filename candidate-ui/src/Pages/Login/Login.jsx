import { Link } from "react-router"
import './Login.css'

import email_icon from "../../Components/Assets/email.png"
import password_icon from "../../Components/Assets/password.png"

export function Login(){
    return(
        <div className='login-container'>
            <div className="login-header">
                <div className="login-text">Candidate Login</div>
                <div className="login-underline"></div>
            </div>
            <div className="login-inputs">
                <div className="login-input">
                    <img src={email_icon} alt=""/>
                    <input type="email" placeholder="Email"/>
                </div>
                <div className="login-input">
                    <img src={password_icon} alt=""/>
                    <input type="password" placeholder="Password"/>
                </div>
            </div>
            <div className="login-submit-container">
                <div className="login-submit">
                    <Link to="/dashboard" className="login-submit-link">Login</Link>
                </div>
            </div>
        </div>
    )
}