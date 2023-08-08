// Bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Components
import ScrollToTopButton from '../../ScrollToTopButton';

// Sass
import '../../../Sass/MenPage/SlideShow.scss';

// gown image
import Gown1 from "../../../images/Gown-1.png"
import Gown2 from "../../../images/Gown-2.png"
import Gown3 from "../../../images/Gown-3.png"
import Gown4 from "../../../images/Gown-4.png"
import Gown5 from "../../../images/Gown-6.png"
import Gown6 from "../../../images/Gown-7.png"
import Gown7 from "../../../images/Gown-8.png"
import Gown8 from "../../../images/Gown-9.png"
import Gown9 from "../../../images/Gown-10.png"
import Gown10 from "../../../images/Gown-12.png"
import Gown11 from "../../../images/Gown-13.png"
import Gown12 from "../../../images/Gown-14.png"
import Gown13 from "../../../images/Gown-15.png"
import Gown14 from "../../../images/Gown-16.png"
import Gown15 from "../../../images/Gown-17.png"
import Gown16 from "../../../images/Gown-18.png"
import Gown17 from "../../../images/Gown-19.png"
import Gown18 from "../../../images/Gown-20.png"
import Gown19 from "../../../images/Gown-21.png"
import Gown20 from "../../../images/Gown-22.png"
import Gown21 from "../../../images/Gown-23.png"
import Gown22 from "../../../images/Gown-24.png"
import Gown23 from "../../../images/Gown-25.png"
import Gown24 from "../../../images/Gown-26.png"
import Gown25 from "../../../images/Gown-27.png"
import Gown26 from "../../../images/Gown-28.png"
import Gown27 from "../../../images/Gown-29.png"
import Gown28 from "../../../images/Gown-30.png"
import Gown29 from "../../../images/Gown-31.png"
import Gown30 from "../../../images/Gown-32.png"
import Gown31 from "../../../images/Gown-33.png"
import Gown32 from "../../../images/Gown-34.png"
import Gown33 from "../../../images/Gown-35.png"
import Gown34 from "../../../images/Gown-37.png"
import Gown35 from "../../../images/Gown-38.png"
import Gown36 from "../../../images/Gown-39.png"
import Gown37 from "../../../images/Gown-40.png"
import Gown38 from "../../../images/Gown-41.png"
import Gown39 from "../../../images/Gown-42.png"
import Gown40 from "../../../images/Gown-43.png"

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
  const firstGownImages = [
    Gown1,
    Gown2,
    Gown3,
    Gown4
  ];
  
  //second   
  const secondGownImages = [
    Gown5,
    Gown6,
    Gown7,
    Gown8
  ];

  //third  
  const thirdGownImages = [
    Gown9,
    Gown10,
    Gown11,
    Gown12
  ];

  //fourth
  const fourthGownImages = [
    Gown13,
    Gown14,
    Gown15,
    Gown16
  ];

  //fifth
  const fifthGownImages = [
    Gown17,
    Gown18,
    Gown19,
    Gown20
  ];

  //sixth
  const sixthGownImages = [
    Gown21,
    Gown22,
    Gown23,
    Gown24
  ];

  //seventh
  const seventhGownImages = [
    Gown25,
    Gown26,
    Gown27,
    Gown28
  ];

  // eigth
  const eigthGownImages = [
    Gown29,
    Gown30,
    Gown31,
    Gown32
  ];

  // nineth
  const ninethGownImages = [
    Gown33,
    Gown34,
    Gown35,
    Gown36,
  ];

  //tenth
  const tenthGownImages = [
    Gown37,
    Gown38,
    Gown39,
    Gown40,
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
      setCurrentImgIndex((currentImgIndex + firstGownImages.length - 1) % firstGownImages.length);
  }

  const handleNext = () => {
      setCurrentImgIndex((currentImgIndex + 1) % firstGownImages.length);
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
                        <img src={Gown1} alt="Gown" className="img-fluid"/>
                        <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                            {firstGownImages.map((img, index) => (
                                <Col sm={3} md={3} lg={3} className='images-container'>
                                    <img key={index} src={img} onClick={() => handleClick(index)} alt="Gown" className='img-fluid'/>
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
                                            <img src={firstGownImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
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
                                <h5>GOWN</h5>
                                <h2>Fall Limited Edition Gown</h2>
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
                                        <button type='button' onClick={() => handleDecrease("Fall Limited Edition Gown")}><MinusIcon className="me-4" width={23}/></button>
                                        <span>{quantity}</span>
                                        <button type='button' onClick={() => handleIncrease("Fall Limited Edition Gown")}><PlusIcon className="ms-4" width={23}/></button>
                                    </div>
                                </fetcher.Form>
                                <fetcher.Form>
                                    <button type='button' className="button d-flex align-items-center justify-content-center"
                                        onClick={() => addToCart(Gown1, 200, quantity, 'Fall Limited Edition Gown')}

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
                        <img src={Gown5} alt="Gown" className="img-fluid"/>
                        <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                            {secondGownImages.map((img, index) => (
                                <Col sm={3} md={3} lg={3} className='images-container'>
                                    <img key={index} src={img} onClick={() => handleClick(index)} alt="Gown" className='img-fluid'/>
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
                                            <img src={secondGownImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
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
                                <h5>GOWN</h5>
                                <h2>Fall Limited Edition Gown</h2>
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
                                        <button type='button' onClick={() => handleDecrease("Fall Limited Edition Gown")}><MinusIcon className="me-4" width={23}/></button>
                                        <span>{quantity}</span>
                                        <button type='button' onClick={() => handleIncrease("Fall Limited Edition Gown")}><PlusIcon className="ms-4" width={23}/></button>
                                    </div>
                                </fetcher.Form>
                                <fetcher.Form>
                                    <button type='button' className="button d-flex align-items-center justify-content-center"
                                        onClick={() => addToCart(Gown5, 180, quantity, 'Fall Limited Edition Gown')}

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
                        <img src={Gown9} alt="Gown" className="img-fluid"/>
                        <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                            {thirdGownImages.map((img, index) => (
                                <Col sm={3} md={3} lg={3} className='images-container'>
                                    <img key={index} src={img} onClick={() => handleClick(index)} alt="Gown" className='img-fluid'/>
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
                                            <img src={thirdGownImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
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
                                <h5>GOWN</h5>
                                <h2>Fall Limited Edition Gown</h2>
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
                                        <button type='button' onClick={() => handleDecrease("Fall Limited Edition Gown")}><MinusIcon className="me-4" width={23}/></button>
                                        <span>{quantity}</span>
                                        <button type='button' onClick={() => handleIncrease("Fall Limited Edition Gown")}><PlusIcon className="ms-4" width={23}/></button>
                                    </div>
                                </fetcher.Form>
                                <fetcher.Form>
                                    <button type='button' className="button d-flex align-items-center justify-content-center"
                                        onClick={() => addToCart(Gown9, 240, quantity, 'Fall Limited Edition Gown')}

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
                        <img src={Gown13} alt="Gown"className="img-fluid"/>
                        <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                            {fourthGownImages.map((img, index) => (
                                <Col sm={3} md={3} lg={3} className='images-container'>
                                    <img key={index} src={img} onClick={() => handleClick(index)} alt="Gown"className='img-fluid'/>
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
                                            <img src={fourthGownImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
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
                                <h5>GOWN</h5>
                                <h2>Fall Limited Edition Gown</h2>
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
                                        <button type='button' onClick={() => handleDecrease("Fall Limited Edition Gown")}><MinusIcon className="me-4" width={23}/></button>
                                        <span>{quantity}</span>
                                        <button type='button' onClick={() => handleIncrease("Fall Limited Edition Gown")}><PlusIcon className="ms-4" width={23}/></button>
                                    </div>
                                </fetcher.Form>
                                <fetcher.Form>
                                    <button type='button' className="button d-flex align-items-center justify-content-center"
                                        onClick={() => addToCart(Gown13, 220, quantity, 'Fall Limited Edition Gown')}

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
                        <img src={Gown17} alt="Gown" className="img-fluid"/>
                        <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                            {fifthGownImages.map((img, index) => (
                                <Col sm={3} md={3} lg={3} className='images-container'>
                                    <img key={index} src={img} onClick={() => handleClick(index)} alt="Gown" className='img-fluid'/>
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
                                            <img src={fifthGownImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
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
                                <h5>GOWN</h5>
                                <h2>Fall Limited Edition Gown</h2>
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
                                        <button type='button' onClick={() => handleDecrease("Fall Limited Edition Gown")}><MinusIcon className="me-4" width={23}/></button>
                                        <span>{quantity}</span>
                                        <button type='button' onClick={() => handleIncrease("Fall Limited Edition Gown")}><PlusIcon className="ms-4" width={23}/></button>
                                    </div>
                                </fetcher.Form>
                                <fetcher.Form>
                                    <button type='button' className="button d-flex align-items-center justify-content-center"
                                        onClick={() => addToCart(Gown17, 150, quantity, 'Fall Limited Edition Gown')}

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
                        <img src={Gown21} alt="Gown" className="img-fluid"/>
                        <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                            {sixthGownImages.map((img, index) => (
                                <Col sm={3} md={3} lg={3} className='images-container'>
                                    <img key={index} src={img} onClick={() => handleClick(index)} alt="Gown" className='img-fluid'/>
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
                                            <img src={sixthGownImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
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
                                <h5>GOWN</h5>
                                <h2>Fall Limited Edition Gown</h2>
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
                                        <button type='button' onClick={() => handleDecrease("Fall Limited Edition Gown")}><MinusIcon className="me-4" width={23}/></button>
                                        <span>{quantity}</span>
                                        <button type='button' onClick={() => handleIncrease("Fall Limited Edition Gown")}><PlusIcon className="ms-4" width={23}/></button>
                                    </div>
                                </fetcher.Form>
                                <fetcher.Form>
                                    <button type='button' className="button d-flex align-items-center justify-content-center"
                                        onClick={() => addToCart(Gown21, 210, quantity, 'Fall Limited Edition Gown')}

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
                        <img src={Gown25} alt="Gown" className="img-fluid"/>
                        <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                            {seventhGownImages.map((img, index) => (
                                <Col sm={3} md={3} lg={3} className='images-container'>
                                    <img key={index} src={img} onClick={() => handleClick(index)} alt="Gown" className='img-fluid'/>
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
                                            <img src={seventhGownImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
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
                                <h5>GOWN</h5>
                                <h2>Fall Limited Edition Gown</h2>
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
                                        <button type='button' onClick={() => handleDecrease("Fall Limited Edition Gown")}><MinusIcon className="me-4" width={23}/></button>
                                        <span>{quantity}</span>
                                        <button type='button' onClick={() => handleIncrease("Fall Limited Edition Gown")}><PlusIcon className="ms-4" width={23}/></button>
                                    </div>
                                </fetcher.Form>
                                <fetcher.Form>
                                    <button type='button' className="button d-flex align-items-center justify-content-center"
                                        onClick={() => addToCart(Gown25, 120,  quantity, 'Fall Limited Edition Gown')}

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
                        <img src={Gown29} alt="Gown" className="img-fluid"/>
                        <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                            {eigthGownImages.map((img, index) => (
                                <Col sm={3} md={3} lg={3} className='images-container'>
                                    <img key={index} src={img} onClick={() => handleClick(index)} alt="Gown" className='img-fluid'/>
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
                                            <img src={eigthGownImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
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
                                <h5>GOWN</h5>
                                <h2>Fall Limited Edition Gown</h2>
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
                                        <button type='button' onClick={() => handleDecrease("Fall Limited Edition Gown")}><MinusIcon className="me-4" width={23}/></button>
                                        <span>{quantity}</span>
                                        <button type='button' onClick={() => handleIncrease("Fall Limited Edition Gown")}><PlusIcon className="ms-4" width={23}/></button>
                                    </div>
                                </fetcher.Form>
                                <fetcher.Form>
                                    <button type='button' className="button d-flex align-items-center justify-content-center"
                                        onClick={() => addToCart(Gown29, 250, quantity, 'Fall Limited Edition Gown')}

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
                        <img src={Gown33} alt="Gown" className="img-fluid"/>
                        <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                            {ninethGownImages.map((img, index) => (
                                <Col sm={3} md={3} lg={3} className='images-container'>
                                    <img key={index} src={img} onClick={() => handleClick(index)} alt="Gown" className='img-fluid'/>
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
                                            <img src={ninethGownImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
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
                                <h5>GOWN</h5>
                                <h2>Fall Limited Edition Gown</h2>
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
                                        <button type='button' onClick={() => handleDecrease("Fall Limited Edition Gown")}><MinusIcon className="me-4" width={23}/></button>
                                        <span>{quantity}</span>
                                        <button type='button' onClick={() => handleIncrease("Fall Limited Edition Gown")}><PlusIcon className="ms-4" width={23}/></button>
                                    </div>
                                </fetcher.Form>
                                <fetcher.Form>
                                    <button type='button' className="button d-flex align-items-center justify-content-center"
                                        onClick={() => addToCart(Gown33, 235, quantity, 'Fall Limited Edition Gown')}

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
                        <img src={Gown37} alt="Gown" className="img-fluid"/>
                        <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                            {tenthGownImages.map((img, index) => (
                                <Col sm={3} md={3} lg={3} className='images-container'>
                                    <img key={index} src={img} onClick={() => handleClick(index)} alt="Gown" className='img-fluid'/>
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
                                            <img src={tenthGownImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
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
                                <h5>Gown</h5>
                                <h2>Fall Limited Edition Gown</h2>
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
                                        <button type='button' onClick={() => handleDecrease("Fall Limited Edition Gown")}><MinusIcon className="me-4" width={23}/></button>
                                        <span>{quantity}</span>
                                        <button type='button' onClick={() => handleIncrease("Fall Limited Edition Gown")}><PlusIcon className="ms-4" width={23}/></button>
                                    </div>
                                </fetcher.Form>
                                <fetcher.Form>
                                    <button type='button' className="button d-flex align-items-center justify-content-center"
                                        onClick={() => addToCart(Gown37, 280, quantity, 'Fall Limited Edition Gown')}

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