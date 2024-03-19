// used to trigger file downloads in the browser.
import fileDownload from 'js-file-download';

// Parameters
        // imageUrl: URL of the image to be downloaded
        // fileName: desired name for the downloaded file
        // topText: text displayed at the top of the image
        // bottomText: text displayed at the bottom of the image
        // all of which have already been defined in meme.jsx
// Results
        // download created meme image to computer files
// Example
        // save a pdf or png to your computer
// Psuedocode
        // npm install js-file-download
           // import fileDownload function to your project
        // handleDownload function:
           // creates a canvas, draws an image onto it, adds text overlays, converts the canvas to a Blob object, and triggers a file download using the fileDownload function. 
           // This allows you to generate an image with custom text and download it client-side.
           // export handleDownload and make a button on the front end to trigger this function

export default function handleDownload(imageUrl, fileName, topText, bottomText) {

        //creates a new canvas element in the document
        //canvas will be used to draw the image and text before exporting it
        const canvas = document.createElement('canvas');
        // 2D rendering context for the canvas
        //2D context provides methods and properties for drawing on the canvas
        const ctx = canvas.getContext('2d');

        // Create an image element and load the image
        // The Image() constructor creates a new HTMLImageElement instance
        // functionally equivalent to document.createElement('img').
        const img = new Image();

        // necessary to enable CORS if the image is hosted on a different domain than the one serving the script
        //CORS allows authorized resource sharing with external third parties
        img.crossOrigin = 'anonymous'; // Enable CORS
    
    // event handler that runs when the image has finished loading
    // anonymous function    
    img.onload = function() {

        // Set canvas dimensions to match image dimensions
        canvas.width = img.width;
        canvas.height = img.height;

        // Draw the image onto the canvas
        ctx.drawImage(img, 0, 0);

        //The text is centered horizontally and styled appropriately
        ctx.fillStyle = 'white';
        ctx.font = 'bold 50px Arial';
        ctx.textAlign = 'center';

        // top and bottom text are drawn onto the canvas using the fillText method of the 2D context
        // filltext() method - draws a text string at the specified coordinates, fills the string's characters with the current fillStyle
        ctx.fillText(topText, canvas.width / 2, 40);
        ctx.fillText(bottomText, canvas.width / 2, canvas.height - 20);

        // Export canvas as image
        // ctoBlob() method - create Blob object from the canvas, represents immutable, raw data that can be used for file downloads
        // Binary Large Objects - complex files like images, video, audio - can be read as text or binary data, or converted into a ReadableStream so its methods can be used for processing the data
        // use fileDownload from js-file-download package
        canvas.toBlob(function(blob) {
            fileDownload(blob, fileName);
        });
    };

    // Set image source and trigger loading
    img.src = imageUrl;
}