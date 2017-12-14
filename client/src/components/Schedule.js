import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import PropTypes from "prop-types";
import profile from "./profile";
import privacy from "./privacy";
import "../css/style.css";
// import fontAwesome from "react-fontawesome";
// import { Grid, Row, Col } from "react-bootstrap";


class SchedulePage extends Component {
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
    let name = this.refs.name.value;
    let number = this.refs.number.value;
    // let subject = this.refs.subject.value;
    this.props.contactSubmit(email, fullName, phoneNumber, message, name, number);
    this.setState({ sent: true, contactSubmision: true });
    console.log("CONTACT FORM SUBMITED");
  };
  render() {
    return (
      <div>
         <br />
              <br />
              <br />
        <div id="contact" className="contact">
          <div className="container">
            <div className="row">
              <h2>Schedule Form</h2>
              <p>Schedule Your Appointment</p>
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
                  <div className="input-group input-group-lg">
                    <span className="input-group-addon" id="sizing-addon1">
                      <i className="fa fa-hairName" aria-hidden="true" />
                    </span>
                    <input
                      type="text"
                      ref="name"
                      className="form-control"
                      aria-describedby="sizing-addon1"
                      placeholder="Hair Style Name"
                    />
                  </div>
                  <div className="input-group input-group-lg">
                    <span className="input-group-addon" id="sizing-addon1">
                      <i className="fa fa-hairNumber" aria-hidden="true" />
                    </span>
                    <input
                      type="text"
                      ref="number"
                      className="form-control"
                      aria-describedby="sizing-addon1"
                      placeholder="Hair Style Number"
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
export default connect(mapStateToProps, actions)( SchedulePage);
