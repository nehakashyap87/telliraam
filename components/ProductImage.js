import React from 'react'

export const ProductImage = () => {
  return (
    <>
     <div className="grid-item chairs furnitures mens">
                                        <div className="na-inner-grid c-product-box">
                                            <div className="na-top-sec text-center">
                                                <div className="na-imgbox">
                                                    <div className="na-mainimg01">
                                                        <img src="/images/in8.png" alt="product-img" className="img-fluid"/>
                                                    </div>
                                                    <div className="hover-content">
                                                        <a href="#" className="icon-btn" tabIndex="0"><i className="fa fa-heart"></i></a>
                                                        <a href="assets/images/prod.png " className="img-popup icon-btn" tabIndex="0"><i className="fa fa-eye"></i></a>
                                                    </div>
                                                    <div className="cart-button">
                                                        <a href="cart.html" className="cart-btn" tabIndex="0"><i className="fa fa-shopping-basket"></i> <span className="text">Add To Cart</span></a>
                                                    </div>
                                                    <div className="prod-discount">10% Off</div>
                                                </div>
                                            </div>
                                            <div className="na-top-heading na-prod-card">
                                                <div>
                                                    <ul className="rating">
                                                        <li className="fa fa-star"></li>
                                                        <li className="fa fa-star"></li>
                                                        <li className="fa fa-star"></li>
                                                        <li className="fa fa-star"></li>
                                                        <li className="fa fa-star"></li>
                                                    </ul>
                                                    <a href="product_details.html" className="na-name">Organic Vegitable</a>
                                                </div>
                                                <h2 className="e-price"> <del>$100</del>$60</h2>
                                            </div>
                                         
                                        </div>
                                    </div>
    </>
  )
}
