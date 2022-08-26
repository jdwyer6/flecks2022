import ProductCard from '../components/Card';
import { Container, Row } from 'reactstrap';
import thumbnailRefrigerator from '../images/thumbnail_refrigerator.jpg';
import thumbnailLaundry from '../images/thumbnail_laundry.jpg';
import thumbnailAC from '../images/thumbnail_ac.jpg';
import thumbnailAll from '../images/thumbnail_all.jpg';

const FeaturedProducts = () => {
    return ( 
        <Container className='featured-product-section-container'>
            <Row className='d-flex justify-content-between'>
                <h4 className='text-center my-2'>Check out our featured products</h4>
                <ProductCard title='Kitchen' subtitle='Refrigerators, dishwashers, ranges, cooktops and more...' image={thumbnailRefrigerator} link='/KitchenPage'/>
                <ProductCard title='Laundry' subtitle='Washers and dryers' image={thumbnailLaundry} link='/LaundryPage'/>
                <ProductCard title='Air Conditioners' subtitle='Wall and window units' image={thumbnailAC} link='/'/>
                <ProductCard title="Most Popular" subtitle='Find great deals' image={thumbnailAll} link='/'/>
            </Row>
        </Container>

     );
}
 
export default FeaturedProducts;