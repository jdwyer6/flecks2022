import { Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const Card_FeaturedProduct = ({title, subtitle, image, link}) => {
    return ( 
        <Card className='my-3 rounded-0 p-3'
        style={{
            width: '18rem'
        }}
        >
        <img
            alt="Sample"
            src={image}
        />
        <CardBody className='d-flex justify-content-center flex-column'>
            <CardTitle tag="h5" className='text-center'>
                {title}
            </CardTitle>
            <CardSubtitle
                className="mb-2 text-muted text-center"
                tag="h6"
            >
                {subtitle}
            </CardSubtitle>
            <Link to={link} className='text-center'>
                <Button className='my-3'>
                  See more
                </Button>
            </Link>

        </CardBody>
    </Card>
     );
}
 
export default Card_FeaturedProduct;