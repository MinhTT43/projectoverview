import React, {Component} from 'react';
import "./Navbar.css"

class Navbar extends Component {
    render() {
        return (
            <nav className={"navbar navbar-expand-lg navbar-dark bg-dark pt-2 pb-2 pl-4"}>
                <a href={"/home"}>
                    <img src={"https://png.pngtree.com/png-clipart/20190619/original/pngtree-vector-house-icon-png-image_4013530.jpg"}
                         alt={"Home Logo"}
                         style={{maxWidth:"60px", borderRadius:"50%"}} />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className={"navbar-toggler-icon"}/>
                </button>


                <div className={"collapse navbar-collapse ml-3"} id={"navbarSupportedContent"}>
                    <ul className={"navbar-nav mr-auto"}>
                        <li className={"nav-item"}>
                            <a className={"nav-link"} href={"/home"}> Home </a>
                        </li>
                        <li className={"nav-item"}>
                            <a className={"nav-link"} href={"/about"}>About</a>
                        </li>
                        <li className={"nav-item"}>
                            <a className={"nav-link"} href={"/projects"}>Projects</a>
                        </li>
                    </ul>
                </div>

            </nav>
        );
    }
}

export default Navbar;