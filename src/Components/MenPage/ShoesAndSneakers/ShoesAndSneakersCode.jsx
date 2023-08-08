// Components
import SlideShow from "../ShoesAndSneakers/SlideShow";

// bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ShoesAndSneakersCode = () => {
    return ( 
        <Container fluid="sm">
            <Row 
              className="align-items-center justify-content-sm-between justify-content-md-between justify-content-lg-around"
            >
              <Col>
                <SlideShow/>
              </Col>
            </Row>
        </Container>
    );
}
 
export default ShoesAndSneakersCode;