import React from "react";
import "../css/style.css";
import "../css/media.css";

//all  images in video
import g1 from "../images/g2.jpg";
import g2 from "../images/g1.jpg";
import g3 from "../images/g3.jpg";
import g4 from "../images/g4.jpg";
import g5 from "../images/g5.jpg";
import g6 from "../images/g7.jpg";

function Gallery() {
  return (
    <section className="Gallery">
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-md-10">
            <div className="c_title">
              <h1 className="c_h1">FEATURED WORKS</h1>
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

        <div className="row justify-content-center">
          <div className="col-md-12 d-flex justify-content-center">
            <ul className="list-inline gallery_menu text-center">
              <li className="list-inline-item">
                <a href="#">All</a>
              </li>

              <li className="list-inline-item">
                <a href="#">Green Building</a>
              </li>

              <li className="list-inline-item">
                <a href="#">Healthcare</a>
              </li>

              <li className="list-inline-item">
                <a href="#">Interior Design</a>
              </li>

              <li className="list-inline-item">
                <a href="#">Office</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row no-gutters">
          <div className="col-md-4 ">
            <div className="gallery_item">
              <div className="hovereffect">
                <img
                  src={g1}
                  alt={"g1"}
                  className="img-fluid w-100 h-auto"
                  alt="first_box"
                />
              </div>
            </div>
          </div>

          <div className="col-md-4 ">
            <div className="gallery_item">
              <div className="hovereffect">
                <img
                  src={g2}
                  alt={"g2"}
                  className="img-fluid w-100 h-auto"
                  alt="first_box"
                />
              </div>
            </div>
          </div>

          <div className="col-md-4 ">
            <div className="gallery_item ">
              <div className="hovereffect">
                <img
                  src={g3}
                  alt={"g3"}
                  className="img-fluid w-100 h-auto"
                  alt="first_box"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row no-gutters">
          <div className="col-md-4 ">
            <div className="gallery_item ">
              <div className="hovereffect">
                <img
                  src={g4}
                  alt={"g4"}
                  className="img-fluid w-100 h-auto"
                  alt="first_box"
                />
              </div>
            </div>
          </div>

          <div className="col-md-4 ">
            <div className="gallery_item ">
              <div className="hovereffect">
                <img
                  src={g5}
                  alt={"g5"}
                  className="img-fluid w-100 h-auto"
                  alt="first_box"
                />
              </div>
            </div>
          </div>

          <div className="col-md-4 ">
            <div className="gallery_item">
              <div className="hovereffect">
                <img
                  src={g6}
                  alt={"g6"}
                  className="img-fluid w-100 h-auto"
                  alt="first_box"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Gallery;
