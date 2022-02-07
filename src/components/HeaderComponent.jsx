import React, { Component } from 'react';
import Logo from './img/jumia.jpg'
import "./css/estilo.css";

class HeaderComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <header className="header">
                    <nav className="navbar navbar-expand.md navbar-dark bg-dark">
                        
							<p className="titulo">Customer List</p>
                        
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;