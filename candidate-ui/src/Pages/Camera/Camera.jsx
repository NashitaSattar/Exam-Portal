import { Link } from "react-router"
import user_icon from "../../Components/Assets/person.png"
import './Camera.css'
import { useState } from "react";

export function Camera(){
    const[cam, setCam] = useState(false);
    const [checked, setChecked] = useState(false);

    const handleClick = () => {
        setCam(true);
    };

    const handleChange = () => {
        setChecked(!checked);
    };

    return(
        <div className='camera-container'>
                    <div className="camera-header">
                        <div className="camera-text">Camera Set Up</div>
                        <h1 className="camera-text-message">Please confirm your camera setup</h1>
                            <button className="camera-submit" onClick={handleClick}>Check Camera Setup</button>
                            {cam && <img className="photo" src={user_icon} alt=""/>}
                            <label className="camera-consent-message"> 
                                <input className="camera-checkbox" type="checkbox" />
                                I consent to being proctored during the exam
                            </label>
                    </div>
                    <div className="camera-submit-container">
                        <div className="camera-submit">
                            <Link to="/dashboard" className="camera-submit-link">Back to Dashboard</Link>
                        </div>
                        <div className="camera-submit">
                            <Link to="/success" className="camera-submit-link">Confirm Setup</Link>
                        </div>
                    </div>
                </div>
    )
}