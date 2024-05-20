import React from 'react'
import style from './style.module.css'
export default function Footer() {
    return (
        <>
            <section id='Footer' className=''>
                <div id="firstDiv" className={`pt-3 ${style.bgGray}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 d-flex justify-content-start align-items-center  overflow-hidden p-0">
                                <div className=''>
                                    <div className={`p-1  ${style.pContainer}`}>
                                        <p className={`m-0 p-0 text-center ${style.pacifico_regular}`}>SO CHINSES</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 ">
                                <div className="row text-white   ">
                                    <div className="col-md-6 ps-2 d-flex justify-content-center  ">
                                        <div className=''>
                                            <p className='px-0'>Appetizers</p>
                                            <p>Salads</p>
                                            <p>Shrimp</p>
                                            <p>Rice</p>
                                            <p>Soup</p>
                                            <p>Noodles</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6  d-flex justify-content-center">
                                        <div>
                                            <p>Chicken</p>
                                            <p>Beef</p>
                                            <p>Ramen</p>
                                            <p>Bao</p>
                                            <p>Desserts</p>
                                            <p>Drinks</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 text-white d-flex justify-content-evenly align-items-center ">
                                <i className="fa-brands fa-instagram fa-2x"></i>
                                <i className="fa-brands fa-facebook-f fa-2x"></i>
                                <i className="fa-brands fa-twitter fa-2x"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='secondDiv' className='bg-dark py-3 m-0 text-white'>
                    <p className='m-0  text-center '>© Copyright 2019 <span className='fw-bold  text-danger '>CHINWA</span>. All Rights Reserved.</p>
                </div>
            </section>
        </>
    )
}
