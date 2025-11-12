import Image from 'next/image'
import React from 'react'

const Loader = () => {
  return (
    <>
         {/* <!-- Preloader Box --> */}
        <div className="preloader-wrapper preloader-active preloader-open">
            <div className="preloader-holder">
                <div className="preloader d-flex justify-content-center align-items-center h-100">
                    {/* <!-- <span></span>
                    <span></span>
                    <span></span> --> */}
                    <Image src="/images/loader-%281%29.gif" alt=""/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Loader