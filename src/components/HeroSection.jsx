import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
      <Navbar />
      <div className="container">
        <div className="banner">
          <div data-aos="fade-up" data-aos-delay="300"  className="largeBox">
            <h1 className="title">Delicious</h1>
          </div>
          <div className="combined_boxes">
            <div className="imageBox">
              <img data-aos="zoom-in" src="./hero1.png" alt="hero" />
            </div>
            <div className="textAndLogo">
              <div data-aos="fade-up" data-aos-delay="400" className="textWithSvg">
                <h1 className="title">Food</h1>
                <h1 className="title dishes_title">Dishes</h1>
                <img  src="./threelines.svg" alt="threelines" />
              </div>
              <img data-aos="zoom-in" className="logo" src="logo.svg" alt="logo" />
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="imageBox">
            <img data-aos="zoom-in" src="hero2.png" alt="hero" />
          </div>
          <h1 data-aos="fade-up" data-aos-delay="500" className="title dishes_title">Dishes</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
