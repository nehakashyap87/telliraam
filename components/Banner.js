import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
  const banners = [
    {
      id: 1,
      title: "Your Go-To Place for Quality and Affordable Prices",
      subtitle:
        "At Grocery Store, we bring you the finest selection of fresh produce, pantry essentials, and everyday favorites.",
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
        <div className="e-banner-inwrap">
          <div className="e-container">
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
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div className="e-new-banner-heading">
                        <h1 className="e-banner-three-title">{banner.title}</h1>
                        <p>{banner.subtitle}</p>
                        <ul className="e-baner-ul">
                          <li>
                            <div className="price-box">
                              <div className="currency">$</div>
                              <div className="text">
                                <span className="discount">Discount Price</span>
                                <h4>{banner.price}</h4>
                              </div>
                            </div>
                          </li>
                          <li>
                            <img
                              src="/images/line-1.png"
                              alt="separator"
                              className="img-fluid"
                            />
                          </li>
                          <li>
                            <a
                              className="e-btn white banner-btn"
                              href="product_category.html"
                            >
                              shop now
                              <span>
                                <svg
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  width="15px"
                                  height="20px"
                                >
                                  <path
                                    fillRule="evenodd"
                                    fill="#ffffff"
                                    d="M14.465,18.485 L13.480,5.998 C13.441,5.519 13.082,5.159 12.643,5.159 L10.869,5.159 L10.869,4.371 C10.869,2.285 9.363,0.588 7.512,0.588 C5.663,0.588 4.157,2.285 4.157,4.371 L4.157,5.159 L2.381,5.159 C1.942,5.159 1.582,5.519 1.545,5.998 L0.555,18.542 C0.536,18.791 0.611,19.040 0.761,19.228 C0.920,19.426 1.150,19.539 1.391,19.539 L13.634,19.539 C14.097,19.539 14.474,19.128 14.474,18.622 C14.474,18.574 14.471,18.529 14.465,18.485 Z"
                                  />
                                </svg>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="bnr-img">
                        <img
                          src={banner.img}
                          alt={banner.title}
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* Category Slider below Banner */}
       <div className="e-cat-slider">
      <div className="container">
        <div className="swiper-container e-category-slider">
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
                  <img src={item.img} alt={item.text} />
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
      <div className="e-midads-wrappper">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12 col-12 order-lg-1 order-md-2">
              <div className="e-topads-inner e-cads-inner">
                <a href="product_category_sidebar.html">
                  <img
                    src="/images/33.jpg"
                    alt="Ad 1"
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-lg-1 order-md-3">
              <div className="e-topads-inner e-cads-inner">
                <a href="product_category_sidebar.html">
                  <img
                    src="/images/22.jpg"
                    alt="Ad 2"
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-12 order-lg-3 order-md-1">
              <div className="e-topads-inner e-cads-inner">
                <a href="product_category_sidebar.html">
                  <img
                    src="/images/11.jpg"
                    alt="Ad 3"
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
