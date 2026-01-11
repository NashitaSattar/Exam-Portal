import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router'
import { useParams } from 'react-router'
import { getUserById, updateUser } from "../../service/userService";
import user_icon from "../../Components/Assets/person.png"
import email_icon from "../../Components/Assets/email.png"
import './Update.css'

export const Update = () => {
    const {id} = useParams();
    const [data, setData] = useState({firstName:'', lastName:'', email:''})
    const [error, setError] = useState("")
    const navigate = useNavigate();

    useEffect(()=> {
        fetchUserbyId();
    }, [])

    const fetchUserbyId = async () => {
        try {
            const response = await getUserById(id);
            setData(response.data);
        } catch (err) {
            setError("Failed to fetch user");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            if(!data.firstName || !data.lastName || !data.email){
                setError("All fields must be filled")
                return;
            }
            const response = await updateUser(id, data);
            navigate("/dashboard");
        
        } catch (error) {
            setError("Failed to update user")
        }
    };

  return (
    <form onSubmit={handleSubmit}>
        <div className='update-container'>
            <div className="update-header">
                <div className="update-text">Update User: {data.id}</div>
                <div className="update-underline"></div>
            </div>
            <div className="update-inputs">
                {error && <p style={{ color: "red" }}>{error}</p>}
                <div className="update-input">
                    <img src={user_icon} alt=""/>
                    <input type="text" value={data.firstName} placeholder="First Name"
                    onChange={e => setData({...data, firstName: e.target.value})}/>
                </div>
                <div className="update-input">
                    <img src={user_icon} alt=""/>
                    <input type="text" value={data.lastName} placeholder="Last Name"
                    onChange={e => setData({...data, lastName: e.target.value})}/>
                </div>
                <div className="update-input">
                    <img src={email_icon} alt=""/>
                    <input type="email" value={data.email} placeholder="Email"
                    onChange={e => setData({...data, email: e.target.value})}/>
                </div>
            </div>
            <div className="update-submit-container">
                <div className="success-submit">
                    <Link to="/dashboard" className="success-submit-link">Back to Dashboard</Link>
                 </div>
                    <button type="submit" className="update-submit">Update Invitation</button>
            </div>
        </div>
        </form>
  )
}
