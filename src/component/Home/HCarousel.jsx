import { Carousel, IconButton } from "@material-tailwind/react";
// import banner1 from "../../assets/HomeBanner/Banner1-scaled.webp";
// import {IconButton } from "@material-tailwind/react";/

function HCarousel({ images }) {
  return (
    <Carousel
      autoplay={true}
      autoplayDelay={3000}
      loop={true}
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
    >
      {images.map((image, index) => (
        <div key={index} className="relative">
          <img
            src={image}
            alt={`slide ${index}`}
            className="w-full h-[200px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 py-6 sm:py-8 md:py-10">
            {/* <h1 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-2">
              Study in Dubai
            </h1> */}
            <a
              className="bg-yellow-100 px-4 sm:px-6 py-2 rounded text-xs sm:text-base hover:bg-yellow-500 transition text-black font-bold"
              href="#"
            >
              Donate Now
            </a>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default HCarousel;
