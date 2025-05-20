import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel = ({
  items = [],
  slidesPerView = 3,
  loop = true,
  autoplay = true,
}) => {
  return (
    <section className="w-full bg-gray-100 p-6">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={loop}
        autoplay={autoplay ? { delay: 3000, disableOnInteraction: false } : false}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-lg group">
              <img
                src={item.image}
                alt={item.title}
                className="object-cover w-full h-full"
              />

              {/* Overlay content */}
              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-6">
                <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
                  {item.title}
                </h2>
                <p className="text-white text-base md:text-lg mb-6">
                  {item.description}
                </p>
                <div className="flex gap-4">
                  <button className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-200">
                    {item.cta1 || "Learn More"}
                  </button>
                  <button className="bg-transparent border border-white text-white px-4 py-2 rounded-lg font-medium hover:bg-white hover:text-black transition">
                    {item.cta2 || "Contact Us"}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Carousel;
