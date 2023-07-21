import styled from "styled-components";
import React, { useState } from "react";
import * as Yup from "yup";

export default function Form({ user, change, submit, disabled }) {
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
  `;

  const SignUpHeading = styled.h1`
    color: royalblue;
    display: flex;
    justify-content: center;
    align-content: center;
    margin: auto;
  `;

  const TermsContainer = styled.label`
    display: inline-block;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: auto;
    color: red;
    text-decoration: underline;
  `;
  return (
    <>
      <SignUpHeading className="sign-up">SIGN-UP</SignUpHeading>
      <StyledContainer className="form-container">
        <br />
        <br />
        <br />
        <form onSubmit={submit}>
          <label htmlFor="fNameInput">
            First Name:
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
            &nbsp; Last Name:
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
          <label htmlFor="emailInput">
            Email:
            <input
              id="emailInput"
              type="text"
              name="email"
              placeholder="Enter Email Address"
              onChange={change}
              value={user.email}
            />
          </label>
          <br />
          <label htmlFor="passwordInput">
            Password:
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
            &nbsp; Confirm Password:
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
