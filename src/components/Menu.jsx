import React from 'react'
import {data} from '../restApi.json'
const Menu = () => {
  return (
    <>
      <section className='menu' id='menu'>
        <div className="container">
            <div className="heading_section">
                <h1 data-aos="fade-up" className="heading">POPULAR DISHES</h1>
                <p data-aos="fade-up" data-aos-delay="400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, iusto dolorem! Voluptatibus ipsum nam mollitia architecto. Soluta pariatur eius et recusandae veritatis. Quasi, et molestias!</p>
            </div>
            <div className="dishes_container">
                {
                    data[0].dishes.map(element => (
                        <div  className="card" key={element.id}>
                                <img  data-aos="zoom-in" src={element.image} alt={element.title} />
                                <h3 data-aos="fade-up" data-aos-delay="400" >{element.title}</h3>
                                <button data-aos="fade-right">{element.category}</button>
                        </div>
                    ))
                }   
            </div>
        </div>
      </section>
    </>
  )
}

export default Menu
