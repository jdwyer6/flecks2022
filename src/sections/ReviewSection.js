import { Container, Row, Col } from 'reactstrap';
import ReviewCard from '../components/ReviewCard';

const ReviewsSection = () => {
    return ( 
        <Container className='review-section'>
            <Row>
                <h1 className='text-center my-4'>Latest Testimonials</h1>
            </Row>
            <Row>
                <ReviewCard 
                    title={'They really care'} 
                    message={'Flecks flat out knows their products. They were very professional, friendly and had clearly installed appliances a time or two. Leveled everything, test ran, checked everything twice and cleaned up thoroughly. You want quality service at competitive prices? This is your store. Could not have been happier.'} 
                    author={'Eric from Google Maps'}
                />
                <ReviewCard 
                    title={'Very knowledgeable'} 
                    message={'Flecks is very knowledgeable about every appliance carried. They are extremely competitive with their pricing and even beat all other prices I had compared. Shop here! You will not be disappointed!'} 
                    author={'Adam from Google Maps'}
                />
                <ReviewCard 
                    title={'Great deal and great info'} 
                    message={'Went looking for a dryer and was surprised to find this awesome place with great customer service. No pressure from the service person, only wonderful info. We walked out with a great deal and will be shopping here again.'} 
                    author={'Mary from Google Maps'}
                />
            </Row>
        </Container>
     );
}
 
export default ReviewsSection;