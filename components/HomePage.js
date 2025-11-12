export default function HomePage() {
  return (
    <>
      {/* Top Ads */}
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

      {/* Client Section */}
      {/* ... and continue converting the rest with same rules ... */}
    </>
  );
}
