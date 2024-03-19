import React from "react";
import img from "../../assites/a1c7dc5b68a42239311e510f54d8cd59.jpeg";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as YUP from "yup";
import axios from "axios";

export default function SignUp() {
  let baseUrl =
    "http://hassan443-001-site1.htempurl.com/api/AdminAuth/register";
  let validationSchema = YUP.object({
    FirstName: YUP.string()
      .required("FirstName Required")
      .min(3, "min length 3")
      .max(20, "max length 20"),
    LastName: YUP.string()
      .required("LastName Required")
      .min(3, "min length 3")
      .max(20, "max length 20"),
    Username: YUP.string()
      .required("Username Required")
      .min(3, "min length 3")
      .max(20, "max length 20"),
    Email: YUP.string().required("Email Required").email("Enter Valid Email"),
    Password: YUP.string()
      .required("Password Required")
      .matches(
        /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~])\S+$/,
        "Password must contains at least one uppercase letter and at least one special character"
      ),
  });

  let registerForm = useFormik({
    initialValues: {
      FirstName: "",
      LastName: "",
      Username: "",
      Email: "",
      Password: "",
    },
    onSubmit: submitRegister,
    validationSchema,
  });

  async function submitRegister(values) {
    console.log(values);
    let response = await axios
      .post(baseUrl, values, {
        auth: "Basic MTExNjc1OTY6NjAtZGF5ZnJlZXRyaWFs",
        // {
        //   username: "11167596",
        //   password: "60-dayfreetrial",
        // },
        headers: {
          'Content-Type': "multipart/form-data",
        },
      })
   console.log(response);
  }

  return (
    <>
      <div className="container-fluid py-5">
        <div className="row align-items-center">
          <div className="col-md-7">
            <img className="w-100" src={img} alt="imageLogin" />
          </div>
          <div className="col-md-5 py-5 px-5">
            <div className="px-5">
              <h2>
                Create an <span className=" text-danger">account</span>
              </h2>
              <h3 className="fs-6">Enter your details below</h3>
              <form onSubmit={registerForm.handleSubmit}>
                <div className="my-3">
                  <input
                    className="form-control form border-bottom border-1 border-dark custom-input"
                    type="text"
                    name="FirstName"
                    id="FirstName"
                    placeholder="FirstName"
                    onChange={registerForm.handleChange}
                    onBlur={registerForm.handleBlur}
                    value={registerForm.values.FirstName}
                  />
                  {registerForm.errors.FirstName &&
                  registerForm.touched.FirstName ? (
                    <p className="text-danger">
                      {registerForm.errors.FirstName}
                    </p>
                  ) : (
                    ""
                  )}
                </div>

                <div className="my-3">
                  <input
                    className="form-control form border-bottom border-1 border-dark custom-input"
                    type="text"
                    name="LastName"
                    id="LastName"
                    placeholder="LastName"
                    onChange={registerForm.handleChange}
                    onBlur={registerForm.handleBlur}
                    value={registerForm.values.LastName}
                  />
                  {registerForm.errors.LastName &&
                  registerForm.touched.LastName ? (
                    <p className="text-danger">
                      {registerForm.errors.LastName}
                    </p>
                  ) : (
                    ""
                  )}
                </div>

                <div className="my-3">
                  <input
                    className="form-control form border-bottom border-1 border-dark custom-input"
                    type="text"
                    name="Username"
                    id="Username"
                    placeholder="Username"
                    onChange={registerForm.handleChange}
                    onBlur={registerForm.handleBlur}
                    value={registerForm.values.Username}
                  />
                  {registerForm.errors.Username &&
                  registerForm.touched.Username ? (
                    <p className="text-danger">
                      {registerForm.errors.Username}
                    </p>
                  ) : (
                    ""
                  )}
                </div>

                <div className="my-3">
                  <input
                    className="form-control form border-bottom border-1 border-dark custom-input"
                    type="email"
                    name="Email"
                    id="Email"
                    placeholder="Email"
                    onChange={registerForm.handleChange}
                    onBlur={registerForm.handleBlur}
                    value={registerForm.values.Email}
                  />
                  {registerForm.errors.Email && registerForm.touched.Email ? (
                    <p className="text-danger">{registerForm.errors.Email}</p>
                  ) : (
                    ""
                  )}{" "}
                </div>

                <div className="my-3">
                  <input
                    className="form-control form border-bottom border-1 border-dark custom-input"
                    type="password"
                    name="Password"
                    id="Password"
                    placeholder="Password"
                    onChange={registerForm.handleChange}
                    onBlur={registerForm.handleBlur}
                    value={registerForm.values.Password}
                  />
                  {registerForm.errors.Password &&
                  registerForm.touched.Password ? (
                    <p className="text-danger">
                      {registerForm.errors.Password}
                    </p>
                  ) : (
                    ""
                  )}{" "}
                </div>

                <button
                  disabled={!(registerForm.isValid && registerForm.dirty)}
                  type="submit"
                  className="btn btn-danger m-auto d-block w-100 my-3"
                >
                  Create Account
                </button>

                {/* <button className="btn border border-black border-1 m-auto w-100 d-block">
                  <FcGoogle className="fs-4" /> Sign up with Google
                </button> */}
              </form>
              <p className="w-100 text-center my-3 fw-bold">
                Already have account?
                <Link to="/signin">
                  <button className="btn px-2 py-2 text-danger fw-bold">
                    log In
                  </button>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
