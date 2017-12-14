import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer navbar-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <h4>Contact Us</h4>
                <a
                  target="_blank"
                  href="https://www.google.com/maps/place/8444+N+90th+St+%23110,+Scottsdale,+AZ+85258"
                >
                  <i className="fa fa-home" aria-hidden="true" /> 5949 W Northern Ave Glendale Arizona 85301
                </a>
                <br />
                <a target="_blank" href="mailto:fosterthefuture@gmail.com">
                  <i className="fa fa-envelope" aria-hidden="true" />{" "}
                  ramahbraid2017@gmail.com
                </a>
                <br />
                <a href="tel:602-419-0457">
                  <i className="fa fa-phone" aria-hidden="true" /> +1 (602)
                  419-0457
                </a>
                <p>
                  <i className="fa fa-globe" aria-hidden="true" />{" "}
                  Ms.RamahBraids.com
                </p>
              </div>
              <div className="col-lg-4 col-md-4">
                <h4>Quick Links</h4>
                <a href="ourservices">
                  <i className="fa fa-square-o" aria-hidden="true" /> About Us
                </a><br></br>
                <a href="privacy">
                  <i className="fa fa-square-o" aria-hidden="true" /> Ms.Ramah Involvement
                </a><br></br>
                <a href="privacy">
                  <i className="fa fa-square-o" aria-hidden="true" /> Summer Kid's Camp
                </a><br></br>
                <a target="_blank" href="https://www.r4cnation.com/contact-info/">
                  <i className="fa fa-square-o" aria-hidden="true" /> SUMMER CAMP APPLICATION
                </a>
              </div>
              <div className="col-lg-4 col-md-4">
                <h4>Stay In Touch</h4>
                <a href="https://www.facebook.com/eddie.miamen">
                <i className="social fa fa-facebook" aria-hidden="true" />
                </a>
                <a href="https://www.instagram.com/eddiemiamenbeastmode_r4c_23/?hl=en">
                <i className="social fa fa-instagram" aria-hidden="true" />
                </a>
                <a href="https://twitter.com/EddieM205/media">
                <i className="social fa fa-twitter" aria-hidden="true" />
                </a>
                <br />
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;