// React Router Dom Imports
import { Form } from "react-router-dom";

// bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// sass
import "../Sass/LoginForm.scss"

// Library imports (icon)
import UserPlusIcon from "@heroicons/react/24/solid/UserPlusIcon"

// image
import WelcomePageImage from "../images/Welcome page image.avif";

const LoginForm = () => {
    return (
        <Container fluid="sm" className="LoginContainer">
            <Row className="LoginForm align-items-center justify-content-center">
                <Col xs={12} sm={12} md={12} lg={5}>
                    <div>
                        <h2>Fall Limited Edition Clothing Store</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, rerum dolorem et 
                            inventore vero nulla, beatae necessitatibus facere perferendis odit, at consectetur 
                            quasi. Fugit, numquam!
                        </p>
                    </div>
                    <Form method="post">
                        <input type="text" name="userName" required autocomplete="off"
                            placeholder="What is your name?"
                        />
                        <input type="hidden" name="_action" value="newUser"/>
                        <div className="mt-3">
                            <button type="submit">
                                Create Account
                                <UserPlusIcon width={20} className="ms-2"/>
                            </button>
                        </div>
                    </Form>
                </Col>
                <Col xs={12} sm={12} md={12} lg={7} className="mt-4">
                    <img src={WelcomePageImage} alt="loginImage" className="img-fluid"/>
                </Col>
            </Row>
        </Container> 
    );
}
 
export default LoginForm;