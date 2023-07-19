import { Outlet, NavLink } from "react-router-dom"

const RootElement = () => {
    return (
        <div className="root-element">
            <header>
                <h1><NavLink to='/'>CALORIE TRACKER</NavLink></h1>
                    <div className="end">
                        <NavLink to="create">Add New Food</NavLink>
                        <NavLink to="about">About</NavLink>
                        <NavLink to="signin">Sign In</NavLink>
                        <NavLink to="signup">Sign Up</NavLink>
                    </div>
            </header>
            <Outlet />
        </div>
    );
}
export default RootElement;