import { Link } from "react-router"
import './Examination.css'
import Countdown from "../../Components/Countdown"

export function Examination(){
    return(
        <div className='examination-container'>
                    <div className="examination-header">
                        <div className="examination-text">Examination</div>
                        <p className="examination-text-message">Timer</p>
                        {/*<Countdown duration={60*60*1000}/>*/}
                        <div className="examination-underline"></div>
                    </div>
                    <div className="examination-submit-container">
                        <div className="examination-submit">
                            <Link to="/submit" className="examination-submit-link">Submit Exam</Link>
                        </div>
                    </div>
                </div>
    )
}