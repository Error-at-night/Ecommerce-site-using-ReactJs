// Components
import MenAndWomenCollectionCode from "./MenAndWomenCollection/MenAndWomenCollectionCode";

// Bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// FetchData Function
import { fetchData } from "../../Helpers/FetchData";

// React Router Dom Imports
import { useLoaderData } from "react-router-dom";

// CollectionDisplayPageLoader Function 
export function CollectionDisplayPageLoader() {
    const userName = fetchData("userName")
 
    return { userName }
}

const CollectionDisplayPage = () => {
    const { userName } = useLoaderData();
    
    return ( 
      <>
        { userName &&
                <Container fluid="sm" className="collectionContainer mb-3 mt-4">
                    <Row>
                        <Col>
                            <MenAndWomenCollectionCode/>
                        </Col>
                    </Row>
                </Container>
        }
      </>
    );
}
 
export default CollectionDisplayPage;