import React, { useState, useEffect } from 'react'

const Meme = () => {

    const [memeImage, setMemeImage] = useState(
        {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg"
        }
    )

    const [allMemes, setAllMemes] = useState({})

    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])

    console.log(allMemes)

    function getRandomMeme() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMemeImage(prevMeme => {
            return {
                ...prevMeme,
                randomImage: url
            }
        })
    }

    function handleChange(event) {
        const { name, value } = event.target
        setMemeImage(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }

    console.log(memeImage)

    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    name='topText'
                    onChange={handleChange}
                    value={memeImage.topText}
                    placeholder="Top text"
                    className="form-input"
                />
                <input
                    type="text"
                    name='bottomText'
                    onChange={handleChange}
                    value={memeImage.bottomText}
                    placeholder="Bottom text"
                    className="form-input"
                />
                <button
                    className="form-button"
                    onClick={getRandomMeme}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={memeImage.randomImage} alt='meme ' className="meme--image" />
                <h2 className="meme--text top">{memeImage.topText}</h2>
                <h2 className="meme--text bottom">{memeImage.bottomText}</h2>
            </div>
        </main >
    )
}

export default Meme