import React from "react";
import { data } from "../restApi.json";
const Team = () => {
  return (
    <section className="team" id="team">
      <div className="container">
        <div  className="heading_section">
          <h1 data-aos="fade-up" className="heading">OUR TEAM</h1>
          <p data-aos="fade-up" data-aos-delay="300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            fugit dicta, ipsum impedit quam laboriosam quas doloremque quia
            perferendis laborum.
          </p>
        </div>
        <div className="team_container">
          {data[0].team.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img data-aos="zoom-in" src={element.image} alt={element.name} />
                <h3 data-aos="fade-up">{element.name}</h3>
                <p data-aos="fade-up">{element.designation}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
