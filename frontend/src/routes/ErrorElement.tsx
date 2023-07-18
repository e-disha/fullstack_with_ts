import { NavLink } from "react-router-dom";
import sad from '../assets/sad.png'

const ErrorElement = () => {
    return (
        <div className="error-elemet">
            <h3>Looks like you're lost</h3>
            <p>You can always go back <NavLink to='/'>home</NavLink></p>
            <img src={sad} alt="sad" id="sad"/>
        </div>
    );
}
 
export default ErrorElement;