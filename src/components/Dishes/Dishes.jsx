import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import bamboo from '../../img/chinwa-bamboo-bg.png';

export default function Dishes() {
  let { categories } = useParams();
  const [dish, setDish] = useState([])
  const getData = async function () {
    const { data } = await axios.get(`http://localhost:5000/dishes?category=${categories}`)
    setDish(data.data);
    console.log(data.data);
  }
  useEffect(() => {
    getData();
  }, [])
  return (<>
    <section  className={`menuBg`}>
      <div className="container">
        <div className="row mt-5">

          {dish.map((e, index) => (
            <div className="col-md-6 text-center text-white  my-3" key={index}>
              <div className=''>
                <div className='position-relative'>
                  <img src={bamboo} className='w-75' alt="" />
                  <img src={e.dishImg} className='w-50 position-absolute start-50 top-25 pt-3 translate-middle-x' alt="" />
                </div>
                <h4 className='py-3 text'>{e.disheName}</h4>
                <p className='pb-3 fs-5'>{e.ingredients}</p>
                <p className='bg-danger w-25 m-auto rounded-3 fs-4 fw-bold px-4 py-2 text-white '  >EG.{e.price}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  </>
  )
}
