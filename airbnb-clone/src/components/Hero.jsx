import gridImgs from '../assets/grid-images.png'

function Hero() {
    return(
        <div className="hero">
            <img className="hero-img" src={gridImgs} />
            <h1 className="hero-title">Online Experience</h1>
            <p className="hero-text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}

export default Hero