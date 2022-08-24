import ProductCard from '../components/Card';
import { Container, Row } from 'reactstrap';
import thumbnailRefrigerator from '../images/thumbnail_refrigerator.jpg';
import thumbnailLaundry from '../images/thumbnail_laundry.jpg';
import thumbnailAC from '../images/thumbnail_ac.jpg';
import thumbnailFreezer from '../images/thumbnail_freezer.jpg';

const FeaturedProducts = () => {
    return ( 
        <Container fluid className='mt-5 featured-product-section-container'>
            <Row>
                <h4 className='text-center my-2'>Check out our featured products</h4>
                <ProductCard title='Kitchen' subtitle='Refrigerators, dishwashers, ranges, cooktops and more...' image={thumbnailRefrigerator}/>
                <ProductCard title='Laundry' subtitle='Washers and dryers' image={thumbnailLaundry}/>
                <ProductCard title='Air Conditioners' subtitle='Wall and window units' image={thumbnailAC}/>
                <ProductCard title='Chest Freezers' subtitle='Chest freezers' image={thumbnailFreezer}/>
            </Row>
        </Container>

     );
}
 
export default FeaturedProducts;