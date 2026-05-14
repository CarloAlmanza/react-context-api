import { NavLink } from 'react-router-dom'

function AppNavbar() {
    const getNavClass = ({ isActive }) =>
        isActive
            ? 'nav-link active'
            : 'nav-link'

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <NavLink
                    className="navbar-brand"
                    to="/"
                >
                    FakeStore
                </NavLink>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarNav"
                >
                    <div className="navbar-nav ms-auto">
                        <NavLink
                            to="/"
                            className={getNavClass}
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/chi-siamo"
                            className={getNavClass}
                        >
                            Chi Siamo
                        </NavLink>

                        <NavLink
                            to="/prodotti"
                            className={getNavClass}
                        >
                            Prodotti
                        </NavLink>

                        <NavLink
                            to="/carrello"
                            className={getNavClass}
                        >
                            Carrello
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default AppNavbar