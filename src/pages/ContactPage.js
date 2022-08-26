import { Col, Row, Container, Button } from 'reactstrap';
import ContactImage from '../images/contact_image.jpg';
import { BsFacebook } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const ContactPage = () => {
    return ( 
        <>
        <Container className='my-5'>
            <Row>
                <h1 className='fw-light'>Contact us</h1>
                <img src={ContactImage} style={{width: '100%', height: '50vh', objectFit: 'cover'}}></img>
            </Row>
            <Row className='d-flex my-5'>
                <Col className='text-start'>
                    <h3>Address</h3>
                    <p>601 N Jefferson St</p>
                    <p>Florissant, MO 63031</p>
                </Col>
                <Col className='text-center'>
                    <h3>Phone</h3>
                    <p>314-837-3611</p>
                </Col>
                <Col className='text-end'>
                        <h3>Social Media</h3>
                        <p><a href='https://www.facebook.com/flecksappl/'><BsFacebook  style={{width: '25px', height: '25px', color: '#4267B2'}}/></a> @flecksappl</p>
                </Col>
            </Row>
        </Container>
        
        </>
     );
}
 
export default ContactPage;