import Hero_Image from '../images/hero.jpg';
import { Container, Row } from 'reactstrap';
import Navbar from './Navbar'

const Header = () => {
    return (
        <Container>
            <Row className='hero-container'>
                <div className="hero-image"></div>
                {/* <img className='px-0 hero-image' src={Hero_Image}></img> */}
            </Row>
            
        </Container>
        
     );
}
 
export default Header;