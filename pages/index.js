import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import NewArrival from "@/components/NewArrival";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import TopHeader from "@/components/TopHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Teliram Pure | Wood Pressed Oil for Healthy Living</title>
        <meta name="description" content="Discover Teliram’s 100% pure wood pressed oil — rich in nutrients, aroma, and tradition. Elevate your health and taste with natural goodness."/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
<div className="main-wrapper new-home font-etna">
  <TopHeader/>
  <Banner/> 
  <NewArrival/>
     <div className="e-topads-wrappper e-topads-cloth">

        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12 col-12">
              <div className="e-topads-inner e-cads-inner">
                <a href="product_category_sidebar.html">
                  <img src="/images/c1.png" alt="image" className="img-fluid" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="e-topads-inner e-cads-inner">
                <a href="product_category_sidebar.html">
                  <img src="/images/c2.png" alt="image" className="img-fluid" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="e-topads-inner e-cads-inner">
                <a href="product_category_sidebar.html">
                  <img src="/images/c3.png" alt="image" className="img-fluid" />
                </a>
              </div>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 col-12">
              <div className="e-topads-inner e-cads-inner">
                <a href="product_category_sidebar.html">
                  <img src="/images/c4.png" alt="image" className="img-fluid" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Best Seller Section */}
      <section className="e-best-slr-wrap e-best-slr-cloth">
        <div className="container">
          <div className="e-best-slr-page e-slr-slide">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="e-heading-wrap mb-43">
                  <h2 className="e-heading-title">Top Featured Products</h2>
                  <p className="e-heading-subtitle">
                    Exclusive products have just arrived. Check them out
                  </p>
                </div>
              </div>
              {/* Arrows */}
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 e-slr-pag">
                <div className="swiper-button-next e-slr-pagina-next">
                  <span>
                    <svg xmlnsXlink="http://www.w3.org/1999/xlink" width="8px" height="16px">
                      <path
                        fillRule="evenodd"
                        fill="rgb(122, 183, 186)"
                        d="M1.723,15.744 C1.583,15.909 1.396,15.999 1.196,15.999 C0.997,15.999 0.810,15.909 0.670,15.744 L0.223,15.219 C-0.067,14.877 -0.067,14.323 0.223,13.982 L5.312,8.003 L0.218,2.017 C0.078,1.852 0.000,1.632 0.000,1.398 C0.000,1.163 0.078,0.944 0.218,0.779 L0.664,0.255 C0.804,0.090 0.991,-0.001 1.191,-0.001 C1.390,-0.001 1.577,0.090 1.718,0.255 L7.783,7.381 C7.924,7.547 8.001,7.768 8.000,8.002 C8.001,8.238 7.924,8.458 7.783,8.624 L1.723,15.744 Z"
                      />
                    </svg>
                  </span>
                </div>
                <div className="swiper-button-prev e-slr-pagina-prev">
                  <svg xmlnsXlink="http://www.w3.org/1999/xlink" width="8px" height="16px">
                    <path
                      fillRule="evenodd"
                      fill="rgb(122, 183, 186)"
                      d="M6.277,15.744 C6.417,15.909 6.604,15.999 6.803,15.999 C7.003,15.999 7.190,15.909 7.330,15.744 L7.776,15.219 C8.067,14.877 8.067,14.323 7.776,13.982 L2.688,8.003 L7.782,2.017 C7.922,1.852 8.000,1.632 8.000,1.398 C8.000,1.163 7.922,0.944 7.782,0.779 L7.336,0.255 C7.195,0.090 7.008,-0.001 6.809,-0.001 C6.610,-0.001 6.422,0.090 6.282,0.255 L0.217,7.381 C0.076,7.547 -0.001,7.768 -0.000,8.002 C-0.001,8.238 0.076,8.458 0.217,8.624 L6.277,15.744 Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* ... */}
          {/* Keep rest of content here — same JSX conversion rules apply */}
        </div>
      </section>
        <div className="fl-client-wrapper">
			<div className="container fl-client-container">
                <div className="e-best-slr-page e-client-main">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="e-heading-wrap mb-43 ">
                                <h2 className="e-heading-title">What Clients Say</h2>
                                <p className="e-heading-subtitle">My mission is Design the best websites around</p>
                            </div>
                        </div>
                        {/* <!-- Add Arrows --> */}
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 e-slr-pag">
                            <div className="swiper-button-next e-slr-pagina-next">
                                <span>
                                    <svg xmlnsXlink="http://www.w3.org/1999/xlink" width="8px" height="16px">
                                        <path fillRule="evenodd" fill="rgb(122, 183, 186)" d="M1.723,15.744 C1.583,15.909 1.396,15.999 1.196,15.999 C0.997,15.999 0.810,15.909 0.670,15.744 L0.223,15.219 C-0.067,14.877 -0.067,14.323 0.223,13.982 L5.312,8.003 L0.218,2.017 C0.078,1.852 0.000,1.632 0.000,1.398 C0.000,1.163 0.078,0.944 0.218,0.779 L0.664,0.255 C0.804,0.090 0.991,-0.001 1.191,-0.001 C1.390,-0.001 1.577,0.090 1.718,0.255 L7.783,7.381 C7.924,7.547 8.001,7.768 8.000,8.002 C8.001,8.238 7.924,8.458 7.783,8.624 L1.723,15.744 Z"></path>
                                    </svg>
                                </span>
                            </div>
                            <div className="swiper-button-prev e-slr-pagina-prev">
                                <svg xmlnsXlink="http://www.w3.org/1999/xlink" width="8px" height="16px">
                                    <path fillRule="evenodd" fill="rgb(122, 183, 186)" d="M6.277,15.744 C6.417,15.909 6.604,15.999 6.803,15.999 C7.003,15.999 7.190,15.909 7.330,15.744 L7.776,15.219 C8.067,14.877 8.067,14.323 7.776,13.982 L2.688,8.003 L7.782,2.017 C7.922,1.852 8.000,1.632 8.000,1.398 C8.000,1.163 7.922,0.944 7.782,0.779 L7.336,0.255 C7.195,0.090 7.008,-0.001 6.809,-0.001 C6.610,-0.001 6.422,0.090 6.282,0.255 L0.217,7.381 C0.076,7.547 -0.001,7.768 -0.000,8.002 C-0.001,8.238 0.076,8.458 0.217,8.624 L6.277,15.744 Z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
				<div className="fl-client-slider">
					<div className="row">
						<div className="col-lg-12">
							<div className="fl-client-slider-inner">
								<div className="swiper-container clientslider">
									<div className="swiper-wrapper">
										<div className="swiper-slide">
											<div className="fl-client-slider-box">
												<div className="fl-client-profile-information">
													<div className="testimonial">
														<div className="testimonial-content">
															<p className="description">
																Consectetur adipiscing elit, sed do eiusmod tempor
														incididunt ut labore et dolore magna aliqua. Quis ipsum
														suspendisse ultrices gravida. Risus commodo viverra maecenas
														accumsan lacus vel facilisis and the part of new generation.
															</p>
														</div>
														<div className="testimonial-profile">
															<div className="pic">
																<img src="/images/profile1.png" alt=""/>
															</div>
															<h3 className="title">
																Williamson
																<span className="post">Web Developer</span>
															</h3>
														</div>
													</div>
												</div>						
											</div>
										</div>
										<div className="swiper-slide">
											<div className="fl-client-slider-box">
												<div className="fl-client-profile-information">
													<div className="testimonial">
														<div className="testimonial-content">
															<p className="description">
																Consectetur adipiscing elit, sed do eiusmod tempor
														incididunt ut labore et dolore magna aliqua. Quis ipsum
														suspendisse ultrices gravida. Risus commodo viverra maecenas
														accumsan lacus vel facilisis and the part of new generation.
															</p>
														</div>
														<div className="testimonial-profile">
															<div className="pic">
																<img src="/images/profile2.png" alt=""/>
															</div>
															<h3 className="title">
																Angela Carol
																<span className="post">Web Developer</span>
															</h3>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="swiper-slide">
											<div className="fl-client-slider-box">
												<div className="fl-client-profile-information">
													<div className="testimonial">
														<div className="testimonial-content">
															<p className="description">
																Consectetur adipiscing elit, sed do eiusmod tempor
                                                                incididunt ut labore et dolore magna aliqua. Quis ipsum
                                                                suspendisse ultrices gravida. Risus commodo viverra maecenas
                                                                accumsan lacus vel facilisis and the part of new generation.
															</p>
														</div>
														<div className="testimonial-profile">
															<div className="pic">
																<img src="/images/profile1.png" alt=""/>
															</div>
															<h3 className="title">
																Kane Williamson
																<span className="post">Web Designer</span>
															</h3>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="swiper-slide">
											<div className="fl-client-slider-box">
												<div className="fl-client-profile-information">
													<div className="testimonial">
														<div className="testimonial-content">
															<p className="description">
																Consectetur adipiscing elit, sed do eiusmod tempor
                                                                incididunt ut labore et dolore magna aliqua. Quis ipsum
                                                                suspendisse ultrices gravida. Risus commodo viverra maecenas
                                                                accumsan lacus vel facilisis and the part of new generation.
															</p>
														</div>
														<div className="testimonial-profile">
															<div className="pic">
																<img src="/images/profile2.png" alt=""/>
															</div>
															<h3 className="title">
																Steve Samuel
																<span className="post">Web Designer</span>
															</h3>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="swiper-pagination fl-swiper-pagination"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
        <section className="e-features-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        {/* <!--=== Features Wrapper ===--> */}
                        <div className="e-features-wrapper">
                            {/* <!--=== Iconic Box Item ===--> style={{"enable-background:new 0 0 512 512" }}*/}
                            <div className="iconic-box-item ">
                                <div className="icon">
                                  <svg xmlns="http://www.w3.org/2000/svg" style={{ enableBackground: "new 0 0 512 512" }}  width="50" height="50" x="0" y="0" viewBox="0 0 512 512" xmlSpace="preserve" className=""><g><ellipse cx="187.06" cy="360.52" rx="40.45" ry="35.15" transform="rotate(-42.99 187.046 360.518)" fill="#000000" opacity="1" dataOriginal="#000000"></ellipse><ellipse cx="403.28" cy="360.52" rx="40.45" ry="35.15" transform="rotate(-42.99 403.285 360.528)" fill="#000000" opacity="1" dataOriginal="#000000"></ellipse><rect width="34.15" height="34.15" x="5.41" y="182.71" rx="17.08" fill="#000000" opacity="1" dataOriginal="#000000"></rect><path d="M346.48 356.94c6.07-30 34.41-53.84 64.87-53.84 29.33 0 50.47 22.11 49.89 50.54 31.72.83 40.55-40.94 40.55-40.94 2.67-11.68 6.66-34.45 10-56.8a37.76 37.76 0 0 0-2.43-20.42A350.18 350.18 0 0 0 479.42 180c-11-16.41-29.45-26.13-50.51-26.48-12.56-.2-24.89-.32-34.2-.32l-.08-.08c-1.2-20.08-15.84-35.46-36.39-37.3-13.37-1.19-66.33-2.06-91.75-2.06-10.1 0-24.59.14-39.25.38v-.06H50.86a17.07 17.07 0 0 0-17.08 17.08v.08a17 17 0 0 0 17 17h35.53a17 17 0 0 1 15.75 16.94v.09A17.08 17.08 0 0 1 85 182.4H66.78a17.07 17.07 0 0 0-17.07 17.07 17.07 17.07 0 0 0 17.07 17.08H85a17.08 17.08 0 0 1 17.08 17.08A17.08 17.08 0 0 1 85 250.71H16.84A17.08 17.08 0 0 0-.24 267.78a17.08 17.08 0 0 0 17.08 17.08H85a17.08 17.08 0 0 1 17.08 17.08A17.08 17.08 0 0 1 85 319H63.92a17.07 17.07 0 0 0-17.07 17.07 17.08 17.08 0 0 0 17.07 17.08l67.26-.05 5.59-13.93c11.45-21.12 34.23-36.08 58.35-36.08 30.47 0 52.11 23.86 49.73 53.88h101.62m-169.4-166.62h-22.92a.1.1 0 0 0-.09.08l-2.11 15a.08.08 0 0 0 .08.1h17.06a5.63 5.63 0 0 1 5.7 6.63 7.89 7.89 0 0 1-7.56 6.63h-17.08a.09.09 0 0 0-.09.07L147 240.65a7.89 7.89 0 0 1-7.56 6.63 5.62 5.62 0 0 1-5.69-6.63l7.94-56.52a8.36 8.36 0 0 1 8-7h29.23a5.62 5.62 0 0 1 5.69 6.63 7.87 7.87 0 0 1-7.54 6.59Zm61.26-8.72a15.55 15.55 0 0 1 4.8 8 27.57 27.57 0 0 1 .4 10.7 29.23 29.23 0 0 1-6.53 15.05 21 21 0 0 1-8.07 5.87.08.08 0 0 0 0 .11l5.68 16.39c1.53 4.4-2.4 9.53-7.29 9.53H227a5.59 5.59 0 0 1-5.44-3.74l-6.87-20a.11.11 0 0 0-.09-.05H200a.1.1 0 0 0-.09.07l-2.4 17.08a7.89 7.89 0 0 1-7.56 6.63 5.62 5.62 0 0 1-5.69-6.63l7.94-56.52a8.36 8.36 0 0 1 8-7h22.6s9.92-.31 15.53 4.51Zm62.2 1.66a7.36 7.36 0 0 1-7.06 6.19h-26.29a.1.1 0 0 0-.09.07L265 204.39a.08.08 0 0 0 .08.1h20.42a5.25 5.25 0 0 1 5.32 6.19 7.36 7.36 0 0 1-7.06 6.19h-20.43a.1.1 0 0 0-.09.07l-2.51 17.86a.1.1 0 0 0 .09.1h26.27a5.25 5.25 0 0 1 5.32 6.19 7.36 7.36 0 0 1-7.06 6.19h-32.6a6 6 0 0 1-6-7l7.89-56.12a8.36 8.36 0 0 1 8-7h32.59a5.25 5.25 0 0 1 5.3 6.13Zm54.61 0a7.36 7.36 0 0 1-7.06 6.19h-26.29a.1.1 0 0 0-.09.07l-2.08 14.84a.08.08 0 0 0 .08.1h20.42a5.25 5.25 0 0 1 5.32 6.19 7.36 7.36 0 0 1-7.06 6.19h-20.44a.1.1 0 0 0-.09.07l-2.51 17.86a.1.1 0 0 0 .09.1h26.27a5.25 5.25 0 0 1 5.32 6.19 7.36 7.36 0 0 1-7.06 6.19h-32.6a6 6 0 0 1-6-7l7.89-56.12a8.36 8.36 0 0 1 8-7h32.59a5.25 5.25 0 0 1 5.3 6.13Zm38-6.41c8.93 0 20.49.12 32.09.31 14.06.23 26.36 6.69 33.74 17.71a322.39 322.39 0 0 1 21.21 37.1c3.3 6.72-2.77 15.47-10.72 15.47h-85.25Z" fill="#000000" opacity="1" dataOriginal="#000000"></path><path d="M217.45 211.12h-15.8l3-21.64h15.79s11.59-.75 9.69 10.82c.05 0-1.28 10.82-12.68 10.82Z" fill="#000000" opacity="1" dataOriginal="#000000"></path></g></svg>
                                </div>
                                <div className="content">
                                    <h5>Free Shipping</h5>
                                    <p>You get your items delivered without any extra cost.</p>
                                </div>
                            </div>
                            {/* <!--=== Iconic Box Item ===--> style={{"enable-background:new 0 0 512 512" }}*/}
                            <div className="iconic-box-item">
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ enableBackground: "new 0 0 512 512" }}  width="50" height="50" x="0" y="0" viewBox="0 0 90 90" xmlSpace="preserve" className=""><g><g fillRule="evenodd" clipRule="evenodd"><path d="M46.024 12.131a31.3 31.3 0 0 0-18.437 5.256A31.31 31.31 0 0 0 14.925 34.67c-.557-.068-1.224-.038-2.016.186-2.957.84-5.18 3.262-6.18 5.396-1.298 2.781-1.845 6.46-1.268 10.256.573 3.785 2.172 6.905 4.172 8.842 2.006 1.938 4.271 2.568 6.521 2.095 3.35-.715 5.011-1.25 4.542-4.37l-2.27-15.13a26.604 26.604 0 0 1 11.786-20.636 26.588 26.588 0 0 1 30.984 1.016A26.599 26.599 0 0 1 71.571 41.98l-1.588 10.583A26.59 26.59 0 0 1 47.5 69.923h-6.766a3.145 3.145 0 0 0-3.152 3.15v1.662a3.145 3.145 0 0 0 3.152 3.151h8.531a3.14 3.14 0 0 0 3.145-3.15v-.87A31.408 31.408 0 0 0 71.114 60.72l2.733.725c2.224.577 4.516-.158 6.521-2.095 2-1.938 3.598-5.057 4.172-8.842.58-3.797.016-7.469-1.266-10.256-1.287-2.787-3.204-4.557-5.417-5.192-.927-.267-1.933-.365-2.796-.39a31.276 31.276 0 0 0-10.99-16.085 31.29 31.29 0 0 0-18.047-6.454z" fill="#000000" opacity="1" dataOriginal="#000000" className=""></path><path d="M56.01 39.35a4.092 4.092 0 0 1 4.087 4.088 4.095 4.095 0 0 1-4.088 4.088 4.093 4.093 0 0 1-4.094-4.088 4.091 4.091 0 0 1 4.094-4.089zm-11.01 0a4.088 4.088 0 1 1-4.09 4.089 4.086 4.086 0 0 1 4.09-4.09zm-11.007 0a4.089 4.089 0 1 1 0 8.176 4.089 4.089 0 0 1 0-8.177zM45 21.786c-11.99 0-21.652 9.344-21.652 21.651 0 5.911 2.235 11.135 5.876 14.968l-1.292 5.792c-.426 1.906.896 3.188 2.61 2.234l5.655-3.155A22.035 22.035 0 0 0 45 65.09c11.994 0 21.65-9.338 21.65-21.65 0-12.308-9.656-21.652-21.65-21.652z" fill="#000000" opacity="1" dataOriginal="#000000" className=""></path></g></g></svg>
                                </div>
                                <div className="content">
                                    <h5>Great Support 24/7</h5>
                                    <p>Our customer support team is available around the clock </p>
                                </div>
                            </div>
                            {/* <!--=== Iconic Box Item ===--> style={{"enable-background:new 0 0 512 512"}} */}
                            <div className="iconic-box-item">
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ enableBackground: "new 0 0 512 512" }}  width="40" height="40" x="0" y="0" viewBox="0 0 512 512" xmlSpace="preserve" className=""><g><path fillRule="evenodd" d="m340.64 161.21 31.55 18.23L256 246.5l-31.55-18.2 112.08-64.72zm-32.51-14-116.84 67.46c-.14.08-.26.17-.43.26l-3.03 1.76v38.89l11.96 6.92v-34.24h.03c0-2.83 1.47-5.61 4.11-7.14l120.22-69.39-11.91-6.89zm69.47 182.24c1.79-1.02 2.81-2.81 2.81-4.88v-130.9l-116.14 67.07v134.14zm-245.99-4.88c0 2.07 1.02 3.86 2.81 4.88l113.33 65.42V260.73l-31.44-18.14v34.19c0 4.56-3.69 8.25-8.25 8.25-1.79 0-3.43-.57-4.79-1.53l-27.81-16.04a8.246 8.246 0 0 1-4.14-7.14h-.03V216.6l-39.69-22.9v130.87zm121.58-210.59-113.33 65.45 39.77 22.96 2.98-1.73c.14-.08.31-.17.45-.26l112.73-65.08-36.99-21.34c-1.78-1.02-3.82-1.02-5.61 0zm183.89-39.03C390.73 28.6 326.73-.05 256-.05c-38.24 0-74.61 8.42-107.29 23.56C123.05 35.35 99.7 51.37 79.43 70.7c-2.47 2.35-6.41 2.32-8.82-.11l-30.33-30.3c-1.84-1.84-4.45-2.35-6.86-1.36s-3.91 3.23-3.91 5.84v98.05c0 3.46 2.83 6.29 6.32 6.29h98.05c2.61 0 4.82-1.47 5.81-3.88 1.02-2.41.48-5.05-1.36-6.89l-30.19-30.19c-1.25-1.25-1.87-2.78-1.84-4.56.03-1.79.71-3.29 1.98-4.51 16.78-15.79 36.14-28.91 57.4-38.75 27.41-12.67 58-19.73 90.31-19.73 59.5 0 113.36 24.09 152.33 63.07 37.79 37.79 61.6 89.55 63.01 146.86.08 3.03 2.58 5.47 5.61 5.47h29.42c1.59 0 2.92-.57 4.02-1.67 1.11-1.13 1.64-2.49 1.59-4.05-1.48-68.43-29.82-130.26-74.89-175.33zm39.11 287.94h-98.05c-2.61 0-4.85 1.47-5.84 3.88s-.48 5.05 1.39 6.89l30.16 30.19c1.28 1.25 1.9 2.81 1.87 4.56-.03 1.79-.71 3.29-2.01 4.51a216.178 216.178 0 0 1-57.37 38.75c-27.41 12.67-58.03 19.76-90.34 19.76-59.47 0-113.33-24.12-152.31-63.1-37.79-37.79-61.6-89.55-63.04-146.86-.06-3.03-2.55-5.47-5.61-5.47H5.61c-1.56 0-2.92.57-4 1.7-1.11 1.11-1.64 2.47-1.62 4.05 1.5 68.43 29.88 130.22 74.95 175.32C121.3 483.4 185.3 512.05 256 512.05c38.27 0 74.64-8.42 107.32-23.56 25.65-11.85 49.01-27.86 69.28-47.2 2.47-2.35 6.41-2.32 8.82.11l30.3 30.3c1.84 1.84 4.48 2.38 6.89 1.36 2.41-.99 3.91-3.23 3.91-5.84V369.2c-.01-3.47-2.84-6.31-6.33-6.31z" clipRule="evenodd" fill="#000000" opacity="1" dataOriginal="#000000" className=""></path></g></svg>
                                </div>
                                <div className="content">
                                    <h5>Return Available</h5>
                                    <p>Making it easy to return any items if you're not satisfied.</p>
                                </div>
                            </div>
                            {/* <!--=== Iconic Box Item ===--> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- partner section start --> */}
        <div className="px_section px_partner_section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 col-md-12"> 
                        <div className="e-heading-wrap e-heading-s2 mb-38 text-center ">
                            <h2 className="e-heading-title">Our Partners</h2>
                            <p className="e-heading-subtitle">Our 20,000+ trusted partners around the world</p>
                        </div>
                    </div>
                </div>
                <div className="MarqueeContainer">
                    <div className="marquee">
                        <div className="marquee__group">
                            <div className="marqu-imgdiv"> <img src="/images/partner1.png" alt="Angular Image"/>
                            </div>
                            <div className="marqu-imgdiv"> <img src="/images/partner2.png" alt="C Image"/></div>
                            <div className="marqu-imgdiv"><img src="/images/partner3.png" alt="C Image"/>
                            </div>
                            <div className="marqu-imgdiv"><img src="/images/partner4.png" alt="C Image"/>
                            </div>
                            <div className="marqu-imgdiv"><img src="/images/partner5.png" alt="CSS HTML Image"/>
                            </div>
                            <div className="marqu-imgdiv"><img src="/images/partner6.png" alt="CSS HTML Image"/>
                            </div>
                        </div>
                        <div aria-hidden="true" className="marquee__group" style={{marginLeft: "15px"}}>
                            <div className="marqu-imgdiv"><img src="/images/partner1.png" alt="CSS HTML Image"/>
                            </div>
                            <div className="marqu-imgdiv"><img src="/images/partner2.png" alt="Java Image"/>
                            </div>
                            <div className="marqu-imgdiv"><img src="/images/partner3.png" alt="JavaScript Image"/>
                            </div>
                            <div className="marqu-imgdiv"><img src="/images/partner4.png" alt="Kotlin Image"/>
                            </div>
                            <div className="marqu-imgdiv"><img src="/images/partner5.png" alt="Oracle Image"/>
                            </div>
                            <div className="marqu-imgdiv"><img src="/images/partner6.png" alt="PostSQL Image"/>
                            </div>
                        </div>
                    </div>
                    <div className="marquee marquee--borders" style={{ "--duration": "100s", marginTop: "0", paddingBlock: "0" }}>
                        <div className="marquee marquee--reverse">
                            <div className="marquee__group">
                                <div className="marqu-imgdiv"><img src="/images/partner1.png" alt="CSS HTML Image"/></div>
                                <div className="marqu-imgdiv"><img src="/images/partner2.png" alt="Java Image"/></div>
                                <div className="marqu-imgdiv"><img src="/images/partner3.png" alt="JavaScript Image"/></div>
                                <div className="marqu-imgdiv"><img src="/images/partner4.png" alt="Kotlin Image"/></div>
                                <div className="marqu-imgdiv"><img src="/images/partner5.png" alt="Oracle Image"/></div>
                                <div className="marqu-imgdiv"><img src="/images/partner6.png" alt="PostSQL Image"/></div>
                            </div>
                            <div aria-hidden="true" className="marquee__group" style={{marginLeft: "15px"}}>
                                <div className="marqu-imgdiv"><img src="/images/partner1.png" alt="CSS HTML Image"/></div>
                                <div className="marqu-imgdiv"><img src="/images/partner2.png" alt="Java Image"/></div>
                                <div className="marqu-imgdiv"><img src="/images/partner3.png" alt="JavaScript Image"/></div>
                                <div className="marqu-imgdiv"><img src="/images/partner4.png" alt="Kotlin Image"/></div>
                                <div className="marqu-imgdiv"><img src="/images/partner5.png" alt="Oracle Image"/></div>
                                <div className="marqu-imgdiv"><img src="/images/partner6.png" alt="PostSQL Image"/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- partner section end  -->
        <!-- Newsletter start --> */}
        <section className="e-newsletter-wrap e-newsletter-cloth">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12 order-sm-2 order-lg-1 order-md-2 order-2">
                        <div className="e-news-image">
                            <img src="/images/g-newsletter.png" alt="newsleeter-image"/>
                        </div>                        
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 order-sm-1 order-lg-2 order-md-1 order-1">
                        <div className="e-nl-wrap text-left">
                            <h2 className="e-nl-title">Subscribe Newsletter</h2>
                            <p className="e-nl-des">Subscibe and get 30% of on every products</p>
                            <form>
                                <div className="e-nl-box">
                                    <input type="text" placeholder="Enter Your Email Here..."/>
                                    <a href="javascript:void(0);" className="e-btn newsletter-btn">Subscribe Now </a>
                                </div>
                            </form>
                            <ul className="c-social-list justify-content-start">
                                <li>
                                    <a href="javascript:void(0);">
                                        <svg xmlnsXlink="http://www.w3.org/1999/xlink" width="8px" height="16px">
                                            <path fillRule="evenodd" fill="rgb(167, 171, 175)" d="M7.700,0.001 L5.781,-0.002 C3.625,-0.002 2.231,1.544 2.231,3.936 L2.231,5.752 L0.301,5.752 C0.134,5.752 -0.001,5.897 -0.001,6.078 L-0.001,8.709 C-0.001,8.889 0.134,9.035 0.301,9.035 L2.231,9.035 L2.231,15.673 C2.231,15.852 2.366,15.999 2.533,15.999 L5.050,15.999 C5.217,15.999 5.352,15.852 5.352,15.673 L5.352,9.035 L7.608,9.035 C7.775,9.035 7.910,8.889 7.910,8.709 L7.911,6.078 C7.911,5.992 7.879,5.909 7.823,5.847 C7.766,5.786 7.690,5.752 7.609,5.752 L5.352,5.752 L5.352,4.212 C5.352,3.473 5.515,3.098 6.406,3.098 L7.700,3.096 C7.866,3.096 8.001,2.950 8.001,2.770 L8.001,0.328 C8.001,0.147 7.866,0.002 7.700,0.001 L7.700,0.001 Z"></path>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="16px" x="0" y="0" viewBox="0 0 1226.37 1226.37"  className=""><g><path fill="rgb(167, 171, 175)" d="M727.348 519.284 1174.075 0h-105.86L680.322 450.887 370.513 0H13.185l468.492 681.821L13.185 1226.37h105.866l409.625-476.152 327.181 476.152h357.328L727.322 519.284zM582.35 687.828l-47.468-67.894-377.686-540.24H319.8l304.797 435.991 47.468 67.894 396.2 566.721H905.661L582.35 687.854z" opacity="1"></path></g></svg>
                                    </a>
                                </li>
                                <li>
                                  {/* style="enable-background:new 0 0 512 512" */}
                                    <a href="javascript:void(0);">
                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ enableBackground: "new 0 0 512 512" }}  width="15" height="15" x="0" y="0" viewBox="0 0 100 100"  xmlSpace="preserve" className=""><g><path d="M90 90V60.7c0-14.4-3.1-25.4-19.9-25.4-8.1 0-13.5 4.4-15.7 8.6h-.2v-7.3H38.3V90h16.6V63.5c0-7 1.3-13.7 9.9-13.7 8.5 0 8.6 7.9 8.6 14.1v26H90zM11.3 36.6h16.6V90H11.3zM19.6 10c-5.3 0-9.6 4.3-9.6 9.6s4.3 9.7 9.6 9.7 9.6-4.4 9.6-9.7-4.3-9.6-9.6-9.6z" fill="rgb(167, 171, 175)" opacity="1" dataOriginal="rgb(167, 171, 175)" className=""></path></g></svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="15px" height="16px">
                                            <path fillRule="evenodd" fill="rgb(167, 171, 175)" d="M12.814,2.324 C11.404,0.826 9.529,0.000 7.531,-0.001 C3.414,-0.001 0.064,3.556 0.062,7.927 C0.062,9.324 0.406,10.688 1.059,11.890 L-0.000,15.999 L3.959,14.897 C5.050,15.528 6.278,15.861 7.528,15.861 L7.531,15.861 C11.648,15.861 14.998,12.305 15.000,7.933 C15.001,5.815 14.224,3.822 12.814,2.324 L12.814,2.324 ZM7.531,14.523 L7.529,14.523 C6.415,14.522 5.322,14.204 4.369,13.604 L4.143,13.461 L1.793,14.115 L2.420,11.683 L2.272,11.434 C1.651,10.385 1.323,9.173 1.323,7.927 C1.325,4.294 4.110,1.337 7.534,1.337 C9.192,1.338 10.750,2.025 11.922,3.271 C13.094,4.517 13.739,6.172 13.739,7.933 C13.737,11.566 10.953,14.523 7.531,14.523 L7.531,14.523 ZM10.936,9.587 C10.750,9.488 9.832,9.008 9.661,8.943 C9.490,8.876 9.365,8.843 9.241,9.042 C9.117,9.240 8.759,9.686 8.650,9.818 C8.541,9.950 8.433,9.967 8.246,9.868 C8.059,9.769 7.458,9.559 6.745,8.885 C6.190,8.359 5.816,7.710 5.707,7.513 C5.598,7.314 5.706,7.217 5.789,7.108 C5.991,6.842 6.193,6.563 6.255,6.430 C6.318,6.298 6.287,6.183 6.240,6.084 C6.193,5.984 5.820,5.009 5.664,4.612 C5.513,4.226 5.359,4.278 5.245,4.272 C5.136,4.266 5.011,4.265 4.887,4.265 C4.763,4.265 4.560,4.315 4.389,4.513 C4.218,4.712 3.736,5.191 3.736,6.166 C3.736,7.141 4.405,8.083 4.498,8.216 C4.591,8.347 5.814,10.349 7.686,11.206 C8.131,11.411 8.479,11.532 8.750,11.624 C9.197,11.774 9.604,11.753 9.925,11.703 C10.284,11.646 11.029,11.223 11.185,10.760 C11.341,10.297 11.341,9.901 11.294,9.818 C11.247,9.736 11.123,9.686 10.936,9.587 L10.936,9.587 Z"></path>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        </div>
    </>
  );
}
