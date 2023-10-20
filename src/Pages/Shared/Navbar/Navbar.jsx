import { Link } from "react-router-dom";
import logo from '../../../assets/logo.svg'


const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg mb-3">
                <div className="container-fluid">
                    <Link to={'/'} className="navbar-brand" href="#">
                        <img src={logo}/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to={'/'} className="nav-link fw-semibold active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-semibold" href="#">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-semibold" href="#">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-semibold" href="#">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-semibold" href="#">Contact</Link>
                            </li>
                            
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-warning" type="submit">Appointment</button>
                        </form>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;