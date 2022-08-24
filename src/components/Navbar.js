import { Navbar, Nav, NavLink, NavbarBrand, NavItem} from 'reactstrap';

const Navigation = () => {
    return ( 
        <div>
            <Navbar className='d-flex justify-content-between nav-container py-1'>
                <Nav>
                    <NavbarBrand className='text-black fs-2 brand-title' href="/">Flecks Appliance Center</NavbarBrand>
                </Nav>
                <Nav>
                    <NavItem>
                        <NavLink className='text-black' href="/FeaturedProductsPage">Featured Products</NavLink>
                  </NavItem>

                    <NavItem>
                        <NavLink className='text-black' href="/ContactPage">Contact us</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
      </div>
     );
}
 
export default Navigation;