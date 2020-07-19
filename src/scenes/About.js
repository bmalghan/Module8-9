import React, { useState } from "react";
import "./About.css";

import { Header } from "../component";
import data from "./about-local.json"
import { Paper } from "material-ui";


function About() {
    console.log(data);
    const [lang, setLang] = React.useState("en");
    return (

        <div className='About'>
            <Header classname="home-search div1" />
            <div className="about-row-1">
                <div className="about1">
                    <img src={require('./outside.jpg')}></img>
                </div>
                <div className="about2">
                    <p style={{ fontSize: "24px" }}>
                        {data[lang][0]}
                    </p>

                </div>
            </div>

            <div className="about-row-2">
                <h3 style={{ fontSize: "28px"}}>{data[lang][1]}</h3>
                <div className="chefs-row">
                    <Paper className="chef-paper">
                        <img src={require('./al.jpg')}></img>
                        <h3>{data[lang][2]}</h3>
                        <p>{data[lang][3]}</p>
                    </Paper>

                    <Paper className="chef-paper">
                        <img src={require('./lilly.jpg')}></img>
                        <h3>{data[lang][4]}</h3>
                        <p>{data[lang][5]}</p>
                    </Paper>

                </div>
            </div>

            <div className="about-row-3">
                <div className="fifty">

                    <h3 style={{ fontSize: "24px" }}>{data[lang][6]}</h3>
                    <img style={{ width: "40%" }} src={require('./map.jpg')}></img>
                    <p>{data[lang][7]}</p>
                    <p>{data[lang][8]}</p>
                </div>
                <div className="fifty">
                <h3 style={{ fontSize: "24px" }}>{data[lang][9]}</h3>
                    <p style={{ fontWeight: "300" }}>{data[lang][10] + ": "  + data[lang][11]}</p>
                    <p style={{ fontWeight: "300" }}>{data[lang][12] + ": "  + data[lang][13]}</p>
                    <p style={{ fontWeight: "300" }}>{data[lang][14] + ": "  + data[lang][15]}</p>
                    <p style={{ fontWeight: "300" }}>{data[lang][16] + ": "  + data[lang][17]}</p>
                    <p style={{ fontWeight: "300" }}>{data[lang][18] + ": "  + data[lang][19]}</p>
                    <p style={{ fontWeight: "300" }}>{data[lang][20] + ": "  + data[lang][21]}</p>
                    <p style={{ fontWeight: "300" }}>{data[lang][22] + ": "  + data[lang][23]}</p>
                </div>
            </div>

            <div className="about-row-4">
                     {data[lang][24]} &nbsp;
                <button onClick={() => setLang("fr")}>Francais</button>&nbsp;
                    <button onClick={() => setLang("en")}>English</button>
            </div>
        </div>
    );
}

export default About;