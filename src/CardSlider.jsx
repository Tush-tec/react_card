import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CardSlider = ({ items }) => {
  return (
    <section className="w-full bg-gray-100 p-4">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        navigation
        pagination={{ clickable: true }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-80 border rounded-xl overflow-hidden shadow-lg bg-gray-800 hover:shadow-2xl transition duration-300 group">
              <img
                src={item.image}
                alt={item.title || "device"}
                className="mx-auto object-contain w-full h-48"
              />
              <h3 className="text-white text-center text-lg font-semibold mt-2">
                {item.title}
              </h3>
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <button className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-200">
                  View Details
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CardSlider;
