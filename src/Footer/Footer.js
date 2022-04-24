import React from "react";
import './Footer.css';
import "bootstrap/dist/css/bootstrap.min.css";
function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="footer">
      <footer class="site-footer">

          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-6">
                    <h2 className="footer-heading mb-4">41-Eatery</h2>
                    {/*<p>We're committed to building technology that helps people find Solutions to their problems.*/}
                    {/*</p>*/}
                  </div>
                  <div className="col-md-3 ml-auto">
                    {/*<h2 className="footer-heading mb-4">Features</h2>*/}
                    <ul className="list-unstyled">
                      <li><a href="">About </a></li>
                      <li><a href="">Home</a></li>
                      <li><a href="">Products</a></li>
                      <li><a href="">Contact </a></li>
                    </ul>
                  </div>
                  <div className="col-md-3 ml-auto">
                    <ul className="list-unstyled">
                      <li> Tel: +234-903-097-5524</li>
                      <li> Email: support@41-Eatery.com</li>
                      <li> Instagram: @41-Eatery</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
            <div className="row pt-5 mt-5 text-center">
              <div className="col-md-12">
                <div className="border-top pt-5">
                  <p>
                   Copyright &copy; {year}
                    All rights reserved | Designed by <a href="#" target="_blank">Group 41</a>
                  </p>
                </div>
              </div>
            </div>

        </div>
      </footer>
    </div>
  );
}

export default Footer;
