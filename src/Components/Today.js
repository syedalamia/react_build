import React from "react";
import "../css/style.css";
import "../css/media.css";

function Today() {
  return (
    <section className="today">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-10 col-md-9">
            <p className="today_p">
              {" "}
              Consulting And Estimate For Your Project, Contact Us Today
            </p>
          </div>

          <div className="col-lg-2 col-md-3">
            <button type="button" className="btn btn-today-custom btn-today">
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Today;
