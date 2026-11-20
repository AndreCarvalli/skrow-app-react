import { Link } from "react-router";

export default function Navbar() {
    return (
            <nav className="navbar sm:navbar-expand bg-1 fg-2 sticky-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="/src/assets/hero.png" alt="Logo" width="60" height="48"
                            className="d-inline-block align-text-top"/>
                            S`krow App
                    </a>
                    <button className="btn-icon navbar-toggler" type="button" data-bs-toggle="drawer" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" aria-hidden="true"></span>
                    </button>
                    <dialog className="drawer drawer-end" tabindex="-1" id="navbarNav" aria-labelledby="navbarNavLabel">
                        <div className="drawer-header">
                            <h5 className="drawer-title" id="navbarNavLabel">Menu</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="drawer" aria-label="Close"></button>
                        </div>
                        <div className="drawer-body ms-auto">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to={`/`}>Home</Link>
                                </li>
                                <li>
                                    <Link className=" nav-link" to={`/dashboard`} >Dashboard</Link>
                                </li>
                                <li className="nav-item">
                                    <button className="cta-btn"><Link className="nav-link" to={`/Login`} style={{color:"white"}}>Login</Link></button>
                                </li>
                            </ul>
                        </div>
                    </dialog>
                </div>
            </nav>
    )
}