import svgimg from './react.png';

function Header() {
    return (
        <header>
            <nav className="nav-bar">
                <img src={svgimg} alt="react" className="react-svg" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;