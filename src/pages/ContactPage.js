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
            <Row className='my-5'>
                <Col sm='6' md='3' className='text-center my-2 my-md-0'>
                    <h3>Address</h3>
                    <p>601 N Jefferson St</p>
                    <p>Florissant, MO 63031</p>
                </Col>
                <Col sm='6' md='3' className='text-center my-2 my-md-0'>
                    <h3>Hours</h3>
                    <p className='my-0'>Monday: 10:00 - 6:30</p>
                    <p className='my-0'>Tuesday: Closed</p>
                    <p className='my-0'>Wednesday: 10:00 - 6:30</p>
                    <p className='my-0'>Thursday: Closed</p>
                    <p className='my-0'>Friday: 10:00 - 6:30</p>
                    <p className='my-0'>Saturday: 10:00 - 3:00</p>
                    <p className='my-0'>Sunday: Closed</p>
                </Col>
                <Col sm='6' md='3' className='text-center my-5 my-md-0 my-2'>
                    <h3>Phone</h3>
                    <p>314-837-3611</p>
                </Col>
                <Col sm='6' md='3' className='text-center my-2 my-md-0'>
                        <h3>Social Media</h3>
                        <p><a href='https://www.facebook.com/flecksappl/'><BsFacebook  style={{width: '25px', height: '25px', color: '#4267B2'}}/></a> @flecksappl</p>
                </Col>
            </Row>
        </Container>
        
        </>
     );
}
 
export default ContactPage;