import { Navbar, Nav, NavLink, NavbarBrand, NavItem} from 'reactstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return ( 
        <div>
            <Navbar className='d-flex justify-content-between nav-container py-1'>
                <Nav>
                    {/* <NavbarBrand> */}
                        <Link to="/" className='text-black text-decoration-none fs-2 brand-title'>Flecks Appliance Center</Link>
                    {/* </NavbarBrand> */}
                </Nav>
                <Nav>
                    <NavItem>
                        {/* <NavLink> */}
                            <Link to='/FeaturedProductsPage' className='text-black text-decoration-none'>Featured Products</Link>
                        {/* </NavLink> */}
                  </NavItem>

                    <NavItem>
                        {/* <NavLink> */}
                            <Link to='/ContactPage' className='text-black text-decoration-none'>Contact us</Link>
                        {/* </NavLink> */}
                    </NavItem>
                </Nav>
            </Navbar>
      </div>
     );
}
 
export default Navigation;