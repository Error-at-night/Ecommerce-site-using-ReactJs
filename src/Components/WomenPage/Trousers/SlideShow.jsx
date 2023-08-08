// Bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Sass
import '../../../Sass/WomenPage/SlideShow.scss';

// Components
import ScrollToTopButton from '../../ScrollToTopButton';

// images
import Trousers1 from "../../../images/Women-trousers1.png"
import Trousers2 from "../../../images/Women-trousers2.png"
import Trousers3 from "../../../images/Women-trousers3.png"
import Trousers4 from "../../../images/Women-trousers4.png"
import Trousers5 from "../../../images/Women-trousers5.png"
import Trousers6 from "../../../images/Women-trousers6.png"
import Trousers7 from "../../../images/Women-trousers7.png"
import Trousers8 from "../../../images/Women-trousers8.png"
import Trousers9 from "../../../images/Women-trousers9.png"
import Trousers10 from "../../../images/Women-trousers10.png"
import Trousers11 from "../../../images/Women-trousers11.png"
import Trousers12 from "../../../images/Women-trousers12.png"
import Trousers13 from "../../../images/Women-trousers13.png"
import Trousers14 from "../../../images/Women-trousers14.png"
import Trousers15 from "../../../images/Women-trousers15.png"
import Trousers16 from "../../../images/Women-trousers16.png"
import Trousers17 from "../../../images/Women-trousers17.png"
import Trousers18 from "../../../images/Women-trousers18.png"
import Trousers19 from "../../../images/Women-trousers19.png"
import Trousers20 from "../../../images/Women-trousers20.png"
import Trousers21 from "../../../images/Women-trousers21.png"
import Trousers22 from "../../../images/Women-trousers22.png"
import Trousers23 from "../../../images/Women-trousers23.png"
import Trousers24 from "../../../images/Women-trousers24.png"
import Trousers25 from "../../../images/Women-trousers25.png"
import Trousers26 from "../../../images/Women-trousers26.png"
import Trousers27 from "../../../images/Women-trousers27.png"
import Trousers28 from "../../../images/Women-trousers28.png"
import Trousers29 from "../../../images/Women-trousers29.png"
import Trousers30 from "../../../images/Women-trousers30.png"
import Trousers31 from "../../../images/Women-trousers31.png"
import Trousers33 from "../../../images/Women-trousers33.png"
import Trousers34 from "../../../images/Women-trousers34.png"
import Trousers35 from "../../../images/Women-trousers35.png"
import Trousers36 from "../../../images/Women-trousers36.png"
import Trousers37 from "../../../images/Women-trousers37.png"
import Trousers38 from "../../../images/Women-trousers38.png"
import Trousers39 from "../../../images/Women-trousers39.png"
import Trousers40 from "../../../images/Women-trousers40.png"
import Trousers41 from "../../../images/Women-trousers41.png"
import Trousers42 from "../../../images/Women-trousers42.png"
import Trousers43 from "../../../images/Women-trousers43.png"
import Trousers44 from "../../../images/Women-trousers44.png"

// react icons
import ShoppingCartIcon from "@heroicons/react/24/outline/ShoppingCartIcon"
import PlusIcon from "@heroicons/react/24/solid/PlusIcon"
import MinusIcon from "@heroicons/react/24/solid/MinusIcon"

// React imports
import { useContext, useState } from 'react';

// React Router Dom imports 
import { useFetcher } from 'react-router-dom';

// Cart Context
import { CartContext } from '../../../Layout/Layout';

const SlideShow = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  // lightbox
  const [showLightbox, setShowLightbox] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  function plusSlides(n) {
    setSlideIndex((prevIndex) =>
      prevIndex + n > 11 ? 1 : prevIndex + n < 1 ? 11 : prevIndex + n
    );
  }

  function currentSlide(n) {
    setSlideIndex(n);
  }

  // Trousers
  const firstTrousersImages = [
    Trousers1,
    Trousers2,
    Trousers3,
    Trousers4
  ]

  // second
  const secondTrousersImages = [
    Trousers5,
    Trousers6,
    Trousers7,
    Trousers6
  ]


   // third
  const thirdTrousersImages = [
    Trousers8,
    Trousers9,
    Trousers10,
    Trousers11
  ]

  // fourth
  const fourthTrousersImages = [
    Trousers12,
    Trousers13,
    Trousers14,
    Trousers15
  ]

  // fifth
  const fifthTrousersImages = [
    Trousers16,
    Trousers17,
    Trousers18,
    Trousers19
  ]

  // sixth
  const sixthTrousersImages = [
    Trousers20,
    Trousers21,
    Trousers22,
    Trousers23
  ]

  // seventh
  const seventhTrousersImages = [
    Trousers24,
    Trousers25,
    Trousers26,
    Trousers27
  ]

  // eigth
  const eigthTrousersImages = [
    Trousers28,
    Trousers29,
    Trousers30,
    Trousers31,
  ]

  // nineth
  const ninethTrousersImages = [
    Trousers33,
    Trousers34,
    Trousers35,
    Trousers36,
  ]

   // tenth
   const tenthTrousersImages = [
    Trousers37,
    Trousers38,
    Trousers39,
    Trousers40,
  ]

   // eleventh
   const eleventhTrousersImages = [
    Trousers41,
    Trousers42,
    Trousers43,
    Trousers44,
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
      setCurrentImgIndex((currentImgIndex + firstTrousersImages.length - 1) % firstTrousersImages.length);
  }

  const handleNext = () => {
      setCurrentImgIndex((currentImgIndex + 1) % firstTrousersImages.length);
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
              <img src={Trousers1} alt="Trousers" className="img-fluid"/>
              <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                {firstTrousersImages.map((img, index) => (
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
                        <img src={firstTrousersImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
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
                <p className='size'>Size: <span className='ms-1'>34</span></p>
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
                      onClick={() => addToCart(Trousers1, 160, quantity, 'Fall Limited Edition Trouser')}
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
              <img src={Trousers5} alt="Trouser" className="img-fluid"/>
              <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                {secondTrousersImages.map((img, index) => (
                  <Col sm={3} md={3} lg={3} className='images-container'>
                    <img key={index} src={img} onClick={() => handleClick(index)} alt="Trouser" className='img-fluid'/>
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
                        <img src={secondTrousersImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
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
                <p className='size'>Size: <span className='ms-1'>30</span></p>
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
                      <button type='button' onClick={() => handleDecrease("Fall Limited Edition Trouser")} ><MinusIcon className="me-4" width={23}/></button>
                      <span>{quantity}</span>
                      <button type='button' onClick={() => handleIncrease("Fall Limited Edition Trouser")}><PlusIcon className="ms-4" width={23}/></button>
                    </div>
                  </fetcher.Form>
                  <fetcher.Form>
                    <button className="button d-flex align-items-center justify-content-center"
                      onClick={() => addToCart(Trousers5, 125, quantity, 'Fall Limited Edition Trouser')}
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
              <img src={Trousers8} alt="Trouser" className="img-fluid"/>
              <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                {thirdTrousersImages.map((img, index) => (
                  <Col sm={3} md={3} lg={3} className='images-container'>
                    <img key={index} src={img} onClick={() => handleClick(index)} alt="Trouser" className='img-fluid'/>
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
                        <img src={thirdTrousersImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
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
                <p className='size'>Size: <span className='ms-1'>32</span></p>
                <div className="price d-flex d-md-block align-items-center">
                  <div className="d-flex align-items-center">
                    <h2 className="me-3 mb-1">$180.00</h2>
                    <span className="percent">50%</span>
                  </div>
                  <span className="former-price ms-auto">$360.00</span>
                </div>
                <div className="mt-md-3 d-block d-md-block d-xl-block d-xxl-flex add-to-cart align-items-center">
                  <fetcher.Form className='me-xxl-3'>
                    <div className="mb-3 mb-md-2 mb-xl-2 mb-xxl-0 mt-2 mt-md-0 me-3 me-md-4 plus-and-minus d-flex justify-content-between">
                      <button type='button' onClick={() => handleDecrease("Fall Limited Edition Trouser")} ><MinusIcon className="me-4" width={23}/></button>
                      <span>{quantity}</span>
                      <button type='button' onClick={() => handleIncrease("Fall Limited Edition Trouser")}><PlusIcon className="ms-4" width={23}/></button>
                    </div>
                  </fetcher.Form>
                  <fetcher.Form>
                    <button className="button d-flex align-items-center justify-content-center"
                      onClick={() => addToCart(Trousers8, 180, quantity, 'Fall Limited Edition Trouser')}
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
              <img src={Trousers12} alt="Trouser" className="img-fluid"/>
              <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                {fourthTrousersImages.map((img, index) => (
                  <Col sm={3} md={3} lg={3} className='images-container'>
                    <img key={index} src={img} onClick={() => handleClick(index)} alt="Trouser" className='img-fluid'/>
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
                        <img src={fourthTrousersImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
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
                <p className='size'>Size: <span className='ms-1'>35</span></p>
                <div className="price d-flex d-md-block align-items-center">
                  <div className="d-flex align-items-center">
                    <h2 className="me-3 mb-1">$110.00</h2>
                    <span className="percent">50%</span>
                  </div>
                  <span className="former-price ms-auto">$220.00</span>
                </div>
                <div className="mt-md-3 d-block d-md-block d-xl-block d-xxl-flex add-to-cart align-items-center">
                  <fetcher.Form className='me-xxl-3'>
                    <div className="mb-3 mb-md-2 mb-xl-2 mb-xxl-0 mt-2 mt-md-0 me-3 me-md-4 plus-and-minus d-flex justify-content-between">
                      <button type='button' onClick={() => handleDecrease("Fall Limited Edition Trouser")} ><MinusIcon className="me-4" width={23}/></button>
                      <span>{quantity}</span>
                      <button type='button' onClick={() => handleIncrease("Fall Limited Edition Trouser")}><PlusIcon className="ms-4" width={23}/></button>
                    </div>
                  </fetcher.Form>
                  <fetcher.Form>
                    <button className="button d-flex align-items-center justify-content-center"
                      onClick={() => addToCart(Trousers12, 110, quantity, 'Fall Limited Edition Trouser')}
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
              <img src={Trousers16} alt="Trouser" className="img-fluid"/>
              <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                {fifthTrousersImages.map((img, index) => (
                  <Col sm={3} md={3} lg={3} className='images-container'>
                    <img key={index} src={img} onClick={() => handleClick(index)} alt="Trouser" className='img-fluid'/>
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
                        <img src={fifthTrousersImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
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
                <p className='size'>Size: <span className='ms-1'>33</span></p>
                <div className="price d-flex d-md-block align-items-center">
                  <div className="d-flex align-items-center">
                    <h2 className="me-3 mb-1">$180.00</h2>
                    <span className="percent">50%</span>
                  </div>
                  <span className="former-price ms-auto">$360.00</span>
                </div>
                <div className="mt-md-3 d-block d-md-block d-xl-block d-xxl-flex add-to-cart align-items-center">
                  <fetcher.Form className='me-xxl-3'>
                    <div className="mb-3 mb-md-2 mb-xl-2 mb-xxl-0 mt-2 mt-md-0 me-3 me-md-4 plus-and-minus d-flex justify-content-between">
                      <button type='button' onClick={() => handleDecrease("Fall Limited Edition Trouser")} ><MinusIcon className="me-4" width={23}/></button>
                      <span>{quantity}</span>
                      <button type='button' onClick={() => handleIncrease("Fall Limited Edition Trouser")}><PlusIcon className="ms-4" width={23}/></button>
                    </div>
                  </fetcher.Form>
                  <fetcher.Form>
                    <button className="button d-flex align-items-center justify-content-center"
                      onClick={() => addToCart(Trousers16, 180, quantity, 'Fall Limited Edition Trouser')}
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
              <img src={Trousers20} alt="Trouser" className="img-fluid"/>
              <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                {sixthTrousersImages.map((img, index) => (
                  <Col sm={3} md={3} lg={3} className='images-container'>
                    <img key={index} src={img} onClick={() => handleClick(index)} alt="Trouser" className='img-fluid'/>
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
                        <img src={sixthTrousersImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
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
                <p className='size'>Size: <span className='ms-1'>31</span></p>
                <div className="price d-flex d-md-block align-items-center">
                  <div className="d-flex align-items-center">
                    <h2 className="me-3 mb-1">$200.00</h2>
                    <span className="percent">50%</span>
                  </div>
                  <span className="former-price ms-auto">$400.00</span>
                </div>
                <div className="mt-md-3 d-block d-md-block d-xl-block d-xxl-flex add-to-cart align-items-center">
                  <fetcher.Form className='me-xxl-3'>
                    <div className="mb-3 mb-md-2 mb-xl-2 mb-xxl-0 mt-2 mt-md-0 me-3 me-md-4 plus-and-minus d-flex justify-content-between">
                      <button type='button' onClick={() => handleDecrease("Fall Limited Edition Trouser")} ><MinusIcon className="me-4" width={23}/></button>
                      <span>{quantity}</span>
                      <button type='button' onClick={() => handleIncrease("Fall Limited Edition Trouser")}><PlusIcon className="ms-4" width={23}/></button>
                    </div>
                  </fetcher.Form>
                  <fetcher.Form>
                    <button className="button d-flex align-items-center justify-content-center"
                      onClick={() => addToCart(Trousers20, 200, quantity, 'Fall Limited Edition Trouser')}
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
              <img src={Trousers24} alt="Trouser" className="img-fluid"/>
              <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                {seventhTrousersImages.map((img, index) => (
                  <Col sm={3} md={3} lg={3} className='images-container'>
                    <img key={index} src={img} onClick={() => handleClick(index)} alt="Trouser" className='img-fluid'/>
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
                        <img src={seventhTrousersImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
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
                <p className='size'>Size: <span className='ms-1'>33</span></p>
                <div className="price d-flex d-md-block align-items-center">
                  <div className="d-flex align-items-center">
                    <h2 className="me-3 mb-1">$190.00</h2>
                    <span className="percent">50%</span>
                  </div>
                  <span className="former-price ms-auto">$380.00</span>
                </div>
                <div className="mt-md-3 d-block d-md-block d-xl-block d-xxl-flex add-to-cart align-items-center">
                  <fetcher.Form className='me-xxl-3'>
                    <div className="mb-3 mb-md-2 mb-xl-2 mb-xxl-0 mt-2 mt-md-0 me-3 me-md-4 plus-and-minus d-flex justify-content-between">
                      <button type='button' onClick={() => handleDecrease("Fall Limited Edition Trouser")} ><MinusIcon className="me-4" width={23}/></button>
                      <span>{quantity}</span>
                      <button type='button' onClick={() => handleIncrease("Fall Limited Edition Trouser")}><PlusIcon className="ms-4" width={23}/></button>
                    </div>
                  </fetcher.Form>
                  <fetcher.Form>
                    <button className="button d-flex align-items-center justify-content-center"
                      onClick={() => addToCart(Trousers24, 190, quantity, 'Fall Limited Edition Trouser')}
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
              <img src={Trousers28} alt="Trouser" className="img-fluid"/>
              <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                {eigthTrousersImages.map((img, index) => (
                  <Col sm={3} md={3} lg={3} className='images-container'>
                    <img key={index} src={img} onClick={() => handleClick(index)} alt="Trouser" className='img-fluid'/>
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
                        <img src={eigthTrousersImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
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
                <p className='size'>Size: <span className='ms-1'>36</span></p>
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
                      <button type='button' onClick={() => handleDecrease("Fall Limited Edition Trouser")} ><MinusIcon className="me-4" width={23}/></button>
                      <span>{quantity}</span>
                      <button type='button' onClick={() => handleIncrease("Fall Limited Edition Trouser")}><PlusIcon className="ms-4" width={23}/></button>
                    </div>
                  </fetcher.Form>
                  <fetcher.Form>
                    <button className="button d-flex align-items-center justify-content-center"
                      onClick={() => addToCart(Trousers28, 120, quantity, 'Fall Limited Edition Trouser')}
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
              <img src={Trousers33} alt="Trouser" className="img-fluid"/>
              <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                {ninethTrousersImages.map((img, index) => (
                  <Col sm={3} md={3} lg={3} className='images-container'>
                    <img key={index} src={img} onClick={() => handleClick(index)} alt="Trouser" className='img-fluid'/>
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
                        <img src={ninethTrousersImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
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
                <p className='size'>Size: <span className='ms-1'>31</span></p>
                <div className="price d-flex d-md-block align-items-center">
                  <div className="d-flex align-items-center">
                    <h2 className="me-3 mb-1">$130.00</h2>
                    <span className="percent">50%</span>
                  </div>
                  <span className="former-price ms-auto">$260.00</span>
                </div>
                <div className="mt-md-3 d-block d-md-block d-xl-block d-xxl-flex add-to-cart align-items-center">
                  <fetcher.Form className='me-xxl-3'>
                    <div className="mb-3 mb-md-2 mb-xl-2 mb-xxl-0 mt-2 mt-md-0 me-3 me-md-4 plus-and-minus d-flex justify-content-between">
                      <button type='button' onClick={() => handleDecrease("Fall Limited Edition Trouser")} ><MinusIcon className="me-4" width={23}/></button>
                      <span>{quantity}</span>
                      <button type='button' onClick={() => handleIncrease("Fall Limited Edition Trouser")}><PlusIcon className="ms-4" width={23}/></button>
                    </div>
                  </fetcher.Form>
                  <fetcher.Form>
                    <button className="button d-flex align-items-center justify-content-center"
                      onClick={() => addToCart(Trousers33, 130, quantity, 'Fall Limited Edition Trouser')}
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
              <img src={Trousers37} alt="Trouser" className="img-fluid"/>
              <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                {tenthTrousersImages.map((img, index) => (
                  <Col sm={3} md={3} lg={3} className='images-container'>
                    <img key={index} src={img} onClick={() => handleClick(index)} alt="Trouser" className='img-fluid'/>
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
                        <img src={tenthTrousersImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
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
                <p className='size'>Size: <span className='ms-1'>36</span></p>
                <div className="price d-flex d-md-block align-items-center">
                  <div className="d-flex align-items-center">
                    <h2 className="me-3 mb-1">$210.00</h2>
                    <span className="percent">50%</span>
                  </div>
                  <span className="former-price ms-auto">$420.00</span>
                </div>
                <div className="mt-md-3 d-block d-md-block d-xl-block d-xxl-flex add-to-cart align-items-center">
                  <fetcher.Form className='me-xxl-3'>
                    <div className="mb-3 mb-md-2 mb-xl-2 mb-xxl-0 mt-2 mt-md-0 me-3 me-md-4 plus-and-minus d-flex justify-content-between">
                      <button type='button' onClick={() => handleDecrease("Fall Limited Edition Trouser")} ><MinusIcon className="me-4" width={23}/></button>
                      <span>{quantity}</span>
                      <button type='button' onClick={() => handleIncrease("Fall Limited Edition Trouser")}><PlusIcon className="ms-4" width={23}/></button>
                    </div>
                  </fetcher.Form>
                  <fetcher.Form>
                    <button className="button d-flex align-items-center justify-content-center"
                      onClick={() => addToCart(Trousers37, 210, quantity, 'Fall Limited Edition Trouser')}
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
              <img src={Trousers41} alt="Trouser" className="img-fluid"/>
              <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                {eleventhTrousersImages.map((img, index) => (
                  <Col sm={3} md={3} lg={3} className='images-container'>
                    <img key={index} src={img} onClick={() => handleClick(index)} alt="Trouser" className='img-fluid'/>
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
                        <img src={eleventhTrousersImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
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
                <p className='size'>Size: <span className='ms-1'>32</span></p>
                <div className="price d-flex d-md-block align-items-center">
                  <div className="d-flex align-items-center">
                    <h2 className="me-3 mb-1">$175.00</h2>
                    <span className="percent">50%</span>
                  </div>
                  <span className="former-price ms-auto">$350.00</span>
                </div>
                <div className="mt-md-3 d-block d-md-block d-xl-block d-xxl-flex add-to-cart align-items-center">
                  <fetcher.Form className='me-xxl-3'>
                    <div className="mb-3 mb-md-2 mb-xl-2 mb-xxl-0 mt-2 mt-md-0 me-3 me-md-4 plus-and-minus d-flex justify-content-between">
                      <button type='button' onClick={() => handleDecrease("Fall Limited Edition Trouser")} ><MinusIcon className="me-4" width={23}/></button>
                      <span>{quantity}</span>
                      <button type='button' onClick={() => handleIncrease("Fall Limited Edition Trouser")}><PlusIcon className="ms-4" width={23}/></button>
                    </div>
                  </fetcher.Form>
                  <fetcher.Form>
                    <button className="button d-flex align-items-center justify-content-center"
                      onClick={() => addToCart(Trousers41, 175, quantity, 'Fall Limited Edition Trouser')}
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
        </div>
      </Container>
    );
}
 
export default SlideShow;