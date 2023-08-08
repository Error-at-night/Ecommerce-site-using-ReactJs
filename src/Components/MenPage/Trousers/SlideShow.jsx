// Bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Components
import ScrollToTopButton from '../../ScrollToTopButton';

// Sass
import '../../../Sass/MenPage/SlideShow.scss';

// images 
// Trousers
import Jeans1 from "../../../images/Jeans-1.png"
import Jeans2 from "../../../images/Jeans-2.png"
import Jeans3 from "../../../images/Jeans-3.png"
import Jeans4 from "../../../images/Jeans-4.png"
import Trouser1 from "../../../images/Trousers-1.png"
import Trouser2 from "../../../images/Trousers-2.png"
import Trouser3 from "../../../images/Trousers-3.png"
import Trouser4 from "../../../images/Trousers-4.png"
import Trouser5 from "../../../images/Trousers-5.png"
import Trouser6 from "../../../images/Trousers-6.png"
import Trouser7 from "../../../images/Trousers-7.png"
import Trouser8 from "../../../images/Trousers-8.png"
import Trouser9 from "../../../images/Trousers-9.png"
import Trouser10 from "../../../images/Trousers-10.png"
import Trouser11 from "../../../images/Trousers-11.png"
import Trouser12 from "../../../images/Trousers-12.png"
import Trouser13 from "../../../images/Trousers-13.png"
import Trouser14 from "../../../images/Trousers-14.png"
import Trouser15 from "../../../images/Trousers-15.jpg"
import Trouser16 from "../../../images/Trousers-16.jpg"
import Trouser17 from "../../../images/Trousers-17.jpg"
import Trouser18 from "../../../images/Trousers-18.jpg"
import Trouser20 from "../../../images/Trousers-20.png"
import Trouser21 from "../../../images/Trousers-21.png"
import Trouser22 from "../../../images/Trousers-22.png"
import Trouser23 from "../../../images/Trousers-23.png"
import Trouser24 from "../../../images/Trousers-24.png"
import Trouser25 from "../../../images/Trousers-25.png"
import Trouser26 from "../../../images/Trousers-26.png"
import Trouser27 from "../../../images/Trousers-27.png"
import Trouser28 from "../../../images/Trousers-28.png"
import Trouser29 from "../../../images/Trousers-29.png"
import Trouser30 from "../../../images/Trousers-30.png"
import Trouser31 from "../../../images/Trousers-31.png"
import Trouser32 from "../../../images/Trousers-32.png"
import Trouser33 from "../../../images/Trousers-33.png"
import Trouser34 from "../../../images/Trousers-34.png"
import Trouser35 from "../../../images/Trousers-35.png"
import Trouser36 from "../../../images/Trousers-36.png"
import Trouser37 from "../../../images/Trousers-37.png"
import Trouser38 from "../../../images/Trousers-38.png"
import Trouser39 from "../../../images/Trousers-39.png"
import Trouser40 from "../../../images/Trousers-40.png"
import Trouser41 from "../../../images/Trousers-41.png"
import Trouser42 from "../../../images/Trousers-42.png"

// react icons
import ShoppingCartIcon from "@heroicons/react/24/outline/ShoppingCartIcon"
import PlusIcon from "@heroicons/react/24/solid/PlusIcon"
import MinusIcon from "@heroicons/react/24/solid/MinusIcon"

// React imports
import { useContext, useState } from 'react';

// React Router imports
import { useFetcher } from 'react-router-dom';

// Cart context
import { CartContext } from '../../../Layout/Layout';

const SlideShow = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  function plusSlides(n) {
    setSlideIndex((prevIndex) =>
      prevIndex + n > 13 ? 1 : prevIndex + n < 1 ? 13 : prevIndex + n
    );
  }

  function currentSlide(n) {
    setSlideIndex(n);
  }

  // Lightbox
  const [showLightbox, setShowLightbox] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const firstTrousersImages = [
      Jeans3,
      Jeans2,
      Jeans1,
      Jeans4
  ]

  // second images
  const secondTrousersImages = [
    Trouser3,
    Trouser1,
    Trouser2,
    Trouser1
  ]

  // third images 
  const thirdTrousersImages = [
    Trouser4,
    Trouser5,
    Trouser6,
    Trouser7
  ]

  // fourth images
  const fourthTrousersImages = [
    Trouser8,
    Trouser9,
    Trouser10,
    Trouser11
  ]

  // fifth images
  const fifthTrousersImages = [
    Trouser12,
    Trouser13,
    Trouser14,
    Trouser13
  ]

  // sixth images
  const sixthTrousersImages = [
    Trouser15,
    Trouser16,
    Trouser17,
    Trouser18
  ]

  // seventh images
  const seventhTrousersImages = [
    Trouser20,
    Trouser21,
    Trouser22,
    Trouser23
  ]

   // eigth images
   const eigthTrousersImages = [
    Trouser24,
    Trouser25,
    Trouser26,
    Trouser25
  ]

   // nineth images
   const ninethTrousersImages = [
    Trouser27,
    Trouser28,
    Trouser29,
    Trouser28
  ]

  // tenth images
  const tenthTrousersImages = [
    Trouser30,
    Trouser31,
    Trouser32,
    Trouser31
  ]

   // eleventh images
   const eleventhTrousersImages = [
    Trouser33,
    Trouser34,
    Trouser35,
    Trouser36
  ]

   // twelveth images
   const twelvethTrousersImages = [
    Trouser40,
    Trouser41,
    Trouser42,
    Trouser41
  ]

   // thirtheen images
   const thirtheenTrousersImages = [
    Trouser37,
    Trouser38,
    Trouser39,
    Trouser38
  ]



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
    setCurrentImgIndex((currentImgIndex + firstTrousersImages.length - 1) % firstTrousersImages.length);
}

const handleNext = () => {
    setCurrentImgIndex((currentImgIndex + 1) % firstTrousersImages.length);
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
              <img src={Jeans3} alt="Trousers" className="img-fluid"/>
              <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                {firstTrousersImages.map((img, index) => (
                  <Col sm={3} md={3} lg={3} className='images-container'>
                    <img key={index} src={img} onClick={() => handleClick(index)} alt="polo" className='img-fluid'/>
                  </Col>
                ))}
                {showLightbox &&
                  <div className="lightbox-overlay lightbox-overlay-fade" onClick={() => setShowLightbox(false)}>
                    <button type='button' onClick={(event) => {event.stopPropagation(); handlePrev();}}>❮</button>
                    <div className="lightbox-content">
                      <div className='close-btn-container d-block'>
                        <button type='button' className="close-btn" onClick={handleClose}>X</button>
                      </div>
                      <img src={firstTrousersImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
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
                <p className='size'>Size: <span className='ms-1'>33</span></p>
                <div className="price d-flex d-md-block align-items-center">
                  <div className="d-flex align-items-center">
                    <h2 className="me-3 mb-1">$80.00</h2>
                    <span className="percent">50%</span>
                  </div>
                  <span className="former-price ms-auto">$160.00</span>
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
                      onClick={() => addToCart(Jeans1, 80, quantity, 'Fall Limited Edition Trouser')}
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
              <img src={Trouser3} alt="Trouser" className="img-fluid"/>
              <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                {secondTrousersImages.map((img, index) => (
                  <Col sm={3} md={3} lg={3} className='images-container'>
                    <img key={index} src={img} onClick={() => handleClick(index)} alt="Trouser" className='img-fluid'/>
                  </Col>
                ))}
                {showLightbox &&
                  <div className="lightbox-overlay lightbox-overlay-fade" onClick={() => setShowLightbox(false)}>
                    <button onClick={(event) => {event.stopPropagation(); handlePrev();}}>❮</button>
                    <div className="lightbox-content">
                      <div className='close-btn-container d-block'>
                        <button className="close-btn" onClick={handleClose}>X</button>
                      </div>
                      <img src={secondTrousersImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
                    </div>
                    <button onClick={(event) => {event.stopPropagation(); handleNext();}}>❯</button>
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
                <p className='size'>Size: <span className='ms-1'>35</span></p>
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
                      <button type='button' onClick={() => handleDecrease("Fall Limited Edition Trouser")}><MinusIcon className="me-4" width={23}/></button>
                      <span>{quantity}</span>
                      <button type='button' onClick={() => handleIncrease("Fall Limited Edition Trouser")}><PlusIcon className="ms-4" width={23}/></button>
                    </div>
                  </fetcher.Form>
                  <fetcher.Form>
                    <button type='button' className="button d-flex align-items-center justify-content-center"
                      onClick={() => addToCart(Trouser3, 150, quantity, 'Fall Limited Edition Trouser')}
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
              <img src={Trouser4} alt="Trouser" className="img-fluid"/>
              <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                {thirdTrousersImages.map((img, index) => (
                  <Col sm={3} md={3} lg={3} className='images-container'>
                    <img key={index} src={img} onClick={() => handleClick(index)} alt="Trouser" className='img-fluid'/>
                  </Col>
                ))}
                {showLightbox &&
                  <div className="lightbox-overlay lightbox-overlay-fade" onClick={() => setShowLightbox(false)}>
                    <button onClick={(event) => {event.stopPropagation(); handlePrev();}}>❮</button>
                    <div className="lightbox-content">
                      <div className='close-btn-container d-block'>
                        <button className="close-btn" onClick={handleClose}>X</button>
                      </div>
                      <img src={thirdTrousersImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
                    </div>
                    <button onClick={(event) => {event.stopPropagation(); handleNext();}}>❯</button>
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
                      <button type='button' onClick={() => handleDecrease("Fall Limited Edition Trouser")}><MinusIcon className="me-4" width={23}/></button>
                      <span>{quantity}</span>
                      <button type='button' onClick={() => handleIncrease("Fall Limited Edition Trouser")}><PlusIcon className="ms-4" width={23}/></button>
                    </div>
                  </fetcher.Form>
                  <fetcher.Form>
                    <button type='button' className="button d-flex align-items-center justify-content-center"
                      onClick={() => addToCart(Trouser4, 180, quantity, 'Fall Limited Edition Trouser')}
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
              <img src={Trouser8} alt="Trouser" className="img-fluid"/>
              <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                {fourthTrousersImages.map((img, index) => (
                  <Col sm={3} md={3} lg={3} className='images-container'>
                    <img key={index} src={img} onClick={() => handleClick(index)} alt="Trouser" className='img-fluid'/>
                  </Col>
                ))}
                {showLightbox &&
                  <div className="lightbox-overlay lightbox-overlay-fade" onClick={() => setShowLightbox(false)}>
                    <button onClick={(event) => {event.stopPropagation(); handlePrev();}}>❮</button>
                    <div className="lightbox-content">
                      <div className='close-btn-container d-block'>
                        <button className="close-btn" onClick={handleClose}>X</button>
                      </div>
                      <img src={fourthTrousersImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
                    </div>
                    <button onClick={(event) => {event.stopPropagation(); handleNext();}}>❯</button>
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
                    <h2 className="me-3 mb-1">$190.00</h2>
                    <span className="percent">50%</span>
                  </div>
                  <span className="former-price ms-auto">$380.00</span>
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
                      onClick={() => addToCart(Trouser8, 190, quantity, 'Fall Limited Edition Trouser')}
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
              <img src={Trouser12} alt="Trouser" className="img-fluid"/>
              <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                {fifthTrousersImages.map((img, index) => (
                  <Col sm={3} md={3} lg={3} className='images-container'>
                    <img key={index} src={img} onClick={() => handleClick(index)} alt="Trouser" className='img-fluid'/>
                  </Col>
                ))}
                {showLightbox &&
                  <div className="lightbox-overlay lightbox-overlay-fade" onClick={() => setShowLightbox(false)}>
                    <button onClick={(event) => {event.stopPropagation(); handlePrev();}}>❮</button>
                    <div className="lightbox-content">
                      <div className='close-btn-container d-block'>
                        <button className="close-btn" onClick={handleClose}>X</button>
                      </div>
                      <img src={fifthTrousersImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
                    </div>
                    <button onClick={(event) => {event.stopPropagation(); handleNext();}}>❯</button>
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
                    <h2 className="me-3 mb-1">$210.00</h2>
                    <span className="percent">50%</span>
                  </div>
                  <span className="former-price ms-auto">$420.00</span>
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
                      onClick={() => addToCart(Trouser12, 210, quantity, 'Fall Limited Edition Trouser')}
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
              <img src={Trouser15} alt="Trouser" className="img-fluid"/>
              <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                {sixthTrousersImages.map((img, index) => (
                  <Col sm={3} md={3} lg={3} className='images-container'>
                    <img key={index} src={img} onClick={() => handleClick(index)} alt="Trouser" className='img-fluid'/>
                  </Col>
                ))}
                {showLightbox &&
                  <div className="lightbox-overlay lightbox-overlay-fade" onClick={() => setShowLightbox(false)}>
                    <button onClick={(event) => {event.stopPropagation(); handlePrev();}}>❮</button>
                    <div className="lightbox-content">
                      <div className='close-btn-container d-block'>
                        <button className="close-btn" onClick={handleClose}>X</button>
                      </div>
                      <img src={sixthTrousersImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
                    </div>
                    <button onClick={(event) => {event.stopPropagation(); handleNext();}}>❯</button>
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
                      <button type='button' onClick={() => handleDecrease("Fall Limited Edition Trouser")}><MinusIcon className="me-4" width={23}/></button>
                      <span>{quantity}</span>
                      <button type='button' onClick={() => handleIncrease("Fall Limited Edition Trouser")}><PlusIcon className="ms-4" width={23}/></button>
                    </div>
                  </fetcher.Form>
                  <fetcher.Form>
                    <button type='button' className="button d-flex align-items-center justify-content-center"
                      onClick={() => addToCart(Trouser15, 120, quantity, 'Fall Limited Edition Trouser')}
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
              <img src={Trouser20} alt="Trouser" className="img-fluid"/>
              <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                {seventhTrousersImages.map((img, index) => (
                  <Col sm={3} md={3} lg={3} className='images-container'>
                    <img key={index} src={img} onClick={() => handleClick(index)} alt="Trouser" className='img-fluid'/>
                  </Col>
                ))}
                {showLightbox &&
                  <div className="lightbox-overlay lightbox-overlay-fade" onClick={() => setShowLightbox(false)}>
                    <button onClick={(event) => {event.stopPropagation(); handlePrev();}}>❮</button>
                    <div className="lightbox-content">
                      <div className='close-btn-container d-block'>
                        <button className="close-btn" onClick={handleClose}>X</button>
                      </div>
                      <img src={seventhTrousersImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
                    </div>
                    <button onClick={(event) => {event.stopPropagation(); handleNext();}}>❯</button>
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
                <p className='size'>Size: <span className='ms-1'>37</span></p>
                <div className="price d-flex d-md-block align-items-center">
                  <div className="d-flex align-items-center">
                    <h2 className="me-3 mb-1">$220.00</h2>
                    <span className="percent">50%</span>
                  </div>
                  <span className="former-price ms-auto">$440.00</span>
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
                      onClick={() => addToCart(Trouser20, 220, quantity, 'Fall Limited Edition Trouser')}
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
        {/* eigthth row */}
        <div
          className='mySlides fadee'
          style={slideIndex === 8 ? { display: "block" } : { display: "none" }}
        >
          <Row 
            className="align-items-center justify-content-sm-between justify-content-md-between justify-content-lg-around"
          >
            <Col xs={12} sm={12} md={6} lg={5}>
              <img src={Trouser24} alt="Trouser" className="img-fluid"/>
              <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                {eigthTrousersImages.map((img, index) => (
                  <Col sm={3} md={3} lg={3} className='images-container'>
                    <img key={index} src={img} onClick={() => handleClick(index)} alt="Trouser" className='img-fluid'/>
                  </Col>
                ))}
                {showLightbox &&
                  <div className="lightbox-overlay lightbox-overlay-fade" onClick={() => setShowLightbox(false)}>
                    <button onClick={(event) => {event.stopPropagation(); handlePrev();}}>❮</button>
                    <div className="lightbox-content">
                      <div className='close-btn-container d-block'>
                        <button className="close-btn" onClick={handleClose}>X</button>
                      </div>
                      <img src={eigthTrousersImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
                    </div>
                    <button onClick={(event) => {event.stopPropagation(); handleNext();}}>❯</button>
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
                <p className='size'>Size: <span className='ms-1'>35</span></p>
                <div className="price d-flex d-md-block align-items-center">
                  <div className="d-flex align-items-center">
                    <h2 className="me-3 mb-1">$300.00</h2>
                    <span className="percent">50%</span>
                  </div>
                  <span className="former-price ms-auto">$600.00</span>
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
                      onClick={() => addToCart(Trouser24, 300, quantity, 'Fall Limited Edition Trouser')}
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
              <img src={Trouser27} alt="Trouser" className="img-fluid"/>
              <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                {ninethTrousersImages.map((img, index) => (
                  <Col sm={3} md={3} lg={3} className='images-container'>
                    <img key={index} src={img} onClick={() => handleClick(index)} alt="Trouser" className='img-fluid'/>
                  </Col>
                ))}
                {showLightbox &&
                  <div className="lightbox-overlay lightbox-overlay-fade" onClick={() => setShowLightbox(false)}>
                    <button onClick={(event) => {event.stopPropagation(); handlePrev();}}>❮</button>
                    <div className="lightbox-content">
                      <div className='close-btn-container d-block'>
                        <button className="close-btn" onClick={handleClose}>X</button>
                      </div>
                      <img src={ninethTrousersImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
                    </div>
                    <button onClick={(event) => {event.stopPropagation(); handleNext();}}>❯</button>
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
                <p className='size'>Size: <span className='ms-1'>38</span></p>
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
                      onClick={() => addToCart(Trouser27, 160, quantity, 'Fall Limited Edition Trouser')}
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
              <img src={Trouser30} alt="Trouser" className="img-fluid"/>
              <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                {tenthTrousersImages.map((img, index) => (
                  <Col sm={3} md={3} lg={3} className='images-container'>
                    <img key={index} src={img} onClick={() => handleClick(index)} alt="Trouser" className='img-fluid'/>
                  </Col>
                ))}
                {showLightbox &&
                  <div className="lightbox-overlay lightbox-overlay-fade" onClick={() => setShowLightbox(false)}>
                    <button onClick={(event) => {event.stopPropagation(); handlePrev();}}>❮</button>
                    <div className="lightbox-content">
                      <div className='close-btn-container d-block'>
                        <button className="close-btn" onClick={handleClose}>X</button>
                      </div>
                      <img src={tenthTrousersImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
                    </div>
                    <button onClick={(event) => {event.stopPropagation(); handleNext();}}>❯</button>
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
                    <h2 className="me-3 mb-1">$140.00</h2>
                    <span className="percent">50%</span>
                  </div>
                  <span className="former-price ms-auto">$280.00</span>
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
                      onClick={() => addToCart(Trouser30, 140, quantity, 'Fall Limited Edition Trouser')}
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
              <img src={Trouser33} alt="Trouser" className="img-fluid"/>
              <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                {eleventhTrousersImages.map((img, index) => (
                  <Col sm={3} md={3} lg={3} className='images-container'>
                    <img key={index} src={img} onClick={() => handleClick(index)} alt="Trouser" className='img-fluid'/>
                  </Col>
                ))}
                {showLightbox &&
                  <div className="lightbox-overlay lightbox-overlay-fade" onClick={() => setShowLightbox(false)}>
                    <button onClick={(event) => {event.stopPropagation(); handlePrev();}}>❮</button>
                    <div className="lightbox-content">
                      <div className='close-btn-container d-block'>
                        <button className="close-btn" onClick={handleClose}>X</button>
                      </div>
                      <img src={eleventhTrousersImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
                    </div>
                    <button onClick={(event) => {event.stopPropagation(); handleNext();}}>❯</button>
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
                    <h2 className="me-3 mb-1">$130.00</h2>
                    <span className="percent">50%</span>
                  </div>
                  <span className="former-price ms-auto">$260.00</span>
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
                      onClick={() => addToCart(Trouser33, 130, quantity, 'Fall Limited Edition Trouser')}
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
              <img src={Trouser40} alt="Trouser" className="img-fluid"/>
              <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                {twelvethTrousersImages.map((img, index) => (
                  <Col sm={3} md={3} lg={3} className='images-container'>
                    <img key={index} src={img} onClick={() => handleClick(index)} alt="Trouser" className='img-fluid'/>
                  </Col>
                ))}
                {showLightbox &&
                  <div className="lightbox-overlay lightbox-overlay-fade" onClick={() => setShowLightbox(false)}>
                    <button onClick={(event) => {event.stopPropagation(); handlePrev();}}>❮</button>
                    <div className="lightbox-content">
                      <div className='close-btn-container d-block'>
                        <button className="close-btn" onClick={handleClose}>X</button>
                      </div>
                      <img src={twelvethTrousersImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
                    </div>
                    <button onClick={(event) => {event.stopPropagation(); handleNext();}}>❯</button>
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
                <p className='size'>Size: <span className='ms-1'>35</span></p>
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
                      <button type='button' onClick={() => handleDecrease("Fall Limited Edition Trouser")}><MinusIcon className="me-4" width={23}/></button>
                      <span>{quantity}</span>
                      <button type='button' onClick={() => handleIncrease("Fall Limited Edition Trouser")}><PlusIcon className="ms-4" width={23}/></button>
                    </div>
                  </fetcher.Form>
                  <fetcher.Form>
                    <button type='button' className="button d-flex align-items-center justify-content-center"
                      onClick={() => addToCart(Trouser40, 200, quantity, 'Fall Limited Edition Trouser')}
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
        {/* thirtheen row */}
        <div
          className='mySlides fadee'
          style={slideIndex === 13 ? { display: "block" } : { display: "none" }}
        >
          <Row 
            className="align-items-center justify-content-sm-between justify-content-md-between justify-content-lg-around"
          >
            <Col xs={12} sm={12} md={6} lg={5}>
              <img src={Trouser37} alt="Trouser" className="img-fluid"/>
              <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                {thirtheenTrousersImages.map((img, index) => (
                  <Col sm={3} md={3} lg={3} className='images-container'>
                    <img key={index} src={img} onClick={() => handleClick(index)} alt="Trouser" className='img-fluid'/>
                  </Col>
                ))}
                {showLightbox &&
                  <div className="lightbox-overlay lightbox-overlay-fade" onClick={() => setShowLightbox(false)}>
                    <button onClick={(event) => {event.stopPropagation(); handlePrev();}}>❮</button>
                    <div className="lightbox-content">
                      <div className='close-btn-container d-block'>
                        <button className="close-btn" onClick={handleClose}>X</button>
                      </div>
                      <img src={thirtheenTrousersImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
                    </div>
                    <button onClick={(event) => {event.stopPropagation(); handleNext();}}>❯</button>
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
                    <h2 className="me-3 mb-1">$190.00</h2>
                    <span className="percent">50%</span>
                  </div>
                  <span className="former-price ms-auto">$380.00</span>
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
                      onClick={() => addToCart(Trouser37, 190, quantity, 'Fall Limited Edition Trouser')}
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
        </div>
      </Container>
    );
}
 
export default SlideShow;