import React from 'react';
import magnet from '../images/customMagnet.JPG';
import flowerPen from '../images/flowerPens.JPG';
import flowerPens from '../images/flowerPens2.jpg';
import hairClips from '../images/hairClips.JPG';
import hotPad from '../images/hotPad.JPG';
import jar from '../images/jar.JPG';
import bunny from '../images/bunny.jpg';
import bracelets from '../images/bracelets.jpg';
import heartBracelet from '../images/heartBracelet.jpg';
import washCloth from '../images/washCloth.jpg';
import washRags from '../images/washRags.jpg';
import washiPens from '../images/washiPens.jpg';
 
function Gallery() {
    return(
        <div className="gallery">
            <h1 className="galleryHeading">Here are some things we have made so far but we are adding things often so check back soon for more!</h1>
            <img src={ magnet } alt="magnet" className="imageGrid"></img>
            <img src={ flowerPen } alt="flower pen" className="imageGrid"></img>
            <img src={ flowerPens } alt="multiple flower pens" className="imageGrid"></img>
            <img src={ hairClips } alt="hair clips" className="imageGrid"></img>
            <img src={ hotPad } alt="hot pad" className="imageGrid"></img>
            <img src={ jar } alt="gratitude jar" className="imageGrid"></img>
            <img src={ bunny } alt="gratitude jar" className="imageGrid"></img>
            <img src={ bracelets } alt="gratitude jar" className="imageGrid"></img>
            <img src={ heartBracelet } alt="gratitude jar" className="imageGrid"></img>
            <img src={ washCloth } alt="gratitude jar" className="imageGrid"></img>
            <img src={ washRags } alt="gratitude jar" className="imageGrid"></img>
            <img src={ washiPens } alt="gratitude jar" className="imageGrid"></img>
        </div>
    )
}

export default Gallery;