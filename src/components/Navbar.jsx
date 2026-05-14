import { NavLink } from 'react-router-dom'

import BudgetToggle from './BudgetToggle'

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

                <div className="d-flex align-items-center gap-3">
                    <div className="navbar-nav">
                        <NavLink
                            to="/"
                            className={getNavClass}
                        >
                            Home
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

                    <BudgetToggle />
                </div>
            </div>
        </nav>
    )
}

export default AppNavbar