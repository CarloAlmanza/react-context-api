import { Outlet } from 'react-router-dom'
import AppNavbar from '../components/Navbar'

function Layout() {
    return (
        <>
            <AppNavbar />

            <main className="container py-4">
                <Outlet />
            </main>
        </>
    )
}

export default Layout