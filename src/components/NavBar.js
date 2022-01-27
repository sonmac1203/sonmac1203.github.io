import React, { useState } from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  NavbarText,
  Collapse,
  NavbarBrand,
  NavLink,
} from 'reactstrap';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar fixed='top' color='light' light expand='md'>
        {/* <NavbarBrand href='/' className='ml-5'>
          SM
        </NavbarBrand> */}
        <Collapse isOpen={isOpen} navbar>
          <Nav className='ml-auto' navbar>
            <NavItem>
              <NavLink href='#about'>1. About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#experiences'>2. Experiences</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#projects'>3. Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#contact'>4. Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
