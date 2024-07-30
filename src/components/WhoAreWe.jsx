import React from 'react'
import {data} from '../restApi.json'

const WhoAreWe = () => {
  return (
    <>
      <section className='who_are_we' id='who_are_we'>
        <div data-aos="fade-up" className="container">
          <div data-aos="fade-right" data-aos-delay="600" className="text_banner">
            {
              data[0].who_we_are.slice(0,2).map(element=>(
                <div className="card" key={element.id}>
                  <h1 className='heading' style={{fontWeight: "300"}}>{element.number}</h1>
                  <p>{element.title}</p>
                </div>
              ))
            }
          </div>
          <div className="image_banner">
            <img data-aos="zoom-in" className='gradient_bg' src="center.svg" alt="gradientBg" />
            <img data-aos="zoom-in" src="whoweare.png" alt="food" />
          </div>
          <div data-aos="fade-left" data-aos-delay="600" className="text_banner">
            {
              data[0].who_we_are.slice(2).map(element=>(
                <div className="card" key={element.id}>
                  <h1 className='heading' style={{fontWeight: "300"}}>{element.number}</h1>
                  <p>{element.title}</p>
                </div>
              ))
            }
          </div>
        </div>
        </section> 
    </>
  )
}

export default WhoAreWe
