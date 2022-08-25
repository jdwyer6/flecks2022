import { Container, Row } from 'reactstrap';
import ReviewCard from '../components/ReviewCard';
import { SiGooglemaps } from 'react-icons/si'
import { MdBusiness } from 'react-icons/md';

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
                    icon={<SiGooglemaps/>}
                />
                <ReviewCard 
                    title={'Very knowledgeable'} 
                    message={'Flecks is very knowledgeable about every appliance carried. They are extremely competitive with their pricing and even beat all other prices I had compared. Shop here! You will not be disappointed!'} 
                    author={'Adam from Google Maps'}
                    icon={<SiGooglemaps/>}
                />
                <ReviewCard 
                    title={'Great customer service'} 
                    message={'Went looking for a dryer and was surprised to find this awesome place with great customer service. No pressure from the service person, only wonderful info. We walked out with a great deal and will be shopping here again.'} 
                    author={'Mary from Google Maps'}
                    icon={<SiGooglemaps/>}
                />
                <ReviewCard 
                    title={'A hidden gem'} 
                    message={'This company is a hidden gem St. Louis. Their prices were very competitive but it was their GREAT SERVICE that sets them apart. They paid extra attention to details, searched for every discount available, scheduled professional installation, and worked extra hard to earn our business.'} 
                    author={'Sanford from Better Business Bureau'}
                    icon={<MdBusiness />}
                />
            </Row>
        </Container>
     );
}
 
export default ReviewsSection;