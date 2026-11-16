import { Outlet } from 'react-router'
import { Nav } from '../Nav/Nav'
import { Footer } from '../Footer/Footer'

/**
 * Gabarit commun des pages : regroupe la nav et le footer et affiche la page dont l'URL correspond.
 * @returns {JSX.Element}
 */
export function Layout() {

    return (
        <div className="layout">
            <Nav />
            <main className="layout__main">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
