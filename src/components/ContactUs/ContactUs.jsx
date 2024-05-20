import React from 'react'
import style from './style.module.css'

export default function ContactUs() {
    return (<>
<section id='ContactUs' className={`  ${style.contactBG}`}>
            <div className="container pt-5 ">
                <div className="row  py-4">
                    <div className="col-md-5 ">
                        <div className={` ${style.darkbg} `}>
                            <div className=' py-4 row '>
                                <div className="col-md-4 d-flex justify-content-end my-5 ">
                                    <div className="">
                                        <div className={`${style.iconRounde}  `}>
                                            <i className="fa-2x  fa-solid fa-location-dot fa-2x  text-dark "></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8 my-5">
                                    <div className='text-white '>
                                        <h4 className='m-0 p-0'>ADDRESS</h4>
                                        <p className={style.textgray}>Al Urubah Square</p>
                                        <button className={`${style.btn} btn btn-outline-danger text-danger  `}>
                                            <i className=" fa-solid fa-location-dot fa-fw me-2"></i>
                                            Get Location
                                        </button>
                                    </div>
                                </div>

                                <div className="col-md-4 d-flex  justify-content-end  my-5">
                                    <div className="">
                                        <div className={`${style.iconRounde}  `}>

                                            <i className="fa-2x  fa-solid fa-clock"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8 my-5">
                                    <div className='text-white '>
                                        <h4 className='m-0 p-0'>WORKING TIMES</h4>
                                        <p className={style.textgray}>All week: 1:00 PM - 1:00 AM</p>

                                    </div>
                                </div>

                                <div className="col-md-4 d-flex  justify-content-end  my-5">
                                    <div className="">
                                        <div className={`${style.iconRounde}  `}>

                                            <i className="fa-2x  fa-solid fa-headset"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8 my-5">
                                    <div className='text-white '>
                                        <h4 className='m-0 p-0'>CUSTOMER SUPPORT</h4>
                                        <p className={style.textgray}>Tel: 0551055933</p>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6  offset-lg-1 pt-5  ">
                        <h1 className='fw-bold fa-4x ps-1  text-white'>Message Us</h1>
                        <p className='text-white fw-bold'>Thank you for visiting Chinwa! Please feel free to complete the form below, either you
                            have an inquiry or a suggestion, we’d love to hear from you!</p>
                        <form action="" className=''>
                        <div className='d-flex text-white '>
                        <input type="text" placeholder='Your name *' className='  form-control me-3  bg-transparent ' />
                         <input type="number" placeholder='Your phone number *' className='form-control  bg-transparent ' />
                        </div>
                        <input type="email" placeholder='Your email ' className='  form-control  bg-transparent mt-3' />
                         <textarea placeholder='Your message ' className=' form-control  bg-transparent mt-3' cols={12} rows={9}></textarea>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        

    </>)
}
