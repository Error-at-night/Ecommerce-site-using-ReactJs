// bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// sass
import "../../Sass/WelcomePage.scss"

// rect-router-dom imports
import { Link } from 'react-router-dom';

// library imports (icon)
import ArrowRightCircleIcon from "@heroicons/react/24/solid/ArrowRightCircleIcon"

// image
import WelcomePageImage from "../../images/Welcome page image.avif";

const WelcomePage = () => {
    return ( 
        <>
            <Container fluid="sm" className="welcomePage px-4 mt-4 mt-sm-5 mb-3">
                <Row className="align-items-center justify-content-center">
                    <Col xs={12} sm={12} md={12} lg={6} className="">
                        <h2>Welcome to Fall Limited Edition Clothing Store</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Explicabo ipsa, nostrum harum deserunt amet hic. Lorem ipsum dolor sit amet.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit.
                        </p>
                        <Link to="/collections">
                            Explore Now
                            <ArrowRightCircleIcon className='ms-2' width={30}/>
                        </Link>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={6} className="image">
                        <img src={WelcomePageImage} alt="welcomeImage" className="img-fluid"/>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
 
export default WelcomePage;