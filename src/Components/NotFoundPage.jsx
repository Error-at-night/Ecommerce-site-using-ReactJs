// react router dom imports
import { Link, useNavigate } from "react-router-dom";

// bootstrap
import { Col, Container, Row } from "react-bootstrap";

// sass
import '../Sass/NotFoundPage.scss';

// Library imports
import { ArrowUturnLeftIcon, HomeIcon } from "@heroicons/react/24/solid"

const NotFoundPage = () => {
    const navigate = useNavigate();

    return ( 
        <Container fluid="sm" className="notFoundContainer">
            <Row className="justify-content-sm-center align-items-center">
                <Col xs={12} sm={12} md={12} lg={7}>
                    <div className="notFound">
                        <h2>Page Not Found</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Eaque omnis culpa id velit modi nulla sunt nesciunt dolores tempora ullam!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Eaque omnis culpa id velit modi nulla sunt nesciunt dolores tempora
                        </p>
                        <div className="d-flex justify-content-center align-items-center">
                            <button type="button" onClick={() => navigate(-1)}
                                className="me-2 me-sm-4"
                            >
                                <ArrowUturnLeftIcon width={20} className="me-1"/>
                                Go back
                            </button>
                            <Link to="/">
                                <HomeIcon width={20} className="me-1"/>
                                Go home
                            </Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default NotFoundPage;