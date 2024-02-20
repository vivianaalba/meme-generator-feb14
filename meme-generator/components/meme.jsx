import React, { useState } from "react";
import memesData from "../memesData.js";

// state - way for React to remember saved values within a component
// using props over state - want to pass data into a component so that component can determine what will get displayed
// using state of props - want copmonent to maintain values from within component, remembers values after re-rendering
// props - immutable, state- mutable

export default function Meme() {
    //const [memeImage, setMemeImage] = React.useState("https://i.imgflip.com/3oevdk.jpg");
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/3oevdk.jpg"
    });
    
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url;
        setMeme( prevMeme => ({
            ...prevMeme,
            randomImage: url
        }));
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="form">

                    <div>
                        <label className="form--label" alt= "Top Text">Top Text </label>
                        <input 
                            type="text" 
                            placeholder="Shut Up"
                            className="form--input"
                            name = "topText"
                            value={meme.topText}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="form--label" alt= "Bottom Text">Bottom Text </label>
                        <input 
                            type="text" 
                            placeholder="And Take My Money"
                            className="form--input"
                            name = "bottomText"
                            value={meme.bottomText}
                            onChange={handleChange}
                        />
                    </div>

                    <button className="form--button" onClick={getMemeImage}>
                        Get New Meme Image
                    </button>

            </div>

            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>

        </main>
    );
}
