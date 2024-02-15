import React from "react"

export default function Header() {
    return (
        <header className = "header">
            <img 
                className = "header--image"
                src = "./images/cat.png" 
            />
            <h2 className = "header--title">Meme Generator</h2>
            <h4 className = "header--slogan">Memes 4 every occasion</h4>
        </header>
    )
}
