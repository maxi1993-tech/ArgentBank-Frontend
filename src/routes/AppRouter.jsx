import { Routes, Route } from 'react-router';
import { Layout } from '../components/Layout/Layout';
import { Home } from '../pages/Home/Home';
import { SignIn } from '../pages/SignIn/SignIn';
import { Profile } from '../pages/Profile/Profile';

/**
 * Routes de l'application : 3 routes imbriquées dans Layout, qui affiche Nav et Footer autour de chaque page.
 * @returns {JSX.Element}
 */
export function AppRouter() {

    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/user" element={<Profile />} />
            </Route>
        </Routes>
    )
}

