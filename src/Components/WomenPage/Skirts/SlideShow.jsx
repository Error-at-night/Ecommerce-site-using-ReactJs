// Bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Components
import ScrollToTopButton from '../../ScrollToTopButton';

// Sass
import '../../../Sass/MenPage/SlideShow.scss';

// skirt images
import Skirt1 from "../../../images/Skirt1.png"
import Skirt2 from "../../../images/Skirt2.png"
import Skirt3 from "../../../images/Skirt3.png"
import Skirt4 from "../../../images/Skirt4.png"
import Skirt5 from "../../../images/Skirt5.png"
import Skirt6 from "../../../images/Skirt6.png"
import Skirt7 from "../../../images/Skirt10.png"
import Skirt8 from "../../../images/Skirt11.png"
import Skirt9 from "../../../images/Skirt12.png"
import Skirt10 from "../../../images/Skirt13.png"
import Skirt11 from "../../../images/Skirt16.png"
import Skirt12 from "../../../images/Skirt17.png"
import Skirt13 from "../../../images/Skirt18.png"
import Skirt14 from "../../../images/Skirt23.png"
import Skirt15 from "../../../images/Skirt24.png"
import Skirt16 from "../../../images/Skirt25.png"
import Skirt17 from "../../../images/Skirt26.png"
import Skirt18 from "../../../images/Skirt27.png"
import Skirt19 from "../../../images/Skirt28.png"
import Skirt20 from "../../../images/Skirt29.png"
import Skirt21 from "../../../images/Skirt30.png"
import Skirt22 from "../../../images/Skirt31.png"
import Skirt23 from "../../../images/Skirt32.png"
import Skirt24 from "../../../images/Skirt33.png"
import Skirt25 from "../../../images/Skirt34.png"
import Skirt26 from "../../../images/Skirt35.png"
import Skirt27 from "../../../images/Skirt36.png"
import Skirt28 from "../../../images/Skirt37.png"
import Skirt29 from "../../../images/Skirt43.png"
import Skirt30 from "../../../images/Skirt44.png"
import Skirt31 from "../../../images/Skirt45.png"
import Skirt32 from "../../../images/Skirt46.png"
import Skirt33 from "../../../images/Skirt47.png"
import Skirt34 from "../../../images/Skirt48.png"
import Skirt35 from "../../../images/Skirt49.png"
import Skirt36 from "../../../images/Skirt50.png"

// react icons
import ShoppingCartIcon from "@heroicons/react/24/outline/ShoppingCartIcon"
import PlusIcon from "@heroicons/react/24/solid/PlusIcon"
import MinusIcon from "@heroicons/react/24/solid/MinusIcon"

// React imports
import { useContext, useState } from 'react';

// Cart context
import { CartContext } from '../../../Layout/Layout';

// React Router Dom imports
import { useFetcher } from 'react-router-dom';

const SlideShow = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  function plusSlides(n) {
    setSlideIndex((prevIndex) =>
      prevIndex + n > 10 ? 1 : prevIndex + n < 1 ? 10 : prevIndex + n
    );
  }
  
  function currentSlide(n) {
    setSlideIndex(n);
  }

  // lightbox
  const [showLightbox, setShowLightbox] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  
  //first
  const firstSkirtImages = [
    Skirt1,
    Skirt2,
    Skirt3,
    Skirt2
  ]
  
  //second   
  const secondSkirtImages = [
    Skirt4,
    Skirt5,
    Skirt6,
    Skirt5
  ];

  //third  
  const thirdSkirtImages = [
    Skirt7,
    Skirt8,
    Skirt9,
    Skirt10
  ];

  //fourth
  const fourthSkirtImages = [
    Skirt11,
    Skirt12,
    Skirt13,
    Skirt12
  ];

  //fifth
  const fifthSkirtImages = [
    Skirt17,
    Skirt15,
    Skirt16,
    Skirt14
  ];

  //sixth
  const sixthSkirtImages = [
    Skirt18,
    Skirt19,
    Skirt20,
    Skirt21
  ];

  //seventh
  const seventhSkirtImages = [
    Skirt22,
    Skirt25,
    Skirt24,
    Skirt23
  ];

  // eigth
  const eigthSkirtImages = [
    Skirt26,
    Skirt28,
    Skirt27,
    Skirt28
  ];

  // nineth
  const ninethSkirtImages = [
    Skirt30,
    Skirt31,
    Skirt32,
    Skirt29
  ];

  //tenth
  const tenthSkirtImages = [
    Skirt33,
    Skirt34,
    Skirt35,
    Skirt36,
  ];

  const handleClick = (index) => {
    setCurrentImgIndex(index);
    setShowLightbox(true);
}

  // handle close lightbox
  const handleClose = () => {
      setShowLightbox(false);
  }

  // handle next & previous
  const handlePrev = () => {
      setCurrentImgIndex((currentImgIndex + firstSkirtImages.length - 1) % firstSkirtImages.length);
  }

  const handleNext = () => {
      setCurrentImgIndex((currentImgIndex + 1) % firstSkirtImages.length);
  }

   // CartContext
   const {addToCart, handleDecrease, handleIncrease, quantity} = useContext(CartContext);

   //fetcher
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
                        <img src={Skirt1} alt="Skirt" className="img-fluid"/>
                        <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                            {firstSkirtImages.map((img, index) => (
                                <Col sm={3} md={3} lg={3} className='images-container'>
                                    <img key={index} src={img} onClick={() => handleClick(index)} alt="Skirt" className='img-fluid'/>
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
                                            <img src={firstSkirtImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
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
                    </div>
                    <Col xs={12} sm={12} md={6} lg={5}>
                        <div className="mt-3 mt-sm-4 mt-md-0 item-description">
                            <div className="mb-3 mb-md-4 heading">
                                <h5>SKIRT</h5>
                                <h2>Fall Limited Edition Skirt</h2>
                            </div>
                            <p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                Explicabo ipsa, nostrum harum deserunt amet hic. Lorem ipsum dolor sit amet.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            </p>
                            <p className='size'>Size: <span className='ms-1'>xl</span></p>
                            <div className="price d-flex d-md-block align-items-center">
                                <div className="d-flex align-items-center">
                                    <h2 className='me-3 mb-1'>$200.00</h2>
                                    <span className="percent">50%</span>
                                </div>
                                <span className="former-price ms-auto">$400.00</span>
                            </div>
                            <div className="mt-md-3 d-block d-md-block d-xl-block d-xxl-flex add-to-cart align-items-center">
                                <fetcher.Form className='me-xxl-3'>
                                    <div className="mb-3 mb-md-2 mb-xl-2 mb-xxl-0 mt-2 mt-md-0 me-3 me-md-4 plus-and-minus d-flex justify-content-between">
                                        <button type='button' onClick={() => handleDecrease("Fall Limited Edition Skirt")}><MinusIcon className="me-4" width={23}/></button>
                                        <span>{quantity}</span>
                                        <button type='button' onClick={() => handleIncrease("Fall Limited Edition Skirt")}><PlusIcon className="ms-4" width={23}/></button>
                                    </div>
                                </fetcher.Form>
                                <fetcher.Form>
                                    <button type='button' className="button d-flex align-items-center justify-content-center"
                                        onClick={() => addToCart(Skirt1, 200, quantity, 'Fall Limited Edition Skirt')}

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
                        <img src={Skirt4} alt="Skirt" className="img-fluid"/>
                        <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                            {secondSkirtImages.map((img, index) => (
                                <Col sm={3} md={3} lg={3} className='images-container'>
                                    <img key={index} src={img} onClick={() => handleClick(index)} alt="Skirt" className='img-fluid'/>
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
                                            <img src={secondSkirtImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
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
                    </div>
                    <Col xs={12} sm={12} md={6} lg={5}>
                        <div className="mt-3 mt-sm-4 mt-md-0 item-description">
                            <div className="mb-3 mb-md-4 heading">
                                <h5>SKIRT</h5>
                                <h2>Fall Limited Edition Skirt</h2>
                            </div>
                            <p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                Explicabo ipsa, nostrum harum deserunt amet hic. Lorem ipsum dolor sit amet.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            </p>
                            <p className='size'>Size: <span className='ms-1'>xl</span></p>
                            <div className="price d-flex d-md-block align-items-center">
                                <div className="d-flex align-items-center">
                                    <h2 className='me-3 mb-1'>$180.00</h2>
                                    <span className="percent">50%</span>
                                </div>
                                <span className="former-price ms-auto">$360.00</span>
                            </div>
                            <div className="mt-md-3 d-block d-md-block d-xl-block d-xxl-flex add-to-cart align-items-center">
                                <fetcher.Form className='me-xxl-3'>
                                    <div className="mb-3 mb-md-2 mb-xl-2 mb-xxl-0 mt-2 mt-md-0 me-3 me-md-4 plus-and-minus d-flex justify-content-between">
                                        <button type='button' onClick={() => handleDecrease("Fall Limited Edition Skirt")}><MinusIcon className="me-4" width={23}/></button>
                                        <span>{quantity}</span>
                                        <button type='button' onClick={() => handleIncrease("Fall Limited Edition Skirt")}><PlusIcon className="ms-4" width={23}/></button>
                                    </div>
                                </fetcher.Form>
                                <fetcher.Form>
                                    <button type='button' className="button d-flex align-items-center justify-content-center"
                                        onClick={() => addToCart(Skirt4, 180, quantity, 'Fall Limited Edition Skirt')}

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
            {/* third row */}
            <div
                className='mySlides fadee'
                style={slideIndex === 3 ? { display: "block" } : { display: "none" }}
            >
                <Row 
                    className="align-items-center justify-content-sm-between justify-content-md-between justify-content-lg-around"
                >
                    <Col xs={12} sm={12} md={6} lg={5}>
                        <img src={Skirt7} alt="Skirt" className="img-fluid"/>
                        <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                            {thirdSkirtImages.map((img, index) => (
                                <Col sm={3} md={3} lg={3} className='images-container'>
                                    <img key={index} src={img} onClick={() => handleClick(index)} alt="Skirt" className='img-fluid'/>
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
                                            <img src={thirdSkirtImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
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
                    </div>
                    <Col xs={12} sm={12} md={6} lg={5}>
                        <div className="mt-3 mt-sm-4 mt-md-0 item-description">
                            <div className="mb-3 mb-md-4 heading">
                                <h5>SKIRT</h5>
                                <h2>Fall Limited Edition Skirt</h2>
                            </div>
                            <p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                Explicabo ipsa, nostrum harum deserunt amet hic. Lorem ipsum dolor sit amet.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            </p>
                            <p className='size'>Size: <span className='ms-1'>xl</span></p>
                            <div className="price d-flex d-md-block align-items-center">
                                <div className="d-flex align-items-center">
                                    <h2 className='me-3 mb-1'>$220.00</h2>
                                    <span className="percent">50%</span>
                                </div>
                                <span className="former-price ms-auto">$240.00</span>
                            </div>
                            <div className="mt-md-3 d-block d-md-block d-xl-block d-xxl-flex add-to-cart align-items-center">
                                <fetcher.Form className='me-xxl-3'>
                                    <div className="mb-3 mb-md-2 mb-xl-2 mb-xxl-0 mt-2 mt-md-0 me-3 me-md-4 plus-and-minus d-flex justify-content-between">
                                        <button type='button' onClick={() => handleDecrease("Fall Limited Edition Skirt")}><MinusIcon className="me-4" width={23}/></button>
                                        <span>{quantity}</span>
                                        <button type='button' onClick={() => handleIncrease("Fall Limited Edition Skirt")}><PlusIcon className="ms-4" width={23}/></button>
                                    </div>
                                </fetcher.Form>
                                <fetcher.Form>
                                    <button type='button' className="button d-flex align-items-center justify-content-center"
                                        onClick={() => addToCart(Skirt7, 240, quantity, 'Fall Limited Edition Skirt')}

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
            {/* fourth row */}
            <div
                className='mySlides fadee'
                style={slideIndex === 4 ? { display: "block" } : { display: "none" }}
            >
                <Row 
                    className="align-items-center justify-content-sm-between justify-content-md-between justify-content-lg-around"
                >
                    <Col xs={12} sm={12} md={6} lg={5}>
                        <img src={Skirt11} alt="Skirt" className="img-fluid"/>
                        <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                            {fourthSkirtImages.map((img, index) => (
                                <Col sm={3} md={3} lg={3} className='images-container'>
                                    <img key={index} src={img} onClick={() => handleClick(index)} alt="Skirt" className='img-fluid'/>
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
                                            <img src={fourthSkirtImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
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
                    </div>
                    <Col xs={12} sm={12} md={6} lg={5}>
                        <div className="mt-3 mt-sm-4 mt-md-0 item-description">
                            <div className="mb-3 mb-md-4 heading">
                                <h5>SKIRT</h5>
                                <h2>Fall Limited Edition Skirt</h2>
                            </div>
                            <p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                Explicabo ipsa, nostrum harum deserunt amet hic. Lorem ipsum dolor sit amet.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            </p>
                            <p className='size'>Size: <span className='ms-1'>xl</span></p>
                            <div className="price d-flex d-md-block align-items-center">
                                <div className="d-flex align-items-center">
                                    <h2 className='me-3 mb-1'>$220.00</h2>
                                    <span className="percent">50%</span>
                                </div>
                                <span className="former-price ms-auto">$440.00</span>
                            </div>
                            <div className="mt-md-3 d-block d-md-block d-xl-block d-xxl-flex add-to-cart align-items-center">
                                <fetcher.Form className='me-xxl-3'>
                                    <div className="mb-3 mb-md-2 mb-xl-2 mb-xxl-0 mt-2 mt-md-0 me-3 me-md-4 plus-and-minus d-flex justify-content-between">
                                        <button type='button' onClick={() => handleDecrease("Fall Limited Edition Skirt")}><MinusIcon className="me-4" width={23}/></button>
                                        <span>{quantity}</span>
                                        <button type='button' onClick={() => handleIncrease("Fall Limited Edition Skirt")}><PlusIcon className="ms-4" width={23}/></button>
                                    </div>
                                </fetcher.Form>
                                <fetcher.Form>
                                    <button type='button' className="button d-flex align-items-center justify-content-center"
                                        onClick={() => addToCart(Skirt11, 220, quantity, 'Fall Limited Edition Skirt')}

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
            {/* fifth row */}
            <div
                className='mySlides fadee'
                style={slideIndex === 5 ? { display: "block" } : { display: "none" }}
            >
                <Row 
                    className="align-items-center justify-content-sm-between justify-content-md-between justify-content-lg-around"
                >
                    <Col xs={12} sm={12} md={6} lg={5}>
                        <img src={Skirt17} alt="Skirt" className="img-fluid"/>
                        <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                            {fifthSkirtImages.map((img, index) => (
                                <Col sm={3} md={3} lg={3} className='images-container'>
                                    <img key={index} src={img} onClick={() => handleClick(index)} alt="Skirt" className='img-fluid'/>
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
                                            <img src={fifthSkirtImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
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
                    </div>
                    <Col xs={12} sm={12} md={6} lg={5}>
                        <div className="mt-3 mt-sm-4 mt-md-0 item-description">
                            <div className="mb-3 mb-md-4 heading">
                                <h5>SKIRT</h5>
                                <h2>Fall Limited Edition Skirt</h2>
                            </div>
                            <p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                Explicabo ipsa, nostrum harum deserunt amet hic. Lorem ipsum dolor sit amet.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            </p>
                            <p className='size'>Size: <span className='ms-1'>xl</span></p>
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
                                        <button type='button' onClick={() => handleDecrease("Fall Limited Edition Skirt")}><MinusIcon className="me-4" width={23}/></button>
                                        <span>{quantity}</span>
                                        <button type='button' onClick={() => handleIncrease("Fall Limited Edition Skirt")}><PlusIcon className="ms-4" width={23}/></button>
                                    </div>
                                </fetcher.Form>
                                <fetcher.Form>
                                    <button type='button' className="button d-flex align-items-center justify-content-center"
                                        onClick={() => addToCart(Skirt17, 150, quantity, 'Fall Limited Edition Skirt')}

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
            {/* sixth row */}
            <div
                className='mySlides fadee'
                style={slideIndex === 6 ? { display: "block" } : { display: "none" }}
            >
                <Row 
                    className="align-items-center justify-content-sm-between justify-content-md-between justify-content-lg-around"
                >
                    <Col xs={12} sm={12} md={6} lg={5}>
                        <img src={Skirt18} alt="Skirt" className="img-fluid"/>
                        <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                            {sixthSkirtImages.map((img, index) => (
                                <Col sm={3} md={3} lg={3} className='images-container'>
                                    <img key={index} src={img} onClick={() => handleClick(index)} alt="Skirt" className='img-fluid'/>
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
                                            <img src={sixthSkirtImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
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
                    </div>
                    <Col xs={12} sm={12} md={6} lg={5}>
                        <div className="mt-3 mt-sm-4 mt-md-0 item-description">
                            <div className="mb-3 mb-md-4 heading">
                                <h5>SKIRT</h5>
                                <h2>Fall Limited Edition Skirt</h2>
                            </div>
                            <p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                Explicabo ipsa, nostrum harum deserunt amet hic. Lorem ipsum dolor sit amet.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            </p>
                            <p className='size'>Size: <span className='ms-1'>xl</span></p>
                            <div className="price d-flex d-md-block align-items-center">
                                <div className="d-flex align-items-center">
                                    <h2 className='me-3 mb-1'>$210.00</h2>
                                    <span className="percent">50%</span>
                                </div>
                                <span className="former-price ms-auto">$420.00</span>
                            </div>
                            <div className="mt-md-3 d-block d-md-block d-xl-block d-xxl-flex add-to-cart align-items-center">
                                <fetcher.Form className='me-xxl-3'>
                                    <div className="mb-3 mb-md-2 mb-xl-2 mb-xxl-0 mt-2 mt-md-0 me-3 me-md-4 plus-and-minus d-flex justify-content-between">
                                        <button type='button' onClick={() => handleDecrease("Fall Limited Edition Skirt")}><MinusIcon className="me-4" width={23}/></button>
                                        <span>{quantity}</span>
                                        <button type='button' onClick={() => handleIncrease("Fall Limited Edition Skirt")}><PlusIcon className="ms-4" width={23}/></button>
                                    </div>
                                </fetcher.Form>
                                <fetcher.Form>
                                    <button type='button' className="button d-flex align-items-center justify-content-center"
                                        onClick={() => addToCart(Skirt18, 210, quantity, 'Fall Limited Edition Skirt')}

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
            {/* seventh row */}
            <div
                className='mySlides fadee'
                style={slideIndex === 7 ? { display: "block" } : { display: "none" }}
            >
                <Row 
                    className="align-items-center justify-content-sm-between justify-content-md-between justify-content-lg-around"
                >
                    <Col xs={12} sm={12} md={6} lg={5}>
                        <img src={Skirt22} alt="Skirt" className="img-fluid"/>
                        <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                            {seventhSkirtImages.map((img, index) => (
                                <Col sm={3} md={3} lg={3} className='images-container'>
                                    <img key={index} src={img} onClick={() => handleClick(index)} alt="Skirt" className='img-fluid'/>
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
                                            <img src={seventhSkirtImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
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
                    </div>
                    <Col xs={12} sm={12} md={6} lg={5}>
                        <div className="mt-3 mt-sm-4 mt-md-0 item-description">
                            <div className="mb-3 mb-md-4 heading">
                                <h5>SKIRT</h5>
                                <h2>Fall Limited Edition Skirt</h2>
                            </div>
                            <p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                Explicabo ipsa, nostrum harum deserunt amet hic. Lorem ipsum dolor sit amet.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            </p>
                            <p className='size'>Size: <span className='ms-1'>xl</span></p>
                            <div className="price d-flex d-md-block align-items-center">
                                <div className="d-flex align-items-center">
                                    <h2 className='me-3 mb-1'>$120.00</h2>
                                    <span className="percent">50%</span>
                                </div>
                                <span className="former-price ms-auto">$240.00</span>
                            </div>
                            <div className="mt-md-3 d-block d-md-block d-xl-block d-xxl-flex add-to-cart align-items-center">
                                <fetcher.Form className='me-xxl-3'>
                                    <div className="mb-3 mb-md-2 mb-xl-2 mb-xxl-0 mt-2 mt-md-0 me-3 me-md-4 plus-and-minus d-flex justify-content-between">
                                        <button type='button' onClick={() => handleDecrease("Fall Limited Edition Skirt")}><MinusIcon className="me-4" width={23}/></button>
                                        <span>{quantity}</span>
                                        <button type='button' onClick={() => handleIncrease("Fall Limited Edition Skirt")}><PlusIcon className="ms-4" width={23}/></button>
                                    </div>
                                </fetcher.Form>
                                <fetcher.Form>
                                    <button type='button' className="button d-flex align-items-center justify-content-center"
                                        onClick={() => addToCart(Skirt22, 120,  quantity, 'Fall Limited Edition Skirt')}

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
            {/* eigth row */}
            <div
                className='mySlides fadee'
                style={slideIndex === 8 ? { display: "block" } : { display: "none" }}
            >
                <Row 
                    className="align-items-center justify-content-sm-between justify-content-md-between justify-content-lg-around"
                >
                    <Col xs={12} sm={12} md={6} lg={5}>
                        <img src={Skirt26} alt="Skirt" className="img-fluid"/>
                        <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                            {eigthSkirtImages.map((img, index) => (
                                <Col sm={3} md={3} lg={3} className='images-container'>
                                    <img key={index} src={img} onClick={() => handleClick(index)} alt="Skirt" className='img-fluid'/>
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
                                            <img src={eigthSkirtImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
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
                    </div>
                    <Col xs={12} sm={12} md={6} lg={5}>
                        <div className="mt-3 mt-sm-4 mt-md-0 item-description">
                            <div className="mb-3 mb-md-4 heading">
                                <h5>SKIRT</h5>
                                <h2>Fall Limited Edition Skirt</h2>
                            </div>
                            <p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                Explicabo ipsa, nostrum harum deserunt amet hic. Lorem ipsum dolor sit amet.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            </p>
                            <p className='size'>Size: <span className='ms-1'>xl</span></p>
                            <div className="price d-flex d-md-block align-items-center">
                                <div className="d-flex align-items-center">
                                    <h2 className='me-3 mb-1'>$250.00</h2>
                                    <span className="percent">50%</span>
                                </div>
                                <span className="former-price ms-auto">$500.00</span>
                            </div>
                            <div className="mt-md-3 d-block d-md-block d-xl-block d-xxl-flex add-to-cart align-items-center">
                                <fetcher.Form className='me-xxl-3'>
                                    <div className="mb-3 mb-md-2 mb-xl-2 mb-xxl-0 mt-2 mt-md-0 me-3 me-md-4 plus-and-minus d-flex justify-content-between">
                                        <button type='button' onClick={() => handleDecrease("Fall Limited Edition Skirt")}><MinusIcon className="me-4" width={23}/></button>
                                        <span>{quantity}</span>
                                        <button type='button' onClick={() => handleIncrease("Fall Limited Edition Skirt")}><PlusIcon className="ms-4" width={23}/></button>
                                    </div>
                                </fetcher.Form>
                                <fetcher.Form>
                                    <button type='button' className="button d-flex align-items-center justify-content-center"
                                        onClick={() => addToCart(Skirt26, 250, quantity, 'Fall Limited Edition Skirt')}

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
            {/* nineth row */}
            <div
                className='mySlides fadee'
                style={slideIndex === 9 ? { display: "block" } : { display: "none" }}
            >
                <Row 
                    className="align-items-center justify-content-sm-between justify-content-md-between justify-content-lg-around"
                >
                    <Col xs={12} sm={12} md={6} lg={5}>
                        <img src={Skirt30} alt="Skirt" className="img-fluid"/>
                        <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                            {ninethSkirtImages.map((img, index) => (
                                <Col sm={3} md={3} lg={3} className='images-container'>
                                    <img key={index} src={img} onClick={() => handleClick(index)} alt="Skirt" className='img-fluid'/>
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
                                            <img src={ninethSkirtImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
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
                    </div>
                    <Col xs={12} sm={12} md={6} lg={5}>
                        <div className="mt-3 mt-sm-4 mt-md-0 item-description">
                            <div className="mb-3 mb-md-4 heading">
                                <h5>SKIRT</h5>
                                <h2>Fall Limited Edition Skirt</h2>
                            </div>
                            <p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                Explicabo ipsa, nostrum harum deserunt amet hic. Lorem ipsum dolor sit amet.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            </p>
                            <p className='size'>Size: <span className='ms-1'>xl</span></p>
                            <div className="price d-flex d-md-block align-items-center">
                                <div className="d-flex align-items-center">
                                    <h2 className='me-3 mb-1'>$235.00</h2>
                                    <span className="percent">50%</span>
                                </div>
                                <span className="former-price ms-auto">$470.00</span>
                            </div>
                            <div className="mt-md-3 d-block d-md-block d-xl-block d-xxl-flex add-to-cart align-items-center">
                                <fetcher.Form className='me-xxl-3'>
                                    <div className="mb-3 mb-md-2 mb-xl-2 mb-xxl-0 mt-2 mt-md-0 me-3 me-md-4 plus-and-minus d-flex justify-content-between">
                                        <button type='button' onClick={() => handleDecrease("Fall Limited Edition Skirt")}><MinusIcon className="me-4" width={23}/></button>
                                        <span>{quantity}</span>
                                        <button type='button' onClick={() => handleIncrease("Fall Limited Edition Skirt")}><PlusIcon className="ms-4" width={23}/></button>
                                    </div>
                                </fetcher.Form>
                                <fetcher.Form>
                                    <button type='button' className="button d-flex align-items-center justify-content-center"
                                        onClick={() => addToCart(Skirt30, 235, quantity, 'Fall Limited Edition Skirt')}

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
            {/* tenth row */}
            <div
                className='mySlides fadee'
                style={slideIndex === 10 ? { display: "block" } : { display: "none" }}
            >
                <Row 
                    className="align-items-center justify-content-sm-between justify-content-md-between justify-content-lg-around"
                >
                    <Col xs={12} sm={12} md={6} lg={5}>
                        <img src={Skirt33} alt="Skirt" className="img-fluid"/>
                        <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                            {tenthSkirtImages.map((img, index) => (
                                <Col sm={3} md={3} lg={3} className='images-container'>
                                    <img key={index} src={img} onClick={() => handleClick(index)} alt="Skirt" className='img-fluid'/>
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
                                            <img src={tenthSkirtImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
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
                    </div>
                    <Col xs={12} sm={12} md={6} lg={5}>
                        <div className="mt-3 mt-sm-4 mt-md-0 item-description">
                            <div className="mb-3 mb-md-4 heading">
                                <h5>SKIRT</h5>
                                <h2>Fall Limited Edition Skirt</h2>
                            </div>
                            <p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                Explicabo ipsa, nostrum harum deserunt amet hic. Lorem ipsum dolor sit amet.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            </p>
                            <p className='size'>Size: <span className='ms-1'>xl</span></p>
                            <div className="price d-flex d-md-block align-items-center">
                                <div className="d-flex align-items-center">
                                    <h2 className='me-3 mb-1'>$280.00</h2>
                                    <span className="percent">50%</span>
                                </div>
                                <span className="former-price ms-auto">$560.00</span>
                            </div>
                            <div className="mt-md-3 d-block d-md-block d-xl-block d-xxl-flex add-to-cart align-items-center">
                                <fetcher.Form className='me-xxl-3'>
                                    <div className="mb-3 mb-md-2 mb-xl-2 mb-xxl-0 mt-2 mt-md-0 me-3 me-md-4 plus-and-minus d-flex justify-content-between">
                                        <button type='button' onClick={() => handleDecrease("Fall Limited Edition Skirt")}><MinusIcon className="me-4" width={23}/></button>
                                        <span>{quantity}</span>
                                        <button type='button' onClick={() => handleIncrease("Fall Limited Edition Skirt")}><PlusIcon className="ms-4" width={23}/></button>
                                    </div>
                                </fetcher.Form>
                                <fetcher.Form>
                                    <button type='button' className="button d-flex align-items-center justify-content-center"
                                        onClick={() => addToCart(Skirt33, 280, quantity, 'Fall Limited Edition Skirt')}

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
            </div>
      </Container>
    );
}
 
export default SlideShow;