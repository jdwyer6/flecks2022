import { Col, Row, Container, Button } from 'reactstrap';
import LAUNDRYAPPLIANCES from '../shared/LAUNDRYAPPLIANCES';
import Card_Appliance from '../components/Card_Appliance';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroImage from '../images/laundry_hero.jpg'

const FeaturedProductsPage = () => {
    const [appliances, setAppliances] = useState(LAUNDRYAPPLIANCES);
    const [filteredAppliances, setFilteredAppliances] = useState([]);
    const [activeType, setActiveType] = useState('All');

    useEffect(() => {
        if(activeType === 'All'){
            setFilteredAppliances(appliances)
            return;
        }
        const filtered = appliances.filter((appliance) => appliance.type.includes(activeType) || appliance.model.includes(activeType))
        setFilteredAppliances(filtered)
    }, [activeType])

    return ( 
        <Container className='my-5'>
            <Row className='d-flex align-items-center border-bottom'>
                <h1>Most Popular Products</h1>
                <p>Prices and availability are subject to change. Please contact our store for up-to-date pricing, sales, and special offers.</p>
            </Row>
            <Row className='my-5'>
                <Col md='2'>
                    <div className='d-flex justify-content-center flex-wrap my-3 filter-container'>
                        <Button style={{width:'10rem'}}className={activeType === 'All' ? "active mx-3 my-1" : 'mx-3 my-1'} onClick={() => setActiveType('All')}>All</Button>
                        <Button style={{width:'10rem'}}className={activeType === 'Washer' ? "active mx-3 my-1" : 'mx-3 my-1'} onClick={() => setActiveType('Washer')}>Washers</Button>
                        <Button style={{width:'10rem'}}className={activeType === 'Dryer' ? "active mx-3 my-1" : 'mx-3 my-1'} onClick={() => setActiveType('Dryer')}>Dryers</Button>
                        <Button style={{width:'10rem'}}className={activeType === 'Stacked' ? "active mx-3 my-1" : 'mx-3 my-1'} onClick={() => setActiveType('Stacked')}>Stacked Combos</Button>
                    </div>
                </Col>
                <Col className='d-flex justify-content-between'>
                    {<motion.div layout className='d-inline-flex justify-content-between flex-wrap'>
                        <AnimatePresence> 
                            {filteredAppliances.map((appliance)=> {
                                return (
                                    <Col className='d-flex justify-content-center m-0 p-0'>
                                        <Card_Appliance key={appliance.model} title={appliance.name} subtitle={appliance.model} image={appliance.image} link={appliance.link} description={appliance.features} />
                                    </Col>

                                )
                            })}
                        </AnimatePresence> 
                    </motion.div>}
                </Col>
            </Row>


        </Container>
     );
}
 
export default FeaturedProductsPage;