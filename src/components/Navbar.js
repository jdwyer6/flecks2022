import {
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
    DropdownItem,
    NavbarText,
    Dropdown,
    Container
} from 'reactstrap';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';

const Navigation = (args) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleHamburger = () => setIsOpen(!isOpen);

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(!dropdownOpen);

    return ( 
        <Container>
            <Navbar {...args} className='d-flex justify-content-between nav-container py-1'>
                <NavbarBrand>
                    <Link to="/" className='text-black text-decoration-none fs-2 brand-title disappear-on-large mobile-brand'>Flecks Appliance</Link>
                    <Link to="/" className='text-black text-decoration-none fs-2 brand-title disappear-on-small'>Flecks Appliance Center</Link>
                </NavbarBrand>
                    <NavbarToggler onClick={toggleHamburger} className='disappear-on-large'/>
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="me-auto" navbar>
                            <NavItem>
                                <NavLink href="/components/">Home</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>Featured Products</DropdownToggle>
                                <DropdownMenu end>
                                    <DropdownItem>Option 1</DropdownItem>
                                    <DropdownItem>Option 2</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>Reset</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">
                                    Contact
                                </NavLink>
                            </NavItem>
    
                        </Nav>
                    </Collapse>


                <Nav className='disappear-on-small'>
                    <div className='d-flex align-items-center'>
                        <Link to='/' className='text-black text-decoration-none fw-light'>Home</Link>
                    </div>
                    <div>
                    <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>

                        <DropdownToggle nav caret className='text-black text-decoration-none fw-light'>
                            Featured Products
                        </DropdownToggle>
                        <DropdownMenu>
                            <div className='d-flex flex-column px-2'>
                            <Link  className='text-decoration-none text-black fw-light'to='/KitchenPage'>Kitchen</Link>
                            <Link className='text-decoration-none text-black fw-light' to='/LaundryPage'>Laundry</Link>
                            <Link className='text-decoration-none text-black fw-light' to='/ACPage'>AC</Link>
                            <DropdownItem divider />
                            <Link className='text-decoration-none text-black fw-light' to='/PopularPage'>Most Popular</Link>
                            </div>

                        </DropdownMenu>
                    </Dropdown>
                    </div>
                    <div className='d-flex align-items-center'>
                        <Link to='/ContactPage' href="#" className='text-black text-decoration-none fw-light'>Contact us</Link>
                    </div>
                    
                </Nav>

                
            </Navbar>




      </Container>
     );
}
 
export default Navigation;