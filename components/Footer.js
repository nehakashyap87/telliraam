import React from 'react'

const Footer = () => {
  return (
    <>
     {/* <!-- Footer start --> */}
        <footer className="e-footer-wrap e-footer-cloth">
            <div className="container">
                <div className="e-footer-box">
                    <div className="row">
                        <div className="col-md-4 col-lg-3  col-sm-6">
                            <div className="e-footer-inner">
                                <a href="index.html"><img src="images/Logo-8.png" alt="logo" className="img-fluid"/></a>
                                <p className="efoot-about">Grocery trends are em ipsum dolor sieit amet, consecitetur
                                    adipisicing elit sed do eiusmod.</p>
                                <h2 className="efoot-heading">Payment Options</h2>
                                <ul className="efoot-payment">
                                    <li><a href="shipping_cart.html"><img src="/images/payment1.png" alt="payment" className="img-fluid"/></a></li>
                                    <li><a href="shipping_cart.html"><img src="/images/payment2.png" alt="payment" className="img-fluid"/></a></li>
                                    <li><a href="shipping_cart.html"><img src="/images/payment3.png" alt="payment" className="img-fluid"/></a></li>
                                    <li><a href="shipping_cart.html"><img src="/images/payment4.png" alt="payment" className="img-fluid"/></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3  col-sm-6">
                            <div className="e-footer-inner">
                                <h2 className="efoot-heading">Quick Links</h2>
                                <ul className="efoot-list">
                                    <li><a href="product_category.html">Our product</a></li>
                                    <li><a href="contact.html">Store Locations</a></li>
                                    <li><a href="blog_single.html">Latest News</a></li>
                                    <li><a href="product_category_sidebar.html">shop</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3  col-sm-6">
                            <div className="e-footer-inner">
                                <h2 className="efoot-heading">Useful Links</h2>
                                <ul className="efoot-list">
                                    <li><a href="index.html">home</a></li>
                                    <li><a href="privacy_policy.html">Privacy Policy</a></li>
                                    <li><a href="terms.html">Terms & Conditions</a></li>
                                    <li><a href="contact.html">Contact Us</a></li>
                                    <li><a href="blog_category.html">Blog Category</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3  col-sm-6">
                            <div className="e-footer-inner">
                                <h2 className="efoot-heading">Our Stores</h2>
                                <ul className="efoot-list">
                                    <li><a href="product_category_sidebar.html">My account</a></li>
                                    <li><a href="checkout.html"> Checkout</a></li>
                                    <li><a href="product_category_sidebar.html"> Wishlist</a></li>
                                    <li><a href="product_category_sidebar.html"> Shop</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- GO To Top --> */}
            <a href="/" id="scroll">
                <svg xmlnsXlink="http://www.w3.org/1999/xlink" width="15px" height="24px">
                    <path fillRule="evenodd" fill="rgb(255, 255, 255)" d="M6.638,0.361 C6.638,0.361 6.637,0.361 6.637,0.362 L0.357,6.757 C-0.114,7.237 -0.112,8.012 0.361,8.489 C0.834,8.966 1.599,8.964 2.069,8.485 L6.285,4.191 L6.285,22.770 C6.285,23.446 6.826,23.994 7.493,23.994 C8.160,23.994 8.701,23.446 8.701,22.770 L8.701,4.191 L12.917,8.485 C13.387,8.964 14.152,8.966 14.625,8.489 C15.098,8.012 15.099,7.237 14.629,6.757 L8.349,0.362 C8.349,0.361 8.348,0.361 8.348,0.361 C7.876,-0.119 7.109,-0.117 6.638,0.361 L6.638,0.361 Z"></path>
                </svg> 
            </a>
        </footer>
        {/* <!-- Bottom Footer start --> */}
        <div className="e-bfooter-wrap e-bfooter-cloth">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <p className="e-footer-text text-center text-lg-left">Copyright © 2025 GroceryHut. All Right
                            Reserved.</p>
                    </div>
                    <div className="col-lg-6">
                        <ul className="e-bfooter-list">
                            <li><a href="terms.html">Legal Information</a></li>
                            <li><a href="privacy_policy.html">Privacy policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer