"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import Image from "next/image";
import { useState, useEffect } from "react";
import Container from "../Container/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, EffectCoverflow } from "swiper/modules";

import { images_ourgallery } from "@/lib/images";

const OurGallery = () => {
  const [instance, setInstance] = useState({});
  const [isMobileWidth, setIsMobileWidth] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleMediaQuery = (event: any) => {
      if (event.matches) {
        setIsMobileWidth(true);
      } else {
        setIsMobileWidth(false);
      }
    };
    mediaQuery.addEventListener("change", handleMediaQuery);
    handleMediaQuery(mediaQuery);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQuery);
    };
  }, []);

  const handleSlideChange = () => {
    // console.log(instance);
  };

  return (
    <section
      id="gallery"
      className="relative flex ml-auto mr-auto min-w-[320px] max-w-[1440px] w-full h-[801px] py-[56px]    
    | min-[768px]:h-[575px] min-[768px]:py-[64px]
    | min-[1280px]:h-[788px] min-[1280px]:py-[104px]"
    >
      <Container>
        <h3
          className="text-[40px] leading-[56px] font-thin mb-[12px]
            | min-[768px]:text-[67px] min-[768px]:leading-[82px] min-[768px]:tracking-[-.04em] min-[768px]:mb-[56px]
            | min-[1280px]:text-[98px] min-[1280px]:leading-[118px] min-[1280px]:mb-[24px]"
        >
          OUR <span className="font-medium">GALLERY</span>
        </h3>
        {isMobileWidth && (
          <Swiper
            onSlideChange={handleSlideChange}
            speed={1000}
            direction={"vertical"}
            a11y={{
              prevSlideMessage: "Previous slide",
              nextSlideMessage: "Next slide",
            }}
            modules={[Navigation, A11y, EffectCoverflow]}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={3}
            spaceBetween={10}
            coverflowEffect={{
              depth: 10,
              modifier: 1,
              rotate: 2,
              scale: 1,
              slideShadows: true,
              stretch: 0,
            }}
            navigation={false}
            onSwiper={setInstance}
            className="h-[600px] w-full"
          >
            {images_ourgallery.map((image, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="block h-full w-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        {!isMobileWidth && (
          <Swiper
            onSlideChange={handleSlideChange}
            speed={1200}
            direction={"horizontal"}
            a11y={{
              prevSlideMessage: "Previous slide",
              nextSlideMessage: "Next slide",
            }}
            modules={[Navigation, A11y, EffectCoverflow]}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={2}
            spaceBetween={50}
            initialSlide={1}
            coverflowEffect={{
              depth: 50,
              modifier: 8,
              rotate: 0,
              scale: 1,
              slideShadows: true,
              stretch: -4,
            }}
            navigation={{
              nextEl: "#swiper-button-next",
              prevEl: "#swiper-button-prev",
            }}
            onSwiper={setInstance}
            className="w-full
             | min-[768px]:h-[310px]
             | min-[1280px]:h-[432px]"
          >
            {images_ourgallery.map((image, index) => (
              <SwiperSlide
                key={index}
                className="
                | min-[768px]:w-[415px] 
                | min-[1280px]:w-[606px]"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="block h-full w-full object-cover"
                />
              </SwiperSlide>
            ))}
            <div className="slider-controller">
              <div id="swiper-button-prev" className="swiper-button-prev">
                BACK
              </div>
              <div id="swiper-button-next" className="swiper-button-next">
                NEXT
              </div>
            </div>
          </Swiper>
        )}
      </Container>
    </section>
  );
};

export default OurGallery;
