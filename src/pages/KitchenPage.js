import { Col, Row, Container, Button } from 'reactstrap';
import KITCHENAPPLIANCES from '../shared/KITCHENAPPLIANCES';
import Card_Appliance from '../components/Card_Appliance';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const KitchenPage = () => {
    const [kitchenAppliances, setKitchenAppliances] = useState(KITCHENAPPLIANCES);
    const [filteredKitchenAppliances, setFilteredKitchenAppliances] = useState([]);
    const [activeType, setActiveType] = useState('All');

    useEffect(() => {
        if(activeType === 'All'){
            setFilteredKitchenAppliances(kitchenAppliances)
            return;
        }
        const filtered = kitchenAppliances.filter((appliance) => appliance.type.includes(activeType))
        setFilteredKitchenAppliances(filtered)
    }, [activeType])

    return ( 
        <Container className='my-5'>
            <Row className='border-bottom d-flex align-items-center'>
                <Col>
                    <h1>Kitchen Appliances</h1>
                    <p>Prices and availability are subject to change. Please contact our store to up-to-date pricing, sales, and special offers.</p>
                </Col>
                <Col>
                    <form className="w-100 me-3">
                        <input type="search" className="form-control" onChange={(e) => {
                            setActiveType(e.target.value.toUpperCase())
                            console.log(e.target.value)
                        }} placeholder="Search by model #..." aria-label="Search"></input>
                    </form>
                </Col>

            </Row>
            <Row>
                <div className='d-flex justify-content-evenly my-3 filter-container'>
                    <Button className={activeType === 'All' ? "active" : ''} onClick={() => setActiveType('All')}>All</Button>
                    <Button className={activeType === 'Refrigerator' ? "active" : ''} onClick={() => setActiveType('Refrigerator')}>Refrigerators</Button>
                    <Button className={activeType === 'Range' ? "active" : ''} onClick={() => setActiveType('Range')}>Ranges</Button>
                    <Button className={activeType === 'Oven' ? "active" : ''} onClick={() => setActiveType('Oven')}>Ovens</Button>
                    <Button className={activeType === 'Cooktop' ? "active" : ''} onClick={() => setActiveType('Cooktop')}>Cooktops</Button>
                    <Button className={activeType === 'Dishwasher' ? "active" : ''} onClick={() => setActiveType('Dishwasher')}>Dishwashers</Button>
                    <Button className={activeType === 'Microwave' ? "active" : ''} onClick={() => setActiveType('Microwave')}>Microwaves</Button>
                    <Button className={activeType === 'Garbage' ? "active" : ''} onClick={() => setActiveType('Garbage')}>Garbage Disposals</Button>
                </div>
            </Row>

            <motion.div layout className='d-flex justify-content-evenly my-5'>
                <AnimatePresence>
                    {filteredKitchenAppliances.map((appliance)=> {
                        return (
                            <Card_Appliance key={appliance.model} title={appliance.name} subtitle={appliance.model} image={appliance.image} link={appliance.link} description={appliance.features} />
                        )
                })}
                </AnimatePresence>
            </motion.div>



        </Container>
     );
}
 
export default KitchenPage;