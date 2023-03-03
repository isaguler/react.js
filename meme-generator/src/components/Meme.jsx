import memesData from './memesData'
import { useState } from 'react'

function Meme() {

    const [meme, setMeme] = useState("")

    function getRandomMemeImg() {
        const randomNumber = Math.floor(Math.random() * memesData.data.memes.length)

        setMeme(memesData.data.memes[randomNumber].url)
    }


    return(
        <div className="meme">
            <div className="meme--form">
                <input 
                    type="text"
                    placeholder="Top Text"
                    className="meme--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom Text"
                    className="meme--input"
                />
                <button onClick={getRandomMemeImg} className="meme--btn">Get a new meme image 🖼</button>
            </div>
            <div className="meme--result">
                <img className="meme--img" src={meme} alt="" />
            </div>
        </div>
    )
}

export default Meme