// react router dom imports
import { useRouteError, useNavigate } from "react-router-dom";

// Library imports
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid"

// bootstrap
import { Col, Container, Row } from "react-bootstrap";

const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate();

    return ( 
        <Container fluid="sm" className="">
            <Row className="justify-content-sm-center align-items-center">
                <Col xs={12} sm={12} md={12} lg={7}>
                <div className="error">
                    <h1>Uh oh! We have got a problem</h1>
                    <p>{error.message || error.statusText}</p>
                    <div className="justify-content-center align-items-center">
                        <button type="button" onClick={() => navigate(-1)}
                            className="me-2 me-sm-4"
                        >
                            <ArrowUturnLeftIcon width={20} className="me-1"/>
                            Go back
                        </button>
                    </div>
                </div>
                </Col>
            </Row>
        </Container>
    );
}
 
export default ErrorPage;