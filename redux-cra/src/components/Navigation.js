import './Navigation.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import {simpleAction} from "../actions/simpleAction";
import configureStore from '../store.js';
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


// const store = configureStore();

class Navigation extends Component {
    constructor(props) {
        super(props);

        // this.toggle = this.toggle.bind(this);
        //
        // this.state = {
        //     isOpen: false,
        // };
    }

    // toggle() {
    //     this.setState({
    //         isOpen: !this.state.isOpen
    //     });
    // }

    toggleRight = () => {
        store.dispatch(withdrawMoney(100));
        console.log(this.props);
    }

    // simpleAction = (event) => {
    //     console.log(this.props);
    //     this.props.simpleAction();
    // }

    render() {
        const { value, onIncreaseClick } = this.props;
        return (
                <Navbar color="light" light fixed='top' expand="sm">
                    <NavbarBrand href="/">reactstrap</NavbarBrand>
                    <NavbarToggler
                        // onClick={this.toggle}
                    />
                    <div>
                        <span>{value}</span>
                        <button onClick={onIncreaseClick}>Increase</button>
                    </div>
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

function withdrawMoney(amount) {
    return {
        type: 'WITHDRAW',
        amount
    };
}


// const mapStateToProps = state => ({
//     rightIsOpen: false,
//     ...state,
// });
//
// const mapDispatchToProps = dispatch => ({
//     simpleAction: () => dispatch(simpleAction())
// });



// React component
// class Counter extends Component {
//     render() {
//         const { value, onIncreaseClick } = this.props
//         return (
//             <div>
//                 <span>{value}</span>
//                 <button onClick={onIncreaseClick}>Increase</button>
//             </div>
//         )
//     }
// }

// Counter.propTypes = {
//     value: PropTypes.number.isRequired,
//     onIncreaseClick: PropTypes.func.isRequired
// }

// Action
const increaseAction = { type: 'increase' }

// Reducer
// function counter(state = { count: false }, action) {
//     const count = state.count
//     switch (action.type) {
//         case 'increase':
//             return { count: true }
//         default:
//             return state
//     }
// }

// Store
const store = configureStore();

// Map Redux state to component props
function mapStateToProps(state) {
    console.log(state);
    return {
        value: state.count
    }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch(increaseAction)
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(Navigation);