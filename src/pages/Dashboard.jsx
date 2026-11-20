import { Link, Outlet } from "react-router";
import Navbar from "../components/Navbar";

export default function Dashboard() {
    return (

        <section>
            <Navbar />
            <section className="dash-section">
                <aside className="dash-side-nav">
                    <ul>
                        <li className="nav-item">
                            <Link className="nav-link" to="myprojects">My Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="profile"> Profile </Link>
                        </li>
                    </ul>
                </aside>

                <div className="dash-content">
                    <Outlet />
                </div>
            </section>
        </section>
    )
}