import React, { Component } from 'react';
import {Form, Nav, Navbar, Button, FormControl} from "react-bootstrap";

class Header extends Component {
    render() {
        return(
            <Navbar style={{backgroundColor: "black", height: "65px"}}>
                <Navbar.Brand href="#home" style={{color: "#F9C900"}}><i className="bi bi-display"></i> NoticeBoard</Navbar.Brand>
                    <FormControl type="text" placeholder="Search" style={{width:"30%", marginLeft: "30%"}}/>
            </Navbar>
        );
    }
}

export default Header;
