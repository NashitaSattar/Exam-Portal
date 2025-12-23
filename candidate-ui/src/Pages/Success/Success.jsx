import { Link } from "react-router"
import './Success.css'

export function Success(){
    return(
        <div className='success-container'>
                    <div className="success-header">
                        <div className="success-text">Success</div>
                        <h1 className="success-text-message">You are now authenticated</h1>
                        <div className="success-underline"></div>
                        <h1 className="success-text-guide">Please press Start Examination when you are ready to begin</h1>
                        <h2 className="success-text-info">The timer will start as soon as you click on the button</h2>
                        <h3 className="success-text-info">Exam Name</h3>
                        <h3 className="success-text-info">Exam Time: 60 minutes</h3>
                    </div>
                    <div className="success-submit-container">
                        <div className="success-submit">
                            <Link to="/examination" className="success-submit">Start Examination</Link>
                        </div>
                    </div>
                </div>
    )
}