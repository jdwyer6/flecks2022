import Hero_Image from '../images/hero.jpg';
import { Container, Row } from 'reactstrap';
import Navbar from './Navbar'

const Header = () => {
    return (
        <Container>
            <Row className='hero-container'>
                <div className="hero-image"></div>
            </Row>
            
        </Container>
        
     );
}
 
export default Header;