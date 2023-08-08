// Bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// FetchData Function
import { fetchData } from "../Helpers/FetchData";

// React Router Dom Imports
import { useLoaderData } from "react-router-dom";

// sass
import "../Sass/ContactPage.scss"

// ContactPageLoader Function 
export function ContactPageLoader() {
    const userName = fetchData("userName")
 
    return { userName }
}

const ContactPage = () => {
    const { userName } = useLoaderData();

    return ( 
        <>
            { userName &&
                <Container fluid="sm" className='mt-4 px-4 contactPage'>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12} style={{textAlign: "center"}}>
                            <h2>Get in Touch</h2>
                        </Col>
                        <Col xs={12} sm={12} md={8} lg={8} xl={6} xxl={5} className='mt-3 mt-sm-4 mt-lg-3'>
                            <h2>Contact Info</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, unde.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, unde.
                            </p>
                            <div>
                                <h5 className='m-0'>Name</h5>
                                <span>Fall Limited Edition</span>
                            </div>
                            <div className='mt-4'>
                                <h5 className='m-0'>Location</h5>
                                <span>San Fransico, Germany</span>
                            </div>
                            <div className='mt-4'>
                                <h5 className='m-0'>Phone number</h5>
                                <span><a href="tel: +44 5769 4785">+44-576-4785</a></span>
                            </div>
                            <div className='mt-4'>
                                <h5 className='m-0'>Email</h5>
                                <span><a href="mailto: example@gmail.com">example@gmail.com</a></span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            }
        </>
    );
}
 
export default ContactPage;