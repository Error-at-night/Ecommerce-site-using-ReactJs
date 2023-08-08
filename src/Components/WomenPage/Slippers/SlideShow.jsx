// Bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Sass
import '../../../Sass/WomenPage/SlideShow.scss';

// Components
import ScrollToTopButton from '../../ScrollToTopButton';

// images
// slippers
import Slippers1 from "../../../images/Women-slippers1.png"
import Slippers2 from "../../../images/Women-slippers2.png"
import Slippers3 from "../../../images/Women-slippers3.png"
import Slippers4 from "../../../images/Women-slippers4.png"
import Slippers5 from "../../../images/Women-slippers5.png"
import Slippers6 from "../../../images/Women-slippers6.png"
import Slippers7 from "../../../images/Women-slippers7.png"
import Slippers8 from "../../../images/Women-slippers8.png"
import Slippers9 from "../../../images/Women-slippers9.png"
import Slippers10 from "../../../images/Women-slippers10.png"
import Slippers11 from "../../../images/Women-slippers11.png"
import Slippers12 from "../../../images/Women-slippers12.png"
import Slippers13 from "../../../images/Women-slippers13.png"
import Slippers14 from "../../../images/Women-slippers14.png"
import Slippers15 from "../../../images/Women-slippers15.png"
import Slippers16 from "../../../images/Women-slippers16.png"
import Slippers17 from "../../../images/Women-slippers17.png"
import Slippers18 from "../../../images/Women-slippers18.png"
import Slippers19 from "../../../images/Women-slippers19.png"
import Slippers20 from "../../../images/Women-slippers20.png"

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
      prevIndex + n > 5 ? 1 : prevIndex + n < 1 ? 5 : prevIndex + n
    );
  }

  function currentSlide(n) {
    setSlideIndex(n);
  }

  // first
  const firstSlippersImages = [
    Slippers9,
    Slippers10,
    Slippers11,
    Slippers12,
  ]

  // second
  const secondSlippersImages = [
    Slippers13,
    Slippers14,
    Slippers16,
    Slippers15,
  ]

   // third
   const thirdSlippersImages = [
    Slippers1,
    Slippers2,
    Slippers3,
    Slippers4,
  ]

  // fourth
  const fourthSlippersImages = [
    Slippers17,
    Slippers18,
    Slippers19,
    Slippers20,
  ]

  // fifth
  const fifthSlippersImages = [
    Slippers5,
    Slippers6,
    Slippers7,
    Slippers8,
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
      setCurrentImgIndex((currentImgIndex + firstSlippersImages.length - 1) % firstSlippersImages.length);
  }

  const handleNext = () => {
      setCurrentImgIndex((currentImgIndex + 1) % firstSlippersImages.length);
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
              <img src={Slippers9} alt="Slippers" className="img-fluid"/>
              <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                {firstSlippersImages.map((img, index) => (
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
                        <img src={firstSlippersImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
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
                      onClick={() => addToCart(Slippers9, 160, quantity, 'Fall Limited Edition Slippers')}
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
              <img src={Slippers13} alt="Slippers" className="img-fluid"/>
              <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                {secondSlippersImages.map((img, index) => (
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
                        <img src={secondSlippersImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
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
                <p className='size'>Size: <span className='ms-1'>35</span></p>
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
                      <button type='button' onClick={() => handleDecrease("Fall Limited Edition Slippers")} ><MinusIcon className="me-4" width={23}/></button>
                      <span>{quantity}</span>
                      <button type='button' onClick={() => handleIncrease("Fall Limited Edition Slippers")}><PlusIcon className="ms-4" width={23}/></button>
                    </div>
                  </fetcher.Form>
                  <fetcher.Form>
                    <button className="button d-flex align-items-center justify-content-center"
                      onClick={() => addToCart(Slippers13, 125, quantity, 'Fall Limited Edition Slippers')}
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
              <img src={Slippers1} alt="slippers" className="img-fluid"/>
              <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                {thirdSlippersImages.map((img, index) => (
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
                        <img src={thirdSlippersImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
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
                <p className='size'>Size: <span className='ms-1'>38</span></p>
                <div className="price d-flex d-md-block align-items-center">
                  <div className="d-flex align-items-center">
                    <h2 className="me-3 mb-1">$100.00</h2>
                    <span className="percent">50%</span>
                  </div>
                  <span className="former-price ms-auto">$200.00</span>
                </div>
                <div className="mt-md-3 d-block d-md-block d-xl-block d-xxl-flex add-to-cart align-items-center">
                  <fetcher.Form className='me-xxl-3'>
                    <div className="mb-3 mb-md-2 mb-xl-2 mb-xxl-0 mt-2 mt-md-0 me-3 me-md-4 plus-and-minus d-flex justify-content-between">
                      <button type='button' onClick={() => handleDecrease("Fall Limited Edition Slippers")} ><MinusIcon className="me-4" width={23}/></button>
                      <span>{quantity}</span>
                      <button type='button' onClick={() => handleIncrease("Fall Limited Edition Slippers")}><PlusIcon className="ms-4" width={23}/></button>
                    </div>
                  </fetcher.Form>
                  <fetcher.Form>
                    <button className="button d-flex align-items-center justify-content-center"
                      onClick={() => addToCart(Slippers1, 100, quantity, 'Fall Limited Edition Slippers')}
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
              <img src={Slippers17} alt="Slippers" className="img-fluid"/>
              <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                {fourthSlippersImages.map((img, index) => (
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
                        <img src={fourthSlippersImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
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
                    <h2 className="me-3 mb-1">$110.00</h2>
                    <span className="percent">50%</span>
                  </div>
                  <span className="former-price ms-auto">$220.00</span>
                </div>
                <div className="mt-md-3 d-block d-md-block d-xl-block d-xxl-flex add-to-cart align-items-center">
                  <fetcher.Form className='me-xxl-3'>
                    <div className="mb-3 mb-md-2 mb-xl-2 mb-xxl-0 mt-2 mt-md-0 me-3 me-md-4 plus-and-minus d-flex justify-content-between">
                      <button type='button' onClick={() => handleDecrease("Fall Limited Edition Slippers")} ><MinusIcon className="me-4" width={23}/></button>
                      <span>{quantity}</span>
                      <button type='button' onClick={() => handleIncrease("Fall Limited Edition Slippers")}><PlusIcon className="ms-4" width={23}/></button>
                    </div>
                  </fetcher.Form>
                  <fetcher.Form>
                    <button className="button d-flex align-items-center justify-content-center"
                      onClick={() => addToCart(Slippers17, 110, quantity, 'Fall Limited Edition Slippers')}
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
              <img src={Slippers5} alt="Slippers" className="img-fluid"/>
              <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                {fifthSlippersImages.map((img, index) => (
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
                        <img src={fifthSlippersImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
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
                <p className='size'>Size: <span className='ms-1'>40</span></p>
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
                      <button type='button' onClick={() => handleDecrease("Fall Limited Edition Slippers")} ><MinusIcon className="me-4" width={23}/></button>
                      <span>{quantity}</span>
                      <button type='button' onClick={() => handleIncrease("Fall Limited Edition Slippers")}><PlusIcon className="ms-4" width={23}/></button>
                    </div>
                  </fetcher.Form>
                  <fetcher.Form>
                    <button className="button d-flex align-items-center justify-content-center"
                      onClick={() => addToCart(Slippers5, 180, quantity, 'Fall Limited Edition Slippers')}
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
        </div>
      </Container>
    );
}
 
export default SlideShow;