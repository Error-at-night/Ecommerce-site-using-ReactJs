// bootstrap imports
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// FetchData Function
import { fetchData } from "../../Helpers/FetchData";

// React Router Dom Imports
import { useLoaderData } from "react-router-dom";

// React imports
import { useState } from 'react';

// components
import ShoesAndSneakersCode from './ShoesAndSneakers/ShoesAndSneakersCode';
import ShirtsCode from './Shirts/ShirtsCode'
import TrousersCode from './Trousers/TrousersCode';


// MenDiplayPageLoader Function 
export function MenDisplayPageLoader() {
    const userName = fetchData("userName")
 
    return { userName }
}

const MenDisplayPage = () => {
    const { userName } = useLoaderData()

    const [key, setKey] = useState()

    const shirts = "Shirts";

    const trousers = "Trousers";

    const shoes = "Shoes";

    const weight = 500

    return ( 
       <>
            { userName &&
                <Container fluid="sm" className="collectionContainer mb-3 mt-4">
                    <Row>
                        <Col>
                            <Tabs
                                id="controlled-tab-example"
                                activeKey={key}
                                onSelect={(k) => setKey(k)}
                                className="mb-3"
                            >
                                <Tab 
                                    eventKey="shirts" 
                                    title={<h5 style={{color: "black", fontWeight: weight, fontFamily: "'Kumbh Sans', sans-serif"}}>{shirts}</h5>}
                                >
                                    <ShirtsCode/>
                                </Tab>
                                <Tab 
                                    eventKey="trousers" 
                                    title={<h5 style={{color: "black", fontWeight: weight, fontFamily: "'Kumbh Sans', sans-serif"}}>{trousers}</h5>}
                                >
                                    <TrousersCode/>
                                </Tab>
                                <Tab 
                                    eventKey="shoes" 
                                    title={<h5 style={{color: "black", fontWeight: weight, fontFamily: "'Kumbh Sans', sans-serif"}}>{shoes}</h5>}
                                >
                                    <ShoesAndSneakersCode />
                                </Tab>
                            </Tabs>
                        </Col>
                    </Row>
                </Container>
            }
       </>
    );
}
 
export default MenDisplayPage;