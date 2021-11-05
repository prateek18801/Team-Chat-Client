import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../config/firebase";

import google from '../assets/google.svg';
import '../assets/Auth.css';

export default function Auth() {

    const signIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    }

    return (
        <div id="auth">
            <div className="box">
                <h4>BDCoE Team-Chat</h4>
                <button className="btn btn-signin" onClick={signIn}><img src={google} alt="google" /> Sign in with Google</button>
            </div>
        </div>
    );
}
