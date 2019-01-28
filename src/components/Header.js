import React from 'react';
import {Link} from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';

const Header = () => {
  return (
    <div>
    <Navbar color="light" light expand="md">
      <NavbarBrand tag={Link} to="/">TO DO LIST</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/list">LIST</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/about">ABOUT</NavLink>
          </NavItem>
        </Nav>
    </Navbar>
  </div>
  )
};

export default Header;
