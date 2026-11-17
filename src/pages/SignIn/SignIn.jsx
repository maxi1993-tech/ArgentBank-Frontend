import { SignInForm } from "../../components/SignInForm/SignInForm";
import { FaUserCircle } from 'react-icons/fa'
import './SignIn.css'

export function SignIn() {

    return (
        <section className="sign-in-content">
            <FaUserCircle className="sign-in-icon" />
            <h1>Sign In</h1>
            <SignInForm />
        </section>
    )
}
