import { auth } from '../config/firebase';
import { signOut } from '@firebase/auth';
import '../assets/Navbar.css';

export default function Navbar() {

    return (
        <div id="navbar">
            <h3>Team-Chat</h3>
            <button className="btn btn-signout" onClick={()=>{signOut(auth)}}>Sign out</button>
        </div>
    )
}