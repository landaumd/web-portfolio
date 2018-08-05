import React from 'react';
import './Navigation.css';

import {
    Button,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import {connect} from "react-redux";
import {simpleAction} from "../actions/simpleAction";

class Navigation extends React.Component {
    // constructor(props) {
    //     super(props);
    //
    //     this.toggle = this.toggle.bind(this);
    //
    //     this.state = {
    //         isOpen: false,
    //     };
    // }

    // toggle() {
    //     this.setState({
    //         isOpen: !this.state.isOpen
    //     });
    // }

    toggleRight = () => {
        
        console.log(this.props);
    }

    simpleAction = (event) => {
        console.log(this.props);
        this.props.simpleAction();
    }

    render() {
        return (
                <Navbar color="light" light fixed='top' expand="sm">
                    <NavbarBrand href="/">reactstrap</NavbarBrand>
                    <NavbarToggler
                        // onClick={this.toggle}
                    />
                    <Collapse
                        // isOpen={this.state.isOpen}
                        navbar>
                        <Nav className="ml-auto" fixed='top' navbar>
                            <NavItem>
                                <Button className="btn-toggle" onClick={this.toggleRight}>{(this.props.rightIsOpen) ? "Open" : "Closed"}</Button>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Options
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Option 1
                                    </DropdownItem>
                                    <DropdownItem>
                                        Option 2
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Reset
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>

        );
    }
}

const mapStateToProps = state => ({
    rightIsOpen: false,
    ...state,
});

const mapDispatchToProps = dispatch => ({
    simpleAction: () => dispatch(simpleAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);