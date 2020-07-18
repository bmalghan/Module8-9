import React from 'react';
import {Link } from "react-router-dom";
import logo from '../assets/logo.png';
import { Order } from "../component";
import "./header.css";


class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = { input: '', isEnter: false };
    }



    render() {
        return (
            <>
                <div className="header">
                    <div className="left-header">
                        <Link to="/home"><img className="header-logo" src={logo}></img></Link>
                    </div>
                    <div className="right-header">
                        <span className="header-button">
                            <Link to="/about"> About </Link>
                        </span>
                        <span className="header-button">
                            <Link to="/menu"> Menu </Link>
                        </span>
                        <span className="header-button order">
                            <Order> Order </Order>
                        </span>
                </div>
            </div>
            </>
        );
    };
}


export default Header;