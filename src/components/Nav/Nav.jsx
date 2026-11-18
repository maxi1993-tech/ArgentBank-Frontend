import { Link, useLocation } from 'react-router'
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa'
import bankLogo from '../../assets/argentBankLogo.png'
import './Nav.css'

export function Nav() {
    const location = useLocation()
    const isProfile = location.pathname === '/user'

    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to="/">
                <img
                    className="main-nav-logo-image"
                    src={bankLogo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                {isProfile ? <>
                    <Link className="main-nav-item" to="/user">
                        <FaUserCircle />
                        {' '}Tony
                    </Link>
                    <Link className="main-nav-item" to="/">
                        <FaSignOutAlt />
                        {' '}Sign Out
                    </Link> </> :
                    <Link className="main-nav-item" to="/sign-in">
                        <FaUserCircle />
                        {' '}Sign In
                    </Link>
                }
            </div>
        </nav>
    )
}
