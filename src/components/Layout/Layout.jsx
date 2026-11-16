import { Outlet } from 'react-router'

/**
 * Gabarit commun des pages : regroupe la nav et le footer et affiche la page dont l'URL correspond.
 * @returns {JSX.Element}
 */
export function Layout() {

    return (
        <div className="layout">
            <main className="layout__main">
                <Outlet />
            </main>
        </div>
    )
}
