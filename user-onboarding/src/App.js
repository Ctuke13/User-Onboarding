import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import * as Yup from "yup";

import Form from "./components/Form";
import Users from "./components/Users";

function App() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    fName: "",
    lName: "",
    email: "",
    role: "",
    password: "",
    terms: false,
    confirmPassword: "",
  });
  const [post, setPost] = useState([]);
  const [errors, setErrors] = useState({
    fName: "",
    lName: "",
    email: "",
    role: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });
  const [disabled, setButtonDisabled] = useState(true);

  const schema = Yup.object().shape({
    fName: Yup.string().required("Please enter first name."),
    lName: Yup.string().required("Please enter last name."),
    email: Yup.string()
      .email("Please enter valid email address.")
      .required("Please enter email address")
      .test("checkDup", "Email already exists!", (value) =>
        checkDupEmail(value)
      ),
    role: Yup.string().required("Please select your role."),
    password: Yup.string()
      .required("Please enter password")
      .min(6, "Password must be atleast 6 characters long."),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Please confirm password"),
    terms: Yup.boolean().oneOf([true]),
  });

  const checkDupEmail = (email) => {
    const emailExist = users.find((user) => user.email === email);
    return !emailExist;
  };

  const inputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const infoUpdated = type === "checkbox" ? checked : value;

    if (type === "checkbox") {
      Yup.reach(schema, name)
        .validate(checked)
        .then((valid) => {
          setErrors((prevErrors) => {
            return { ...prevErrors, [name]: "" };
          });
        })
        .catch((err) => {
          setErrors((prevErrors) => {
            return { ...prevErrors, [name]: err.errors[0] };
          });
        });
      setNewUser({
        ...newUser,
        [name]: infoUpdated,
      });
    } else {
      Yup.reach(schema, name)
        .validate(value)
        .then((valid) => {
          setErrors({
            ...errors,
            [name]: "",
          });
        })
        .catch((err) => {
          setErrors({
            ...errors,
            [name]: err.errors[0],
          });
        });
      setNewUser({
        ...newUser,
        [name]: infoUpdated,
      });
    }
  };

  useEffect(() => {
    schema.isValid(newUser).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [newUser]);

  const formSubmit = (e) => {
    e.preventDefault();

    console.log("submitted");
    axios
      .post("https://reqres.in/api/users", newUser)
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
        setUsers((prevUsers) => [...prevUsers, res.data]);
      })
      .catch((err) => {
        console.error(err);
      });
    setNewUser({
      fName: "",
      lName: "",
      email: "",
      role: "",
      password: "",
      confirmPassword: "",
      terms: false,
    });
  };

  return (
    <div className="App">
      <Form
        user={newUser}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={errors}
      />
      <Users users={users} />
    </div>
  );
}

export default App;
