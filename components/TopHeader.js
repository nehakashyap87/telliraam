import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const TopHeader = () => {
    const [searchOpen, setSearchOpen] = useState(false)

    const handleSearchClick = () => {
        setSearchOpen(true)
    }

    const handleSearchClose = () => {
        setSearchOpen(false)
    }

    return (
        <>
            {/* <!-- Search Box --> */}
            <div className={searchOpen ? "search-main-wrap show" : "search-main-wrap"}>
                <div className="search-inner">
                    <p  className="c-search-close" onClick={handleSearchClose}>
                        <svg viewBox="0 0 413.348 413.348" xmlns="http://www.w3.org/2000/svg">
                            <path d="m413.348 24.354-24.354-24.354-182.32 182.32-182.32-182.32-24.354 24.354 182.32 182.32-182.32 182.32 24.354 24.354 182.32-182.32 182.32 182.32 24.354-24.354-182.32-182.32z"></path>
                        </svg>
                    </p>
                    <div className="search-box">
                        <form>
                            <input type="text" placeholder="Search here..." />
                            <button type="submit">
                                <svg xmlnsXlink="http://www.w3.org/1999/xlink" width="17px" height="17px">
                                    <path fillRule="evenodd" fill="rgb(255, 255, 255)" d="M16.337,15.218 C15.846,14.710 15.347,14.210 14.848,13.711 L12.326,11.190 C14.647,7.813 13.433,3.788 10.926,1.947 C8.249,-0.020 4.631,0.233 2.322,2.546 C0.010,4.862 -0.267,8.510 1.664,11.217 C2.621,12.558 4.223,13.526 5.949,13.805 C7.163,14.001 8.993,13.951 10.900,12.633 L10.981,12.724 C11.161,12.925 11.344,13.131 11.537,13.326 C12.605,14.410 13.674,15.490 14.755,16.559 C14.969,16.769 15.226,16.921 15.462,16.974 C15.534,16.991 15.604,16.999 15.674,16.999 C16.017,16.999 16.324,16.804 16.522,16.452 C16.757,16.034 16.690,15.583 16.337,15.218 ZM10.177,4.051 C11.029,4.910 11.496,6.055 11.495,7.273 C11.493,8.489 11.019,9.630 10.162,10.488 C9.308,11.344 8.173,11.815 6.967,11.815 C6.964,11.815 6.961,11.815 6.958,11.815 C5.751,11.813 4.610,11.331 3.748,10.457 C2.891,9.590 2.425,8.452 2.436,7.255 C2.457,4.709 4.449,2.717 6.972,2.717 C6.974,2.717 6.977,2.717 6.979,2.717 C8.189,2.718 9.325,3.192 10.177,4.051 Z"></path>
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            {/* <!-- Header Start --> */}
            <div className="header-main-wrapper header-style1 mt-2">
                {/* <div className="header-top-wrapper">
                    <div className="hs-left-logo">
                        <a href="index.html"><img src="/images/teliram-logo.webp" width={"150"} height={"50"} alt="logo" className="img-fluid" /></a>
                    </div>
                    <div className="ht-right">
                        <div className="ht-right_info">
                            <ul className="ht-info-list">

                                <li><a href="my_account.html"><i className="fa fa-user-circle" aria-hidden="true"></i>My Account</a>
                                </li>
                                <li>
                                    <a href="/" data-bs-toggle="modal" data-bs-target="#register"><i className="fa fa-sign-in" aria-hidden="true"></i>Register </a>
                                    or
                                    <a href="/" data-bs-toggle="modal" data-bs-target="#login">Sign in</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div> */}
                <div className="header-sticky-wrapper">
                    <div className="hs-medium custom-scroll">
                        <div className="nav-items main-menu-wraper">
                            <ul className="menu-list d-xl-flex">
                                <li>
                                    <Link href="/" className="hs-mobile-logo">
                                        <Image src="/images/teliram-logo.webp" width={"150"} height={"50"} alt="logo" className="img-fluid" />
                                    </Link>
                                    <p className="menu-btn c-toggle-btn sidebar-toggle">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </p>
                                </li>
                                <li>
                                    <div className="hs-left-logo">
                                        <a href="/"><img src="/images/teliram-logo.webp" width={"100"} height={"50"} alt="logo" className="img-fluid" /></a>
                                    </div>
                                </li>
                                <li className="position-relative">
                                    <a href="index.html">Home</a>
                                </li>
                                <li className="position-relative">
                                    <a href="index.html">About US</a>
                                </li>
                                <li className="position-relative">
                                    <a href="index.html">Shop</a>
                                </li>
                                <li className="position-relative">
                                    <a href="index.html">Blog</a>
                                </li>
                                <li className="position-relative">
                                    <a href="index.html">Contact US</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="hs-right">
                        <div className="hs-search-cart ">
                            <ul className="hs-search-cart-list">
                                <li className="hs-search-btn c-search-btn" onClick={handleSearchClick}>
                                        <svg xmlnsXlink="http://www.w3.org/1999/xlink" width="17px" height="17px">
                                            <path fillRule="evenodd" fill="#ffffff" d="M16.337,15.218 C15.846,14.710 15.347,14.210 14.848,13.711 L12.326,11.190 C14.647,7.813 13.433,3.788 10.926,1.947 C8.249,-0.020 4.631,0.233 2.322,2.546 C0.010,4.862 -0.267,8.510 1.664,11.217 C2.621,12.558 4.223,13.526 5.949,13.805 C7.163,14.001 8.993,13.951 10.900,12.633 L10.981,12.724 C11.161,12.925 11.344,13.131 11.537,13.326 C12.605,14.410 13.674,15.490 14.755,16.559 C14.969,16.769 15.226,16.921 15.462,16.974 C15.534,16.991 15.604,16.999 15.674,16.999 C16.017,16.999 16.324,16.804 16.522,16.452 C16.757,16.034 16.690,15.583 16.337,15.218 ZM10.177,4.051 C11.029,4.910 11.496,6.055 11.495,7.273 C11.493,8.489 11.019,9.630 10.162,10.488 C9.308,11.344 8.173,11.815 6.967,11.815 C6.964,11.815 6.961,11.815 6.958,11.815 C5.751,11.813 4.610,11.331 3.748,10.457 C2.891,9.590 2.425,8.452 2.436,7.255 C2.457,4.709 4.449,2.717 6.972,2.717 C6.974,2.717 6.977,2.717 6.979,2.717 C8.189,2.718 9.325,3.192 10.177,4.051 Z"></path>
                                        </svg>
                                </li>
                                <li className="hs-user-box">
                                    <a href="/">
                                        <div className="hs-cartbox-inner">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#ffffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#ffffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M23 20.9999V18.9999C22.9993 18.1136 22.7044 17.2527 22.1614 16.5522C21.6184 15.8517 20.8581 15.3515 20 15.1299" stroke="#FCB300" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M16 3.12988C16.8604 3.35018 17.623 3.85058 18.1676 4.55219C18.7122 5.2538 19.0078 6.11671 19.0078 7.00488C19.0078 7.89305 18.7122 8.75596 18.1676 9.45757C17.623 10.1592 16.8604 10.6596 16 10.8799" stroke="#FCB300" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                            <span className="text-white">My Account</span>

                                        </div>
                                    </a>
                                </li>
                                <li className="hs-cart-box cmn-cart-tgl">
                                    <a href="/">
                                        <div className="hs-cartbox-inner">
                                            <svg xmlnsXlink="http://www.w3.org/1999/xlink" width="22px" height="20px">
                                                <path fillRule="evenodd" fill="#ffffff" d="M18.692,2.761 C18.200,1.488 17.025,0.666 15.700,0.666 L15.512,0.666 L15.512,0.666 C15.512,0.298 15.223,-0.001 14.867,-0.001 L7.133,-0.001 C6.777,-0.001 6.488,0.298 6.488,0.666 L6.488,0.666 L6.300,0.666 C4.974,0.666 3.800,1.488 3.308,2.761 L1.239,7.999 L-0.000,7.999 L-0.000,9.333 L0.927,9.333 C1.223,9.333 1.480,9.540 1.553,9.838 L3.685,18.485 C3.901,19.376 4.672,19.999 5.561,19.999 L16.439,19.999 C17.328,19.999 18.142,19.376 18.358,18.484 L20.447,9.838 C20.520,9.540 20.776,9.333 21.073,9.333 L22.000,9.333 L22.000,7.999 L20.761,7.999 L18.692,2.761 ZM7.777,17.333 L6.488,17.333 L6.488,10.666 L7.777,10.666 L7.777,17.333 ZM11.645,17.333 L10.355,17.333 L10.355,10.666 L11.645,10.666 L11.645,17.333 ZM15.512,17.333 L14.223,17.333 L14.223,10.666 L15.512,10.666 L15.512,17.333 ZM4.505,3.256 C4.800,2.493 5.505,1.999 6.300,1.999 L6.488,1.999 L6.488,1.999 C6.488,2.368 6.777,2.666 7.133,2.666 L14.867,2.666 C15.223,2.666 15.512,2.368 15.512,1.999 L15.512,1.999 L15.700,1.999 C16.495,1.999 17.200,2.493 17.495,3.256 L19.372,7.999 L2.628,7.999 L4.505,3.256 Z"></path>
                                            </svg>
                                            <span className="hs-cart-circle">05</span>
                                        </div>
                                        <span className="hs-cart-value">$512</span>
                                    </a>
                                </li>
                                <li className="menu-btn c-toggle-btn">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bg-overlay sidebar-overlay c-toggle-btn"></div>
            </div>
        </>
    )
}

export default TopHeader