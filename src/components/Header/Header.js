import React, { Component } from "react";
import { Link } from "react-router-dom";

import classes from "./Header.module.css";
import Navigation from "../Navigation/Navigation";

class Header extends Component {
    state = {
        title: "HOTBETS"
    };

    componentDidMount() {
        const url =
            (process.env.REACT_APP_SERVER_IP ||
                "ec2-50-18-151-62.us-west-1.compute.amazonaws.com/") + "api";

        fetch(url).then(async response => {
            if (response.ok) {
                let json = await response.json();
                console.log("api: ", json);
                const {
                    data: { title }
                } = ({} = json);
                this.setState({ title: title || "HOTBETS" });
            } else {
                console.error("HTTP-Error: " + response.status);
            }
        });
    }

    render() {
        const { title } = this.state;

        return (
            <header className={classes.Header}>
                <Link to="/" className={classes.h1}>
                    <div className={classes.logo}></div>
                </Link>
                <Navigation />
            </header>
        );
    }
}

export default Header;
