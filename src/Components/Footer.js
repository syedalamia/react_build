import React from "react";
import "../css/style.css";
import "../css/media.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 footer-links f_1">
            <h3 class="mb-4">Recent Posts</h3>

            <p>
              <a href="#">How you can impact your customers.</a>
            </p>
            <p>
              <a href="#">Construction is all about quality.</a>
            </p>
            <p>
              <a href="#">Is your website user friendly?</a>
            </p>
            <p>
              <a href="#">HUGE offers weekly updates &amp; more.</a>
            </p>
            <p class="no_bor_f">
              <a href="#">Your customers should love your web.</a>
            </p>
          </div>

          <div class="col-lg-3 col-md-6 f_1">
            <h3 class="mb-4">Recent News</h3>

            <p>
              <i class="fa fa-address-book-o pr-2" aria-hidden="true"></i>A
              Clean Website Gives More Experience To The Visitors Dec 12 - 2018
            </p>

            <p class="no_bor_f">
              <i class="fa fa-address-book-o pr-2" aria-hidden="true"></i>A
              Clean Website Gives More Experience To The Visitors Dec 12 - 2018
            </p>
          </div>

          <div class="col-lg-2 col-md-6 footer-info f_1">
            <h3 class="mb-4">Contact Info</h3>
            <div>
              <p>
                <i class="fa fa-envelope-o pr-2" aria-hidden="true"></i>
                hello@contact.com
              </p>
              <p>
                <i aria-hidden="true"></i>
                <strong>P:</strong> +1 5589 55488 55
                <br />
                <strong>F:</strong> +1 5589 55488 55
                <br />
              </p>

              <p>
                <i class="fa fa-map-marker pr-2" aria-hidden="true"></i>
                HALOVIETNAM LTD <br />
                66, Dang Van ngu, Dong Da <br />
                Hanoi, Vietnam
              </p>
            </div>
          </div>

          <div class="offset-lg-1 col-lg-3 col-md-6 f_1">
            <h3 class="mb-4">Mailing List</h3>

            <p>
              Enter your email address for our mailing list to keep yourself
              updated.
            </p>
            <p class="no_bor_f">We Respect Your Privacy</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
