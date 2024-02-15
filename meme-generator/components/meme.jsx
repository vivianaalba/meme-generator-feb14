import React from "react";

export default function Meme() {
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    return (
        <main>
            <div>
                <form className = "form">
                    <div>
                        <label className = "form--label">Top Text </label>
                        <input 
                            type = "text" 
                            placeholder = "Shut Up"
                            className = "form--input"
                        />
                    </div>
                    <div>
                        <label className = "form--label">Bottom Text </label>
                        <input 
                            type = "text" 
                            placeholder = "And Take My Money"
                            className = "form--input"
                        />
                    </div>
                    <button className = "form--button">Get New Meme Image</button>
                </form>
            </div>
        </main>
    )
}