import React, { useState } from "react";
import memesData from "../memesData";

// state - way for React to remember saved values within a component
// using props over state - want to pass data into a component so that component can determine what will get displayed
// using state of props - want copmonent to maintain values from within component, remembers values after re-rendering
// props - immutable, state- mutable

export default function Meme() {
    const [memeImage, setMemeImage] = React.useState("https://i.imgflip.com/3oevdk.jpg");
    
    function getMemeImage() {
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        setMemeImage(memesArray[randomNumber].url);
    }

    return (
        <main>
            <div>
                <form className="form">

                    <div>
                        <label className="form--label" alt= "Top Text">Top Text </label>
                        <input 
                            type="text" 
                            placeholder="Shut Up"
                            className="form--input"
                        />
                    </div>

                    <div>
                        <label className="form--label" alt= "Bottom Text">Bottom Text </label>
                        <input 
                            type="text" 
                            placeholder="And Take My Money"
                            className="form--input"
                        />
                    </div>

                    <button className="form--button" onClick={getMemeImage}>
                        Get New Meme Image
                    </button>

                </form>
            </div>

            <img src= {memeImage} alt="Meme Image" className = "meme--image" />

        </main>
    );
}
