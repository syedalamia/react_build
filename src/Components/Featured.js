import React from "react";
import "../css/style.css";
import "../css/media.css";

//all images in header

import f1 from "../images/f1.jpg";
import f2 from "../images/f-2.jpg";
import f3 from "../images/f-3.jpg";

function Featured() {
  return (
    <section className="featured">
      <div class="container">
        <div class="row justify-content-center ">
          <div class="col-md-10">
            <div class="c_title">
              <h1 class="c_h1">OUR FEATURED NEWS</h1>
              <p class="c_p">
                Lorem ipsum dolor sit amet, sed dicunt oporteat cu, laboramus
                definiebas cum et. Duo id omnis persequeris neglegentur, facete
                commodo ea usu, possit lucilius sed ei. Esse efficiendi
                scripserit eos ex. Sea utamur iisque salutatus id.Mel autem
                animal.
              </p>
            </div>
          </div>
        </div>

        <div class="row ">
          <div class="col-lg-4 col-md-6  text-left hovereffect">
            <div class="single_item">
              <img className="img-fluid w-100" src={f1} alt={"third_box"} />

              <h4>RConstruction Forklift Buyers Guide</h4>
              <p>
                {" "}
                <i class="fa fa-calendar" aria-hidden="true"></i> 12 december
                2018
              </p>

              <p>
                Lorem ipsum dolor sit amet, sed dicunt oporteat cuum Tuo iomnis
                persequeris neglegentur, facete commodo ea use possit lucilius.
              </p>
              <a href="">Read More</a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6  text-left hovereffect">
            <div class="single_item">
              <img className="img-fluid w-100" src={f2} alt={"third_box"} />

              <h4>How to plan for your dream house?</h4>
              <p>
                {" "}
                <i class="fa fa-calendar" aria-hidden="true"></i> 12 december
                2018
              </p>
              <p>
                Lorem ipsum dolor sit amet, sed dicunt oporteat cuum Tuo iomnis
                persequeris neglegentur, facete commodo ea use possit lucilius.
              </p>
              <a href="">Read More</a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6  text-left hovereffect">
            <div class="single_item">
              <img className="img-fluid w-100" src={f3} alt={"third_box"} />

              <h4>Builder of human happiness for all time</h4>
              <p>
                {" "}
                <i class="fa fa-calendar" aria-hidden="true"></i> 12 december
                2018
              </p>
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
export default Featured;
