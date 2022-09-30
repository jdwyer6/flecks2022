import Card_FeaturedProduct from '../components/Card_FeaturedProduct';
import { Container, Row } from 'reactstrap';
import thumbnailRefrigerator from '../images/thumbnail_refrigerator.jpg';
import thumbnailLaundry from '../images/thumbnail_laundry.jpg';
import thumbnailAC from '../images/thumbnail_ac.jpg';
import thumbnailAll from '../images/thumbnail_all.jpg';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
    return ( 
        <Container className='featured-product-section-container small-device-margins p-auto p-md-0'>
            <Row className='mx-auto'>
                <h4 className='text-center my-2 fw-light'>Check out our featured products</h4>
                <Card_FeaturedProduct title='Kitchen' subtitle='Refrigerators, dishwashers, ranges, cooktops and more...' image={thumbnailRefrigerator} link='KitchenPage'/>
                <Card_FeaturedProduct title='Laundry' subtitle='Washers and dryers' image={thumbnailLaundry} link='/LaundryPage'/>
                <Card_FeaturedProduct title='Air Conditioners' subtitle='Wall and window units' image={thumbnailAC} link='/ACPage'/>
                {/* <Card_FeaturedProduct title="Most Popular" subtitle='Find great deals' image={thumbnailAll} link='/PopularPage'/> */}
            </Row>
        </Container>

     );
}
 
export default FeaturedProducts;