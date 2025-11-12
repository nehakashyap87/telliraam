import React from "react";

const ProductImage = ({ img, name, price, oldPrice, discount, rating, filter }) => (
    <div className={`grid-item ${filter}`}>
        <div className="na-inner-grid c-product-box">
            <div className="na-top-sec text-center">
                <div className="na-imgbox">
                    <div className="na-mainimg01">
                        <img src={img} alt="product-img" className="img-fluid" />
                    </div>
                    {/* <div className="hover-content">
                        <a href="#" className="icon-btn" tabIndex="0"><i className="fa fa-heart"></i></a>
                        <a href={img} className="img-popup icon-btn" tabIndex="0"><i className="fa fa-eye"></i></a>
                    </div> */}
                    <div className="cart-button">
                        <a href="cart.html" className="cart-btn" tabIndex={0}>
                            <i className="fa fa-shopping-basket" /> <span className="text">Add To Cart</span>
                        </a>
                    </div>
                    <div className="prod-discount">{discount}</div>
                </div>
            </div>
            <div className="na-top-heading na-prod-card">
                <div>
                    <ul className="rating">
                        {[...Array(rating)].map((_, i) => (
                            <li className="fa fa-star" key={i} />
                        ))}
                    </ul>
                    <a href="product_details.html" className="na-name">
                        {name}
                    </a>
                </div>
                <h2 className="e-price">
                    <del>${oldPrice}</del>${price}
                </h2>
            </div>
        </div>
    </div>
);

export default ProductImage;
