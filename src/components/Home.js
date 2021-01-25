import React from 'react';
import background from '../images/background.jpg';
 
function Home() {
    return(
        <div 
            className="homePage" id="gradient"
            style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', width: '100%', height: "1200px", backgroundPosition: 'center', backgroundSize: 'cover' }}>
        </div>
    )
}

export default Home;