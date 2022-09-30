import { Container } from "reactstrap";
import { BsFacebook } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Footer = () => {
    return ( 
        <Container>
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                    </a>
                    <span className="text-muted footer-text">&copy; 2022 Flecks Appliance Center</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex align-items-center">
                    <a href='https://www.facebook.com/flecksappl/'><li className="ms-3 footer-text"><BsFacebook className="text-muted" /></li></a>
                    <Link to='/ContactPage'><li className="ms-3 footer-text"><FiMail className="text-muted" /></li></Link>
                </ul>
            </footer>
        </Container>
     );
}
export default Footer;