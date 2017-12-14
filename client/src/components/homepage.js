import React, { Component } from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import { DefaultPlayer as Video } from "react-html5video";
import * as actions from "../actions";
import PropTypes from "prop-types";
import profile from "./profile";
import privacy from "./privacy";
import "../css/style.css";
import fontAwesome from "react-fontawesome";
import { Grid, Row, Col } from "react-bootstrap";
import team1 from "../images/team/team-1.jpg";
import team2 from "../images/team/team-2.jpg";
import team3 from "../images/team/team-3.jpg";
import team4 from "../images/team/team-4.jpg";
import team5 from "../images/team/team-5.jpg";
import bg3 from "../images/bg3.jpg";
import Footer from "./footer";
import Carouselpage from "./Carousel";

class Homepage extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    contactSubmision: false,
    sent: false
  };
  static contextTypes = {
    router: PropTypes.object
  };

  componentDidMount() {
    this.props.fetchMessage();
  }
  contactSubmit = () => {
    let email = this.refs.email.value;
    let fullName = this.refs.fullName.value;
    let phoneNumber = this.refs.phoneNumber.value;
    let message = this.refs.message.value;
    // let subject = this.refs.subject.value;
    this.props.contactSubmit(email, fullName, phoneNumber, message);
    this.setState({ sent: true, contactSubmision: true });
    console.log("CONTACT FORM SUBMITED");
  };
  render() {
    return (
      <div>
        <div id="header" className="header">
        </div>

        <div id="ourservices" className="ourservices">
          <div className="container">
            <h2>Welcome To Ms.Ramah Braids</h2>
            <br />
            <Carouselpage/>
          </div>
        </div>
        <div id="events" className="events">
          <div className="container">
            <div className="row">
              <h2>Products</h2>
              <p>
                <br/>
                <br/>
              <Col sm={3} md={3}>
              <img
              controls style={{width:"70%"}} height="100" 
              src='https://i.imgur.com/arL17Ef.png' 
              />
                </Col>
              <Col sm={3} md={3}>
              <img
               controls style={{width:"70%"}} height="100" 
              src='https://i.imgur.com/VQ3jAPC.png' 
              />
                </Col>
              <Col sm={3} md={3}>
              <img
              controls style={{width:"70%"}} height="100" 
              src='https://i.imgur.com/ugIdWzE.png' 
              />
               </Col>
              <Col sm={3} md={3}>
              <img
              controls style={{width:"50%"}} height="200" 
              src='https://i.imgur.com/XC7rJcm.png'  
              />
                </Col>
                <Col sm={3} md={3}>
              <img
               controls style={{width:"70%"}} height="200" 
              src='https://i.imgur.com/x3kjjxn.jpg'  
              />
                </Col>
                <Col sm={3} md={3}>
              <img
               controls style={{width:"70%"}} height="200" 
               src='https://i.imgur.com/zvzwZ2d.png'  
              />
                </Col>
                <Col sm={3} md={3}>
              <img
               controls style={{width:"70%"}} height="200" 
               src='https://i.imgur.com/ONdd37E.png'   
              />
                </Col>
                <Col sm={3} md={3}>
                <br/>
              <img
               controls style={{width:"70%"}} height="200" 
               src='https://i.imgur.com/eHqc6Ij.jpg'   
              />
                </Col>
                <br/>
                <Col sm={3} md={3}>
              <img
               controls style={{width:"310"}} height="250" 
               src='https://i.imgur.com/H9Ck4cu.jpg'    
              />
                </Col>
                <br/>
                <Col sm={3} md={3}>
              <img
               controls style={{width:"70%"}} height="200" 
               src='https://i.imgur.com/vd0lgAt.png'   
              />
                </Col>
                <br/>
                <Col sm={3} md={3}>
              <img
               controls style={{width:"70%"}} height="200" 
               src='https://i.imgur.com/5QvckdK.jpg'  
              />
                </Col>
                <Col sm={3} md={3}>
              <img
               controls style={{width:"70%"}} height="200" 
               src='https://i.imgur.com/QAeK5td.jpg'   
              />
                </Col>
              </p>
            </div>
          </div>
        </div>
        <div id="team" className="team">
          <div className="container">
            <div className="row">
              <h2>Meet The Team</h2>
              <p>
              Ms.Ramah Braids provide an essential service to women and men, keeping us looking neat, tidy and stylish. 
              </p>

              <Col sm={3} md={3}>
                <br />
                <img src="https://scontent.fphx1-1.fna.fbcdn.net/v/t1.0-9/22308755_2075232436032943_6559977583423871244_n.jpg?oh=6d8d8e32fb83d69c9176969e41d92931&oe=5ACA0D91" className="img-circle" alt="" />
                <h4>MS.LAYANUE DOPOE</h4>
                <b>Team Manager</b>
                <br />
                She lead the team and make sure things are in order. 
                <br />
                <a href="https://www.facebook.com/eddiemiame">
                  <i className="fa fa-facebook" aria-hidden="true" />
                </a>
              </Col>
              <Col sm={3} md={3}>
                <br />
                <img src="https://i.imgur.com/yiiKhRL.png" className="img-circle" alt="" />
                <h4>MS.MARINA KASSARATE</h4>
                <b>Hairstyler</b>
                <br />
                Great At what She Does There Is No One That Can Beat Her. 
                <br />
                <a href="https://www.facebook.com/marina.kassarate">
                  <i className="fa fa-facebook" aria-hidden="true" />
                </a>
              </Col>
              <Col sm={3} md={3}>
                <br />
                <img src="https://i.imgur.com/rSMkRpa.png" className="img-circle" alt="" />
                <h4>MS.JESTINA HOPE</h4>
                <b>Hairstyler</b>
                <br />
                Great At what She Does There Is No One That Can Beat Her. No Matter What She Give Her Best To Customer.
                <br />
                <a href="https://www.facebook.com/jestina.hope">
                  <i className="fa fa-facebook" aria-hidden="true" />
                </a>
              </Col>
              <Col sm={3} md={3}>
                <br />
                <img src="https://scontent.fphx1-2.fna.fbcdn.net/v/t1.0-9/19148899_1817806671867608_1611993314076334540_n.jpg?oh=705f99a193316cce0f2838265d2751e2&oe=5A8E0077" className="img-circle" alt="" />
                <h4>EDDIE MIAMEN</h4>
                <b>Web Developer</b>
                <br />
               In Charge Of Web Application Make Sure Everything Is Going Well With The Site. 
                <br />
                <a href="https://www.facebook.com/eddie.miamen">
                  <i className="fa fa-facebook" aria-hidden="true" />
                </a>
                <a href="https://www.instagram.com/eddiemiamenbeastmode_r4c_23/">
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a>
                <a href="https://www.linkedin.com/in/eddie-miamen-562961145/">
                  <i className="fa fa-linkedin" aria-hidden="true" />
                </a>
                <a href="https://github.com/Miamen205">
                  <i className="fa fa-github" aria-hidden="true" />
                </a>
              </Col>
            </div>
          </div>
        </div>
        <div id="partners" className="partners">
          <div className="container">
            <div className="row">
              <Row className="show-grid">
                <h2>Our Partners</h2>
                <div className="col-lg-3 col-md-3">
                  <li>
                    <a target="_blank" href="https://www.harmonykidsa.com/">
                      <img
                        className="client6"
                        src="https://static.wixstatic.com/media/ecc8b8_d4cf2cc4b75c41d0ad8f3cef35012a38~mv2_d_4096_3072_s_4_2.jpg/v1/fill/w_106,h_80,al_c,q_80,usm_0.66_1.00_0.01/ecc8b8_d4cf2cc4b75c41d0ad8f3cef35012a38~mv2_d_4096_3072_s_4_2.webp"
                      />
                    </a>
                    <span>
                        harmonykids
                  </span>
                  </li>
                </div>
                <div className="col-lg-3 col-md-3">
                  <li>
                    <a
                      target="_blank"
                      href="https://www.r4cnation.com/"
                    >
                      <img
                        className="client2"
                        src="https://static1.squarespace.com/static/57ec107bf7e0abae9fb9ba06/57ec2a5cf7e0ab8a77f4b1ec/57ec2a70414fb54f97b7aa51/1475095173188/DSCF1831.JPG?format=1000w"
                      /> 
                    </a>
                    <span>
                        R4CNation
                  </span>
                  </li>
                </div>
                <div className="col-lg-3 col-md-3">
                  <li>
                    <a target="_blank" href="https://www.facebook.com/profile.php?id=100009148798873">
                      <img
                        className="client3"
                        src="https://scontent.fphx1-2.fna.fbcdn.net/v/t1.0-1/p160x160/10502480_1393111750987672_785817611469268687_n.jpg?oh=3b564e63c7a613bb2e6e34bb9ab54b97&oe=5AC5E729"
                      />
                    </a>
                    <span>
                       RamahFullGospel
                  </span>
                  </li>
                </div>
              </Row>
            </div>
          </div>
        </div>
        <div id="contact" className="contact">
          <div className="container">
            <div className="row">
              <h2>Contact</h2>
              <p>Got a question? Drop us an email.</p>
              <form>
                <div className="col-lg-6 col-md-6">
                  <div className="input-group input-group-lg">
                    <span className="input-group-addon" id="sizing-addon1">
                      <i className="fa fa-user" aria-hidden="true" />
                    </span>
                    <input
                      type="text"
                      ref="fullName"
                      className="form-control"
                      aria-describedby="sizing-addon1"
                      placeholder="Full Name"
                    />
                  </div>
                  <div className="input-group input-group-lg">
                    <span className="input-group-addon" id="sizing-addon1">
                      <i className="fa fa-envelope" aria-hidden="true" />
                    </span>
                    <input
                      type="text"
                      ref="email"
                      className="form-control"
                      aria-describedby="sizing-addon1"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="input-group input-group-lg">
                    <span className="input-group-addon" id="sizing-addon1">
                      <i className="fa fa-phone" aria-hidden="true" />
                    </span>
                    <input
                      type="text"
                      ref="phoneNumber"
                      className="form-control"
                      aria-describedby="sizing-addon1"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="input-group">
                    <textarea
                      ref="message"
                      name=""
                      id="sizing-addon1"
                      cols="100"
                      rows="6"
                      className="form-control"
                      placeholder="Message"
                    />
                  </div>
                  <button
                    onClick={this.contactSubmit.bind(this)}
                    className="btn btn-md"
                  >
                    Submit your Message
                  </button>
                </div>
              </form>
              <br />
              <br />
              <br />
              {/* I CHANGED THIS */}
              {this.state.contactSubmision == true ? (
                <p style={{ color: "green", "font-size": "18px" }}>
                  {" "}
                  Message Submitted Successfully{" "}
                </p>
              ) : (
                <p />
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    message: state.auth.message
  };
}
export default connect(mapStateToProps, actions)(Homepage);
