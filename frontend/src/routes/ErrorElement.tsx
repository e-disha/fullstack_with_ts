import { NavLink } from "react-router-dom";

const ErrorElement = () => {
    return (
        <div className="error-elemet">
            <h3>Looks like you're lost</h3>
            <p>You can always go back <NavLink to='/'>home</NavLink></p>
        </div>
    );
}
 
export default ErrorElement;