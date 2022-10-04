import React from "react";
import Tilt from 'react-parallax-tilt';
import './Logo.css'
import brain from './brain.png'

const Logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilt className="Tilt br2 shadow-2" style={{ height: '100px', width: '100px' }} glareEnable={true} glareMaxOpacity={0.9} glareColor="#c56fd6" glarePosition="all">
                <div>
                    <img src={brain} alt='brain'></img>
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;