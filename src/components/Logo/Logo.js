import React from "react";
import './Logo.css'
import Tilt from 'react-parallax-tilt';
import brain from './brain.png'

const Logo = () => {
    return (
        <div className="ma4 flex justify-center">
            <Tilt className="Tilt br2 shadow-2 flex justify-center align items-center" style={{ height: '110px', width: '110px' }} glareEnable={true} glareMaxOpacity={0.9} glareColor="#c56fd6" glarePosition="all">
                <div>
                    <img src={brain} alt='brain'></img>
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;