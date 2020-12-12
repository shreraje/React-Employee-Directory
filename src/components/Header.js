import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="display-4">
                        <h1 className="jumbotron bg-dark text-white" style={{ textAlign: "center" }}>Employee Directory</h1>
                        <h2 className="lead" style={{ fontWeight: "bold" }}>List of current employees</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;