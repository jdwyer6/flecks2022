import { Col, Row, Container, Button } from 'reactstrap';
import POPULARAPPLIANCES from '../shared/POPULARAPPLIANCES';
import PopularApplianceCard from '../components/PopularApplianceCard';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroImage from '../images/laundry_hero.jpg'

const FeaturedProductsPage = () => {
    const [appliances, setAppliances] = useState(POPULARAPPLIANCES);
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
            {/* <Row className='my-5'> */}
                {/* <Col md='3' className='d-flex align-items-start'>
                    <div className='my-3 d-flex justify-content-center flex-wrap flex-column filter-container'>
                        <Button style={{width:'10rem', height: '3rem'}} className={activeType === 'All' ? "active mx-3 my-1" : 'mx-3 my-1'} onClick={() => setActiveType('All')}>All</Button>
                        <Button style={{width:'10rem', height: '3rem'}} className={activeType === 'Washer' ? "active mx-3 my-1" : 'mx-3 my-1'} onClick={() => setActiveType('Washer')}>Washers</Button>
                        <Button style={{width:'10rem', height: '3rem'}} className={activeType === 'Dryer' ? "active mx-3 my-1" : 'mx-3 my-1'} onClick={() => setActiveType('Dryer')}>Dryers</Button>
                        <Button style={{width:'10rem', height: '3rem'}} className={activeType === 'Stacked' ? "active mx-3 my-1" : 'mx-3 my-1'} onClick={() => setActiveType('Stacked')}>Stacked Combos</Button>
                    </div>
                </Col> */}
                <div className='d-flex justify-content-between'>
                    <div layout className='d-inline-flex justify-content-between flex-wrap'>
                            {filteredAppliances.map((appliance)=> {
                                return (
                                    <Col className='d-flex justify-content-center my-5 p-0'>
                                        <PopularApplianceCard key={appliance.model} title={appliance.name} subtitle={appliance.model} imageOption0={appliance.image[0]} imageOption1={appliance.image[1]} imageOption2={appliance.image[2]} link={appliance.link} description={appliance.features} />
                                    </Col>

                                )
                            })}
                    </div>
                </div>
            {/* </Row> */}


        </Container>
     );
}
 
export default FeaturedProductsPage;