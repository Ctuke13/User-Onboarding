import styled from "styled-components";
import React, { useState } from "react";
import * as Yup from "yup";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 30px;
  border-bottom: 1px solid black;
  justify-content: center;
  align-items: center;
  padding: 30px;
  flex: 1;

  button {
    display: flex;
    margin: auto;
  }

  .errors {
    color: red;
    font-style: italic;
  }
`;

const SignUpHeading = styled.h1`
  color: royalblue;
  display: flex;
  justify-content: center;
  align-content: center;
  margin: auto;
`;

const TermsContainer = styled.label`
  display: flex;
  justify-content: center;
  color: red;
  text-decoration: underline;
`;

export default function Form({ user, change, submit, disabled, errors }) {
  return (
    <>
      <SignUpHeading className="sign-up">SIGN-UP</SignUpHeading>
      <StyledContainer className="form-container">
        <br />
        <br />
        <br />
        <form onSubmit={submit}>
          <label htmlFor="fNameInput">
            First Name: &nbsp;
            <input
              id="fNameInput"
              type="text"
              name="fName"
              placeholder="Enter First Name"
              onChange={change}
              value={user.fName}
            />
          </label>

          <label htmlFor="lNameInput">
            &nbsp; Last Name: &nbsp;
            <input
              id="lNameInput"
              type="text"
              name="lName"
              placeholder="Enter Last Name"
              onChange={change}
              value={user.lName}
            />
          </label>
          <br />
          <div className="errors">
            {errors.fName}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {errors.lName}
          </div>
          <br />
          <label htmlFor="emailInput">
            Email: &nbsp;
            <input
              id="emailInput"
              type="text"
              name="email"
              placeholder="Enter Email Address"
              onChange={change}
              value={user.email}
            />
          </label>
          <label>
            &nbsp;Role: &nbsp;
            <select id="role" value={user.role} onChange={change} name="role">
              <option value={""}>--Please choose and option--</option>
              <option value={"Front-End Developer"}>Front-End Developer</option>
              <option value={"Back-End Developer"}>Back-End Developer</option>
              <option value={"Full-Stack Developer"}>
                Full-Stack Developer
              </option>
            </select>
          </label>
          <br />
          <div className="errors">{errors.email}</div>
          <br />
          <label htmlFor="passwordInput">
            Password: &nbsp;
            <input
              id="passwordInput"
              type="text"
              name="password"
              placeholder="Enter Password"
              onChange={change}
              value={user.password}
            />
          </label>
          <label htmlFor="confirmPasswordInput">
            &nbsp; Confirm Password: &nbsp;
            <input
              id="confirmPasswordInput"
              type="text"
              name="confirmPassword"
              placeholder="Re-Enter Password"
              onChange={change}
              value={user.confirmPassword}
            />
          </label>
          <br />
          <div className="errors">
            {errors.password}
            {errors.confirmPassword}
          </div>
          <br />
          <TermsContainer id="termsInput" className="terms-container">
            <span className="terms">Accept Terms & Conditions</span>
            <input
              id="termsInput"
              type="checkbox"
              name="terms"
              onChange={change}
            />
          </TermsContainer>
          <br />
          <button disabled={disabled}>Submit</button>
        </form>
      </StyledContainer>
    </>
  );
}
