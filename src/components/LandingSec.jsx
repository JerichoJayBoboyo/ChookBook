import "../styles/LandingSec.css";
import "../styles/index.css";

function LandingSec() {
  return (
    <section className="landing-section">
      <div className="landing-section-cntr">
        <div className="landing-sec-img-cntr">
          <img
            src="/images/filipinofood.png"
            alt="filipinofood"
            className="fillipino-food-img"
          />
        </div>
        <div className="landing-text-and-btn">
          <h2 className="taste-of-philippines-txt">
            The taste of the Philippines
          </h2>
          <p className="qoute">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Exercitationem dolore consectetur maiores debitis quasi obcaecati
            velit sint itaque nulla unde, magni ad quae ex commodi numquam
            magnam maxime delectus. In?
          </p>
          <a href="#" className="cook-btn">
            I want to Cook!
          </a>
        </div>
      </div>
    </section>
  );
}

export default LandingSec;
