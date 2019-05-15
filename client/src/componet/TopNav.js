import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';

import Home from "../pages/home";
import Login from "../pages/login";
import urlLogo from "../img/book-shop.svg";



class TopNav extends React.Component{
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
    }

    toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }

    render() {
        return(
            <Router>
            <div>
            <Navbar color="light" light expand="md" className="px-5">
                <NavbarBrand href="/">
                    <img src={urlLogo} width={50} alt="Logo Brand"/>
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link className="nav-link" to="/"> Home </Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="/login"> Login </Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
              <Route path="/" exact component={Home} />
              <Route path="/login/" component={Login} />
            </div>
          </Router>
        );
    }

}

export default TopNav;
