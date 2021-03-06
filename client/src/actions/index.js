import axios from "axios";
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, FETCH_MESSAGE } from "./types";
import * as types from "./types";
const ROOT_URL = "http://localhost:8080/api/v1";

export function contactSubmit(email, fullName, phoneNumber, subject, name, number, message) {
  return function(dispatch) {
    // Submit email/password to the server
    axios
      .post(`${ROOT_URL}/sendMessage`, {
        email,
        fullName,
        phoneNumber,
        subject,
        number,
        name,
        message
      })
      .then(response => {
        // If request is good...

        console.log("MESSAGE SENT SUCCESSFULLY!");
      })
      .catch(() => {
        // If request is bad...
        // - Show an error to the user
        dispatch(authError("Bad Login Info"));
      });
  };
}
export function signinUser(email, password) {
  return function(dispatch) {
    // Submit email/password to the server
    axios
      .post(`${ROOT_URL}/signin`, { email, password })
      .then(response => {
        console.log("LOOK HERE INDEX. JS ");
        console.log("LOOK HERE INDEX. JS ");
        console.log("LOOK HERE INDEX. JS ");
        console.log(response);
        // If request is good...
        // - Update state to indicate user is authenticated
        dispatch({ type: AUTH_USER });
        // - Save the JWT token
        localStorage.setItem("token", response.data.token);
        // localStorage.setItem('authenticated', true);
        // localStorage.setItem('userEmail', email);
      })
      .catch(() => {
        // If request is bad...
        // - Show an error to the user
        dispatch(authError("Bad Login Info"));
      });
  };
}

export function editUser(oldEmail, email, firstName, lastName, phoneNumber) {
  return function(dispatch) {
    // Submit email/password to the server
    axios
      .post(`${ROOT_URL}/editProfile`, {
        oldEmail,
        email,
        firstName,
        lastName,
        phoneNumber
      })
      .then(response => {
        // If request is good...

        console.log("USER UPDATED SUCCESSFULLY!");
      })
      .catch(() => {
        // If request is bad...
        // - Show an error to the user
        dispatch(authError("Bad Login Info"));
      });
  };
}
//firstName, lastName, phoneNumber,email,password
export function signupUser(
  firstName,
  lastName,
  email,
  password,
  phoneNumber,
  adminCode
) {
  return function(dispatch) {
    axios
      .post(`${ROOT_URL}/signup`, {
        email,
        password,
        firstName,
        lastName,
        phoneNumber,
        adminCode
      })
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userEmail", response.data.email);
        localStorage.setItem("authenticated", true);
      })
      .catch(response =>
        dispatch(authError("Email Address already Signed Up"))
      );
  };
}

export function removeUser(id, email) {
  return function(dispatch) {
    axios
      .post(`${ROOT_URL}/removeUser`, { id, email })
      .then(() => console.log("USER REMOVED SUCCESSFULLY"))
      .catch(err => console.log());
  };
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function signoutUser() {
  localStorage.removeItem("token");
  localStorage.removeItem("userEmail");
  localStorage.removeItem("authenticated");

  return { type: UNAUTH_USER };
}

export function fetchMessage() {
  return function(dispatch) {
    axios
      .get("http://localhost:8080/", {
        headers: { authorization: localStorage.getItem("token") }
      })
      .then(response => {
        dispatch({
          type: FETCH_MESSAGE,
          payload: response.data.message
        });
      });
  };
}
