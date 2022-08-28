import { Col, Row, Container, Button } from 'reactstrap';
import KITCHENAPPLIANCES from '../shared/KITCHENAPPLIANCES';
import Card_Appliance from '../components/Card_Appliance';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroImage from '../images/kitchen_hero.jpg'

const KitchenPage = () => {
    const [kitchenAppliances, setKitchenAppliances] = useState(KITCHENAPPLIANCES);
    const [filteredKitchenAppliances, setFilteredKitchenAppliances] = useState([]);
    const [activeType, setActiveType] = useState('All');

    useEffect(() => {
        if(activeType === 'All'){
            setFilteredKitchenAppliances(kitchenAppliances)
            return;
        }
        const filtered = kitchenAppliances.filter((appliance) => appliance.type.includes(activeType) || appliance.model.includes(activeType))
        setFilteredKitchenAppliances(filtered)
    }, [activeType])

    return ( 
        <Container className='my-5'>
            <Row className='d-flex align-items-center'>
                <h1>Kitchen Appliances</h1>
                <p>Prices and availability are subject to change. Please contact our store for up-to-date pricing, sales, and special offers.</p>
            </Row>
            <Row>
                <img src={HeroImage} className='featured-product-hero-image'></img>
            </Row>
            <Row className='mt-5'>
                <h4>Search and filter</h4>
                <form className="w-100 me-3">
                    <input type="search" className="form-control" onChange={(e) => {
                        setActiveType(e.target.value.toUpperCase())
                        console.log(e.target.value)
                    }} placeholder="Search by model #..." aria-label="Search"></input>
                </form>
            </Row>
            <Row>
                <div className='d-flex flex-wrap justify-content-between my-3 filter-container'>
                    <Button className={activeType === 'All' ? "active my-1" : 'my-1'} onClick={() => setActiveType('All')}>All</Button>
                    <Button className={activeType === 'Refrigerator' ? "active my-1" : 'my-1'} onClick={() => setActiveType('Refrigerator')}>Refrigerators</Button>
                    <Button className={activeType === 'Range' ? "active my-1" : 'my-1'} onClick={() => setActiveType('Range')}>Ranges</Button>
                    <Button className={activeType === 'Oven' ? "active my-1" : 'my-1'} onClick={() => setActiveType('Oven')}>Ovens</Button>
                    <Button className={activeType === 'Cooktop' ? "active my-1" : 'my-1'} onClick={() => setActiveType('Cooktop')}>Cooktops</Button>
                    <Button className={activeType === 'Dishwasher' ? "active my-1" : 'my-1'} onClick={() => setActiveType('Dishwasher')}>Dishwashers</Button>
                    <Button className={activeType === 'Microwave' ? "active my-1" : 'my-1'} onClick={() => setActiveType('Microwave')}>Microwaves</Button>
                    <Button className={activeType === 'Garbage' ? "active my-1" : 'my-1'} onClick={() => setActiveType('Garbage')}>Garbage Disposals</Button>
                </div>
            </Row>
            <Row className='d-flex justify-content-between my-5 appliance-search-container'>
 
                <motion.div layout className='d-flex flex-wrap justify-content-center'>
                    <AnimatePresence className='bg-primary'>
                    {filteredKitchenAppliances.length > 0 ? 
                        
                            filteredKitchenAppliances.map((appliance)=> {
                                return ( 
                                    <Col className='d-flex justify-content-center m-0 p-0'>
                                        <Card_Appliance key={appliance.model} title={appliance.name} subtitle={appliance.model} image={appliance.image} link={appliance.link} description={appliance.features} />
                                    </Col>    
                                ) 
                            })
                        
                    : <p className='mx-auto'>Hmm...Looks like we don't have any appliances that match your filter</p>}
                    </AnimatePresence>
                </motion.div>
            </Row>
        </Container>
     );
}
 
export default KitchenPage;