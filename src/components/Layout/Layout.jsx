import { Outlet, useLocation } from 'react-router'
import { Nav } from '../Nav/Nav'
import { Footer } from '../Footer/Footer'
import './Layout.css'

/**
 * Gabarit commun des pages : regroupe la nav et le footer et affiche la page dont l'URL correspond.
 * @returns {JSX.Element}
 */
export function Layout() {
    const location = useLocation()
    const isHome = location.pathname === '/'

    return (
        <div className="layout">
            <Nav />
            <main className={isHome ? "main" : "main bg-dark"}>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
