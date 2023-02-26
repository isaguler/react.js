import airbnbLogo from '../assets/airbnb-logo.png'

function Header() {
    return(
        <nav className="nav-bar">
            <img src={airbnbLogo} />
        </nav>
    )
}

export default Header