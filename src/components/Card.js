import { Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const PagesCard = ({title, subtitle, image}) => {
    return ( 
        <Card className='mx-auto my-3 rounded-0 p-3'
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
            <Button className='my-3'>
              See more
            </Button>
        </CardBody>
    </Card>
     );
}
 
export default PagesCard;