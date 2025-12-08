"use client";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import avatar_1 from "@/assets/img/testimonial/07.jpg";
import avatar_2 from "@/assets/img/testimonial/01.jpg";
import avatar_3 from "@/assets/img/testimonial/02.jpg";
import avatar_4 from "@/assets/img/testimonial/03.jpg";

interface DataType {
  id: number;
  desc_1: JSX.Element;
  desc_2: JSX.Element;
  avatar: StaticImageData;
  name: string;
  designation: string;
}
[];

const testi_data: DataType[] = [
  {
    id: 1,
    desc_1: (
      <>
        Navkar has been our trusted partner for packaging solutions for over 5
        years. Their attention to quality and timely delivery is exceptional.
      </>
    ),
    desc_2: (
      <>
        The custom blow molding services perfectly match our product
        requirements. Highly professional team!
      </>
    ),
    avatar: avatar_1,
    name: "Rajesh Kumar",
    designation: "Procurement Manager",
  },
  {
    id: 2,
    desc_1: (
      <>
        Outstanding quality plastic packaging solutions. The team at Navkar
        understands our industry needs and delivers consistently.
      </>
    ),
    desc_2: (
      <>
        Their innovative approach to sustainable packaging has helped us reduce
        costs while maintaining quality standards.
      </>
    ),
    avatar: avatar_2,
    name: "Priya Patel",
    designation: "Operations Head",
  },
  {
    id: 3,
    desc_1: (
      <>
        Excellent service and product quality. Navkar&apos;s packaging solutions
        have significantly improved our product presentation.
      </>
    ),
    desc_2: (
      <>
        Their customer support is responsive and they always deliver on time. A
        reliable partner for our business.
      </>
    ),
    avatar: avatar_3,
    name: "Amit Shah",
    designation: "Supply Chain Director",
  },
  {
    id: 4,
    desc_1: (
      <>
        Working with Navkar Blowpack has been a game-changer for our packaging
        needs. Their expertise in blow molding technology is evident.
      </>
    ),
    desc_2: (
      <>
        From design consultation to final delivery, the entire process is
        seamless. Truly a world-class manufacturer.
      </>
    ),
    avatar: avatar_4,
    name: "Sunita Desai",
    designation: "Quality Assurance Manager",
  },
];

const setting = {
  spaceBetween: 30,
  speed: 1500,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".dot-2",
    clickable: true,
  },
  breakpoints: {
    1199: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 2,
    },
    575: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    },
  },
};

const Testimonial = ({ padding }: any) => {
  return (
    <section
      className={`testimonial-section-2 fix ${
        padding ? "" : "section-padding pt-0"
      }`}
      style={{ paddingTop: "130px" }}
    >
      <div className="container">
        <div className="section-title text-center">
          <span className="wow fadeInUp">PUBLIC TESTIMONIAL</span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            public feedback about Navkar
          </h2>
        </div>
        <Swiper
          {...setting}
          modules={[Pagination, Autoplay]}
          className="swiper testimonial-slider-2"
        >
          {testi_data.map((item) => (
            <SwiperSlide key={item.id} className="swiper-slide">
              <div className="testimonial-card-items">
                <div className="testimonial-content">
                  <div className="icon">
                    <i className="fa-solid fa-quote-right"></i>
                  </div>
                  <p className="text">{item.desc_1}</p>
                  <p className="text-2">{item.desc_2}</p>
                </div>
                <div className="client-info">
                  <div
                    className="client-image"
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      overflow: "hidden",
                      objectFit: "cover",
                    }}
                  >
                    <Image
                      src={item.avatar}
                      alt="client-img"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="client-content">
                    <h5>{item.name}</h5>
                    <p>{item.designation}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-dot pt-5 text-center">
            <div className="dot-2"></div>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
