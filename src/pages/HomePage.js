import Header from '../components/Header';
import History from '../sections/HistorySection'
import FeaturedProducts from '../sections/FeaturedProductsSection'
import ReviewSection from '../sections/ReviewSection';

const HomePage = () => {
    return ( 
        <>
            <Header />
            <FeaturedProducts />
            <History />
            <ReviewSection />
        </>

     );
}
 
export default HomePage;