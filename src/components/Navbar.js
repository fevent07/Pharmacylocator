import GuestNavBar from './GuestNavbar';
import PharmaNavBar from './PharmaNavbar'


const Navbar = () => {
    return localStorage.getItem("token") === null ? <GuestNavBar /> : <PharmaNavBar />
}

export default Navbar;