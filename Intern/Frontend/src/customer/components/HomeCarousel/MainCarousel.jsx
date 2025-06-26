import React from "react";
import "../../../index.css";
import { HomeCarouselData } from "./HomeCarouselData";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
const responsive = {
  // 0: { items: 1 },
  // 720: { items: 2 },
  // 1024: { items: 5.5 },
};
const MainCarousel = () => {
  const items = HomeCarouselData.map((item) => (
    <div
      className="carousel-item"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "400px",
        padding: "0 10px", 
        marginTop:"0px"
      }}
    >
      <img
        className="carImg cursor-pointer"
        role="presentation"
        src={item.image}
        alt="/"
        responsive={responsive}
        autoPlayInterval={1000}
        style={{
          width: "100%",
          height: "800px", 
          objectFit: "cover", 
          borderRadius: "8px", 
        }}
      />
    </div>
  ));
  return (
    <AliceCarousel
      mouseTracking
      items={items}
      responsive={responsive}
      autoPlay
      autoPlayInterval={1000}
      infinite
      disableButtonsControls
      disableDotsControls={false}
    />
  );
};
export default MainCarousel;
// import React, { useState, useEffect, useRef } from 'react';
// import './MainCarousel.css'; // Assuming you'll put the CSS here

// const MainCarousel = () => {
//     const [currentSlide, setCurrentSlide] = useState(0);
//     const [autoplay, setAutoplay] = useState(true);
//     const intervalRef = useRef(null); // Use useRef to store the interval ID

//     const slides = [
//         {
//             title: "Objavte nové obzory",
//             description: "Cestovateľské zážitky, ktoré vám zmenia život",
//             buttonText: "Rezervovať",
//             buttonUrl: "#",
//             image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
//         },
//         {
//             title: "Prírodné krásy",
//             description: "Nádherné výhľady a čistá príroda",
//             buttonText: "Pozrieť ponuku",
//             buttonUrl: "#",
//             image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
//         },
//         {
//             title: "Mestské dobrodružstvo",
//             description: "Moderné mestá plné života a kultúry",
//             buttonText: "Viac informácií",
//             buttonUrl: "#",
//             image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
//         }
//     ];

//     const nextSlide = () => {
//         setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
//     };

//     const prevSlide = () => {
//         setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
//     };

//     const goToSlide = (index) => {
//         setCurrentSlide(index);
//     };

//     const startAutoplay = () => {
//         // Clear any existing interval to prevent multiple intervals running
//         if (intervalRef.current) {
//             clearInterval(intervalRef.current);
//         }
//         intervalRef.current = setInterval(() => {
//             if (autoplay) {
//                 nextSlide();
//             }
//         }, ); 
//     };

//     const stopAutoplay = () => {
//         if (intervalRef.current) {
//             clearInterval(intervalRef.current);
//         }
//     };

//     // Effect for autoplay
//     useEffect(() => {
//         startAutoplay();
//         // Cleanup function to clear the interval when the component unmounts
//         return () => stopAutoplay();
//     }, [autoplay, slides.length]); // Re-run effect if autoplay state or number of slides changes

//     const replaceBrokenImage = (event) => {
//         const fallbacks = [
//             'https://picsum.photos/id/1018/1920/1080',
//             'https://picsum.photos/id/1015/1920/1080',
//             'https://picsum.photos/id/1019/1920/1080'
//         ];
//         event.target.src = fallbacks[currentSlide % fallbacks.length];
//     };

//     return (
//         <div
//             className="relative overflow-hidden"
//             onMouseEnter={() => { setAutoplay(false); stopAutoplay(); }}
//             onMouseLeave={() => { setAutoplay(true); startAutoplay(); }}
//         >
//             <div className="relative h-[80vh] min-h-[500px]">
//                 {slides.map((slide, index) => (
//                     <div
//                         key={index}
//                         className={`absolute inset-0 transition-opacity duration-800 ease-in-out ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
//                         // zIndex is important for overlapping transitions if you have other elements
//                         style={{ zIndex: currentSlide === index ? 1 : 0 }}
//                     >
//                         <div className="absolute inset-0 bg-gray-800">
//                             <img
//                                 src={slide.image}
//                                 alt={slide.title}
//                                 className="w-full h-full object-cover opacity-80"
//                                 onError={replaceBrokenImage}
//                                 loading="lazy"
//                             />
//                         </div>

//                         <div className="container mx-auto px-6 h-full flex items-center">
//                             <div
//                                 className={`max-w-2xl text-white slide-content transition-all duration-600 ease-in-out delay-300 ${currentSlide === index ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
//                             >
//                                 <h2 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h2>
//                                 <p className="text-xl md:text-2xl mb-8">{slide.description}</p>
//                                 <a
//                                     href={slide.buttonUrl}
//                                     className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors fade-in"
//                                 >
//                                     {slide.buttonText}
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 ))}

//                 <button
//                     onClick={prevSlide}
//                     className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center z-10 transition-all"
//                     aria-label="Previous slide"
//                 >
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
//                     </svg>
//                 </button>
//                 <button
//                     onClick={nextSlide}
//                     className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center z-10 transition-all"
//                     aria-label="Next slide"
//                 >
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
//                     </svg>
//                 </button>

//                 <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
//                     {slides.map((_, index) => (
//                         <button
//                             key={index}
//                             onClick={() => goToSlide(index)}
//                             className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${currentSlide === index ? 'bg-white w-4 md:w-6' : 'bg-white/50'}`}
//                             aria-label={`Go to slide ${index + 1}`}
//                         ></button>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default MainCarousel;

// import React, { useState, useEffect, useRef } from 'react';
// import './MainCarousel.css';
// import car1 from "../../../assests/car1.png"
// import car2 from "../../../assests/car2.png"
// import car3 from "../../../assests/car3.png"
// const MainCarousel = () => {
//     const [currentSlide, setCurrentSlide] = useState(0);
//     const [autoplay, setAutoplay] = useState(true);
//     const intervalRef = useRef(null);


//     const importAll = (r) => {
//         let images = {};
//         r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
//         return images;
//     };

//     const carouselImagesContext = require.context('./assets/carousel', false, /\.(png|jpe?g|svg)$/);
//     const loadedImages = importAll(carouselImagesContext);

//     const initialSlidesData = [
//         {
//             title: "Dress to express",
//             description: "Styling with substance at Jiara Fashion",
//             buttonText: "SEE OUR COLLECTIONS",
//             buttonUrl: "#",
//             expectedImageName: 'car1.png' // Corresponds to the uploaded car1.jpg
//         },
//         {
//             title: "CHAUBISE DHAKA STORE",
//             description: "A PERFECT FIT",
//             buttonText: "WORK WITH ME",
//             buttonUrl: "#",
//             expectedImageName: 'car2.png' // Corresponds to the uploaded car2.jpg
//         },
//         {
//             title: "chaubhisedhaka",
//             description: "Start your beautiful journey",
//             buttonText: "View products",
//             buttonUrl: "#",
//             expectedImageName: 'car3.png' // Corresponds to the uploaded car3.jpg
//         }
//     ];

//     // Create the final slides array by combining data and image URLs
//     const slides = initialSlidesData.map(slideData => {
//         const imageUrl = loadedImages[slideData.expectedImageName];
//         return {
//             ...slideData,
//             image: imageUrl || 'https://via.placeholder.com/1920x1080?text=Image+Not+Found' // Fallback if image not found
//         };
//     });

//     // Slider logic functions
//     const nextSlide = () => {
//         setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
//     };

//     const prevSlide = () => {
//         setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
//     };

//     const goToSlide = (index) => {
//         setCurrentSlide(index);
//     };

//     const startAutoplay = () => {
//         if (intervalRef.current) {
//             clearInterval(intervalRef.current);
//         }
//         intervalRef.current = setInterval(() => {
//             if (autoplay) {
//                 nextSlide();
//             }
//         }, 3000); // 3 seconds
//     };

//     const stopAutoplay = () => {
//         if (intervalRef.current) {
//             clearInterval(intervalRef.current);
//         }
//     };

//     // Effect for autoplay management
//     useEffect(() => {
//         startAutoplay();
//         // Cleanup function to clear the interval when the component unmounts
//         // or before the effect re-runs (e.g., if autoplay state changes)
//         return () => stopAutoplay();
//     }, [autoplay, slides.length]); // Dependencies for useEffect

//     // Fallback for broken images
//     const replaceBrokenImage = (event) => {
//         const fallbacks = [
//             'https://picsum.photos/id/1018/1920/1080',
//             'https://picsum.photos/id/1015/1920/1080',
//             'https://picsum.photos/id/1019/1920/1080'
//         ];
//         event.target.src = fallbacks[currentSlide % fallbacks.length];
//     };

//     return (
//         <div
//             className="relative overflow-hidden"
//             onMouseEnter={() => { setAutoplay(false); stopAutoplay(); }}
//             onMouseLeave={() => { setAutoplay(true); startAutoplay(); }}
//         >
//             <div className="relative h-[80vh] min-h-[500px]">
//                 {slides.map((slide, index) => (
//                     <div
//                         key={index}
//                         // Apply opacity transition. zIndex helps with layering during transitions.
//                         className={`absolute inset-0 transition-opacity duration-800 ease-in-out ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
//                         style={{ zIndex: currentSlide === index ? 1 : 0 }}
//                     >
//                         <div className="absolute inset-0 bg-gray-800">
//                             <img
//                                 src={slide.image}
//                                 alt={slide.title}
//                                 className="w-full h-full object-cover opacity-80"
//                                 onError={replaceBrokenImage}
//                                 loading="lazy"
//                             />
//                         </div>

//                         <div className="container mx-auto px-6 h-full flex items-center">
//                             <div
//                                 // Apply slide-in/fade-in content animation
//                                 className={`max-w-2xl text-white slide-content transition-all duration-600 ease-in-out delay-300 ${currentSlide === index ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
//                             >
//                                 <h2 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h2>
//                                 <p className="text-xl md:text-2xl mb-8">{slide.description}</p>
//                                 <a
//                                     href={slide.buttonUrl}
//                                     className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors fade-in"
//                                 >
//                                     {slide.buttonText}
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 ))}

//                 {/* Navigation Buttons */}
//                 <button
//                     onClick={prevSlide}
//                     className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center z-10 transition-all"
//                     aria-label="Previous slide"
//                 >
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
//                     </svg>
//                 </button>
//                 <button
//                     onClick={nextSlide}
//                     className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center z-10 transition-all"
//                     aria-label="Next slide"
//                 >
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
//                     </svg>
//                 </button>

//                 {/* Pagination Dots */}
//                 <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
//                     {slides.map((_, index) => (
//                         <button
//                             key={index}
//                             onClick={() => goToSlide(index)}
//                             className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${currentSlide === index ? 'bg-white w-4 md:w-6' : 'bg-white/50'}`}
//                             aria-label={`Go to slide ${index + 1}`}
//                         ></button>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default MainCarousel;