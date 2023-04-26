import React, { useState } from "react";

import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";

import "./header.css";

const getRole = JSON.parse(localStorage.getItem("role"));

const Header = ({ page, checkLogin, deleteLoginCookie }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <nav>
        <div className="nav-container">
          <div className="logo">
            <h1>
              <span>
                <AiOutlineSearch />
              </span>
              LekhPadh
            </h1>
          </div>
          <div className={toggleMenu ? "links show-link" : "links"}>
            <div className="menu">
              <AiOutlineMenu
                onClick={() => {
                  setToggleMenu(!toggleMenu);
                }}
              />
            </div>
            <a href="/" className="link">
              Home
            </a>
            <a href="/about" className="link">
              About
            </a>
            <a href="/service" className="link">
              Service
            </a>

            {getRole === "teacher" && (
              <a href="/createCourse" className="link">
                Create Course
              </a>
            )}
            <a href="/contact" className="link">
              Contact
            </a>
            {!checkLogin && (
              <>
                <a href="register" className="link">
                  Register
                </a>
                <a href="login" className="link">
                  Login
                </a>
              </>
            )}

            {checkLogin && (
              <>
                <a href="/DisplayCourse" className="link">
                  Courses
                </a>
                <a href="/profile" className="link">
                  Profile
                </a>
                <button
                  className="logout-btn"
                  type="submit"
                  onClick={() => {
                    deleteLoginCookie();
                  }}
                >
                  Log Out
                </button>
              </>
            )}
          </div>
        </div>
        {/* <div className="nav-image">
          {page &&
            <article className="image-content">
              <h2 class="animate__animated animate__zoomIn">{page}</h2>
              <div className="underline"></div>
              <p><a href="/">Home</a> <span>/</span> <a href="/">Page</a> <span>/</span> <a href="/">{page}</a></p>
            </article>
          }
        </div> */}
      </nav>
    </>
  );
};

export default Header;
