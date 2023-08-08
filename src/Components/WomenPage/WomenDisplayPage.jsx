// Components
import ShoesAndSneakersCode from "./ShoesAndSneakers/ShoesAndSneakersCode";
import ShirtsCode from "./Shirts/ShirtsCode";
import SlippersCode from "./Slippers/SlippersCode";
import TrousersCode from "./Trousers/TrousersCode";
import GownsCode from "./Gowns/GownsCode";
import SkirtsCode from "./Skirts/SkirtsCode"

// Bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

// FetchData Function
import { fetchData } from "../../Helpers/FetchData";

// React Router Dom Imports
import { useLoaderData } from "react-router-dom";

// React imports
import { useState } from 'react';

// CollectionPageLoader Function 
export function WomenDisplayPageLoader() {
    const userName = fetchData("userName")
 
    return { userName }
}

const WomenDisplayPage = () => {

    const { userName } = useLoaderData()

    const [key, setKey] = useState()

    const shirts = "Shirts";

    const trousers = "Trousers";

    const skirts  = "Skirts";

    const gowns = "Gowns";

    const shoes = "Shoes";

    const slippers = "Slippers";

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
                                    eventKey="skirts" 
                                    title={<h5 style={{color: "black", fontWeight: weight, fontFamily: "'Kumbh Sans', sans-serif"}}>{skirts}</h5>}
                                >
                                    <SkirtsCode/>
                                </Tab>
                                <Tab 
                                    eventKey="gowns" 
                                    title={<h5 style={{color: "black", fontWeight: weight, fontFamily: "'Kumbh Sans', sans-serif"}}>{gowns}</h5>}
                                >
                                    <GownsCode/>
                                </Tab>
                                <Tab 
                                    eventKey="shoes" 
                                    title={<h5 style={{color: "black", fontWeight: weight, fontFamily: "'Kumbh Sans', sans-serif"}}>{shoes}</h5>}
                                >
                                    <ShoesAndSneakersCode/>
                                </Tab>
                                <Tab 
                                    eventKey="slippers" 
                                    title={<h5 style={{color: "black", fontWeight: weight, fontFamily: "'Kumbh Sans', sans-serif"}}>{slippers}</h5>}
                                >
                                    <SlippersCode/>
                                </Tab>
                            </Tabs>
                        </Col>
                    </Row>
                </Container>
            }
        </>
    );
}
 
export default WomenDisplayPage;