import React from 'react'
import style from './style.module.css'
import rice from '../../img/chinwa-table.png'
import flyBy from '../../img/chinwa-flyby-green1.png'
import flyBy2 from '../../img/chinwa-flyby-green2.png'
import About from '../About/About'
import ChinwaMenu from '../ChinwaMenu/ChinwaMenu'
import ContactUs from '../ContactUs/ContactUs'





export default function Home() {
  return (<>
    <div className={`overflow-hidden ${style.bg_home}`}>
      <div className="container d-flex justify-content-center  h-100  align-items-end   ">
        <div className='position-relative   '>
          <div className='d-flex justify-content-between px-5  position-absolute start-0  end-0 bottom-50 '>
            <img src={flyBy} className='fixed-width' alt="" />
            <img src={flyBy2} className={`fixed-width ${style.move} `} alt="" />
          </div>
          <div className=''>
            <img src={rice} className="w-100 " alt="" />
          </div>
        </div>
      </div>
    </div>
    <div className={style.bg_order} >
      <div className="container py-4">
        <div className="row align-items-center  ">
          <div className="col-md-2   pt-4">
            <div className={`m-auto  ${style.iconRounde}`}>
              <i className="fa-regular fa-thumbs-up text-white fa-2x  "></i>
            </div>
          </div>
          <div className="col-md-7  pt-4">
            <div className='text-white text-lg-start text-md-center  '>
              <p className='m-0 mb-md-2'>Order now!</p>
              <p className='m-0 mb-md-0'>Order your favorite Chinese food now. We are available on many delivery apps. & through 0551055933</p>
            </div>

          </div>
          <div className="col-md-3  text-center pt-4">
            <button className={` btn p-3 fs-6 fw-bold ${style.buttonColor} ${style.test}`}>+20 111 5749 329</button>
          </div>
        </div>
      </div>
    </div>
    <About />
    <ChinwaMenu />
    <ContactUs />

  </>
  )
}
