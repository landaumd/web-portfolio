import './Navigation.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
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


class Navigation extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.toggleRight = this.toggleRight.bind(this);

        this.state = {
            isOpen: false,
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    toggleRight = () => {
        // var { rightIsOpen } = this.props;




        this.props.dispatch({type:"TOGGLE_RIGHT_IS_OPEN"});



    }

    render() {
        return (
                <Navbar color="light" light fixed='top' expand="sm">
                    <NavbarBrand href="/">reactstrap</NavbarBrand>
                    <NavbarToggler
                        onClick={this.toggle}
                    />
                    <Collapse
                        isOpen={this.state.isOpen}
                        navbar>
                        <Nav className="ml-auto" fixed='top' navbar>
                            <NavItem>
                                <Button className="btn-toggle" onClick={this.toggleRight}>{(this.props.rightIsOpen) ? "See Less" : "See More"}</Button>
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

export default connect((state, props) => {
    return {
        originAmount: state.originAmount,
        rightIsOpen: state.rightIsOpen,
        displayRight: state.displayRight
    }

})(Navigation);