import { Link } from "react-router"
import { useState } from "react"
import './Registration.css'

import user_icon from "../../Components/Assets/person.png"
import email_icon from "../../Components/Assets/email.png"
import { useNavigate } from "react-router"
import { createUser } from "../../service/userService";

export function Registration(){
    const [inputData, setInputData] = useState({firstName:'', lastName:'', email:'', status: "Invited"})
    const [error, setError] = useState("")
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if(!inputData.firstName || !inputData.lastName || !inputData.email){
                setError("All fields must be filled")
                return;
            }
            const response = await createUser(inputData);
            navigate("/success");
    
        } catch (error) {
        setError("Failed to create user")
        }
    };


    return(
        <form onSubmit={handleSubmit}>
        <div className='registration-container'>
            <div className="registration-header">
                <div className="registration-text">Candidate Registration</div>
                <div className="registration-underline"></div>
            </div>
            <div className="registration-inputs">
                {error && <p style={{ color: "red" }}>{error}</p>}
                <div className="registration-input">
                    <img src={user_icon} alt=""/>
                    <input type="text" placeholder="First Name"
                        onChange={e=>setInputData({...inputData, firstName: e.target.value})}/>
                </div>
                <div className="registration-input">
                    <img src={user_icon} alt=""/>
                    <input type="text" placeholder="Last Name"
                    onChange={e=>setInputData({...inputData, lastName: e.target.value})}/>
                </div>
                <div className="registration-input">
                    <img src={email_icon} alt=""/>
                    <input type="email" placeholder="Email"
                    onChange={e=>setInputData({...inputData, email: e.target.value})}/>
                </div>
            </div>
            <div className="registration-submit-container">
                <div className="success-submit">
                    <Link to="/dashboard" className="success-submit-link">Back to Dashboard</Link>
                 </div>
                    <button type="submit" className="registration-submit">Send Invitation</button>
            </div>
        </div>
        </form>
    )
}