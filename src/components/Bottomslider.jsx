"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const slides = [
  { bg: "/images/1.jpg"}, 
  { bg: "/images/2.jpg"}, 
  { bg: "/images/3.jpg"} 
];

export default function HeroSlider() {
  const options = {
    type: "loop",
    autoplay: true,
    interval: 5000,
    arrows: false,
    pagination: false,
    gap: "5rem",
    perPage: 1,
  };

  return (
    <div className="relative z-10 bg-black pt-4 pb-4">
      <Splide options={options}>
        {slides.map((slide, index) => (
          <SplideSlide key={index}>
            {/* Card */}
            <div
              className={`
                relative rounded-xl overflow-hidden shadow-lg mx-auto
                h-[180px] w-[95%] max-w-[1500px]  /* Mobile first */
                sm:h-[250px] sm:w-[90%]           /* Small screens */
                md:h-[300px] md:w-[85%]           /* Medium screens */
                lg:h-[350px] lg:w-[100%]           /* Large screens */
                xl:h-[400px] xl:w-[100%]           /* Extra large screens */
              `}
              style={{
                backgroundImage: `url(${slide.bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay gradient (also rounded because of overflow-hidden) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>

              
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}



