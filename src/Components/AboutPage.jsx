// Bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// FetchData Function
import { fetchData } from "../Helpers/FetchData";

// React Router Dom Imports
import { useLoaderData } from "react-router-dom";

// Components
import ScrollToTopButton from './ScrollToTopButton';

// sass
import "../Sass/AboutPage.scss"

// AboutPageLoader Function 
export function AboutPageLoader() {
    const userName = fetchData("userName")
 
    return { userName }
}

const AboutPage = () => {
    const { userName } = useLoaderData();

    return ( 
        <>
            { userName &&
                <Container fluid="sm" className='px-4 aboutPage'>
                    <ScrollToTopButton/>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12}>
                            <h2>About</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus amet 
                                perspiciatis at doloribus. Sapiente deleniti placeat doloribus est accusamus, consequatur
                                tempora vero ab distinctio, incidunt, quidem quas delectus minima sequi cum! Itaque, sed! 
                                Eveniet nisi neque deleniti suscipit recusandae accusantium repudiandae magni tenetur, minima 
                                qui, iusto vitae distinctio, quibusdam quo?
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus amet 
                                perspiciatis at doloribus. Sapiente deleniti placeat doloribus est accusamus, consequatur
                                tempora vero ab distinctio, incidunt, quidem quas delectus minima sequi cum! Itaque, sed! 
                                Eveniet nisi neque deleniti suscipit recusandae accusantium repudiandae magni tenetur, minima 
                                qui, iusto vitae distinctio, quibusdam quo?
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus amet 
                                perspiciatis at doloribus. Sapiente deleniti placeat doloribus est accusamus, consequatur
                                tempora vero ab distinctio, incidunt, quidem quas delectus minima sequi cum! Itaque, sed! 
                                Eveniet nisi neque deleniti suscipit recusandae accusantium repudiandae magni tenetur, minima 
                                qui, iusto vitae distinctio, quibusdam quo?
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus amet 
                                perspiciatis at doloribus. Sapiente deleniti placeat doloribus est accusamus, consequatur
                                tempora vero ab distinctio, incidunt, quidem quas delectus minima sequi cum! Itaque, sed! 
                                Eveniet nisi neque deleniti suscipit recusandae accusantium repudiandae magni tenetur, minima 
                                qui, iusto vitae distinctio, quibusdam quo?
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus amet 
                                perspiciatis at doloribus. Sapiente deleniti placeat doloribus est accusamus, consequatur
                                tempora vero ab distinctio, incidunt, quidem quas delectus minima sequi cum! Itaque, sed! 
                                Eveniet nisi neque deleniti suscipit recusandae accusantium repudiandae magni tenetur, minima 
                                qui, iusto vitae distinctio, quibusdam quo?
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus amet 
                                perspiciatis at doloribus. Sapiente deleniti placeat doloribus est accusamus, consequatur
                                tempora vero ab distinctio, incidunt, quidem quas delectus minima sequi cum! Itaque, sed! 
                                Eveniet nisi neque deleniti suscipit recusandae accusantium repudiandae magni tenetur, minima 
                                qui, iusto vitae distinctio, quibusdam quo?
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus amet 
                                perspiciatis at doloribus. Sapiente deleniti placeat doloribus est accusamus, consequatur
                                tempora vero ab distinctio, incidunt, quidem quas delectus minima sequi cum! Itaque, sed! 
                                Eveniet nisi neque deleniti suscipit recusandae accusantium repudiandae magni tenetur
                            </p>
                        </Col>
                    </Row>
                </Container>
            }
        </>
    );
}
 
export default AboutPage;