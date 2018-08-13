import '../css/Navigation.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Button,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faCaretSquareUp } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import cardTest from '../json/CardTest.json';
import $ from 'jquery';

library.add(faGithubSquare);
library.add(faLinkedin);
library.add(faCaretSquareUp);


class Navigation extends Component {
    constructor(props) {
        super(props);

        // this.toggle = this.toggle.bind(this);
        this.toggleRight = this.toggleRight.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.filterByCategoryName = this.filterByCategoryName.bind(this);

        this.state = {
            data: cardTest,
            isOpen: false,
            dropdownOpen: false,
            dropDownMenuText: "Filter By Category",
        };
    }

    // toggle() {
    //     this.setState({
    //         isOpen: !this.state.isOpen
    //     });

        $(".rotate").click(function () {
            $(this).toggleClass("down");

            this.setState({
                isOpen: !this.state.isOpen
            });
        });
        // if (this.state.isOpen){
        //     $(".rotate").click(function () {
        //         $(this).toggleClass("down");
        //     });
        // } else {
        //     $(".rotate").click(function () {
        //         $(this).toggleClass("up");
        //     });
        // }

    // }

    toggleRight = () => {
        this.props.dispatch({type:"TOGGLE_RIGHT_IS_OPEN"});
    };

    toggleDropdown() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    filterByCategoryName(category){
        var idsWithCategory = this.findIdsByCategory(category)
        this.props.dispatch({type:"FILTER_BY_CATEGORY", data:{idsWithCategory: idsWithCategory, category: category} });
    }

    findIdsByCategory(category){
        var foundIds = []
        if (category === "filter"){
            Object.entries(this.state.data).map(([i,a]) => {
                foundIds.push(a.myJSONid)
            });
        } else {
            Object.entries(this.state.data).map(([i, a]) => {
                if (a.category.includes(category)) {
                    foundIds.push(a.myJSONid)
                }
            });
        }
        return foundIds
    }

    setMenuText(value){
        switch (value) {
            case "filter":
                this.state.dropDownMenuText = "Filter By Category";
                break
            case "experience":
                this.state.dropDownMenuText = "Experience";
                break;
            case "programming":
                this.state.dropDownMenuText = "Programming";
                break;
            case "school":
                this.state.dropDownMenuText = "School";
                break;
            case "extracurricular":
                this.state.dropDownMenuText = "Extracurricular";
                break;
        }
    }

    onDropdownItem_Click = (sender) => {
        var newState = {
            dropdownvalue: sender.currentTarget.getAttribute("dropdownvalue"),
        };

        this.setState(newState);

        if (!!this.props.onChange) {
            this.props.onChange(newState.dropdownvalue);
        }

        this.setMenuText(newState.dropdownvalue)
        this.filterByCategoryName(newState.dropdownvalue)
    }

    render() {
    return (
            <Navbar color="light" fixed='top' expand="sm">
                <NavbarBrand className="navbar-brand-text" href="/">Portfolio Website</NavbarBrand>

                <NavbarToggler className="navbar-phone-toggle" onClick={this.toggle}>
                    <FontAwesomeIcon className="fa-vc rotate" icon={['fas', 'caret-square-up']} size="1x" color="white"/>
                </NavbarToggler>

                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" fixed='top' >

                        <Button className="btn my-auto btn-outline-light btn-toggle" onClick={this.toggleRight}>{(this.props.rightIsOpen) ? "See Less" : "See More"}</Button>

                        <UncontrolledDropdown className="my-auto ml-2" nav inNavbar isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
                            <DropdownToggle className="btn btn-outline-light btn-toggle" nav caret>
                                {this.state.dropDownMenuText}
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem onClick={this.onDropdownItem_Click} dropdownvalue="filter">
                                    Filter By Category
                                </DropdownItem>
                                <DropdownItem onClick={this.onDropdownItem_Click} dropdownvalue="school">
                                    School
                                </DropdownItem>
                                <DropdownItem onClick={this.onDropdownItem_Click} dropdownvalue="experience">
                                    Experience
                                </DropdownItem>
                                <DropdownItem onClick={this.onDropdownItem_Click} dropdownvalue="programming">
                                    Programming
                                </DropdownItem>
                                <DropdownItem onClick={this.onDropdownItem_Click} dropdownvalue="extracurricular">
                                    Extracurricular
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>

                        <NavLink className="my-auto ml-2" style={{display: 'table-cell', padding : '0px'}} href="https://github.com/reactstrap/reactstrap">
                            <FontAwesomeIcon className="fa-vc" icon={['fab', 'github-square']} size="3x" color="white"/>
                        </NavLink>
                        <NavLink className="my-auto ml-2" style={{display: 'table-cell', padding : '0px'}} href="https://github.com/reactstrap/reactstrap">
                            <FontAwesomeIcon className="fa-vc" icon={['fab', 'linkedin']} size="3x" color="white"/>
                        </NavLink>
                    </Nav>
                </Collapse>
            </Navbar>

        );
    }
}

export default connect((state, props) => {
    return {
        ...state
    }

})(Navigation);