import { Link } from "react-router"
import './Registration.css'

import user_icon from "../../Components/Assets/person.png"
import email_icon from "../../Components/Assets/email.png"
import password_icon from "../../Components/Assets/password.png"

export function Registration(){
    return(
        <div className='registration-container'>
            <div className="registration-header">
                <div className="registration-text">Candidate Registration</div>
                <div className="registration-underline"></div>
            </div>
            <div className="registration-inputs">
                <div className="registration-input">
                    <img src={user_icon} alt=""/>
                    <input type="text" placeholder="First Name"/>
                </div>
                <div className="registration-input">
                    <img src={user_icon} alt=""/>
                    <input type="text" placeholder="Last Name"/>
                </div>
                <div className="registration-input">
                    <img src={email_icon} alt=""/>
                    <input type="email" placeholder="Email"/>
                </div>
            </div>
            <div className="registration-submit-container">
                <div className="registration-submit">
                    <Link to="/success" className="registration-submit-link">Send Invitation</Link>
                </div>
            </div>
        </div>
    )
}