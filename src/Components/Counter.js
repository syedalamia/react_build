import React from "react";
import "../css/style.css";
import "../css/media.css";

function Counter() {
  return (
    <section className="counter">
      <div className="container ">
        <div className="row">
          <div className="col-lg-3 col-md-6 text-center">
            <div className="counter_number">
              <p>PROJECTS</p>
              <span>2540</span>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 text-center">
            <div className="counter_number">
              <p>CREDIT</p>
              <span>7325</span>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 text-center">
            <div className="counter_number">
              <p>AWARDS</p>
              <span>1924</span>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 text-center">
            <div className="counter_number">
              <p>CLIENTS</p>
              <span>7245</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Counter;
