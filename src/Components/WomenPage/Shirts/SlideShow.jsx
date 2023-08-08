// Bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Components
import ScrollToTopButton from '../../ScrollToTopButton';

// Sass
import '../../../Sass/MenPage/SlideShow.scss';

// images
// Shirts
import Shirt1 from "../../../images/Women-shirt1.png"
import Shirt2 from "../../../images/Women-shirt2.png"
import Shirt3 from "../../../images/Women-shirt3.png"
import Shirt4 from "../../../images/Women-shirt4.png"
import Shirt5 from "../../../images/Women-shirt5.png"
import Shirt6 from "../../../images/Women-shirt6.png"
import Shirt7 from "../../../images/Women-shirt7.png"
import Shirt8 from "../../../images/Women-shirt8.png"
import Shirt9 from "../../../images/Women-shirt9.png"
import Shirt11 from "../../../images/Women-shirt11.png"
import Shirt12 from "../../../images/Women-shirt12.png"
import Shirt13 from "../../../images/Women-shirt13.png"
import Shirt14 from "../../../images/Women-shirt14.png"
import Shirt15 from "../../../images/Women-shirt15.png"
import Shirt16 from "../../../images/Women-shirt16.png"
import Shirt17 from "../../../images/Women-shirt17.png"
import Shirt18 from "../../../images/Women-shirt18.png"
import Shirt19 from "../../../images/Women-shirt19.png"
import Shirt20 from "../../../images/Women-shirt20.png"
import Shirt21 from "../../../images/Women-shirt21.png"
import Shirt22 from "../../../images/Women-shirt22.png"
import Shirt23 from "../../../images/Women-shirt23.png"
import Shirt24 from "../../../images/Women-shirt24.png"
import Shirt25 from "../../../images/Women-shirt25.png"
import Shirt26 from "../../../images/Women-shirt26.png"
import Shirt27 from "../../../images/Women-shirt27.png"
import Shirt28 from "../../../images/Women-shirt28.png"
import Shirt29 from "../../../images/Women-shirt29.png"
import Shirt30 from "../../../images/Women-shirt30.png"
import Shirt31 from "../../../images/Women-shirt31.png"
import Shirt32 from "../../../images/Women-shirt32.png"
import Shirt33 from "../../../images/Women-shirt33.png"
import Shirt34 from "../../../images/Women-shirt34.png"
import Shirt35 from "../../../images/Women-shirt35.png"
import Shirt36 from "../../../images/Women-shirt36.png"
import Shirt37 from "../../../images/Women-shirt37.png"
import Shirt38 from "../../../images/Women-shirt38.png"

// react icons
import ShoppingCartIcon from "@heroicons/react/24/outline/ShoppingCartIcon"
import PlusIcon from "@heroicons/react/24/solid/PlusIcon"
import MinusIcon from "@heroicons/react/24/solid/MinusIcon"

// React imports
import { useContext, useState } from 'react';

// CartContext
import { CartContext } from "../../../Layout/Layout"

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

  // Lightbox
  const [showLightbox, setShowLightbox] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  // first
  const firstShirtImages = [
    Shirt28,
    Shirt27,
    Shirt29,
    Shirt30
  ];

   // second   
   const secondShirtImages = [
    Shirt34,
    Shirt32,
    Shirt31,
    Shirt33,
  ];

  // third
  const thirdShirtImages = [
    Shirt24,
    Shirt26,
    Shirt25,
    Shirt26,
  ];

  //fourth
  const fourthShirtImages = [
    Shirt8,
    Shirt9,
    Shirt11,
    Shirt9
  ];

  // fifth
  const fifthShirtImages = [
    Shirt35,
    Shirt36,
    Shirt37,
    Shirt38
  ];

  //sixth
  const sixthShirtImages = [
    Shirt4,
    Shirt5,
    Shirt6,
    Shirt7
  ];
  
  //seventh
  const seventhShirtImages = [
    Shirt16,
    Shirt17,
    Shirt18,
    Shirt19
  ]; 

  // eigth
  const eigthShirtImages = [
    Shirt12,
    Shirt13,
    Shirt14,
    Shirt15
  ]; 

  // nineth
  const ninethShirtImages = [
    Shirt1,
    Shirt2,
    Shirt3,
    Shirt2
  ];
  
  // tenth
  const tenthShirtImages = [
    Shirt20,
    Shirt21,
    Shirt22,
    Shirt23
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
    setCurrentImgIndex((currentImgIndex + firstShirtImages.length - 1) % firstShirtImages.length);
  }

  const handleNext = () => {
    setCurrentImgIndex((currentImgIndex + 1) % firstShirtImages.length);
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
              <img src={Shirt28} alt="Shirt" className="img-fluid"/>
              <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                {firstShirtImages.map((img, index) => (
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
                      <img src={firstShirtImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
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
                        onClick={() => addToCart(Shirt28, 150, quantity, 'Fall Limited Edition Shirt')}
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
              <img src={Shirt34} alt="shirt" className="img-fluid"/>
              <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                {secondShirtImages.map((img, index) => (
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
                      <img src={secondShirtImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
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
                    <h2 className="me-3 mb-1">$100.00</h2>
                    <span className="percent">50%</span>
                  </div>
                  <span className="former-price ms-auto">$200.00</span>
                </div>
                <div className="mt-md-3 d-block d-md-block d-xl-block d-xxl-flex add-to-cart align-items-center">
                  <fetcher.Form className='me-xxl-3'>
                    <div className="mb-3 mb-md-2 mb-xl-2 mb-xxl-0 mt-2 mt-md-0 me-3 me-md-4 plus-and-minus d-flex justify-content-between">
                      <button type='button' onClick={() => handleDecrease("Fall Limited Edition Shirt")}><MinusIcon className="me-4" width={23}/></button>
                      <span>{quantity}</span>
                      <button type='button'onClick={() => handleIncrease("Fall Limited Edition Shirt")}><PlusIcon className="ms-4" width={23}/></button>
                    </div>
                  </fetcher.Form>
                  <fetcher.Form>
                    <button type='button' className="button d-flex align-items-center justify-content-center"
                        onClick={() => addToCart(Shirt34, 100, quantity, 'Fall Limited Edition Shirt')}
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
              <img src={Shirt24} alt="Shirt" className="img-fluid"/>
              <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                {thirdShirtImages.map((img, index) => (
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
                      <img src={thirdShirtImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
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
                        onClick={() => addToCart(Shirt24, 120, quantity, 'Fall Limited Edition Shirt')}
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
              <img src={Shirt8} alt="Shirt" className="img-fluid"/>
              <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                {fourthShirtImages.map((img, index) => (
                  <Col sm={3} md={3} lg={3} className='images-container'>
                    <img key={index} src={img} onClick={() => handleClick(index)} alt="Shirt" className='img-fluid'/>
                  </Col>
                ))}
                {showLightbox &&
                  <div className="lightbox-overlay lightbox-overlay-fade" onClick={() => setShowLightbox(false)}>
                    <button type='button' onClick={(event) => {event.stopPropagation(); handlePrev();}}>❮</button>
                    <div className="lightbox-content">
                      <div className='close-btn-container d-block'>
                        <button type="button" className="close-btn" onClick={handleClose}>X</button>
                      </div>
                      <img src={fourthShirtImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
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
                    <h2 className="me-3 mb-1">$125.00</h2>
                    <span className="percent">50%</span>
                  </div>
                  <span className="former-price ms-auto">$250.00</span>
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
                        onClick={() => addToCart(Shirt8, 125, quantity, 'Fall Limited Edition Shirt')}
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
              <img src={Shirt35} alt="Shirt" className="img-fluid"/>
              <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                {fifthShirtImages.map((img, index) => (
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
                      <img src={fifthShirtImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
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
                    <h2 className="me-3 mb-1">$200.00</h2>
                    <span className="percent">50%</span>
                  </div>
                  <span className="former-price ms-auto">$400.00</span>
                </div>
                <div className="mt-md-3 d-block d-md-block d-xl-block d-xxl-flex add-to-cart align-items-center">
                  <fetcher.Form className='me-xxl-3'>
                    <div className="mb-3 mb-md-2 mb-xl-2 mb-xxl-0 mt-2 mt-md-0 me-3 me-md-4 plus-and-minus d-flex justify-content-between">
                      <button type="button" onClick={() => handleDecrease("Fall Limited Edition Shirt")}><MinusIcon className="me-4" width={23}/></button>
                      <span>{quantity}</span>
                      <button type='button' onClick={() => handleIncrease("Fall Limited Edition Shirt")}><PlusIcon className="ms-4" width={23}/></button>
                    </div>
                  </fetcher.Form>
                  <fetcher.Form>
                    <button type="button" className="button d-flex align-items-center justify-content-center"
                        onClick={() => addToCart(Shirt35, 200, quantity, 'Fall Limited Edition Shirt')}
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
              <img src={Shirt4} alt="Shirt" className="img-fluid"/>
              <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                {sixthShirtImages.map((img, index) => (
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
                      <img src={sixthShirtImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
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
                <p className='size'>Size: <span className='ms-1'>xxl</span></p>
                <div className="price d-flex d-md-block align-items-center">
                  <div className="d-flex align-items-center">
                    <h2 className="me-3 mb-1">$170.00</h2>
                    <span className="percent">50%</span>
                  </div>
                  <span className="former-price ms-auto">$340.00</span>
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
                        onClick={() => addToCart(Shirt4, 170, quantity, 'Fall Limited Edition Shirt')}
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
              <img src={Shirt16} alt="Shirt" className="img-fluid"/>
              <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                {seventhShirtImages.map((img, index) => (
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
                      <img src={seventhShirtImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
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
                    <h2 className="me-3 mb-1">$130.00</h2>
                    <span className="percent">50%</span>
                  </div>
                  <span className="former-price ms-auto">$260.00</span>
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
                        onClick={() => addToCart(Shirt16, 130, quantity, 'Fall Limited Edition Shirt')}
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
              <img src={Shirt12} alt="Shirt" className="img-fluid"/>
              <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                {eigthShirtImages.map((img, index) => (
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
                      <img src={eigthShirtImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
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
                    <h2 className="me-3 mb-1">$140.00</h2>
                    <span className="percent">50%</span>
                  </div>
                  <span className="former-price ms-auto">$280.00</span>
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
                        onClick={() => addToCart(Shirt12, 140, quantity, 'Fall Limited Edition Shirt')}
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
              <img src={Shirt1} alt="Shirt" className="img-fluid"/>
              <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                {ninethShirtImages.map((img, index) => (
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
                      <img src={ninethShirtImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
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
                    <h2 className="me-3 mb-1">$190.00</h2>
                    <span className="percent">50%</span>
                  </div>
                  <span className="former-price ms-auto">$380.00</span>
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
                        onClick={() => addToCart(Shirt1, 190, quantity, 'Fall Limited Edition Shirt')}
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
              <img src={Shirt20} alt="Shirt" className="img-fluid"/>
              <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                {tenthShirtImages.map((img, index) => (
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
                      <img src={tenthShirtImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
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
                    <h2 className="me-3 mb-1">$200.00</h2>
                    <span className="percent">50%</span>
                  </div>
                  <span className="former-price ms-auto">$400.00</span>
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
                        onClick={() => addToCart(Shirt20, 200, quantity, 'Fall Limited Edition Shirt')}
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