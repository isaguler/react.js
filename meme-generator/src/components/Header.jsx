import memeFace from '../assets/meme-face.png' 

function Header() {
    return(
        <nav className="header">
            <img src={memeFace} alt="header-img" className="header--img"/>
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--info">React Project 5</h4>
        </nav>
    )
}

export default Header