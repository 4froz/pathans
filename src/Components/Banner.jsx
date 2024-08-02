import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Infinite looping
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    arrows: false, // Hide navigation arrows
    swipe: true, // Enable swiping
    adaptiveHeight: true, // Adjust height based on content
  };

  const images = [
    "https://vagads.com/cdn/shop/files/Vagad-_Cover-2000x1000-01.jpg?v=1701753274&width=2000",
    "https://vagads.com/cdn/shop/files/Vagad-_Cover-2000x1000-04.jpg?v=1701753273&width=2000",
  ];

  const smallimages = [
    "https://vagads.com/cdn/shop/files/Vagad-_Cover-2000x1000-01.jpg?v=1701753274&width=2000",
    "https://vagads.com/cdn/shop/files/Vagad-_Cover-2000x1000-04.jpg?v=1701753273&width=2000",
  ];

  return (
    <>
      <div className="hidden sm:block">
        <Slider className="" {...settings}>
          {images.map((src, index) => (
            <div key={index}>
              <img
                src={src}
                alt={`Slide ${index}`}
                className="h-[550px] bg-gray-100  object-cover"
                style={{ width: "100%", outline: "none" }}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="block sm:hidden">
        <Slider className="" {...settings}>
          {smallimages.map((src, index) => (
            <div key={index}>
              <img
                src={src}
                alt={`Slide ${index}`}
                className="h-[330px] bg-gray-100 object-cover"
                style={{ width: "100%", outline: "none" }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default ImageSlider;
