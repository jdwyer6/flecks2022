import { Navbar, Nav, NavLink, NavbarBrand, NavItem} from 'reactstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return ( 
        <div>
            <Navbar className='d-flex justify-content-between nav-container py-1'>
                <Nav>
                        <Link to="/" className='text-black text-decoration-none fs-2 brand-title'>Flecks Appliance Center</Link>
                </Nav>
                <Nav>
                    <NavItem>
                            <Link to='/FeaturedProductsPage' className='text-black text-decoration-none mx-3 fw-light'>Featured Products</Link>
                  </NavItem>

                    <NavItem>
                            <Link to='/ContactPage' className='text-black text-decoration-none mx-3 fw-light'>Contact us</Link>
                    </NavItem>
                </Nav>
            </Navbar>
      </div>
     );
}
 
export default Navigation;