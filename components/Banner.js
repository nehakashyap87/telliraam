import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const Banner = () => {
  const banners = [
    {
      id: 1,
      title: "Your Go-To Place for Quality and Affordable Prices",
      subtitle: "At Grocery Store, we bring you the finest selection of fresh produce, pantry essentials, and everyday favorites.",
      price: "140.00",
      img: "/images/slider-1.webp",
    },
    {
      id: 2,
      title: "Where Quality Meets Savings, Right in Your Neighborhood",
      subtitle:
        "At Grocery Store, we bring you the finest selection of fresh produce, pantry essentials, and everyday favorites.",
      price: "140.00",
      img: "/images/slider-2.webp",
    },
  ];

  const items = [
    { img: "/images/02.png", text: "Uncategorized" },
    { img: "/images/03.png", text: "Black Sesame Oil" },
    { img: "/images/04.png", text: "Coconut oil" },
    { img: "/images/05.png", text: "Groundnut Peanut Oil" },
    { img: "/images/06.png", text: "Mustard Oil" },
    { img: "/images/07.png", text: "White sesame oil" },
    { img: "/images/08.png", text: "Wood pressed almond Oil" },
  ];

  return (
    <>
      {/* Banner Slider */}
      <div className="e-new-banner-wrapper">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop
          speed={800}
          className="new-swipe-container"
        >
          {banners.map((banner) => (
            <SwiperSlide key={banner.id}>
              <div className="bnr-img">
                <Image
                  src={banner.img}
                  alt={banner.title}
                  fill
                  sizes="100vw"
                  style={{ objectFit: 'cover' }}
                  priority={banner.id === 1}
                  className="bnr-image"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Category Slider below Banner */}
      <div className="e-cat-slider">
        <div className="container">
          <div className="swiper-container e-category-slider-wrapper">
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true, // <-- pauses when hover over slider
              }}
              speed={600}
              spaceBetween={20}
              slidesPerView={5}
              loop
              breakpoints={{
                320: { slidesPerView: 2, spaceBetween: 12 },
                576: { slidesPerView: 3, spaceBetween: 16 },
                768: { slidesPerView: 4, spaceBetween: 18 },
                1024: { slidesPerView: 5, spaceBetween: 20 },
              }}
              className="e-category-slider" // keep your class for styling
            >
              {items.map((item, i) => (
                <SwiperSlide key={i}>
                  <a href="product_category.html" className="e-category-inner">
                    <span className="e-category-icon">
                      <img src={item.img} alt={item.text} loading="lazy" />
                    </span>
                    <span className="e-category-text">{item.text}</span>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/*  Middle Ads */}
      <div className="e-topads-wrappper">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12 col-12 order-lg-1 order-md-2">
                    <div className="e-cads-inner">
                        <a href="product_category_sidebar.html">
                          <img src="images/33.jpg" alt="image" className="img-fluid"/></a>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-lg-1 order-md-3">
                    <div className="e-cads-inner">
                        <a href="product_category_sidebar.html"><img src="images/22.jpg" alt="image" className="img-fluid"/></a>
                    </div>
                </div>
              
                <div className="col-lg-3 col-md-6 col-sm-12 col-12 order-lg-3 order-md-1">
                    <div className="e-cads-inner">
                        <a href="product_category_sidebar.html"><img src="images/11.jpg" alt="image" className="img-fluid"/></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default Banner;
