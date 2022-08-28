import { Col, Row, Container, Button } from 'reactstrap';
import AIRCONDITIONERS from '../shared/AIRCONDITIONERS';
import Card_Appliance from '../components/Card_Appliance';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroImage from '../images/AC_hero.jpg'

const ACPage = () => {
    const [appliances, setAppliances] = useState(AIRCONDITIONERS);
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
            <Row className='d-flex align-items-center'>
                <h1>Air Condioning</h1>
                <p>Prices and availability are subject to change. Please contact our store for up-to-date pricing, sales, and special offers.</p>
            </Row>
            <Row>
                <img src={HeroImage} className='featured-product-hero-image'></img>
            </Row>
            <Row className='mt-5'>
                <h4>Search</h4>
                <form className="w-100 me-3">
                    <input type="search" className="form-control" onChange={(e) => {
                        setActiveType(e.target.value.toUpperCase())
                        console.log(e.target.value)
                    }} placeholder="Search by model #..." aria-label="Search"></input>
                </form>
            </Row>

            <Row className='d-flex justify-content-between my-5'>
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
            </Row>
        </Container>
     );
}
 
export default ACPage;