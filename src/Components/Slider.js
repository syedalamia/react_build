import React from "react";
import "../css/style.css";
import "../css/media.css";

function Slider() {
  return (
    <section className="banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-7 col-12">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators cid">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="slider">
                    <h1>We Do Big Things With Big Ideas </h1>
                    <p>
                      Talk To Our Experts and Get Your Dream Home Done. If you
                      dream of designing a new home that takes full advantage of
                      the unique geography and views of land that you love
                    </p>
                    <button type="button" className="btn btn-custom">
                      Explore Now
                    </button>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="slider">
                    <h1>We Do Big Things With Big Ideas </h1>
                    <p>
                      Talk To Our Experts and Get Your Dream Home Done. If you
                      dream of designing a new home that takes full advantage of
                      the unique geography and views of land that you love
                    </p>
                    <button type="button" className="btn btn-custom">
                      Explore Now
                    </button>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="slider">
                    <h1>We Do Big Things With Big Ideas </h1>
                    <p>
                      Talk To Our Experts and Get Your Dream Home Done. If you
                      dream of designing a new home that takes full advantage of
                      the unique geography and views of land that you love
                    </p>
                    <button type="button" className="btn btn-custom">
                      Explore Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Slider;
