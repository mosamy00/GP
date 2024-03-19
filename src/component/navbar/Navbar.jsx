import React from "react";
import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bolder fs-3 " to="home">
            La7za
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0 py-2">
              <li className="nav-item">
                <Link
                  className="nav-link active text-nav fw-bold"
                  aria-current="page"
                  to="home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-nav fw-bold"
                  aria-current="page"
                  to="contact"
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-nav fw-bold"
                  aria-current="page"
                  to="about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-nav fw-bold"
                  aria-current="page"
                  to="signup"
                >
                  Sign Up
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-nav fw-bold "
                  aria-current="page"
                  to="signin"
                >
                  signin
                </Link>
              </li>
            </ul>

            <ul className="align-items-center d-flex navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                {/* <li className="nav-link active" aria-current="page" to="home"> */}
                  <form className="" role="search">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </form>
                {/* </li> */}
              </li>
              <li className="nav-item mb-2">
                <Link
                  className="nav-link active  text-black  icon"
                  aria-current="page"
                  to="cart"
                >
                  <CiHeart color="red" />
                  {""}
                </Link>
              </li>
              <li className="nav-item  mb-2 ">
                <Link
                  className="nav-link active text-black icon"
                  aria-current="page"
                  to="wishlist"
                >
                  <CiShoppingCart color="blue" />{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
