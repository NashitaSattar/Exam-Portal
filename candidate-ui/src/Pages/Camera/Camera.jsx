import { Link } from "react-router"
import user_icon from "../../Components/Assets/person.png"
import './Camera.css'
import { useState } from "react";

export function Camera(){
    const[cam, setCam] = useState(false);

    const handleClick = () => {
    setCam(true);
    };

    return(
        <div className='camera-container'>
                    <div className="camera-header">
                        <div className="camera-text">Camera Set Up</div>
                        <h1 className="camera-text-message">Please confirm your camera setup</h1>
                            <button className="camera-submit" onClick={handleClick}>Check Camera Setup</button>
                            {cam && <img className="photo" src={user_icon} alt=""/>}
                    </div>
                    <div className="camera-submit-container">
                        <div className="camera-submit">
                            <Link to="/success" className="camera-submit-link">Confirm Setup</Link>
                        </div>
                    </div>
                </div>
    )
}