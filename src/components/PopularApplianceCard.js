import { useState, useEffect } from 'react';
import { Col, Container, Row, Button} from 'reactstrap';

const PopularApplianceCard = ({title, subtitle, imageOption0, imageOption1, imageOption2, link, description}) => {

    const [ previewImage, setPreviewImage ] = useState(imageOption0);

    return ( 
        <div>
            <Container>
                <Row>
                    <Col md='2' className='d-flex flex-column'>
                        <img onClick={()=> {
                            setPreviewImage(imageOption0)
                        }} style={{width: '5rem', margin: '.5rem'}}src={imageOption0}></img>
                        <img onClick={()=>setPreviewImage(imageOption1)} style={{width: '5rem', margin: '.5rem'}}src={imageOption1}></img>
                        <img onClick={()=>setPreviewImage(imageOption2)} style={{width: '5rem', margin: '.5rem'}}src={imageOption2}></img>
                    </Col>
                    <Col>
                        <img style={{width: '20rem'}} src={previewImage}></img>
                    </Col>
                    <Col>
                        <h3>{title}</h3>
                        <h5>{subtitle}</h5>
                        <p>{description}</p>
                        <Button href={link}>Check price</Button>
                    </Col>
                </Row>


            </Container>
        </div>
     );
}
 
export default PopularApplianceCard;