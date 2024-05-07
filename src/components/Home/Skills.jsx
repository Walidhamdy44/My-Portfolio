// import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import l1 from "../../images/bootstrap-framework-logo.png";
import l2 from "../../images/css3.png";
import l3 from "../../images/framer.png";
import l4 from "../../images/git.png";
import l5 from "../../images/html-logo.png";
import l6 from "../../images/javascript-logo.png";
import l7 from "../../images/npm.png";
import l8 from "../../images/react.png";
import l9 from "../../images/sass.png";
import l10 from "../../images/tailwind.png";
import l11 from "../../images/typescript.png";
import "swiper/css";
const Skills = () => {
  const skillsArray = [l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11];
  return (
    <div className="skills">
      <h2>My Skills </h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        autoplay={{
          delay: 700,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 7,
            spaceBetween: 50,
          },
        }}
      >
        {skillsArray.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="item">
                <img alt="skills" src={item} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Skills;
