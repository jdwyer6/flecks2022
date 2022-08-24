import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

const Card_Appliance = ({title, subtitle, image, link, description}) => {
    return ( 
        <Card className='mx-auto my-3 rounded-0 p-3 card-appliance'>
            <CardSubtitle className="mb-2 text-muted text-center">{subtitle}</CardSubtitle>

            <img alt="Sample" src={image}/>
            
            <CardBody className='d-flex justify-content-center flex-column'>
                <CardTitle tag="h5" className='text-center'>
                    {title}
                </CardTitle>
                <CardText>{description}</CardText>
                <div className='text-center'>
                    <Button href={link} className='my-3'>
                      More info
                    </Button>
                </div>

            </CardBody>
        </Card>
     );
}
 
export default Card_Appliance;