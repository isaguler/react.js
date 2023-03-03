import earthpng from '../assets/earth.png'

function Nav() {
    return(
        <nav className="nav-bar">
            <img className="earth-png" src={earthpng} />
            <p>my travel journal</p>
        </nav>
    )
}

export default Nav