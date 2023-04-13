import React from "react";
import ContactMeBttn from "../../../../components/ContactMeBttn/contactMeBttn";
import Footer from "../../../../components/Footer/footer";
import "./screenFour.css";
import ButtonContactMe from "../../../../components/ButtonContactMe/buttonContactMe";
function screenFour() {
  return (
    <div className="s4_size" id="s4">
      <div className="s4_content">
        <section
          className="s4_section"
          data-aos="zoom-out"
          data-aos-duration="700"
        >
          <h1 className="s4_h1">¡Trabajemos juntos!</h1>
          <p className="s4_p"></p>
          <div
            className="s4_button"
            data-aos="flip-left"
            data-aos-duration="500"
            data-aos-delay="100"
          >
            <ButtonContactMe />
          </div>
        </section>
      </div>
      <div className="s4_footer">
        <Footer />
      </div>
    </div>
  );
}

export default screenFour;
