import {Link} from 'react-router-dom';

const TopNav = () => (
    <div className="nav bg-light d-flex justify-content-between">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/Login">Login</Link>
        <Link className="nav-link" to="/Register">Register</Link>
        <Link className="nav-link" to="/MyAccount">My Account</Link>
        <Link className="nav-link" to="/ShoppingCart">Shopping Cart</Link>
        <Link className="nav-link" to="/SupplementsStore">Supplements Store</Link>
    </div>
);

export default TopNav;