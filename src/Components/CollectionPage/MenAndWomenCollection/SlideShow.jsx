// Bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Components
import ScrollToTopButton from '../../ScrollToTopButton';

// Sass
import '../../../Sass/CollectionPage/SlideShow.scss';

// images
// shoes (men)
import Shoe1 from "../../../images/image-product-1.jpg"
import Shoe2 from "../../../images/image-product-2.jpg"
import Shoe3 from "../../../images/image-product-3.jpg"
import Shoe4 from "../../../images/image-product-4.jpg"
import Shoes5 from "../../../images/Shoe-5.png"
import Shoe6 from "../../../images/Shoe-6.png"
import Shoe7 from "../../../images/Shoe-7.png"
import Shoe8 from "../../../images/Shoe-8.png"

// shoes(women)
import WomenShoe1 from "../../../images/Women-shoe8.png"
import WomenShoe2 from "../../../images/Women-shoe7.png"
import WomenShoe3 from "../../../images/Women-shoe6.png"
import WomenShoe4 from "../../../images/Women-shoe5.png"
import WomenShoes5 from "../../../images/Women-shoe1.png"
import WomenShoe6 from "../../../images/Women-shoe2.png"
import WomenShoe7 from "../../../images/Women-shoe3.png"
import WomenShoe8 from "../../../images/Women-shoe4.png"

// T-shirts (men)
import TShirt5 from "../../../images/T-Shirt-5.jpg"
import TShirt6 from "../../../images/T-Shirt-6.jpg"
import TShirt7 from "../../../images/T-Shirt-7.jpg"
import TShirt8 from "../../../images/T-Shirt-8.jpg"
import TShirt14 from "../../../images/T-Shirt-14.jpg"
import TShirt15 from "../../../images/T-Shirt-15.jpg"
import TShirt16 from "../../../images/T-Shirt-16.jpg"

// Polo (men)
import Polo8 from "../../../images/Polo-8.png"
import Polo9 from "../../../images/Polo-9.png"
import Polo10 from "../../../images/Polo-10.png"
import Polo13 from "../../../images/Polo-13.png"
import Polo14 from "../../../images/Polo-14.png"
import Polo15 from "../../../images/Polo-15.png"

// Trousers (men)
import Trouser1 from "../../../images/Jeans-1.png"
import Trouser2 from "../../../images/Jeans-2.png"
import Trouser3 from "../../../images/Jeans-3.png"
import Trouser4 from "../../../images/Jeans-4.png"

// Women
// Shirts
import WomenShirt24 from "../../../images/Women-shirt24.png"
import WomenShirt25 from "../../../images/Women-shirt25.png"
import WomenShirt26 from "../../../images/Women-shirt26.png"
import WomenShirt27 from "../../../images/Women-shirt27.png"
import WomenShirt28 from "../../../images/Women-shirt28.png"
import WomenShirt29 from "../../../images/Women-shirt29.png"
import WomenShirt30 from "../../../images/Women-shirt30.png"

// Slippers
import WomenSlippers9 from "../../../images/Women-slippers9.png"
import WomenSlippers10 from "../../../images/Women-slippers10.png"
import WomenSlippers11 from "../../../images/Women-slippers11.png"
import WomenSlippers12 from "../../../images/Women-slippers12.png"

// sneakers
import WomenSneakers10 from "../../../images/Women-sneakers10.png"
import WomenSneakers11 from "../../../images/Women-sneakers11.png"
import WomenSneakers12 from "../../../images/Women-sneakers12.png"

// Trousers
import WomenTrousers1 from "../../../images/Women-trousers1.png"
import WomenTrousers2 from "../../../images/Women-trousers2.png"
import WomenTrousers3 from "../../../images/Women-trousers3.png"
import WomenTrousers4 from "../../../images/Women-trousers4.png"

// react icons
import ShoppingCartIcon from "@heroicons/react/24/outline/ShoppingCartIcon"
import PlusIcon from "@heroicons/react/24/solid/PlusIcon"
import MinusIcon from "@heroicons/react/24/solid/MinusIcon"

// React imports
import { useState, useContext } from 'react';

// CartContext
import { CartContext } from "../../../Layout/Layout"

// React Router dom imports
import { useFetcher } from 'react-router-dom';

// Slideshow
const SlideShow = () => {
    const [slideIndex, setSlideIndex] = useState(1);

    function plusSlides(n) {
      setSlideIndex((prevIndex) =>
        prevIndex + n > 14 ? 1 : prevIndex + n < 1 ? 14 : prevIndex + n
      );
    }
  
    function currentSlide(n) {
      setSlideIndex(n);
    }

    // lightbox
    const [showLightbox, setShowLightbox] = useState(false);
    const [currentImgIndex, setCurrentImgIndex] = useState(0);
    
    // men
    // first
    const firstShoeImages = [
        Shoe1,
        Shoe2,
        Shoe3,
        Shoe4,
    ];

    const firstTShirtImages = [
        TShirt14,
        TShirt15,
        TShirt16,
        TShirt15
    ];

    const firstPoloImages = [
        Polo8,
        Polo9,
        Polo10,
        Polo9
    ];

    const firstTrousersImages = [
        Trouser3,
        Trouser2,
        Trouser1,
        Trouser4
    ]

    // second
    const secondShoesImages = [
        Shoes5,
        Shoe8,
        Shoe6,
        Shoe7,
    ]

    const secondPoloImages = [
        Polo13,
        Polo14, 
        Polo15,
        Polo14
    ]

    // third
    const thirdTShirtImages = [
        TShirt5,
        TShirt6,
        TShirt7,
        TShirt8
    ]

    // Women

    // first
    const firstWomenShoeImages = [
        WomenShoe4,
        WomenShoe1,
        WomenShoe2,
        WomenShoe3,
    ]

    const firstWomenShirtImages = [
        WomenShirt28,
        WomenShirt27,
        WomenShirt29,
        WomenShirt30,
    ]

    const firstWomenSlippersImages = [
        WomenSlippers9,
        WomenSlippers10,
        WomenSlippers11,
        WomenSlippers12,
    ]

    const firstWomenSneakersImages = [
        WomenSneakers10,
        WomenSneakers11,
        WomenSneakers12,
        WomenSneakers11
    ]

    const firstWomenTrousersImages = [
        WomenTrousers1,
        WomenTrousers2,
        WomenTrousers3,
        WomenTrousers4
      ]

    // second
     const secondWomenShoeImages = [
        WomenShoe6,
        WomenShoes5,
        WomenShoe8,
        WomenShoe7
    ]

    const secondWomenShirtsImages = [
        WomenShirt24,
        WomenShirt25,
        WomenShirt26,
        WomenShirt25
    ]
 
    // handle button for lightbox
    const handleClick = (index) => {
        setCurrentImgIndex(index);
        setShowLightbox(true);
    }

    // handle close button for lightbox
    const handleClose = () => {
        setShowLightbox(false);
    }
 
    // handle next & previous
    const handlePrev = () => {
        setCurrentImgIndex((currentImgIndex + firstShoeImages.length - 1) % firstShoeImages.length);
    }
    
    const handleNext = () => {
        setCurrentImgIndex((currentImgIndex + 1) % firstShoeImages.length);
    }

    // CartContext
    const {addToCart, handleDecrease, handleIncrease, quantity} = useContext(CartContext);

    // fetcher
    const fetcher = useFetcher();

    return ( 
        <Container fluid="sm" className="slideshow-container mb-3">
            <ScrollToTopButton/>
            <div className='button d-flex justify-content-end mb-4 mb-md-3'>
                <button className="prev me-4" title="Previous" onClick={() => plusSlides(-1)}>❮</button>
                <button className="next" title="Next" onClick={() => plusSlides(1)}>❯</button>
            </div>
            {/* first row */}
            <div
                className='mySlides fadee'
                style={slideIndex === 1 ? { display: "block" } : { display: "none" }}
            >
                <Row 
                    className="align-items-center justify-content-sm-between justify-content-md-between justify-content-lg-around"
                >
                    <Col xs={12} sm={12} md={6} lg={5}>
                        <img src={Shoe1} alt="Sneakers" className="img-fluid"/>
                        <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                            {firstShoeImages.map((img, index) => (
                                <Col sm={3} md={3} lg={3} className='images-container'>
                                    <img key={index} src={img} onClick={() => handleClick(index)} alt="Sneakers" className='img-fluid'/>
                                </Col>
                            ))}                            
                            {showLightbox &&
                                <>
                                    <div className="lightbox-overlay lightbox-overlay-fade" onClick={() => setShowLightbox(false)}>
                                        <button type="button" onClick={(event) => {event.stopPropagation(); handlePrev();}}>❮</button>
                                        <div className="lightbox-content">
                                            <div className='close-btn-container d-block'>
                                                <button type="button" className="close-btn" onClick={handleClose}>X</button>
                                            </div>
                                            <img src={firstShoeImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
                                        </div>
                                        <button type="button" onClick={(event) => {event.stopPropagation(); handleNext();}}>❯</button>
                                    </div>
                                </>
                            }
                        </Row>
                    </Col>
                    {/* Mobile Indicator */}
                    <div style={{ textAlign: "center" }} className='mt-4 mt-lg-0 d-block d-md-none'>
                        <span className="dot" onClick={() => currentSlide(1)} style={slideIndex === 1 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(2)} style={slideIndex === 2 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(3)} style={slideIndex === 3 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(4)} style={slideIndex === 4 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(5)} style={slideIndex === 5 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(6)} style={slideIndex === 6 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(7)} style={slideIndex === 7 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(8)} style={slideIndex === 8 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(9)} style={slideIndex === 9 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(10)} style={slideIndex === 10 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(11)} style={slideIndex === 11 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(12)} style={slideIndex === 12 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(13)} style={slideIndex === 13 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(14)} style={slideIndex === 14 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                    </div>
                    <Col xs={12} sm={12} md={6} lg={5}>
                        <div className="mt-3 mt-sm-4 mt-md-0 item-description">
                            <div className="mb-3 mb-md-4 heading">
                                <h5>SNEAKERS</h5>
                                <h2>Fall Limited Edition Sneakers</h2>
                            </div>
                            <p className="text">These low-profile sneakers are your perfect casual
                                wear companion. Featuring a durable rubber outer sole, they'll
                                withstand everything the weather can offer.
                            </p>
                            <p className='size'>Size: <span className='ms-1'>40</span></p>
                            <div className="price d-flex d-md-block align-items-center">
                                <div className="d-flex align-items-center">
                                    <h2 className='me-3 mb-1'>$125.00</h2>
                                    <span className="percent">50%</span>
                                </div>
                                <span className="former-price ms-auto">$250.00</span>
                            </div>
                            <div className="mt-md-3 d-block d-md-block d-xl-block d-xxl-flex add-to-cart align-items-center">
                                <fetcher.Form className='me-xxl-3'>
                                    <div className="mb-3 mb-md-2 mb-xl-2 mb-xxl-0 mt-2 mt-md-0 me-3 me-md-4 plus-and-minus d-flex justify-content-between">
                                            <button onClick={() => handleDecrease("Fall Limited Edition Sneakers")} type='button'><MinusIcon className="me-4" width={23}/></button>
                                            <span>{quantity}</span>
                                            <button onClick={() => handleIncrease("Fall Limited Edition Sneakers")} type='button'><PlusIcon className="ms-4" width={23}/></button>
                                    </div>
                                </fetcher.Form>
                                <fetcher.Form>
                                    <button className="button d-flex align-items-center justify-content-center" type="button"
                                        onClick={() => addToCart(Shoe1, 125, quantity, 'Fall Limited Edition Sneakers')}
                                    >
                                        <ShoppingCartIcon width={21} className="me-2"/>
                                        Add to Cart
                                    </button>
                                </fetcher.Form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            {/* second row */}
            <div
                className='mySlides fadee'
                style={slideIndex === 2 ? { display: "block" } : { display: "none" }}
            >
                <Row 
                    className="align-items-center justify-content-sm-between justify-content-md-between justify-content-lg-around"
                >
                    <Col xs={12} sm={12} md={6} lg={5}>
                        <img src={TShirt14} alt="T-Shirt" className="img-fluid"/>
                        <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                            {firstTShirtImages.map((img, index) => (
                                <Col sm={3} md={3} lg={3} className='images-container'>
                                    <img key={index} src={img} onClick={() => handleClick(index)} alt="T-Shirt" className='img-fluid'/>
                                </Col>
                            ))}
                            {showLightbox &&
                                <div className="lightbox-overlay lightbox-overlay-fade" onClick={() => setShowLightbox(false)}>
                                    <button type="button" onClick={(event) => {event.stopPropagation(); handlePrev();}}>❮</button>
                                    <div className="lightbox-content">
                                        <div className='close-btn-container d-block'>
                                            <button className="close-btn" type='button' onClick={handleClose}>X</button>
                                        </div>
                                        <img src={firstTShirtImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
                                    </div>
                                    <button type="button" onClick={(event) => {event.stopPropagation(); handleNext();}}>❯</button>
                                </div>
                            }
                        </Row>
                    </Col>
                    {/* Mobile Indicator */}
                    <div style={{ textAlign: "center" }} className='mt-4 mt-lg-0 d-block d-md-none'>
                        <span className="dot" onClick={() => currentSlide(1)} style={slideIndex === 1 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(2)} style={slideIndex === 2 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(3)} style={slideIndex === 3 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(4)} style={slideIndex === 4 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(5)} style={slideIndex === 5 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(6)} style={slideIndex === 6 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(7)} style={slideIndex === 7 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(8)} style={slideIndex === 8 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(9)} style={slideIndex === 9 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(10)} style={slideIndex === 10 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(11)} style={slideIndex === 11 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(12)} style={slideIndex === 12 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(13)} style={slideIndex === 13 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(14)} style={slideIndex === 14 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                    </div>
                    <Col xs={12} sm={12} md={6} lg={5}>
                        <div className="mt-3 mt-sm-4 mt-md-0 item-description">
                            <div className="mb-3 mb-md-4 heading">
                                <h5>T-SHIRT</h5>
                                <h2>Fall Limited Edition T-Shirt</h2>
                            </div>
                            <p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                Explicabo ipsa, nostrum harum deserunt amet hic. Lorem ipsum dolor sit amet.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            </p>
                            <p className='size'>Size: <span className='ms-1'>xl</span></p>
                            <div className="price d-flex d-md-block align-items-center">
                                <div className="d-flex align-items-center">
                                    <h2 className='me-3 mb-1'>$100.00</h2>
                                    <span className="percent">50%</span>
                                </div>
                                <span className="former-price ms-auto">$200.00</span>
                            </div>
                            <div className="mt-md-3 d-block d-md-block d-xl-block d-xxl-flex add-to-cart align-items-center">
                                <fetcher.Form className='me-xxl-3'>
                                    <div className="mb-3 mb-md-2 mb-xl-2 mb-xxl-0 mt-2 mt-md-0 me-3 me-md-4 plus-and-minus d-flex justify-content-between">
                                        <button onClick={() => handleDecrease("Fall Limited Edition T-Shirt")} type='button'><MinusIcon className="me-4" width={23}/></button>
                                        <span>{quantity}</span>
                                        <button onClick={() => handleIncrease("Fall Limited Edition T-Shirt")} type='button'><PlusIcon className="ms-4" width={23}/></button>
                                    </div>
                                </fetcher.Form>
                                <fetcher.Form>
                                    <button className="button d-flex align-items-center justify-content-center" type='button'
                                        onClick={() => addToCart(TShirt14, 100, quantity, "Fall Limited Edition T-Shirt")}
                                    >
                                        <ShoppingCartIcon width={21} className="me-2"/>
                                        Add to Cart
                                    </button>
                                </fetcher.Form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            {/* Third row */}
            <div
                className='mySlides fadee'
                style={slideIndex === 3 ? { display: "block" } : { display: "none" }}
            >
                <Row 
                    className="align-items-center justify-content-sm-between justify-content-md-between justify-content-lg-around"
                >
                    <Col xs={12} sm={12} md={6} lg={5}>
                        <img src={Polo8} alt="Polo" className="img-fluid"/>
                        <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                            {firstPoloImages.map((img, index) => (
                                <Col sm={3} md={3} lg={3} className='images-container'>
                                    <img key={index} src={img} onClick={() => handleClick(index)} alt="Polo" className='img-fluid'/>
                                </Col>
                            ))}
                            {showLightbox &&
                                <div className="lightbox-overlay lightbox-overlay-fade" onClick={() => setShowLightbox(false)}>
                                    <button type="button" onClick={(event) => {event.stopPropagation(); handlePrev();}}>❮</button>
                                    <div className="lightbox-content">
                                        <div className='close-btn-container d-block'>
                                            <button type="button" className="close-btn" onClick={handleClose}>X</button>
                                        </div>
                                        <img src={firstPoloImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
                                    </div>
                                    <button type="button" onClick={(event) => {event.stopPropagation(); handleNext();}}>❯</button>
                                </div>
                            }
                        </Row>
                    </Col>
                    {/* Mobile Indicator */}
                    <div style={{ textAlign: "center" }} className='mt-4 mt-lg-0 d-block d-md-none'>
                        <span className="dot" onClick={() => currentSlide(1)} style={slideIndex === 1 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(2)} style={slideIndex === 2 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(3)} style={slideIndex === 3 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(4)} style={slideIndex === 4 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(5)} style={slideIndex === 5 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(6)} style={slideIndex === 6 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(7)} style={slideIndex === 7 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(8)} style={slideIndex === 8 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(9)} style={slideIndex === 9 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(10)} style={slideIndex === 10 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(11)} style={slideIndex === 11 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(12)} style={slideIndex === 12 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(13)} style={slideIndex === 13 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(14)} style={slideIndex === 14 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                    </div>
                    <Col xs={12} sm={12} md={6} lg={5}>
                        <div className="mt-3 mt-sm-4 mt-md-0 item-description">
                            <div className="mb-3 mb-md-4 heading">
                                <h5>ROUND NECK POLO</h5>
                                <h2>Fall Limited Edition Round Neck Polo</h2>
                            </div>
                            <p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                Explicabo ipsa, nostrum harum deserunt amet hic. Lorem ipsum dolor sit amet.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            </p>
                            <p className='size'>Size: <span className='ms-1'>xxl</span></p>
                            <div className="price d-flex d-md-block align-items-center">
                                <div className="d-flex align-items-center">
                                    <h2 className='me-3 mb-1'>$150.00</h2>
                                    <span className="percent">50%</span>
                                </div>
                                <span className="former-price ms-auto">$300.00</span>
                            </div>
                            <div className="mt-md-3 d-block d-md-block d-xl-block d-xxl-flex add-to-cart align-items-center">
                                <fetcher.Form className='me-xxl-3'>
                                    <div className="mb-3 mb-md-2 mb-xl-2 mb-xxl-0 mt-2 mt-md-0 me-3 me-md-4 plus-and-minus d-flex justify-content-between">
                                        <button onClick={() => handleDecrease("Fall Limited Edition Round Neck Polo")} type="button"><MinusIcon className="me-4" width={23}/></button>
                                        <span>{quantity}</span>
                                        <button onClick={() => handleIncrease("Fall Limited Edition Round Neck Polo")} type="button"><PlusIcon className="ms-4" width={23}/></button>
                                    </div>
                                </fetcher.Form>
                                <fetcher.Form>
                                    <button type="button" className="button d-flex align-items-center justify-content-center"
                                        onClick={() => addToCart(Polo8, 150, quantity, 'Fall Limited Edition Round Neck Polo')}
                                    >
                                        <ShoppingCartIcon width={21} className="me-2"/>
                                        Add to Cart
                                    </button>
                                </fetcher.Form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            {/* Fourth row */}
            <div
                className='mySlides fadee'
                style={slideIndex === 4 ? { display: "block" } : { display: "none" }}
            >
                <Row 
                    className="align-items-center justify-content-sm-between justify-content-md-between justify-content-lg-around"
                >
                    <Col xs={12} sm={12} md={6} lg={5}>
                        <img src={Trouser3} alt="Trousers" className="img-fluid"/>
                        <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                            {firstTrousersImages.map((img, index) => (
                                <Col sm={3} md={3} lg={3} className='images-container'>
                                    <img key={index} src={img} onClick={() => handleClick(index)} alt="Trousers" className='img-fluid'/>
                                </Col>
                            ))}
                            {showLightbox &&
                                <div className="lightbox-overlay lightbox-overlay-fade" onClick={() => setShowLightbox(false)}>
                                    <button type="button" onClick={(event) => {event.stopPropagation(); handlePrev();}}>❮</button>
                                    <div className="lightbox-content">
                                        <div className='close-btn-container d-block'>
                                            <button type="button" className="close-btn" onClick={handleClose}>X</button>
                                        </div>
                                        <img src={firstTrousersImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
                                    </div>
                                    <button type="button" onClick={(event) => {event.stopPropagation(); handleNext();}}>❯</button>
                                </div>
                            }
                        </Row>
                    </Col>
                    {/* Mobile Indicator */}
                    <div style={{ textAlign: "center" }} className='mt-4 mt-lg-0 d-block d-md-none'>
                        <span className="dot" onClick={() => currentSlide(1)} style={slideIndex === 1 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(2)} style={slideIndex === 2 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(3)} style={slideIndex === 3 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(4)} style={slideIndex === 4 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(5)} style={slideIndex === 5 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(6)} style={slideIndex === 6 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(7)} style={slideIndex === 7 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(8)} style={slideIndex === 8 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(9)} style={slideIndex === 9 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(10)} style={slideIndex === 10 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(11)} style={slideIndex === 11 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(12)} style={slideIndex === 12 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(13)} style={slideIndex === 13 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(14)} style={slideIndex === 14 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                    </div>
                    <Col xs={12} sm={12} md={6} lg={5}>
                        <div className="mt-3 mt-sm-4 mt-md-0 item-description">
                            <div className="mb-3 mb-md-4 heading">
                                <h5>Trouser</h5>
                                <h2>Fall Limited Edition Trouser</h2>
                            </div>
                            <p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                Explicabo ipsa, nostrum harum deserunt amet hic. Lorem ipsum dolor sit amet.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            </p>
                            <p className='size'>Size: <span className='ms-1'>xl</span></p>
                            <div className="price d-flex d-md-block align-items-center">
                                <div className="d-flex align-items-center">
                                    <h2 className='me-3 mb-1'>$80.00</h2>
                                    <span className="percent">50%</span>
                                </div>
                                <span className="former-price ms-auto">$160.00</span>
                            </div>
                            <div className="mt-md-3 d-block d-md-block d-xl-block d-xxl-flex add-to-cart align-items-center">
                                <fetcher.Form className='me-xxl-3'>
                                    <div className="mb-3 mb-md-2 mb-xl-2 mb-xxl-0 mt-2 mt-md-0 me-3 me-md-4 plus-and-minus d-flex justify-content-between">
                                        <button type="button" onClick={() => handleDecrease("Fall Limited Edition Trouser")}><MinusIcon className="me-4" width={23}/></button>
                                        <span>{quantity}</span>
                                        <button type="button" onClick={() => handleIncrease("Fall Limited Edition Trouser")}><PlusIcon className="ms-4" width={23}/></button>
                                    </div>
                                </fetcher.Form>
                                <fetcher.Form>
                                    <button type="button" className="button d-flex align-items-center justify-content-center"
                                        onClick={() => addToCart(Trouser3, 80, quantity, 'Fall Limited Edition Trouser')}
                                    >
                                        <ShoppingCartIcon width={21} className="me-2"/>
                                        Add to Cart
                                    </button>
                                </fetcher.Form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            {/* Fifth row */}
            <div
                className='mySlides fadee'
                style={slideIndex === 5 ? { display: "block" } : { display: "none" }}
            >
                <Row 
                    className="align-items-center justify-content-sm-between justify-content-md-between justify-content-lg-around"
                >
                    <Col xs={12} sm={12} md={7} lg={5}>
                        <img src={Polo13} alt="Polo" className="img-fluid"/>
                        <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                            {secondPoloImages.map((img, index) => (
                                <Col sm={3} md={3} lg={3} className='images-container'>
                                    <img key={index} src={img} onClick={() => handleClick(index)} alt="Polo" className='img-fluid'/>
                                </Col>
                            ))}                            
                            {showLightbox &&
                                <>
                                    <div className="lightbox-overlay lightbox-overlay-fade" onClick={() => setShowLightbox(false)}>
                                        <button type='button' onClick={(event) => {event.stopPropagation(); handlePrev();}}>❮</button>
                                        <div className="lightbox-content">
                                            <div className='close-btn-container d-block'>
                                                <button type='button' className="close-btn" onClick={handleClose}>X</button>
                                            </div>
                                            <img src={secondPoloImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
                                        </div>
                                        <button type="button" onClick={(event) => {event.stopPropagation(); handleNext();}}>❯</button>
                                    </div>
                                </>
                            }
                        </Row>
                    </Col>
                    {/* Mobile Indicator */}
                    <div style={{ textAlign: "center" }} className='mt-4 mt-lg-0 d-block d-md-none'>
                        <span className="dot" onClick={() => currentSlide(1)} style={slideIndex === 1 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(2)} style={slideIndex === 2 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(3)} style={slideIndex === 3 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(4)} style={slideIndex === 4 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(5)} style={slideIndex === 5 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(6)} style={slideIndex === 6 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(7)} style={slideIndex === 7 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(8)} style={slideIndex === 8 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(9)} style={slideIndex === 9 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(10)} style={slideIndex === 10 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(11)} style={slideIndex === 11 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(12)} style={slideIndex === 12 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(13)} style={slideIndex === 13 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(14)} style={slideIndex === 14 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                    </div>
                    <Col xs={12} sm={12} md={5} lg={5}>
                        <div className="mt-3 mt-sm-4 mt-md-0 item-description">
                            <div className="mb-3 mb-md-4 heading">
                                <h5>ROUND NECK POLO</h5>
                                <h2>Fall Limited Edition Round Neck Polo</h2>
                            </div>
                            <p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                Explicabo ipsa, nostrum harum deserunt amet hic. Lorem ipsum dolor sit amet.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            </p>
                            <p className='size'>Size: <span className='ms-1'>xxl</span></p>
                            <div className="price d-flex d-md-block align-items-center">
                                <div className="d-flex align-items-center">
                                    <h2 className='me-3 mb-1'>$100.00</h2>
                                    <span className="percent">50%</span>
                                </div>
                                <span className="former-price ms-auto">$200.00</span>
                            </div>
                            <div className="mt-md-3 d-block d-md-block d-xl-block d-xxl-flex add-to-cart align-items-center">
                                <fetcher.Form className='me-xxl-3'>
                                    <div className="mb-3 mb-md-2 mb-xl-2 mb-xxl-0 mt-2 mt-md-0 me-3 me-md-4 plus-and-minus d-flex justify-content-between">
                                        <button type="button" onClick={() => handleDecrease('Fall Limited Edition Round Neck Polo')}><MinusIcon className="me-4" width={23}/></button>
                                        <span>{quantity}</span>
                                        <button type='button' onClick={() => handleIncrease('Fall Limited Edition Round Neck Polo')}><PlusIcon className="ms-4" width={23}/></button>
                                    </div>
                                </fetcher.Form>
                                <fetcher.Form>
                                    <button type='button' className="button d-flex align-items-center justify-content-center"
                                        onClick={() => addToCart(Polo13, 100, quantity, 'Fall Limited Edition Round Neck Polo')}
                                    >
                                        <ShoppingCartIcon width={21} className="me-2"/>
                                        Add to Cart
                                    </button>
                                </fetcher.Form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            {/* Sixth row */}
            <div
                className='mySlides fadee'
                style={slideIndex === 6 ? { display: "block" } : { display: "none" }}
            >
                <Row 
                    className="align-items-center justify-content-sm-between justify-content-md-between justify-content-lg-around"
                >
                    <Col xs={12} sm={12} md={7} lg={5}>
                        <img src={Shoes5} alt="Sneakers" className="img-fluid"/>
                        <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                            {secondShoesImages.map((img, index) => (
                                <Col sm={3} md={3} lg={3} className='images-container'>
                                    <img key={index} src={img} onClick={() => handleClick(index)} alt="Sneakers" className='img-fluid'/>
                                </Col>
                            ))}                            
                            {showLightbox &&
                                <>
                                    <div className="lightbox-overlay lightbox-overlay-fade" onClick={() => setShowLightbox(false)}>
                                        <button type="button" onClick={(event) => {event.stopPropagation(); handlePrev();}}>❮</button>
                                        <div className="lightbox-content">
                                            <div className='close-btn-container d-block'>
                                                <button type='button' className="close-btn" onClick={handleClose}>X</button>
                                            </div>
                                            <img src={secondShoesImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
                                        </div>
                                        <button type='button' onClick={(event) => {event.stopPropagation(); handleNext();}}>❯</button>
                                    </div>
                                </>
                            }
                        </Row>
                    </Col>
                    {/* Mobile Indicator */}
                    <div style={{ textAlign: "center" }} className='mt-4 mt-lg-0 d-block d-md-none'>
                        <span className="dot" onClick={() => currentSlide(1)} style={slideIndex === 1 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(2)} style={slideIndex === 2 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(3)} style={slideIndex === 3 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(4)} style={slideIndex === 4 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(5)} style={slideIndex === 5 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(6)} style={slideIndex === 6 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(7)} style={slideIndex === 7 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(8)} style={slideIndex === 8 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(9)} style={slideIndex === 9 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(10)} style={slideIndex === 10 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(11)} style={slideIndex === 11 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(12)} style={slideIndex === 12 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(13)} style={slideIndex === 13 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(14)} style={slideIndex === 14 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                    </div>
                    <Col xs={12} sm={12} md={5} lg={5}>
                        <div className="mt-3 mt-sm-4 mt-md-0 item-description">
                            <div className="mb-3 mb-md-4 heading">
                                <h5>SNEAKERS</h5>
                                <h2>Fall Limited Edition Sneakers</h2>
                            </div>
                            <p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                Explicabo ipsa, nostrum harum deserunt amet hic. Lorem ipsum dolor sit amet.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            </p>
                            <p className='size'>Size: <span className='ms-1'>41</span></p>
                            <div className="price d-flex d-md-block align-items-center">
                                <div className="d-flex align-items-center">
                                    <h2 className='me-3 mb-1'>$160.00</h2>
                                    <span className="percent">50%</span>
                                </div>
                                <span className="former-price ms-auto">$320.00</span>
                            </div>
                            <div className="mt-md-3 d-block d-md-block d-xl-block d-xxl-flex add-to-cart align-items-center">
                               <fetcher.Form className='me-xxl-3'>
                                <div className="mb-3 mb-md-2 mb-xl-2 mb-xxl-0 mt-2 mt-md-0 me-3 me-md-4 plus-and-minus d-flex justify-content-between">
                                        <button type='button' onClick={() => handleDecrease('Fall Limited Edition Sneakers')}><MinusIcon className="me-4" width={23}/></button>
                                        <span>{quantity}</span>
                                        <button type='button' onClick={() => handleIncrease('Fall Limited Edition Sneakers')}><PlusIcon className="ms-4" width={23}/></button>
                                    </div>
                               </fetcher.Form>
                                <fetcher.Form>
                                    <button className="button d-flex align-items-center justify-content-center"
                                        onClick={() => addToCart(Shoes5, 160, quantity, 'Fall Limited Edition Sneakers')}
                                    >
                                        <ShoppingCartIcon width={21} className="me-2"/>
                                        Add to Cart
                                    </button>
                                </fetcher.Form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            {/* Seventh row */}
            <div
                className='mySlides fadee'
                style={slideIndex === 7 ? { display: "block" } : { display: "none" }}
            >
                <Row 
                    className="align-items-center justify-content-sm-between justify-content-md-between justify-content-lg-around"
                >
                    <Col xs={12} sm={12} md={6} lg={5}>
                    <img src={TShirt5} alt="T-Shirt" className="img-fluid"/>
                    <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                        {thirdTShirtImages.map((img, index) => (
                        <Col sm={3} md={3} lg={3} className='images-container'>
                            <img key={index} src={img} onClick={() => handleClick(index)} alt="T-Shirt" className='img-fluid'/>
                        </Col>
                        ))}
                        {showLightbox &&
                        <div className="lightbox-overlay lightbox-overlay-fade" onClick={() => setShowLightbox(false)}>
                            <button type="button" onClick={(event) => {event.stopPropagation(); handlePrev();}}>❮</button>
                            <div className="lightbox-content">
                            <div className='close-btn-container d-block'>
                                <button type='button' className="close-btn" onClick={handleClose}>X</button>
                            </div>
                            <img src={thirdTShirtImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
                            </div>
                            <button type="button" onClick={(event) => {event.stopPropagation(); handleNext();}}>❯</button>
                        </div>
                        }
                    </Row>
                    </Col>
                    {/* Mobile Indicator */}
                    <div style={{ textAlign: "center" }} className='mt-4 mt-lg-0 d-block d-md-none'>
                        <span className="dot" onClick={() => currentSlide(1)} style={slideIndex === 1 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(2)} style={slideIndex === 2 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(3)} style={slideIndex === 3 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(4)} style={slideIndex === 4 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(5)} style={slideIndex === 5 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(6)} style={slideIndex === 6 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(7)} style={slideIndex === 7 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(8)} style={slideIndex === 8 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(9)} style={slideIndex === 9 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(10)} style={slideIndex === 10 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(11)} style={slideIndex === 11 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(12)} style={slideIndex === 12 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(13)} style={slideIndex === 13 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(14)} style={slideIndex === 14 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                    </div>
                    <Col xs={12} sm={12} md={6} lg={5}>
                    <div className="mt-3 mt-sm-4 mt-md-0 item-description">
                        <div className="mb-3 mb-md-4 heading">
                        <h5>T-SHIRT</h5>
                        <h2>Fall Limited Edition T-Shirt</h2>
                        </div>
                        <p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Explicabo ipsa, nostrum harum deserunt amet hic. Lorem ipsum dolor sit amet.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        </p>
                        <p className='size'>Size: <span className='ms-1'>xl</span></p>
                        <div className="price d-flex d-md-block align-items-center">
                        <div className="d-flex align-items-center">
                            <h2 className="me-3 mb-1">$125.00</h2>
                            <span className="percent">50%</span>
                        </div>
                        <span className="former-price ms-auto">$250.00</span>
                        </div>
                        <div className="mt-md-3 d-block d-md-block d-xl-block d-xxl-flex add-to-cart align-items-center">
                           <fetcher.Form className='me-xxl-3'>
                                <div className="mb-3 mb-md-2 mb-xl-2 mb-xxl-0 mt-2 mt-md-0 me-3 me-md-4 plus-and-minus d-flex justify-content-between">
                                    <button type='button' onClick={() => handleDecrease('Fall Limited Edition T-Shirt')}><MinusIcon className="me-4" width={23}/></button>
                                    <span>{quantity}</span>
                                    <button type='button' onClick={() => handleIncrease('Fall Limited Edition T-Shirt')}><PlusIcon className="ms-4" width={23}/></button>
                                </div>
                           </fetcher.Form>
                            <fetcher.Form>
                                <button type='button' className="button d-flex align-items-center justify-content-center"
                                    onClick={() => addToCart(TShirt5, 125, quantity, 'Fall Limited Edition T-Shirt')}
                                >
                                    <ShoppingCartIcon width={21} className="me-2"/>
                                    Add to Cart
                                </button>
                            </fetcher.Form>
                        </div>
                    </div>
                    </Col>
                </Row>
            </div>
            {/* Eigth row */}
            <div
                className='mySlides fadee'
                style={slideIndex === 8 ? { display: "block" } : { display: "none" }}
            >
                <Row 
                    className="align-items-center justify-content-sm-between justify-content-md-between justify-content-lg-around"
                >
                    <Col xs={12} sm={12} md={6} lg={5}>
                        <img src={WomenShoe4} alt="Sneakers" className="img-fluid"/>
                        <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                            {firstWomenShoeImages.map((img, index) => (
                                <Col sm={3} md={3} lg={3} className='images-container'>
                                    <img key={index} src={img} onClick={() => handleClick(index)} alt="Shoe" className='img-fluid'/>
                                </Col>
                            ))}                            
                            {showLightbox &&
                                <>
                                    <div className="lightbox-overlay lightbox-overlay-fade" onClick={() => setShowLightbox(false)}>
                                        <button type="button" onClick={(event) => {event.stopPropagation(); handlePrev();}}>❮</button>
                                        <div className="lightbox-content">
                                            <div className='close-btn-container d-block'>
                                                <button type="button" className="close-btn" onClick={handleClose}>X</button>
                                            </div>
                                            <img src={firstWomenShoeImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
                                        </div>
                                        <button type="button" onClick={(event) => {event.stopPropagation(); handleNext();}}>❯</button>
                                    </div>
                                </>
                            }
                        </Row>
                    </Col>
                    {/* Mobile Indicator */}
                    <div style={{ textAlign: "center" }} className='mt-4 mt-lg-0 d-block d-md-none'>
                        <span className="dot" onClick={() => currentSlide(1)} style={slideIndex === 1 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(2)} style={slideIndex === 2 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(3)} style={slideIndex === 3 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(4)} style={slideIndex === 4 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(5)} style={slideIndex === 5 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(6)} style={slideIndex === 6 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(7)} style={slideIndex === 7 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(8)} style={slideIndex === 8 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(9)} style={slideIndex === 9 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(10)} style={slideIndex === 10 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(11)} style={slideIndex === 11 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(12)} style={slideIndex === 12 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(13)} style={slideIndex === 13 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(14)} style={slideIndex === 14 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                    </div>
                    <Col xs={12} sm={12} md={6} lg={5}>
                        <div className="mt-3 mt-sm-4 mt-md-0 item-description">
                            <div className="mb-3 mb-md-4 heading">
                                <h5>SHOE</h5>
                                <h2>Fall Limited Edition Shoe</h2>
                            </div>
                            <p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                Explicabo ipsa, nostrum harum deserunt amet hic. Lorem ipsum dolor sit amet.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            </p>
                            <p className='size'>Size: <span className='ms-1'>40</span></p>
                            <div className="price d-flex d-md-block align-items-center">
                                <div className="d-flex align-items-center">
                                    <h2 className='me-3 mb-1'>$105.00</h2>
                                    <span className="percent">50%</span>
                                </div>
                                <span className="former-price ms-auto">$210.00</span>
                            </div>
                            <div className="mt-md-3 d-block d-md-block d-xl-block d-xxl-flex add-to-cart align-items-center">
                                <fetcher.Form className='me-xxl-3'>
                                    <div className="mb-3 mb-md-2 mb-xl-2 mb-xxl-0 mt-2 mt-md-0 me-3 me-md-4 plus-and-minus d-flex justify-content-between">
                                            <button onClick={() => handleDecrease("Fall Limited Edition Shoe")} type='button'><MinusIcon className="me-4" width={23}/></button>
                                            <span>{quantity}</span>
                                            <button onClick={() => handleIncrease("Fall Limited Edition Shoe")} type='button'><PlusIcon className="ms-4" width={23}/></button>
                                    </div>
                                </fetcher.Form>
                                <fetcher.Form>
                                    <button className="button d-flex align-items-center justify-content-center" type="button"
                                        onClick={() => addToCart(WomenShoe4, 105, quantity, 'Fall Limited Edition Shoe')}
                                    >
                                        <ShoppingCartIcon width={21} className="me-2"/>
                                        Add to Cart
                                    </button>
                                </fetcher.Form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            {/* Nineth row */}
            <div
                className='mySlides fadee'
                style={slideIndex === 9 ? { display: "block" } : { display: "none" }}
            >
                <Row 
                    className="align-items-center justify-content-sm-between justify-content-md-between justify-content-lg-around"
                >
                    <Col xs={12} sm={12} md={6} lg={5}>
                        <img src={WomenShoe6} alt="Sneakers" className="img-fluid"/>
                        <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                            {secondWomenShoeImages.map((img, index) => (
                                <Col sm={3} md={3} lg={3} className='images-container'>
                                    <img key={index} src={img} onClick={() => handleClick(index)} alt="Shoe" className='img-fluid'/>
                                </Col>
                            ))}                            
                            {showLightbox &&
                                <>
                                    <div className="lightbox-overlay lightbox-overlay-fade" onClick={() => setShowLightbox(false)}>
                                        <button type="button" onClick={(event) => {event.stopPropagation(); handlePrev();}}>❮</button>
                                        <div className="lightbox-content">
                                            <div className='close-btn-container d-block'>
                                                <button type="button" className="close-btn" onClick={handleClose}>X</button>
                                            </div>
                                            <img src={secondWomenShoeImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
                                        </div>
                                        <button type="button" onClick={(event) => {event.stopPropagation(); handleNext();}}>❯</button>
                                    </div>
                                </>
                            }
                        </Row>
                    </Col>
                    {/* Mobile Indicator */}
                    <div style={{ textAlign: "center" }} className='mt-4 mt-lg-0 d-block d-md-none'>
                        <span className="dot" onClick={() => currentSlide(1)} style={slideIndex === 1 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(2)} style={slideIndex === 2 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(3)} style={slideIndex === 3 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(4)} style={slideIndex === 4 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(5)} style={slideIndex === 5 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(6)} style={slideIndex === 6 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(7)} style={slideIndex === 7 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(8)} style={slideIndex === 8 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(9)} style={slideIndex === 9 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(10)} style={slideIndex === 10 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(11)} style={slideIndex === 11 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(12)} style={slideIndex === 12 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(13)} style={slideIndex === 13 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(14)} style={slideIndex === 14 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                    </div>
                    <Col xs={12} sm={12} md={6} lg={5}>
                        <div className="mt-3 mt-sm-4 mt-md-0 item-description">
                            <div className="mb-3 mb-md-4 heading">
                                <h5>SHOE</h5>
                                <h2>Fall Limited Edition Shoe</h2>
                            </div>
                            <p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                Explicabo ipsa, nostrum harum deserunt amet hic. Lorem ipsum dolor sit amet.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            </p>
                            <p className='size'>Size: <span className='ms-1'>39</span></p>
                            <div className="price d-flex d-md-block align-items-center">
                                <div className="d-flex align-items-center">
                                    <h2 className='me-3 mb-1'>$110.00</h2>
                                    <span className="percent">50%</span>
                                </div>
                                <span className="former-price ms-auto">$220.00</span>
                            </div>
                            <div className="mt-md-3 d-block d-md-block d-xl-block d-xxl-flex add-to-cart align-items-center">
                                <fetcher.Form className='me-xxl-3'>
                                    <div className="mb-3 mb-md-2 mb-xl-2 mb-xxl-0 mt-2 mt-md-0 me-3 me-md-4 plus-and-minus d-flex justify-content-between">
                                            <button onClick={() => handleDecrease("Fall Limited Edition Shoe")} type='button'><MinusIcon className="me-4" width={23}/></button>
                                            <span>{quantity}</span>
                                            <button onClick={() => handleIncrease("Fall Limited Edition Shoe")} type='button'><PlusIcon className="ms-4" width={23}/></button>
                                    </div>
                                </fetcher.Form>
                                <fetcher.Form>
                                    <button className="button d-flex align-items-center justify-content-center" type="button"
                                        onClick={() => addToCart(WomenShoe6, 110, quantity, 'Fall Limited Edition Shoe')}
                                    >
                                        <ShoppingCartIcon width={21} className="me-2"/>
                                        Add to Cart
                                    </button>
                                </fetcher.Form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            {/* Tenth row */}
            <div
            className='mySlides fadee'
            style={slideIndex === 10 ? { display: "block" } : { display: "none" }}
            >
                <Row 
                    className="align-items-center justify-content-sm-between justify-content-md-between justify-content-lg-around"
                >
                    <Col xs={12} sm={12} md={6} lg={5}>
                    <img src={WomenShirt28} alt="Shirt" className="img-fluid"/>
                    <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                        {firstWomenShirtImages.map((img, index) => (
                        <Col sm={3} md={3} lg={3} className='images-container'>
                            <img key={index} src={img} onClick={() => handleClick(index)} alt="Shirt" className='img-fluid'/>
                        </Col>
                        ))}
                        {showLightbox &&
                        <div className="lightbox-overlay lightbox-overlay-fade" onClick={() => setShowLightbox(false)}>
                            <button type='button' onClick={(event) => {event.stopPropagation(); handlePrev();}}>❮</button>
                            <div className="lightbox-content">
                            <div className='close-btn-container d-block'>
                                <button type='button' className="close-btn" onClick={handleClose}>X</button>
                            </div>
                            <img src={firstWomenShirtImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
                            </div>
                            <button type="button" onClick={(event) => {event.stopPropagation(); handleNext();}}>❯</button>
                        </div>
                        }
                    </Row>
                    </Col>
                    {/* Mobile Indicator */}
                    <div style={{ textAlign: "center" }} className='mt-4 mt-lg-0 d-block d-md-none'>
                        <span className="dot" onClick={() => currentSlide(1)} style={slideIndex === 1 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(2)} style={slideIndex === 2 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(3)} style={slideIndex === 3 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(4)} style={slideIndex === 4 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(5)} style={slideIndex === 5 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(6)} style={slideIndex === 6 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(7)} style={slideIndex === 7 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(8)} style={slideIndex === 8 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(9)} style={slideIndex === 9 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(10)} style={slideIndex === 10 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(11)} style={slideIndex === 11 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(12)} style={slideIndex === 12 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(13)} style={slideIndex === 13 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(14)} style={slideIndex === 14 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                    </div>
                    <Col xs={12} sm={12} md={6} lg={5}>
                    <div className="mt-3 mt-sm-4 mt-md-0 item-description">
                        <div className="mb-3 mb-md-4 heading">
                        <h5>SHIRT</h5>
                        <h2>Fall Limited Edition Shirt</h2>
                        </div>
                        <p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Explicabo ipsa, nostrum harum deserunt amet hic. Lorem ipsum dolor sit amet.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        </p>
                        <p className='size'>Size: <span className='ms-1'>xl</span></p>
                        <div className="price d-flex d-md-block align-items-center">
                        <div className="d-flex align-items-center">
                            <h2 className="me-3 mb-1">$150.00</h2>
                            <span className="percent">50%</span>
                        </div>
                        <span className="former-price ms-auto">$300.00</span>
                        </div>
                        <div className="mt-md-3 d-block d-md-block d-xl-block d-xxl-flex add-to-cart align-items-center">
                        <fetcher.Form className='me-xxl-3'>
                            <div className="mb-3 mb-md-2 mb-xl-2 mb-xxl-0 mt-2 mt-md-0 me-3 me-md-4 plus-and-minus d-flex justify-content-between">
                            <button type='button' onClick={() => handleDecrease("Fall Limited Edition Shirt")}><MinusIcon className="me-4" width={23}/></button>
                            <span>{quantity}</span>
                            <button type='button' onClick={() => handleIncrease("Fall Limited Edition Shirt")}><PlusIcon className="ms-4" width={23}/></button>
                            </div>
                        </fetcher.Form>
                        <fetcher.Form>
                            <button className="button d-flex align-items-center justify-content-center"
                                onClick={() => addToCart(WomenShirt28, 150, quantity, 'Fall Limited Edition Shirt')}
                            >
                            <ShoppingCartIcon width={21} className="me-2"/>
                            Add to Cart
                            </button>
                        </fetcher.Form>
                        </div>
                    </div>
                    </Col>
                </Row>
            </div>
            {/* eleventh row */}
            <div
            className='mySlides fadee'
            style={slideIndex === 11 ? { display: "block" } : { display: "none" }}
            >
                <Row 
                    className="align-items-center justify-content-sm-between justify-content-md-between justify-content-lg-around"
                >
                    <Col xs={12} sm={12} md={6} lg={5}>
                    <img src={WomenSlippers9} alt="Slippers" className="img-fluid"/>
                    <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                        {firstWomenSlippersImages.map((img, index) => (
                        <Col sm={3} md={3} lg={3} className='images-container'>
                            <img key={index} src={img} onClick={() => handleClick(index)} alt="Slippers" className='img-fluid'/>
                        </Col>
                        ))}                            
                        {showLightbox &&
                        <>
                            <div className="lightbox-overlay lightbox-overlay-fade" onClick={() => setShowLightbox(false)}>
                            <button type="button" onClick={(event) => {event.stopPropagation(); handlePrev();}}>❮</button>
                            <div className="lightbox-content">
                                <div className='close-btn-container d-block'>
                                <button type="button" className="close-btn" onClick={handleClose}>X</button>
                                </div>
                                <img src={firstWomenSlippersImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
                            </div>
                            <button type="button" onClick={(event) => {event.stopPropagation(); handleNext();}}>❯</button>
                            </div>
                        </>
                        }
                    </Row>
                    </Col>
                    {/* Mobile Indicator */}
                    <div style={{ textAlign: "center" }} className='mt-4 mt-lg-0 d-block d-md-none'>
                        <span className="dot" onClick={() => currentSlide(1)} style={slideIndex === 1 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(2)} style={slideIndex === 2 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(3)} style={slideIndex === 3 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(4)} style={slideIndex === 4 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(5)} style={slideIndex === 5 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(6)} style={slideIndex === 6 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(7)} style={slideIndex === 7 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(8)} style={slideIndex === 8 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(9)} style={slideIndex === 9 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(10)} style={slideIndex === 10 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(11)} style={slideIndex === 11 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(12)} style={slideIndex === 12 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(13)} style={slideIndex === 13 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(14)} style={slideIndex === 14 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                    </div>
                    <Col xs={12} sm={12} md={6} lg={5}>
                    <div className="mt-3 mt-sm-4 mt-md-0 item-description">
                        <div className="mb-3 mb-md-4 heading">
                        <h5>SLIPPERS</h5>
                        <h2>Fall Limited Edition Slippers</h2>
                        </div>
                        <p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Explicabo ipsa, nostrum harum deserunt amet hic. Lorem ipsum dolor sit amet.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        </p>
                        <p className='size'>Size: <span className='ms-1'>39</span></p>
                        <div className="price d-flex d-md-block align-items-center">
                        <div className="d-flex align-items-center">
                            <h2 className="me-3 mb-1">$160.00</h2>
                            <span className="percent">50%</span>
                        </div>
                        <span className="former-price ms-auto">$320.00</span>
                        </div>
                        <div className="mt-md-3 d-block d-md-block d-xl-block d-xxl-flex add-to-cart align-items-center">
                        <fetcher.Form className='me-xxl-3'>
                            <div className="mb-3 mb-md-2 mb-xl-2 mb-xxl-0 mt-2 mt-md-0 me-3 me-md-4 plus-and-minus d-flex justify-content-between">
                            <button type='button' onClick={() => handleDecrease("Fall Limited Edition Slippers")}><MinusIcon className="me-4" width={23}/></button>
                            <span>{quantity}</span>
                            <button type='button' onClick={() => handleIncrease("Fall Limited Edition Slippers")}><PlusIcon className="ms-4" width={23}/></button>
                            </div>
                        </fetcher.Form>
                        <fetcher.Form>
                            <button type='button' className="button d-flex align-items-center justify-content-center"
                            onClick={() => addToCart(WomenSlippers9, 160, quantity, 'Fall Limited Edition Slippers')}
                            >
                            <ShoppingCartIcon width={21} className="me-2"/>
                            Add to Cart
                            </button>
                        </fetcher.Form>
                        </div>
                    </div>
                    </Col>
                </Row>
            </div>
            {/* twelveth row */}
            <div
            className='mySlides fadee'
            style={slideIndex === 12 ? { display: "block" } : { display: "none" }}
            >
                <Row 
                    className="align-items-center justify-content-sm-between justify-content-md-between justify-content-lg-around"
                >
                    <Col xs={12} sm={12} md={6} lg={5}>
                    <img src={WomenSneakers10} alt="Shoe" className="img-fluid"/>
                    <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                        {firstWomenSneakersImages.map((img, index) => (
                        <Col sm={3} md={3} lg={3} className='images-container'>
                            <img key={index} src={img} onClick={() => handleClick(index)} alt="Shoe" className='img-fluid'/>
                        </Col>
                        ))}                            
                        {showLightbox &&
                        <>
                            <div className="lightbox-overlay lightbox-overlay-fade" onClick={() => setShowLightbox(false)}>
                            <button type="button" onClick={(event) => {event.stopPropagation(); handlePrev();}}>❮</button>
                            <div className="lightbox-content">
                                <div className='close-btn-container d-block'>
                                <button type="button" className="close-btn" onClick={handleClose}>X</button>
                                </div>
                                <img src={firstWomenSneakersImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
                            </div>
                            <button type="button" onClick={(event) => {event.stopPropagation(); handleNext();}}>❯</button>
                            </div>
                        </>
                        }
                    </Row>
                    </Col>
                    {/* Mobile Indicator */}
                    <div style={{ textAlign: "center" }} className='mt-4 mt-lg-0 d-block d-md-none'>
                        <span className="dot" onClick={() => currentSlide(1)} style={slideIndex === 1 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(2)} style={slideIndex === 2 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(3)} style={slideIndex === 3 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(4)} style={slideIndex === 4 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(5)} style={slideIndex === 5 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(6)} style={slideIndex === 6 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(7)} style={slideIndex === 7 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(8)} style={slideIndex === 8 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(9)} style={slideIndex === 9 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(10)} style={slideIndex === 10 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(11)} style={slideIndex === 11 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(12)} style={slideIndex === 12 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(13)} style={slideIndex === 13 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(14)} style={slideIndex === 14 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                    </div>
                    <Col xs={12} sm={12} md={6} lg={5}>
                    <div className="mt-3 mt-sm-4 mt-md-0 item-description">
                        <div className="mb-3 mb-md-4 heading">
                        <h5>SNEAKERS</h5>
                        <h2>Fall Limited Edition Sneakers</h2>
                        </div>
                        <p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Explicabo ipsa, nostrum harum deserunt amet hic. Lorem ipsum dolor sit amet.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        </p>
                        <p className='size'>Size: <span className='ms-1'>41</span></p>
                        <div className="price d-flex d-md-block align-items-center">
                        <div className="d-flex align-items-center">
                            <h2 className="me-3 mb-1">$250.00</h2>
                            <span className="percent">50%</span>
                        </div>
                        <span className="former-price ms-auto">$500.00</span>
                        </div>
                        <div className="mt-md-3 d-block d-md-block d-xl-block d-xxl-flex add-to-cart align-items-center">
                        <fetcher.Form className='me-xxl-3'>
                            <div className="mb-3 mb-md-2 mb-xl-2 mb-xxl-0 mt-2 mt-md-0 me-3 me-md-4 plus-and-minus d-flex justify-content-between">
                            <button type='button' onClick={() => handleDecrease("Fall Limited Edition Sneakers")} ><MinusIcon className="me-4" width={23}/></button>
                            <span>{quantity}</span>
                            <button type='button' onClick={() => handleIncrease("Fall Limited Edition Sneakers")}><PlusIcon className="ms-4" width={23}/></button>
                            </div>
                        </fetcher.Form>
                        <fetcher.Form>
                            <button className="button d-flex align-items-center justify-content-center"
                            onClick={() => addToCart(WomenSneakers10, 250, quantity, 'Fall Limited Edition Sneakers')}
                            >
                            <ShoppingCartIcon width={21} className="me-2"/>
                            Add to Cart
                            </button>
                        </fetcher.Form>
                        </div>
                    </div>
                    </Col>
                </Row>
            </div>
            {/* thirteen row  */}
            <div
                className='mySlides fadee'
                style={slideIndex === 13 ? { display: "block" } : { display: "none" }}
            >
                <Row 
                    className="align-items-center justify-content-sm-between justify-content-md-between justify-content-lg-around"
                >
                    <Col xs={12} sm={12} md={6} lg={5}>
                    <img src={WomenShirt24} alt="Shirt" className="img-fluid"/>
                    <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                        {secondWomenShirtsImages.map((img, index) => (
                        <Col sm={3} md={3} lg={3} className='images-container'>
                            <img key={index} src={img} onClick={() => handleClick(index)} alt="Shirt" className='img-fluid'/>
                        </Col>
                        ))}
                        {showLightbox &&
                        <div className="lightbox-overlay lightbox-overlay-fade" onClick={() => setShowLightbox(false)}>
                            <button type='button' onClick={(event) => {event.stopPropagation(); handlePrev();}}>❮</button>
                            <div className="lightbox-content">
                            <div className='close-btn-container d-block'>
                                <button type='button' className="close-btn" onClick={handleClose}>X</button>
                            </div>
                            <img src={secondWomenShirtsImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
                            </div>
                            <button type='button' onClick={(event) => {event.stopPropagation(); handleNext();}}>❯</button>
                        </div>
                        }
                    </Row>
                    </Col>
                    {/* Mobile Indicator */}
                    <div style={{ textAlign: "center" }} className='mt-4 mt-lg-0 d-block d-md-none'>
                        <span className="dot" onClick={() => currentSlide(1)} style={slideIndex === 1 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(2)} style={slideIndex === 2 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(3)} style={slideIndex === 3 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(4)} style={slideIndex === 4 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>  
                        <span className="dot" onClick={() => currentSlide(5)} style={slideIndex === 5 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(6)} style={slideIndex === 6 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(7)} style={slideIndex === 7 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(8)} style={slideIndex === 8 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(9)} style={slideIndex === 9 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(10)} style={slideIndex === 10 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(11)} style={slideIndex === 11 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(12)} style={slideIndex === 12 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(13)} style={slideIndex === 13 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                        <span className="dot" onClick={() => currentSlide(14)} style={slideIndex === 14 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                    </div>
                    <Col xs={12} sm={12} md={6} lg={5}>
                    <div className="mt-3 mt-sm-4 mt-md-0 item-description">
                        <div className="mb-3 mb-md-4 heading">
                        <h5>SHIRT</h5>
                        <h2>Fall Limited Edition Shirt</h2>
                        </div>
                        <p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Explicabo ipsa, nostrum harum deserunt amet hic. Lorem ipsum dolor sit amet.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        </p>
                        <p className='size'>Size: <span className='ms-1'>xl</span></p>
                        <div className="price d-flex d-md-block align-items-center">
                        <div className="d-flex align-items-center">
                            <h2 className="me-3 mb-1">$120.00</h2>
                            <span className="percent">50%</span>
                        </div>
                        <span className="former-price ms-auto">$240.00</span>
                        </div>
                        <div className="mt-md-3 d-block d-md-block d-xl-block d-xxl-flex add-to-cart align-items-center">
                        <fetcher.Form className='me-xxl-3'>
                            <div className="mb-3 mb-md-2 mb-xl-2 mb-xxl-0 mt-2 mt-md-0 me-3 me-md-4 plus-and-minus d-flex justify-content-between">
                            <button type='button' onClick={() => handleDecrease("Fall Limited Edition Shirt")}><MinusIcon className="me-4" width={23}/></button>
                            <span>{quantity}</span>
                            <button type='button' onClick={() => handleIncrease("Fall Limited Edition Shirt")}><PlusIcon className="ms-4" width={23}/></button>
                            </div>
                        </fetcher.Form>
                        <fetcher.Form>
                            <button type='button' className="button d-flex align-items-center justify-content-center"
                                onClick={() => addToCart(WomenShirt24, 120, quantity, 'Fall Limited Edition Shirt')}
                            >
                            <ShoppingCartIcon width={21} className="me-2"/>
                            Add to Cart
                            </button>
                        </fetcher.Form>
                        </div>
                    </div>
                    </Col>
                </Row>
            </div>
            {/* fourteen row*/}
            <div
          className='mySlides fadee'
          style={slideIndex === 14 ? { display: "block" } : { display: "none" }}
        >
          <Row 
            className="align-items-center justify-content-sm-between justify-content-md-between justify-content-lg-around"
          >
            <Col xs={12} sm={12} md={6} lg={5}>
              <img src={WomenTrousers1} alt="Trousers" className="img-fluid"/>
              <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                {firstWomenTrousersImages.map((img, index) => (
                  <Col sm={3} md={3} lg={3} className='images-container'>
                    <img key={index} src={img} onClick={() => handleClick(index)} alt="Trousers" className='img-fluid'/>
                  </Col>
                ))}                            
                {showLightbox &&
                  <>
                    <div className="lightbox-overlay lightbox-overlay-fade" onClick={() => setShowLightbox(false)}>
                      <button type="button" onClick={(event) => {event.stopPropagation(); handlePrev();}}>❮</button>
                      <div className="lightbox-content">
                        <div className='close-btn-container d-block'>
                          <button type="button" className="close-btn" onClick={handleClose}>X</button>
                        </div>
                        <img src={firstWomenTrousersImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
                      </div>
                      <button type="button" onClick={(event) => {event.stopPropagation(); handleNext();}}>❯</button>
                    </div>
                  </>
                }
              </Row>
            </Col>
            {/* Mobile Indicator */}
            <div style={{ textAlign: "center" }} className='mt-4 mt-lg-0 d-block d-md-none'>
              <span className="dot" onClick={() => currentSlide(1)} style={slideIndex === 1 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
              <span className="dot" onClick={() => currentSlide(2)} style={slideIndex === 2 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
              <span className="dot" onClick={() => currentSlide(3)} style={slideIndex === 3 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
              <span className="dot" onClick={() => currentSlide(4)} style={slideIndex === 4 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
              <span className="dot" onClick={() => currentSlide(5)} style={slideIndex === 5 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
              <span className="dot" onClick={() => currentSlide(6)} style={slideIndex === 6 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
              <span className="dot" onClick={() => currentSlide(7)} style={slideIndex === 7 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
              <span className="dot" onClick={() => currentSlide(8)} style={slideIndex === 8 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
              <span className="dot" onClick={() => currentSlide(9)} style={slideIndex === 9 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
              <span className="dot" onClick={() => currentSlide(10)} style={slideIndex === 10 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
              <span className="dot" onClick={() => currentSlide(11)} style={slideIndex === 11 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
              <span className="dot" onClick={() => currentSlide(12)} style={slideIndex === 12 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
              <span className="dot" onClick={() => currentSlide(13)} style={slideIndex === 13 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
              <span className="dot" onClick={() => currentSlide(14)} style={slideIndex === 14 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
            </div>
            <Col xs={12} sm={12} md={6} lg={5}>
              <div className="mt-3 mt-sm-4 mt-md-0 item-description">
                <div className="mb-3 mb-md-4 heading">
                  <h5>TROUSER</h5>
                  <h2>Fall Limited Edition Trouser</h2>
                </div>
                <p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                  Explicabo ipsa, nostrum harum deserunt amet hic. Lorem ipsum dolor sit amet.
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                </p>
                <p className='size'>Size: <span className='ms-1'>xl</span></p>
                <div className="price d-flex d-md-block align-items-center">
                  <div className="d-flex align-items-center">
                    <h2 className="me-3 mb-1">$160.00</h2>
                    <span className="percent">50%</span>
                  </div>
                  <span className="former-price ms-auto">$320.00</span>
                </div>
                <div className="mt-md-3 d-block d-md-block d-xl-block d-xxl-flex add-to-cart align-items-center">
                  <fetcher.Form className='me-xxl-3'>
                    <div className="mb-3 mb-md-2 mb-xl-2 mb-xxl-0 mt-2 mt-md-0 me-3 me-md-4 plus-and-minus d-flex justify-content-between">
                      <button type='button' onClick={() => handleDecrease("Fall Limited Edition Trouser")}><MinusIcon className="me-4" width={23}/></button>
                      <span>{quantity}</span>
                      <button type='button' onClick={() => handleIncrease("Fall Limited Edition Trouser")}><PlusIcon className="ms-4" width={23}/></button>
                    </div>
                  </fetcher.Form>
                  <fetcher.Form>
                    <button type='button' className="button d-flex align-items-center justify-content-center"
                      onClick={() => addToCart(WomenTrousers1, 160, quantity, 'Fall Limited Edition Trouser')}
                    >
                      <ShoppingCartIcon width={21} className="me-2"/>
                      Add to Cart
                    </button>
                  </fetcher.Form>
                </div>
              </div>
            </Col>
          </Row>
        </div>
            <div style={{ textAlign: "center" }} className='mt-4 mt-xl-0 d-none d-md-block'>
                <span className="dot" onClick={() => currentSlide(1)} style={slideIndex === 1 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                <span className="dot" onClick={() => currentSlide(2)} style={slideIndex === 2 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                <span className="dot" onClick={() => currentSlide(3)} style={slideIndex === 3 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                <span className="dot" onClick={() => currentSlide(4)} style={slideIndex === 4 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                <span className="dot" onClick={() => currentSlide(5)} style={slideIndex === 5 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                <span className="dot" onClick={() => currentSlide(6)} style={slideIndex === 6 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                <span className="dot" onClick={() => currentSlide(7)} style={slideIndex === 7 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                <span className="dot" onClick={() => currentSlide(8)} style={slideIndex === 8 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                <span className="dot" onClick={() => currentSlide(9)} style={slideIndex === 9 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                <span className="dot" onClick={() => currentSlide(10)} style={slideIndex === 10 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                <span className="dot" onClick={() => currentSlide(11)} style={slideIndex === 11 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                <span className="dot" onClick={() => currentSlide(12)} style={slideIndex === 12 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                <span className="dot" onClick={() => currentSlide(13)} style={slideIndex === 13 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
                <span className="dot" onClick={() => currentSlide(14)} style={slideIndex === 14 ? { backgroundColor: "hsl(26, 100%, 55%)" } : {}}></span>
            </div>
        </Container>
    );
}

export default SlideShow;