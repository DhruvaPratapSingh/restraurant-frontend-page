import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 data-aos="fade-up" className="heading">ABOUT US</h1>
              <p data-aos="fade-up" data-aos-duration="500">The only thing we are serious about is food.</p>
            </div>
            <p className="mid" data-aos="fade-right" >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Provident possimus optio adipisci dolores impedit illum iusto
              perferendis, laudantium quod accusamus consequuntur consectetur,
              tempore nulla error iure reiciendis dolorem assumenda.
              Necessitatibus fugit asperiores totam rem esse exercitationem
              iusto ipsum qui dolore ex, accusantium repellat mollitia
              repellendus.
            </p>
            <Link data-aos="fade-up" data-aos-delay="300" to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img data-aos="zoom-in" src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
