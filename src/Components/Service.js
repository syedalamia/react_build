import React from "react";
import "../css/style.css";
import "../css/media.css";

//all images in header

import service1 from "../images/sr-1.jpg";
import service2 from "../images/sr-2.jpg";
import service3 from "../images/sr-3.jpg";

function Service() {
  return (
    <section className="service">
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-md-10 ">
            <div className="c_title">
              <h1 className="c_h1">Our Services</h1>
              <p className="c_p">
                Lorem ipsum dolor sit amet, sed dicunt oporteat cu, laboramus
                definiebas cum et. Duo id omnis persequeris neglegentur, facete
                commodo ea usu, possit lucilius sed ei. Esse efficiendi
                scripserit eos ex. Sea utamur iisque salutatus id.Mel autem
                animal.
              </p>
            </div>
          </div>
        </div>

        <div className="row ">
          <div className="col-lg-4 col-md-6  text-left">
            <div className="single_item">
              <div className="mist">
                <img
                  className="img-fluid w-100"
                  src={service1}
                  alt={"first_box"}
                />

                <div className="overlay_blue"></div>
              </div>

              <h4>Renovations</h4>
              <p>
                Lorem ipsum dolor sit amet, sed dicunt oporteat cuum Tuo iomnis
                persequeris neglegentur, facete commodo ea use possit lucilius.
              </p>
              <a href="">Read More</a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6  text-left">
            <div className="single_item">
              <div className="mist">
                <img
                  className="img-fluid w-100"
                  src={service2}
                  alt={"second_box"}
                />

                <div className="overlay_blue"></div>
              </div>

              <h4>Consulting</h4>
              <p>
                Lorem ipsum dolor sit amet, sed dicunt oporteat cuum Tuo iomnis
                persequeris neglegentur, facete commodo ea use possit lucilius.
              </p>
              <a href="">Read More</a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6  text-left">
            <div className="single_item">
              <div className="mist">
                <img
                  className="img-fluid w-100"
                  src={service3}
                  alt={"third_box"}
                />
                <div className="overlay_blue"></div>
              </div>

              <h4>Smart houses</h4>
              <p>
                Lorem ipsum dolor sit amet, sed dicunt oporteat cuum Tuo iomnis
                persequeris neglegentur, facete commodo ea use possit lucilius.
              </p>
              <a href="">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Service;
