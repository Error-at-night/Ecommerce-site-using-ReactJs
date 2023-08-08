// react imports
import { useContext } from "react";

// CartContext
import { CartContext } from "../Layout/Layout";

// bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// React Router Dom Imports
import { useFetcher } from "react-router-dom";

// react icon
import TrashIcon from "@heroicons/react/24/solid/TrashIcon"

// sass
import '../Sass/CartDisplayItemPage.scss'; 

// components
import ScrollToTopButton from "./ScrollToTopButton";

const CartDisplayItemsPage = () => {
    const fetcher = useFetcher();

    // CartContext
    const {removeItemFromCart, cartItems} = useContext(CartContext);

    const x = "x"

    return ( 
        <Container fluid="sm" className="mb-5 px-2 displayPageContainer">
            <ScrollToTopButton/>
            {cartItems && cartItems.length > 0 ? (
                cartItems.map((item, index) => (
                    <div key={index} className="displayPage">
                        <hr className="my-5"/>
                        <Row style={{textAlign: "center"}} className="align-items-center">
                            <Col xs={12} sm={2} md={3} lg={2}>
                                <img src={item.image} alt="item" className="img-fluid" />
                            </Col>
                            <Col xs={12} sm={4} md={4} lg={4} className="mt-4 mt-lg-0">
                                <h4 className="name">{item.name}</h4>
                            </Col>
                            <Col xs={12} sm={4} md={3} lg={4} className="mt-2 mt-lg-0">
                                <h4 className="price m-0">
                                    <span className="first">${`${item.price} ${x} ${item.quantity}`}</span>
                                    <span className="ms-3 second">${`${item.quantity}` * `${item.price}`}</span>
                                </h4>
                            </Col>
                            <Col xs={12} sm={2} md={2} lg={2} className="mt-3 mt-lg-0">
                                <fetcher.Form className="delete">
                                    <button type="button" onClick={(event) => removeItemFromCart(index, item.name, event)}>
                                        <TrashIcon width={30} height={30}/>
                                    </button>
                                </fetcher.Form>
                            </Col>
                        </Row>
                    </div>
                ))
            ) : (
                <div className="px-2 cartIsEmpty">
                    <h1>Cart is empty</h1>
                </div>
            )}
        </Container>
    );
}
 
export default CartDisplayItemsPage;