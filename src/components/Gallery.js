import React from 'react';
import magnet from '../images/customMagnet.JPG';
import flowerPen from '../images/flowerPens.JPG'
import flowerPens from '../images/flowerPens2.jpg'
import hairClips from '../images/hairClips.JPG'
import hotPad from '../images/hotPad.JPG'
import jar from '../images/jar.JPG'
 
function Gallery() {
    return(
        <div className="gallery">
            <h1 className="galleryHeading">These are the things we have made so far but we are adding things often so check back soon for more!</h1>
            <img src={ magnet } alt="magnet"></img>
            <img src={ flowerPen } alt="flower pen"></img>
            <img src={ flowerPens } alt="multiple flower pens"></img>
            <img src={ hairClips } alt="hair clips"></img>
            <img src={ hotPad } alt="hot pad"></img>
            <img src={ jar } alt="gratitude jar"></img>
        </div>
    )
}

export default Gallery;