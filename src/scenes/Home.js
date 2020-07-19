import React from "react";
import "./Home.css";
import { Header } from "../component";

const Home = () => {

    return (
        <div className='Home'>
            <Header className="home-header"/>
            <div className="coverall">
                <div className="div1">
                    <style>
                        @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,900&display=swap');
                </style>
                    <h1 className="home-title">BISTRO 6IX</h1>
                    <h3 className="home-slogan">------ Est. 1969 ------</h3>
                </div>
                <div className="div2">

                </div>
            </ div>
        </div>
    );
}

export default Home;