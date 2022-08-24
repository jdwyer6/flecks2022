import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import { motion } from 'framer-motion';

const Card_Appliance = ({title, subtitle, image, link, description}) => {
    return ( 
        <motion.div 
            layout
            animate={{ opacity: 1 }} 
            inital={{ opacity: 0}}
            exit={{ opacity: 0}}
            >
            <Card className='mx-auto my-3 p-3 border-0 card-appliance' style={{width: '20rem'}}>
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
        </motion.div>

     );
}
 
export default Card_Appliance;