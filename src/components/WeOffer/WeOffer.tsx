"use client";

import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Container from "../Container/Container";

import { images_bg, images_main } from "@/lib/images";

const WeOffer = () => {
  const [instance, setInstance] = useState({});
  const handleSlideChange = () => {
    // console.log(instance);
  };

  return (
    <section
      id="services"
      className="relative flex ml-auto mr-auto min-w-[320px] max-w-[1440px] w-full h-[851px]
    | min-[320px]: 
    | min-[768px]:h-[621px] 
    | min-[1280px]:h-[779px] "
    >
      <Swiper
        onSlideChange={handleSlideChange}
        speed={1000}
        direction={"vertical"}
        pagination={{
          el: "#navSwiperPanel",
          type: "bullets",
          clickable: true,
          renderBullet: function (i, className) {
            // id="myBullet" - specific in global.css
            return `<h4 id="myBullet" class="${className}">${images_main[i].alt}</h4>`;
          },
        }}
        a11y={{
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
        }}
        modules={[Navigation, Pagination, EffectFade, A11y]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        onSwiper={setInstance}
        className="h-full w-full"
      >
        {images_bg.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              id="backgroundWeOffer"
              className="flex h-full w-full items-center justify-center relative"
            >
              <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-[#020F08]/50  to-[#020F08]/50" />
              <div className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-[#001826]/20  to-transparent" />
              <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-[#001826]/20 to-transparent" />

              <Image
                src={image.src}
                alt={image.alt}
                className="block h-full w-full object-cover"
              />

              <div
                id="contentWeOffer"
                className="absolute bg-transparent w-full h-full py-[56px]
                | min-[768px]:py-[64px]
                | min-[1280px]:py-[104px]"
              >
                <Container>
                  <div
                    className="flex flex-col text-[40px] leading-[56px] font-thin
                  | min-[768px]:flex-row min-[768px]:text-[67px] min-[768px]:leading-[90px]
                  | min-[1280px]:text-[98px] min-[1280px]:leading-[120px] "
                  >
                    <h3>
                      WE <span className="font-medium">OFFER</span>
                    </h3>
                    <p className="ml-auto">
                      <span className="font-extralight">{`0${
                        index + 1
                      }/`}</span>
                      <span className="text-white/50">{`0${images_bg.length}`}</span>
                    </p>
                  </div>
                  <div
                    className=" flex flex-col h-[620px] w-full text-[40px] leading-[56px] font-thin
                  | min-[768px]:flex-row min-[768px]:h-[380px] min-[768px]:items-end
                  | min-[1280px]:h-[436px] min-[1280px]:justify-between"
                  >
                    <Image
                      src={images_main[index].src}
                      alt={images_main[index].alt}
                      className="block h-[213px] w-full object-cover
                      | min-[768px]:h-[370px] min-[768px]:w-[463px]
                      | min-[1280px]:h-[429px] min-[1280px]:w-[607px]"
                    />
                    <div
                      className="flex flex-col text-[12px] leading-[24px] h-full font-extralight
                  | min-[768px]:ml-[8px] min-[768px]:mt-auto min-[768px]:h-auto
                  | min-[1280px]:ml-0 min-[1280px]:w-[290px] min-[1280px]:h-full"
                    >
                      {index === 0 && (
                        <p
                          className="ml-auto mb-auto tracking-[.2em]
                      | min-[768px]:ml-0 min-[768px]:mb-[30px]
                      | min-[1280px]:mb-auto min-[1280px]:mt-[4px]"
                        >
                          {images_main[index].action}
                        </p>
                      )}
                      {index === 1 && (
                        <p
                          className="ml-auto mb-auto tracking-[.2em]
                      | min-[768px]:ml-0 min-[768px]:mb-[30px]
                      | min-[1280px]:mb-auto min-[1280px]:mt-[44px]"
                        >
                          {images_main[index].action}
                        </p>
                      )}
                      {index === 2 && (
                        <p
                          className="ml-auto mb-auto tracking-[.2em]
                      | min-[768px]:ml-0 min-[768px]:mb-[30px]
                      | min-[1280px]:mb-auto min-[1280px]:mt-[84px]"
                        >
                          {images_main[index].action}
                        </p>
                      )}
                      {index === 3 && (
                        <p
                          className="ml-auto mb-auto tracking-[.2em]
                      | min-[768px]:ml-0 min-[768px]:mb-[30px]
                      | min-[1280px]:mb-auto min-[1280px]:mt-[124px]"
                        >
                          {images_main[index].action}
                        </p>
                      )}
                      {index === 4 && (
                        <p
                          className="ml-auto mb-auto tracking-[.2em]
                      | min-[768px]:ml-0 min-[768px]:mb-[30px]
                      | min-[1280px]:mb-auto min-[1280px]:mt-[164px]"
                        >
                          {images_main[index].action}
                        </p>
                      )}

                      <p
                        className="ml-auto text-[14px] leading-[20px]
                      | min-[768px]:text-[13px] min-[768px]:leading-[20px]
                      | min-[1280px]:text-[18px] min-[1280px]:leading-[24px]"
                      >
                        {images_main[index].description}
                      </p>
                    </div>
                  </div>
                </Container>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div
          className="absolute z-10 left-[50%] top-[520px] w-full h-[300px] translate-x-[-50%]
        | min-[480px]:w-[480px]
        | min-[768px]:w-[768px] min-[768px]:top-[232px]
        | min-[1280px]:w-[1280px] min-[1280px]:top-[312px]"
        >
          <div
            id="navSwiperPanel"
            className="ml-[20px]
        | min-[768px]:ml-[504px]
        | min-[1280px]:ml-[660px]"
          />
        </div>
      </Swiper>
    </section>
  );
};

export default WeOffer;
