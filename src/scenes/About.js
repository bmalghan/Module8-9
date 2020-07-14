import React from "react";
import "./About.css";
import { Header } from "../component";


const About = () => {
    return (

        <div className='About'>
            <Header classname="home-search div1" />
            <div className="about-row-1">
                <div className="about1">
                    <img src={require('./outside.jpg')}></img>
                </div>
                <div className="about2">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo sit amet felis non cursus. 
                        Phasellus ut metus ut magna suscipit pharetra at ac eros. Donec pretium lacinia urna, non aliquam nisi 
                        vehicula sit amet. Integer at dolor non neque viverra auctor. Sed in urna fermentum, ultrices dui eget, 
                        semper ipsum. Duis sit amet egestas ex. Sed faucibus efficitur massa sit amet tincidunt. Maecenas ullamcorper 
                        lacinia vehicula. Vivamus in leo lacus. Duis tempus urna ac orci lobortis scelerisque. Sed viverra facilisis 
                        cursus. Vestibulum elementum, turpis at sollicitudin faucibus, dui mauris facilisis ipsum, et tempor mi nunc 
                        sit amet odio. Donec congue tortor sed convallis porta. In scelerisque, lectus eu sollicitudin pellentesque, 
                        orci augue lacinia nibh, a viverra magna quam quis velit. Sed blandit rhoncus metus et consequat. 
                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

                    </p>
                </div>
            </div>

        </div>
    );
}

export default About;