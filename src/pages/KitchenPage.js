import { Col, Row, Container, Button } from 'reactstrap';
import KITCHENAPPLIANCES from '../shared/KITCHENAPPLIANCES';
import Card_Appliance from '../components/Card_Appliance';
import { useState } from 'react';

const KitchenPage = () => {
    const [kitchenAppliances, setKitchenAppliances] = useState(KITCHENAPPLIANCES);


    return ( 
        <Container className='my-5'>
            <Row className='border-bottom d-flex align-items-center'>
                <Col>
                    <h1>Kitchen Appliances</h1>
                    <p>Prices and availability are subject to change. Please contact our store to up-to-date pricing, sales, and special offers.</p>
                </Col>
                <Col>
                    <form className="w-100 me-3">
                        <input type="search" className="form-control" placeholder="Search..." aria-label="Search"></input>
                    </form>
                </Col>

            </Row>
            <Row>
                <div className='filter-container'>
                    <Button>All</Button>
                    <Button>Refrigerators</Button>
                    <Button>Ranges</Button>
                    <Button>Ovens</Button>
                    <Button>Cooktops</Button>
                    <Button>Dishwashers</Button>
                    <Button>Microwaves</Button>
                    <Button>Garbage Disposals</Button>
                </div>
            </Row>
            <Row className='my-5'>
                {/* <Col md='3'>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" checked={true} id="flexCheckDefault"></input>
                        <label className="form-check-label" htmlFor="flexCheckDefault">Refrigerators</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" checked={true} id="flexCheckDefault"></input>
                        <label className="form-check-label" htmlFor="flexCheckDefault">Ranges</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" checked={true} id="flexCheckDefault"></input>
                        <label className="form-check-label" htmlFor="flexCheckDefault">Ovens</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" checked={true} id="flexCheckDefault"></input>
                        <label className="form-check-label" htmlFor="flexCheckDefault">Cooktops</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" checked={true} id="flexCheckDefault"></input>
                        <label className="form-check-label" htmlFor="flexCheckDefault">Dishwashers</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" checked={true} id="flexCheckDefault"></input>
                        <label className="form-check-label" htmlFor="flexCheckDefault">Microwaves</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" checked={true} id="flexCheckDefault"></input>
                        <label className="form-check-label" htmlFor="flexCheckDefault">Garbage Disposals</label>
                    </div>

                </Col> */}
            </Row>
            <Row className='d-flex justify-content-evenly'>
                {kitchenAppliances.map((appliance)=> {
                    return (
                        <Card_Appliance key={appliance.model} title={appliance.name} subtitle={appliance.model} image={appliance.image} link={appliance.link} description={appliance.features} />
                    )
                })}
            </Row>



        </Container>
     );
}
 
export default KitchenPage;