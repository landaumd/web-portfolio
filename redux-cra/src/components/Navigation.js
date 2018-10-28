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
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import MeganContent from '../config/MeganContent.json';
import Config from '../config/Config.json';

library.add(faGithubSquare);
library.add(faLinkedin);
library.add(faCaretUp);

var rotated = false;

class Navigation extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.toggleRight = this.toggleRight.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.filterByCategoryName = this.filterByCategoryName.bind(this);

        this.state = {
            config: Config,
            data: MeganContent,
            isOpen: false,
            dropdownOpen: false,
            dropDownMenuText: "Filter By Category",
            isFiltered: false,
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
        var element = document.getElementById('caret');
        var angle = rotated ? 0 : 180;

        element.style.webkitTransform = 'rotate(' + angle + 'deg)';
        element.style.mozTransform = 'rotate(' + angle + 'deg)';
        element.style.msTransform = 'rotate(' + angle + 'deg)';
        element.style.oTransform = 'rotate(' + angle + 'deg)';
        element.style.transform = 'rotate(' + angle + 'deg)';

        rotated = !rotated;
    }

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

        if (category === "filter"){
            this.state.isFiltered = false
        } else (
            this.state.isFiltered = true
        )
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
                break;
            case "Industry":
                this.state.dropDownMenuText = "Industry";
                break;
            case "School":
                this.state.dropDownMenuText = "School";
                break;
            case "Independent":
                this.state.dropDownMenuText = "Independent";
                break;
            case "Projects":
                this.state.dropDownMenuText = "Projects";
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
            <Navbar fixed='top' expand="sm">
                <NavbarBrand className="navbar-brand-text" href="/" style={{"padding" : "0px"}}>
                    <img className="my-logo" src={require('../' + this.state.config['path-to-images-folder'] + this.state.config['logo'])}
                         height="80px"
                         alt="logo"
                         style={{padding: 10}}
                    />
                </NavbarBrand>

                <NavbarToggler className="navbar-phone-toggle" onClick={this.toggle}>
                    <FontAwesomeIcon id="caret" className="fa-vc" icon={['fas', 'caret-up']} size="2x" color="black"/>
                </NavbarToggler>

                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" fixed='top' >

                        <Button className="btn my-auto no-bg" onClick={this.toggleRight}>{(this.props.rightIsOpen) ? "See Less" : "See More"}</Button>

                        <UncontrolledDropdown className="my-auto ml-2 my-dropdown" nav inNavbar isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
                            <DropdownToggle className="btn btn-toggle" nav caret>
                                {this.state.dropDownMenuText}
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem onClick={this.onDropdownItem_Click} dropdownvalue="filter">
                                    {(this.state.isFiltered ? "Clear Filter" : "Filter By Category")}
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem onClick={this.onDropdownItem_Click} dropdownvalue="Industry">
                                    Industry
                                </DropdownItem>
                                <DropdownItem onClick={this.onDropdownItem_Click} dropdownvalue="School">
                                    School
                                </DropdownItem>
                                <DropdownItem onClick={this.onDropdownItem_Click} dropdownvalue="Independent">
                                    Independent
                                </DropdownItem>
                                <DropdownItem onClick={this.onDropdownItem_Click} dropdownvalue="Projects">
                                    Projects
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavLink className="my-auto ml-2 fa" style={{display: 'table-cell', padding : '0px'}} href={this.state.config.github} rel="noopener noreferrer" target="_blank">
                            <FontAwesomeIcon className="fa-vc" icon={['fab', 'github-square']} size="2x" color="#C0AA37"/>
                        </NavLink>
                        <NavLink className="my-auto ml-2 fa" style={{display: 'table-cell', padding : '0px'}} href={this.state.config.linkedin} rel="noopener noreferrer" target="_blank">
                            <FontAwesomeIcon className="fa-vc" icon={['fab', 'linkedin']} size="2x" color="#B7DDD3"/>
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