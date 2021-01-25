import React from 'react';
import flowerPens from '../images/flowerPens2.jpg';
 
function Footer() {
    return(
        <div className="footer">
            <img src={ flowerPens } alt="flower pen" id="footerImage"></img>
            <h3>The Cute Craft Shack</h3>
            <h3>Kayla</h3>
            <h3>Kylie</h3>
        </div>
    )
}

export default Footer;