import axios from 'axios';
import fileDownload from 'js-file-download';

export default function handleDownload(elementId, fileName) {
    const element = document.getElementById(elementId);
    const link = document.createElement('a');
    link.href = element.src; // Assuming 'element' is an <img> tag
    link.download = fileName;
    link.click();   
    
    axios.get(elementId, {
            responseType: 'blob',
    })

     .then((res) => {
            fileDownload(res.data, fileName)
    })
}
