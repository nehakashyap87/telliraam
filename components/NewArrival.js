import React from 'react'
import { ProductImage } from './ProductImage'

const NewArrival = () => {
  return (
    <>
      {/* <!-- New Arrivals start --> */}
        <section className="e-newarivles-wrap e-newarivles-fur e-gallery ">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="e-heading-wrap e-heading-s2 mb-38 ">
                            <p className="e-heading-subtitle">NEW PRODUCTS</p>
                            <h2 className="e-heading-title">Top Savers Today 20% OFF</h2>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 d-flex justify-content-end">
                        <div className="gallery-nav text-center">
                            <ul>
                                <li><a data-filter="*" className="gallery-active">all</a></li>
                                <li><a data-filter=".mens">foodie</a></li>
                                <li><a data-filter=".womens">fruits</a></li>
                                <li><a data-filter=".baby">healthy</a></li>
                            </ul>
                        </div>
                    </div>
                   
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="new-arrivals-galry text-center">
                          
                            <div className="gallery-container">
                                <div className="gallery-grid">
                                    <ProductImage/>
                                    <ProductImage/> <ProductImage/> <ProductImage/> <ProductImage/>
                                     
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default NewArrival