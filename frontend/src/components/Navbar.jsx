import React , { Component } from 'react';
import { Navbar as NavB, Nav, NavDropdown, MenuItem } from 'react-bootstrap';

class Navbar extends Component{
    render(){
        return(
            <NavB>
                <NavB.Header>
                    <NavB.Brand>
                        <a style={{fontSize: 3+'em'}}>Teiko</a>
                    </NavB.Brand>
                </NavB.Header>
                <Nav className="pull-right">
                    <NavDropdown title="Languages" id="basic-nav-dropdown">
                        <MenuItem>PHP</MenuItem>
                    </NavDropdown>
                </Nav>
            </NavB>            
        )
    }
}

export default Navbar;