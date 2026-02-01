import { NavLink } from "react-router";

const Nav = () => {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/accommodation-getting-there">
                Getting There & Accommodation
            </NavLink>
            <NavLink to="/day-schedule">Day Schedule</NavLink>
            <NavLink to="/rsvp">RSVP</NavLink>
        </nav>
    );
};

export default Nav;
