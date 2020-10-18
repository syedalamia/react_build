import React from "react";
import "../css/style.css";
import "../css/media.css";

//all  images in video
import video_cover from "../images/video-3.jpg";
import video_logo from "../images/video_logo.png";
import house_logo from "../images/house.png";
import building_logo from "../images/building.png";
import tissue_logo from "../images/tissue.png";

function Video() {
  return (
    <section className="video">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 pl-0 pr-0 ">
            <div className="video-box">
              <div className="vid_img " id="background_img">
                <img
                  src={video_cover}
                  className="img-fluid w-100"
                  alt={"video_cover"}
                />
              </div>

              <a
                href="https://www.youtube.com/watch?v=jhak5jvO-ro"
                className="venobox play-btn mb-4 vbox-item img-posi"
                target="blank"
                data-vbtype="video"
                data-autoplay="true"
              >
                <img src={video_logo} alt={"video_logo"} />
              </a>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-center about">
            <div className="row  video_text">
              <div className="col-lg-2 text-right  d-flex flex-column justify-content-center">
                <div className="house_img">
                  <img
                    src={house_logo}
                    alt={"house_logo"}
                    className="img-fluid"
                  />
                </div>
              </div>

              <div className="col-lg-10">
                <div className="house_text">
                  <h2>GENERAL BUILDER</h2>
                  <p>
                    Lorem ipsum dolor sit amet, sed dicunt oporteat cuum Tuo
                    iomnis persequeris neglegentur, facete commodo ea use possit
                    lucilius.
                  </p>
                </div>
              </div>
            </div>

            <div className="row mt-lg-5  video_text">
              <div className="col-lg-2 text-right  d-flex flex-column justify-content-center">
                <div className="house_img">
                  <img
                    src={building_logo}
                    alt={"building_logo"}
                    className="img-fluid"
                  />
                </div>
              </div>

              <div className="col-lg-10">
                <div className="house_text">
                  <h2>HOUSE EXTENSIONS</h2>
                  <p>
                    Lorem ipsum dolor sit amet, sed dicunt oporteat cuum Tuo
                    iomnis persequeris neglegentur, facete commodo ea use possit
                    lucilius.
                  </p>
                </div>
              </div>
            </div>

            <div className="row mt-lg-5 video_text">
              <div className="col-lg-2 text-right  d-flex flex-column justify-content-center">
                <div className="house_img">
                  <img
                    src={tissue_logo}
                    alt={"tissue_logo"}
                    className="img-fluid"
                  />
                </div>
              </div>

              <div className="col-lg-10">
                <div className="house_text">
                  <h2>REFURBISHMENT</h2>
                  <p>
                    Lorem ipsum dolor sit amet, sed dicunt oporteat cuum Tuo
                    iomnis persequeris neglegentur, facete commodo ea use possit
                    lucilius.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Video;
