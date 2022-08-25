import { Col, Row, Container, Button } from 'reactstrap';
import ContactImage from '../images/contact_image.jpg';
import { BsFacebook } from 'react-icons/bs'

const ContactPage = () => {
    return ( 
        <>
        <Container className='my-5'>
            <Row>
                <h1 className='fw-light'>Contact us</h1>
                <img src={ContactImage} style={{width: '100%', height: '50vh', objectFit: 'cover'}}></img>
            </Row>
            <Row className='d-flex flex-row my-5'>
                <Col className='text-center'>
                    <h3>Address</h3>
                    <p>601 N Jefferson St</p>
                    <p>Florissant, MO 63031</p>
                </Col>
                <Col className='text-center'>
                    <h3>Phone</h3>
                    <p>314-837-3611</p>
                </Col>
                <Col className='text-center'>
                    <h3>Social Media</h3>
                    <BsFacebook  style={{width: '50px', height: '50px', color: '#4267B2'}}/>
                </Col>
            </Row>
        </Container>
        
        </>
     );
}
 
export default ContactPage;