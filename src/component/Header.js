import React, { Component, Fragment } from "react";
import "./Style/Header.css";
//logo svg
import Cv from "./Logo/files-and-folders.svg";
import Github from "./Logo/github.svg";
import Image from "./Logo/shanuCrop.jpg";
import logo from "./Logo/logo.svg";
import Linkedin from "./Logo/linkedin.svg";
import Facebook from "./Logo/facebook.svg";
// import {Link} from "rea"

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

              <div className="face" href="#">
                <img className="avatar" src={Image} alt="Display-pic" />
                <div
                  className="name"
                  style={{
                    fontFamily: "cursive,sans serif",
                    fontSize: "25px",
                    display: "inline-block",
                    margin: "5px",
                    paddingTop: "40px",
                    color:"rebeccapurple"
                  }}
                >
                  <b>Ankush Kumar.</b>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="top-menu">
          <div className="top-menu-wrap-1">
            <div className="top-menu-wrap-2">
              <div className="top-menu-wrap-3">
                <ul className="menu pull-left">
                  <li className="item">
                    <a className=" active" href={require("./Logo/Resume.docx")} download="mySimpleCv.docx">
                      <img src={Cv} alt="resume" width="40px" height="auto" />
                      <div className="text">Download Cv(.docx)</div>
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
                            width="40px"
                            height="auto"
                          />
                          <div className="text">Github</div>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="item">
                    <a
                      href="https://www.linkedin.com/in/ankush-kumar-0m/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={Linkedin}
                        alt="Linkedin"
                        width="40px"
                        height="auto"
                      />
                      <div className="text">Linkedin</div>
                    </a>
                  </li>
                  <li className="item">
                    <a
                      className="facebook"
                      href="https://www.facebook.com/ankush.yadav.121"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={Facebook}
                        alt="Facebook"
                        width="40px"
                        height="auto"
                      />
                      <div className="text">Facebook</div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mine">
            <ul>
              <li>
                <a className="active" href="." >
                      <img src={Cv} alt="resume" width="40px" height="auto" />
                      <div className="text"> Cv</div>
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
                  <div className="text">Github</div>
                </a>
              </li>
              <li>
                <a
                  className="Linkedin"
                  href="https://www.linkedin.com/in/ankush-kumar-0m/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={Linkedin}
                    alt="Linkedin"
                    width="40px"
                    height="auto"
                  />
                  <div className="text">Linkedin</div>
                </a>
              </li>
              <li>
                <a
                  className="facebook"
                  href="https://www.facebook.com/ankush.yadav.121"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={Facebook}
                    alt="Facebook"
                    width="40px"
                    height="auto"
                  />
                  <div className="text">Facebook</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Header;
