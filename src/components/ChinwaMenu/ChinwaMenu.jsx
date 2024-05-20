import React from 'react';
import style from './style.module.css';
import bamboo from '../../img/chinwa-bamboo-bg.png';
import APPETIZERS from '../../img/chinwa-Appetizers.png';
import SALADS from '../../img/Chinwa-Salads.png';
import SHRIMP from '../../img/Chinwa-Shrimp.png';
import RICE from '../../img/Chinwa-Rice.png';
import NOODLES from '../../img/Chinwa-Noodles.png';
import { Link } from 'react-router-dom'

export default function ChinwaMenu() {
  const arrImg = [
    { img: APPETIZERS, categories: "Appetizers" },
    { img: SHRIMP, categories: "Shrimp" },
    { img: SALADS, categories: "Salads" },
    { img: RICE, categories: "Rice" },
    { img: NOODLES, categories: "Noodles" },
  ];

  return (
    <section id="Menu" className={`${style.menuBg}`}>
      <div>
        <div className="container">
          <div className="row">
            {arrImg.map((e, index) => (
              <div className="col-md-6 text-center text-white" key={index}>
                <div>
                  <h4 className='my-5'>{e.categories}</h4>
                  <div className='position-relative'>
                    <img src={bamboo} className='w-75' alt="" />
                    <img src={e.img} className='w-50 position-absolute start-50 top-25 pt-3 translate-middle-x' alt="" />
                  </div>
                  <Link to={`/dishes/${e.categories}`}  >
                    <button className='btn btn-outline-danger text-white border-white py-2 '>{e.categories} menue</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
