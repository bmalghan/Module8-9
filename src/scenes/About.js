import React from "react";
import Particles from "react-particles-js";
import "./About.css";
import {Header} from "../component";


const About = () => {
    return (

        <div className='About'>
            <Header classname="home-search div1"/>
            <div className="div1">
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,900&display=swap');
                </style>
                <h1 className="title text">About</h1>
            </div>
            <div className="div2">
                
            </div>
            <Particles className='particle-canvas'/>
        </div>
    );
}

export default About;