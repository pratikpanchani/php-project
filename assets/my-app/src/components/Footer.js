import React, { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <footer className= "fixed-bottom">
                        <div className="footer-copyright text-left py-1">
                            © 2020 Copyright - Pratik Panchani | <a href="mailto:pratikpatel5357@gmail.com">pratikpatel5357@gmail.com </a>
                        </div>
                    </footer>
                </div>
            </React.Fragment >
        );
    }
}
export default Footer;