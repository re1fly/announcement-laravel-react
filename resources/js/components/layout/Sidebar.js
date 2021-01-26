import React, {Component} from 'react';
import {Nav, Navbar} from "react-bootstrap";

class Sidebar extends Component {
    render() {
        return (
            <Navbar style={{backgroundColor: "black", height: "100%"}}>
                <Nav className="flex-column">
                    <Nav.Link href="#" style={{color: "white"}}><i className="bi bi-cast"></i>  Display List</Nav.Link>
                    <Nav.Link href="#" style={{color: "white"}}><i className="bi bi-megaphone"></i> Announcement</Nav.Link>
                    <Nav.Link href="#" style={{color: "white"}}><i className="bi bi-columns-gap"></i> Template Announcement</Nav.Link>
                    <Nav.Link href="#" style={{color: "white"}}><i className="bi bi-folder"></i> Media</Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}

export default Sidebar;

