import Hero_Image from '../images/hero.jpg';
import { Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import Navbar from './Navbar'

const Header = () => {
    return (
        <Container fluid className=''>
            <Row className='hero-container'>
                <div className="hero-image"></div>
                {/* <img className='px-0 hero-image' src={Hero_Image}></img> */}
            </Row>
            
        </Container>
        
     );
}
 
export default Header;