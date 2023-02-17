import twitterLogo from './assets/twitter.svg'
import githubLogo from './assets/github.svg'
import facebookLogo from './assets/facebook.svg'
import instagramLogo from './assets/instagram.svg'

export default function Footer() {
    return(
        <div className="footer">
            <a href="https://twitter.com/isaguleer" target="_blank">
                <img src={twitterLogo} className="logo-social-media" />
            </a>
            <a href="https://github.com/isaguler" target="_blank">
                <img src={githubLogo} className="logo-social-media" />
            </a>
            <a href="https://www.facebook.com" target="_blank">
                <img src={facebookLogo} className="logo-social-media" />
            </a>
            <a href="https://www.instagram.com" target="_blank">
                <img src={instagramLogo} className="logo-social-media" />
            </a>
        </div>
    )
}