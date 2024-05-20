import React from 'react'
import style from './style.module.css'
import resturantImg from '../../img/Chinwa-Restaurant-.jpg'
import { Link } from 'react-router-dom'
export default function About() {
    return (<>

        <section id='About' className={` d-flex justify-content-center align-items-center ${style.bgAbout}`} >
            <div className=" container w-100  py-4 ">
                <div className="row">
                    <div className="col-md-6 ">
                        <div className='text-white text-center'>
                            <h2 className='h1  '> About Chinwa </h2>
                            <div className='d-flex justify-content-center align-items-center text-center mt-4  '>
                                <div className={style.line}></div>
                                <i className="fa-solid fa-star px-3"></i>
                                <div className={style.line}></div>
                            </div>


                            <p className='mt-4'>Food is very much a way of life in Chinese culture. In fact, food is such a communal affair for most Chinese people that the greeting when meeting one another tends not to be “how are you?”, but “have you eaten?” Even in this day and age of changing lifestyles and attitudes, this greeting holds true. For this reason, Chinwa constantly strives to reconnect people to the culture of Chinese food through preserving traditional recipes and dishes.</p>

                        </div>
                    </div>
                    <div className="col-md-6 ">
                        <div>
                            <Link to={`/dishes`}  >
                                <img src={resturantImg} className='w-100 rounded-1' alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}
