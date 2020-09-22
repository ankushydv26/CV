import React, { Component, Fragment } from "react";
import "./Style/Header.css";
//logo svg
import Insta from "./Logo/instagram-sketched.svg";
import Cv from "./Logo/files-and-folders.svg";
import Github from "./Logo/github.svg";
import Image from "./Logo/shanuCrop.jpg";
import logo from "./Logo/logo.svg";
import Fb from "./Logo/facebook.svg";


class Header extends Component {
  render() {
    return (
      <Fragment>
        <div className="top-header">
          <div className="top-header-wrap-1">
            <div className="top-header-wrap-2">
              <div className="react-left">
                <img src={logo} alt="react-logo" className="react-logo" />
              </div>
              <div className="top-header-and">&amp;</div>
              <div className="top-header-h1 z-depth-1">JS</div>

              <a className="face" href=".">
                <img className="avatar" src={Image} alt="Display-pic" />
                <div
                  className="name"
                  style={{
                    fontFamily: "cursive,sans serif",
                    fontSize: "25px",
                    display: "inline-block",
                    margin: "0px",
                    padding: "0px",
                  }}
                >
                  <b>Ankush Kumar</b>
                  
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="top-menu">
          <div className="top-menu-wrap-1">
            <div className="top-menu-wrap-2">
              <div className="top-menu-wrap-3">
                <ul className="menu pull-left">
                  <li className="item">
                    <a className=" active" href=".">
                      <img src={Cv} alt="resume" width="50px" height="auto" />
                      <div className="text">CV</div>
                    </a>
                  </li>
                  <li className="item">
                    <a
                      className=""
                      href="https://www.instagram.com/ankush_ydv/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={Insta}
                        alt="instagram"
                        href="."
                        width="50px"
                        height="auto"
                      />
                      <div className="text">Instagram</div>
                    </a>
                  </li>
                  <li className="item">
                    <div className="git">
                      <div>
                        <a
                          href="https://github.com/ankushydv26"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={Github}
                            alt="instagram"
                            width="50px"
                            height="auto"
                          />
                          <div className="text">Github</div>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="item">
                    <a
                      href="https://www.facebook.com/ankush.yadav.121"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={Fb} alt="facebook" width="50px" height="auto" />
                      <div className="text">facebook</div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mine">
            <ul>
              <li>
                <a className=" active" href=".">
                  <img src={Cv} alt="resume" width="40px" height="auto" />
                  <div className="text">CV</div>
                </a>
              </li>
              <li>
                <a
                  className="insta"
                  href="https://www.instagram.com/ankush_ydv/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Insta} alt="instagram" width="40px" height="auto" />
                  <div className="text1">Instagram</div>
                </a>
              </li>
              <li>
                <a
                  className="git"
                  href="https://github.com/ankushydv26"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Github} alt="git" width="36px" height="auto" />
                  <div className="text2">Github</div>
                </a>
              </li>
              <li>
                <a
                  className="fb"
                  href="https://www.facebook.com/ankush.yadav.121"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Fb} alt="facebook" width="40px" height="auto" />
                  <div className="text">facebook</div>
                </a>
              </li>
            </ul>
          </div>
          <p style={{margin:"8px",float:"right",fontSize:"16px"}}><b>Email:</b>tankush027@gmail.com</p>
        </div>
      </Fragment>
    );
  }
}

export default Header;
