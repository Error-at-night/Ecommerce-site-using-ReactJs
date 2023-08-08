// Bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Components
import ScrollToTopButton from '../../ScrollToTopButton';

// Sass
import '../../../Sass/MenPage/SlideShow.scss';

// images
import Shoe1 from "../../../images/image-product-1.jpg"
import Shoe2 from "../../../images/image-product-2.jpg"
import Shoe3 from "../../../images/image-product-3.jpg"
import Shoe4 from "../../../images/image-product-4.jpg"
import Shoe5 from "../../../images/Shoe-5.png"
import Shoe6 from "../../../images/Shoe-6.png"
import Shoe7 from "../../../images/Shoe-7.png"
import Shoe8 from "../../../images/Shoe-8.png"
import Shoe9 from "../../../images/Shoe-1.png"
import Shoe10 from "../../../images/Shoe-2.png"
import Shoe11 from "../../../images/Shoe-3.png"
import Shoe12 from "../../../images/Shoe-9.png"
import Shoe13 from "../../../images/Shoe-10.png"
import Shoe14 from "../../../images/Shoe-11.png"
import Shoe15 from "../../../images/Shoe-12.png"
import Shoe16 from "../../../images/Sneakers-5.png"
import Shoe17 from "../../../images/Sneakers-6.png"
import Shoe18 from "../../../images/Sneakers-7.png"
import Shoe19 from "../../../images/Sneakers-8.png"
import Shoe20 from "../../../images/Shoe-13.png"
import Shoe21 from "../../../images/Shoe-14.png"
import Shoe22 from "../../../images/Shoe-15.png"
import Shoe23 from "../../../images/Shoe-16.png"
import Shoe24 from "../../../images/Sneakers-10.png"
import Shoe25 from "../../../images/Sneakers-11.png"
import Shoe26 from "../../../images/Sneakers-12.png"
import Shoe27 from "../../../images/Shoe-17.png"
import Shoe28 from "../../../images/Shoe-18.png"
import Shoe29 from "../../../images/Shoe-19.png"
import Shoe30 from "../../../images/Shoe-20.png"
import Shoe31 from "../../../images/Sneakers-13.png"
import Shoe32 from "../../../images/Sneakers-14.png"
import Shoe33 from "../../../images/Sneakers-15.png"
import Shoe34 from "../../../images/Shoe-21.png"
import Shoe35 from "../../../images/Shoe-22.png"
import Shoe36 from "../../../images/Shoe-23.png"
import Shoe37 from "../../../images/Shoe-24.png"
import Shoe38 from "../../../images/Sneakers-17.png"
import Shoe39 from "../../../images/Sneakers-18.png"
import Shoe40 from "../../../images/Sneakers-19.png"
import Shoe41 from "../../../images/Sneakers-20.png"
import Shoe42 from "../../../images/Shoe-25.png"
import Shoe43 from "../../../images/Shoe-26.png"
import Shoe44 from "../../../images/Shoe-27.png"
import Shoe45 from "../../../images/Shoe-28.png"
import Shoe46 from "../../../images/Sneakers-21.png"
import Shoe47 from "../../../images/Sneakers-22.png"
import Shoe48 from "../../../images/Sneakers-23.png"
import Shoe49 from "../../../images/Sneakers-24.png"
import Shoe50 from "../../../images/Sneakers-25.png"
import Shoe51 from "../../../images/Sneakers-26.png"
import Shoe52 from "../../../images/Sneakers-27.png"
import Shoe53 from "../../../images/Sneakers-28.png"

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
      prevIndex + n > 14 ? 1 : prevIndex + n < 1 ? 14 : prevIndex + n
    );
  }
  
  function currentSlide(n) {
    setSlideIndex(n);
  }

  // lightbox
  const [showLightbox, setShowLightbox] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  
  //first
  const firstShoeImages = [
    Shoe5,
    Shoe6,
    Shoe7,
    Shoe8,
  ];
  
  //second   
  const secondShoeImages = [
    Shoe1,
    Shoe2,
    Shoe3,
    Shoe4,
  ];

   //third
   const thirdShoeImages = [
    Shoe9,
    Shoe10,
    Shoe11,
    Shoe10,
  ];

    //fourth
    const fourthShoeImages = [
        Shoe12,
        Shoe13,
        Shoe14,
        Shoe15,
    ];

    //fifth
    const fifthShoeImages = [
        Shoe16,
        Shoe17,
        Shoe19,
        Shoe18
    ];

      //sixth
      const sixthShoeImages = [
        Shoe20,
        Shoe21,
        Shoe22,
        Shoe23
    ];

    // seventh
    const seventhShoeImages = [
        Shoe24,
        Shoe25,
        Shoe26,
        Shoe25
    ];

     // eigth
     const eigthShoeImages = [
        Shoe27,
        Shoe28,
        Shoe29,
        Shoe30
    ];

    // nineth
    const ninethShoeImages = [
        Shoe31,
        Shoe33,
        Shoe32,
        Shoe33,
    ];

     // tenth
     const tenthShoeImages = [
        Shoe34,
        Shoe35,
        Shoe36,
        Shoe37,
    ];

     // eleventh
     const eleventhShoeImages = [
        Shoe38,
        Shoe39,
        Shoe40,
        Shoe41,
    ];

     // twelveth
     const twelvethShoeImages = [
        Shoe42,
        Shoe43,
        Shoe44,
        Shoe45,
    ];

     // thirtheenth
     const thirtheenShoeImages = [
        Shoe46,
        Shoe47,
        Shoe48,
        Shoe49,
    ];

      // fourtheen
      const fourtheenShoeImages = [
        Shoe50,
        Shoe51,
        Shoe52,
        Shoe53,
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
      setCurrentImgIndex((currentImgIndex + firstShoeImages.length - 1) % firstShoeImages.length);
  }

  const handleNext = () => {
      setCurrentImgIndex((currentImgIndex + 1) % firstShoeImages.length);
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
                        <img src={Shoe5} alt="Sneakers" className="img-fluid"/>
                        <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                            {firstShoeImages.map((img, index) => (
                                <Col sm={3} md={3} lg={3} className='images-container'>
                                    <img key={index} src={img} onClick={() => handleClick(index)} alt="Sneakers" className='img-fluid'/>
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
                                            <img src={firstShoeImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
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
                                    <h2 className='me-3 mb-1'>$160.00</h2>
                                    <span className="percent">50%</span>
                                </div>
                                <span className="former-price ms-auto">$320.00</span>
                            </div>
                            <div className="mt-md-3 d-block d-md-block d-xl-block d-xxl-flex add-to-cart align-items-center">
                                <fetcher.Form className='me-xxl-3'>
                                    <div className="mb-3 mb-md-2 mb-xl-2 mb-xxl-0 mt-2 mt-md-0 me-3 me-md-4 plus-and-minus d-flex justify-content-between">
                                        <button type='button' onClick={() => handleDecrease("Fall Limited Edition Sneakers")}><MinusIcon className="me-4" width={23}/></button>
                                        <span>{quantity}</span>
                                        <button type='button' onClick={() => handleIncrease("Fall Limited Edition Sneakers")}><PlusIcon className="ms-4" width={23}/></button>
                                    </div>
                                </fetcher.Form>
                                <fetcher.Form>
                                    <button type='button' className="button d-flex align-items-center justify-content-center"
                                        onClick={() => addToCart(Shoe5, 160, quantity, 'Fall Limited Edition Sneakers')}

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
                        <img src={Shoe1} alt="Sneakers" className="img-fluid"/>
                        <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                            {secondShoeImages.map((img, index) => (
                                <Col sm={3} md={3} lg={3} className='images-container'>
                                    <img key={index} src={img} onClick={() => handleClick(index)} alt="Sneakers" className='img-fluid'/>
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
                                            <img src={secondShoeImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
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
                                        <button type='button' onClick={() => handleDecrease("Fall Limited Edition Sneakers")}><MinusIcon className="me-4" width={23}/></button>
                                        <span>{quantity}</span>
                                        <button type='button' onClick={() => handleIncrease("Fall Limited Edition Sneakers")}><PlusIcon className="ms-4" width={23}/></button>
                                    </div>
                                </fetcher.Form>
                                <fetcher.Form>
                                    <button type='button' className="button d-flex align-items-center justify-content-center"
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
            {/* third row */}
            <div
                className='mySlides fadee'
                style={slideIndex === 3 ? { display: "block" } : { display: "none" }}
            >
                <Row 
                    className="align-items-center justify-content-sm-between justify-content-md-between justify-content-lg-around"
                >
                    <Col xs={12} sm={12} md={6} lg={5}>
                        <img src={Shoe9} alt="Shoe" className="img-fluid"/>
                        <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                            {thirdShoeImages.map((img, index) => (
                                <Col sm={3} md={3} lg={3} className='images-container'>
                                    <img key={index} src={img} onClick={() => handleClick(index)} alt="Shoe" className='img-fluid'/>
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
                                            <img src={thirdShoeImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
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
                            <p className='size'>Size: <span className='ms-1'>41</span></p>
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
                                        <button type='button' onClick={() => handleDecrease("Fall Limited Edition Shoe")}><MinusIcon className="me-4" width={23}/></button>
                                        <span>{quantity}</span>
                                        <button type='button' onClick={() => handleIncrease("Fall Limited Edition Shoe")}><PlusIcon className="ms-4" width={23}/></button>
                                    </div>
                                </fetcher.Form>
                                <fetcher.Form>
                                    <button type='button' className="button d-flex align-items-center justify-content-center"
                                        onClick={() => addToCart(Shoe9, 200, quantity, 'Fall Limited Edition Shoe')}

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
                        <img src={Shoe12} alt="Shoe" className="img-fluid"/>
                        <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                            {fourthShoeImages.map((img, index) => (
                                <Col sm={3} md={3} lg={3} className='images-container'>
                                    <img key={index} src={img} onClick={() => handleClick(index)} alt="Shoe" className='img-fluid'/>
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
                                            <img src={fourthShoeImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
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
                            <p className='size'>Size: <span className='ms-1'>43</span></p>
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
                                        <button type='button' onClick={() => handleDecrease("Fall Limited Edition Shoe")}><MinusIcon className="me-4" width={23}/></button>
                                        <span>{quantity}</span>
                                        <button type='button' onClick={() => handleIncrease("Fall Limited Edition Shoe")}><PlusIcon className="ms-4" width={23}/></button>
                                    </div>
                                </fetcher.Form>
                                <fetcher.Form>
                                    <button type='button' className="button d-flex align-items-center justify-content-center"
                                        onClick={() => addToCart(Shoe12, 220, quantity, 'Fall Limited Edition Shoe')}

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
                        <img src={Shoe16} alt="Sneakers" className="img-fluid"/>
                        <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                            {fifthShoeImages.map((img, index) => (
                                <Col sm={3} md={3} lg={3} className='images-container'>
                                    <img key={index} src={img} onClick={() => handleClick(index)} alt="Sneakers" className='img-fluid'/>
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
                                            <img src={fifthShoeImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
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
                            <p className='size'>Size: <span className='ms-1'>40</span></p>
                            <div className="price d-flex d-md-block align-items-center">
                                <div className="d-flex align-items-center">
                                    <h2 className='me-3 mb-1'>$180.00</h2>
                                    <span className="percent">50%</span>
                                </div>
                                <span className="former-price ms-auto">$380.00</span>
                            </div>
                            <div className="mt-md-3 d-block d-md-block d-xl-block d-xxl-flex add-to-cart align-items-center">
                                <fetcher.Form className='me-xxl-3'>
                                    <div className="mb-3 mb-md-2 mb-xl-2 mb-xxl-0 mt-2 mt-md-0 me-3 me-md-4 plus-and-minus d-flex justify-content-between">
                                        <button type='button' onClick={() => handleDecrease("Fall Limited Edition Sneakers")}><MinusIcon className="me-4" width={23}/></button>
                                        <span>{quantity}</span>
                                        <button type='button' onClick={() => handleIncrease("Fall Limited Edition Sneakers")}><PlusIcon className="ms-4" width={23}/></button>
                                    </div>
                                </fetcher.Form>
                                <fetcher.Form>
                                    <button type='button' className="button d-flex align-items-center justify-content-center"
                                        onClick={() => addToCart(Shoe16, 180, quantity, 'Fall Limited Edition Sneakers')}

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
                        <img src={Shoe20} alt="Shoe" className="img-fluid"/>
                        <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                            {sixthShoeImages.map((img, index) => (
                                <Col sm={3} md={3} lg={3} className='images-container'>
                                    <img key={index} src={img} onClick={() => handleClick(index)} alt="Shoe" className='img-fluid'/>
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
                                            <img src={sixthShoeImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
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
                            <p className='size'>Size: <span className='ms-1'>41</span></p>
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
                                        <button type='button' onClick={() => handleDecrease("Fall Limited Edition Shoe")}><MinusIcon className="me-4" width={23}/></button>
                                        <span>{quantity}</span>
                                        <button type='button' onClick={() => handleIncrease("Fall Limited Edition Shoe")}><PlusIcon className="ms-4" width={23}/></button>
                                    </div>
                                </fetcher.Form>
                                <fetcher.Form>
                                    <button type='button' className="button d-flex align-items-center justify-content-center"
                                        onClick={() => addToCart(Shoe20, 150, quantity, 'Fall Limited Edition Shoe')}

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
                        <img src={Shoe24} alt="Sneakers" className="img-fluid"/>
                        <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                            {seventhShoeImages.map((img, index) => (
                                <Col sm={3} md={3} lg={3} className='images-container'>
                                    <img key={index} src={img} onClick={() => handleClick(index)} alt="Sneakers" className='img-fluid'/>
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
                                            <img src={seventhShoeImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
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
                            <p className='size'>Size: <span className='ms-1'>39</span></p>
                            <div className="price d-flex d-md-block align-items-center">
                                <div className="d-flex align-items-center">
                                    <h2 className='me-3 mb-1'>$140.00</h2>
                                    <span className="percent">50%</span>
                                </div>
                                <span className="former-price ms-auto">$280.00</span>
                            </div>
                            <div className="mt-md-3 d-block d-md-block d-xl-block d-xxl-flex add-to-cart align-items-center">
                                <fetcher.Form className='me-xxl-3'>
                                    <div className="mb-3 mb-md-2 mb-xl-2 mb-xxl-0 mt-2 mt-md-0 me-3 me-md-4 plus-and-minus d-flex justify-content-between">
                                        <button type='button' onClick={() => handleDecrease("Fall Limited Edition Sneakers")}><MinusIcon className="me-4" width={23}/></button>
                                        <span>{quantity}</span>
                                        <button type='button' onClick={() => handleIncrease("Fall Limited Edition Sneakers")}><PlusIcon className="ms-4" width={23}/></button>
                                    </div>
                                </fetcher.Form>
                                <fetcher.Form>
                                    <button type='button' className="button d-flex align-items-center justify-content-center"
                                        onClick={() => addToCart(Shoe24, 140,  quantity, 'Fall Limited Edition Sneakers')}

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
                        <img src={Shoe27} alt="Shoe" className="img-fluid"/>
                        <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                            {eigthShoeImages.map((img, index) => (
                                <Col sm={3} md={3} lg={3} className='images-container'>
                                    <img key={index} src={img} onClick={() => handleClick(index)} alt="Shoe" className='img-fluid'/>
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
                                            <img src={eigthShoeImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
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
                            <p className='size'>Size: <span className='ms-1'>44</span></p>
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
                                        <button type='button' onClick={() => handleDecrease("Fall Limited Edition Shoe")}><MinusIcon className="me-4" width={23}/></button>
                                        <span>{quantity}</span>
                                        <button type='button' onClick={() => handleIncrease("Fall Limited Edition Shoe")}><PlusIcon className="ms-4" width={23}/></button>
                                    </div>
                                </fetcher.Form>
                                <fetcher.Form>
                                    <button type='button' className="button d-flex align-items-center justify-content-center"
                                        onClick={() => addToCart(Shoe27, 250, quantity, 'Fall Limited Edition Shoe')}

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
                        <img src={Shoe31} alt="Sneakers" className="img-fluid"/>
                        <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                            {ninethShoeImages.map((img, index) => (
                                <Col sm={3} md={3} lg={3} className='images-container'>
                                    <img key={index} src={img} onClick={() => handleClick(index)} alt="Sneakers" className='img-fluid'/>
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
                                            <img src={ninethShoeImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
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
                            <p className='size'>Size: <span className='ms-1'>40</span></p>
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
                                        <button type='button' onClick={() => handleDecrease("Fall Limited Edition Sneakers")}><MinusIcon className="me-4" width={23}/></button>
                                        <span>{quantity}</span>
                                        <button type='button' onClick={() => handleIncrease("Fall Limited Edition Sneakers")}><PlusIcon className="ms-4" width={23}/></button>
                                    </div>
                                </fetcher.Form>
                                <fetcher.Form>
                                    <button type='button' className="button d-flex align-items-center justify-content-center"
                                        onClick={() => addToCart(Shoe31, 235, quantity, 'Fall Limited Edition Sneakers')}

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
                        <img src={Shoe34} alt="Shoe" className="img-fluid"/>
                        <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                            {tenthShoeImages.map((img, index) => (
                                <Col sm={3} md={3} lg={3} className='images-container'>
                                    <img key={index} src={img} onClick={() => handleClick(index)} alt="Shoe" className='img-fluid'/>
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
                                            <img src={tenthShoeImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
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
                            <p className='size'>Size: <span className='ms-1'>45</span></p>
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
                                        <button type='button' onClick={() => handleDecrease("Fall Limited Edition Shoe")}><MinusIcon className="me-4" width={23}/></button>
                                        <span>{quantity}</span>
                                        <button type='button' onClick={() => handleIncrease("Fall Limited Edition Shoe")}><PlusIcon className="ms-4" width={23}/></button>
                                    </div>
                                </fetcher.Form>
                                <fetcher.Form>
                                    <button type='button' className="button d-flex align-items-center justify-content-center"
                                        onClick={() => addToCart(Shoe34, 280, quantity, 'Fall Limited Edition Shoe')}

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
                        <img src={Shoe38} alt="Sneakers" className="img-fluid"/>
                        <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                            {eleventhShoeImages.map((img, index) => (
                                <Col sm={3} md={3} lg={3} className='images-container'>
                                    <img key={index} src={img} onClick={() => handleClick(index)} alt="Sneakers" className='img-fluid'/>
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
                                            <img src={eleventhShoeImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
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
                                    <h2 className='me-3 mb-1'>$190.00</h2>
                                    <span className="percent">50%</span>
                                </div>
                                <span className="former-price ms-auto">$280.00</span>
                            </div>
                            <div className="mt-md-3 d-block d-md-block d-xl-block d-xxl-flex add-to-cart align-items-center">
                                <fetcher.Form className='me-xxl-3'>
                                    <div className="mb-3 mb-md-2 mb-xl-2 mb-xxl-0 mt-2 mt-md-0 me-3 me-md-4 plus-and-minus d-flex justify-content-between">
                                        <button type='button' onClick={() => handleDecrease("Fall Limited Edition Sneakers")}><MinusIcon className="me-4" width={23}/></button>
                                        <span>{quantity}</span>
                                        <button type='button' onClick={() => handleIncrease("Fall Limited Edition Sneakers")}><PlusIcon className="ms-4" width={23}/></button>
                                    </div>
                                </fetcher.Form>
                                <fetcher.Form>
                                    <button type='button' className="button d-flex align-items-center justify-content-center"
                                        onClick={() => addToCart(Shoe38, 190, quantity, 'Fall Limited Edition Sneakers')}

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
                        <img src={Shoe42} alt="Shoe" className="img-fluid"/>
                        <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                            {twelvethShoeImages.map((img, index) => (
                                <Col sm={3} md={3} lg={3} className='images-container'>
                                    <img key={index} src={img} onClick={() => handleClick(index)} alt="Shoe" className='img-fluid'/>
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
                                            <img src={twelvethShoeImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
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
                            <p className='size'>Size: <span className='ms-1'>44</span></p>
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
                                        <button type='button' onClick={() => handleDecrease("Fall Limited Edition Shoe")}><MinusIcon className="me-4" width={23}/></button>
                                        <span>{quantity}</span>
                                        <button type='button' onClick={() => handleIncrease("Fall Limited Edition Shoe")}><PlusIcon className="ms-4" width={23}/></button>
                                    </div>
                                </fetcher.Form>
                                <fetcher.Form>
                                    <button type='button' className="button d-flex align-items-center justify-content-center"
                                        onClick={() => addToCart(Shoe42, 200, quantity, 'Fall Limited Edition Shoe')}

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
                        <img src={Shoe46} alt="Sneakers" className="img-fluid"/>
                        <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                            {thirtheenShoeImages.map((img, index) => (
                                <Col sm={3} md={3} lg={3} className='images-container'>
                                    <img key={index} src={img} onClick={() => handleClick(index)} alt="Sneakers" className='img-fluid'/>
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
                                            <img src={thirtheenShoeImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
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
                                    <h2 className='me-3 mb-1'>$130.00</h2>
                                    <span className="percent">50%</span>
                                </div>
                                <span className="former-price ms-auto">$260.00</span>
                            </div>
                            <div className="mt-md-3 d-block d-md-block d-xl-block d-xxl-flex add-to-cart align-items-center">
                                <fetcher.Form className='me-xxl-3'>
                                    <div className="mb-3 mb-md-2 mb-xl-2 mb-xxl-0 mt-2 mt-md-0 me-3 me-md-4 plus-and-minus d-flex justify-content-between">
                                        <button type='button' onClick={() => handleDecrease("Fall Limited Edition Sneakers")}><MinusIcon className="me-4" width={23}/></button>
                                        <span>{quantity}</span>
                                        <button type='button' onClick={() => handleIncrease("Fall Limited Edition Sneakers")}><PlusIcon className="ms-4" width={23}/></button>
                                    </div>
                                </fetcher.Form>
                                <fetcher.Form>
                                    <button type='button' className="button d-flex align-items-center justify-content-center"
                                        onClick={() => addToCart(Shoe46, 130, quantity, 'Fall Limited Edition Sneakers')}

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
            {/* fourtheen row */}
            <div
                className='mySlides fadee'
                style={slideIndex === 14 ? { display: "block" } : { display: "none" }}
            >
                <Row 
                    className="align-items-center justify-content-sm-between justify-content-md-between justify-content-lg-around"
                >
                    <Col xs={12} sm={12} md={6} lg={5}>
                        <img src={Shoe50} alt="Sneakers" className="img-fluid"/>
                        <Row className="d-none d-sm-none d-md-flex mt-4 justify-content-sm-between justify-content-md-between justify-content-lg-between">
                            {fourtheenShoeImages.map((img, index) => (
                                <Col sm={3} md={3} lg={3} className='images-container'>
                                    <img key={index} src={img} onClick={() => handleClick(index)} alt="Sneakers" className='img-fluid'/>
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
                                            <img src={fourtheenShoeImages[currentImgIndex]} alt={`images ${currentImgIndex}`} className='img-fluid bigimage'/>
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
                            <p className='size'>Size: <span className='ms-1'>43</span></p>
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
                                        <button type='button' onClick={() => handleDecrease("Fall Limited Edition Sneakers")}><MinusIcon className="me-4" width={23}/></button>
                                        <span>{quantity}</span>
                                        <button type='button' onClick={() => handleIncrease("Fall Limited Edition Sneakers")}><PlusIcon className="ms-4" width={23}/></button>
                                    </div>
                                </fetcher.Form>
                                <fetcher.Form>
                                    <button type='button' className="button d-flex align-items-center justify-content-center"
                                        onClick={() => addToCart(Shoe50, 200, quantity, 'Fall Limited Edition Sneakers')}

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