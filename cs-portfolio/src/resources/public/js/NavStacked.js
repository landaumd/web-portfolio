import React, { PureComponent } from "react";
// import "../css/NavStacked.css";
import { Navbar, Nav, NavItem } from 'react-bootstrap';

function handleSelect(selectedKey) {
    alert(`selected ${selectedKey}`);
}

class NavStacked extends PureComponent {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#home">React-Bootstrap</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav bsStyle="pills" stacked activeKey={1} onSelect={handleSelect}>
                    <NavItem eventKey={1} href="/home">
                        NavItem 1 content
                    </NavItem>
                    <NavItem eventKey={2} title="Item">
                        NavItem 2 content
                    </NavItem>
                    <NavItem eventKey={3} disabled>
                        NavItem 3 content
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default NavStacked;