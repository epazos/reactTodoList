import React, { Component } from 'react';

class Navigation extends Component {
    render(){
        return (
            <nav className="navbar navbar-dark bg-dark">
                <a href="" className="text-white">
                    Tasks:
                    <span className="badge badge-pill badge-light ml-2">
                    { this.props.tasks }
                    </span>
                </a>
            </nav>
        )
    }
}

export default Navigation;