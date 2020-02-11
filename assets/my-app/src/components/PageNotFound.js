import React, { Component } from "react";
import NavBar from "./navBar"
import Footer from './Footer';


class PageNotFound extends Component {
    render() {
        return (
            <div className="menu">
                <NavBar />

                <h1>Page Not Found</h1>
                <Footer />
            </div>
        );
    }
}

export default PageNotFound;