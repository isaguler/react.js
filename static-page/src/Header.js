import svgimg from './react.png';

function Header() {
    return (
        <header>
            <nav className="nav-bar">
                <img src={svgimg} alt="react" className="react-svg" />
                <h3 className="react-facts">ReactFacts</h3>
                <h5>React Course - Project 1</h5>
            </nav>
        </header>
    )
}

export default Header;