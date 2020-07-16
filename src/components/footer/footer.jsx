import React from "react";
import styled from "styled-components";
import github from "../images/github.svg";
import instagram from "../images/instagram.svg";
import linkedin from "../images/linkedin.svg";
import twitter from "../images/twitter.svg";
const StyleFooter = styled.div`
  section {
    min-height: 90vh;
    overflow-y: hidden;
    background-color: #5b015c;
    margin: 0 auto;
    @media screen and (min-width: 768px) {
      min-height: 70vh;
      .box2 {
        position: relative;
        top: 40%;
        left: 0%;
        font-size: 5rem;
      }
    }
  }
  .container {
    width: 85vw;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
    grid-gap: 20px;
  }
  .box {
    display: flex;
    flex-direction: column;
    color: #797575;
    padding: 25px;
    cursor: pointer;
    -moz-osx-font-smoothing: grayscale;
    backface-visibility: hidden;
  }
  li {
    list-style: none;
    text-align: center;
  }
  .box1 {
    position: relative;
    top: 30%;
    left: 0%;
  }
  .box2 {
    position: relative;
    top: 10%;
    left: 0%;
    font-size: 5rem;
  }
  .box3 {
    position: relative;
    top: 10%;
    left: 5%;
    font-size: 5rem;
  }
  input {
    background-color: transparent;
    text-transform: uppercase;
    font-size: 2rem;
    text-decoration: none;
    color: #09f755;
    // font-family: $tertiary-font;
    letter-spacing: -1px;
    transition: all 0.2s ease-in-out;
    border: none;
  }
  input:hover {
    letter-spacing: 3px;
  }
  a {
    text-transform: uppercase;
    font-size: 4rem;
    text-decoration: none;
    color: #09f755;
    // font-family: $tertiary-font;
    letter-spacing: -1px;
    transition: all 0.2s ease-in-out;
  }
  .resume:hover {
    transform: scale(1.05);
  }
  h4 {
    font-size: 1.7rem;
    text-align: left;
    color: #09f755;
    // font-family: $tertiary-font;
    letter-spacing: -1px;
    line-height: 3.1rem;
  }
  h1 {
    text-transform: uppercase;
    font-size: 2rem;
    text-align: left;
    color: #000000;
    // font-family: $tertiary-font;
    letter-spacing: -1px;
    margin-bottom: 0.5rem;
  }
  .socialLinks {
    display: flex;
    flex-direction: column;
  }
  .socialLinksBox {
    display: flex;
    align-items: center;
  }
  img {
    margin-right: 2rem;
    height: 2rem;
    filter: brightness(1%);
    transition: all 0.3s ease-in-out;
  }
  img:hover {
    transform: scale(2);
  }
`;

const Footer = ({ onRouteChange }) => {
  return (
    <StyleFooter>
      <section id="footer">
        <div className="container">
          <div className="box box1">
            <h1>Say hello</h1>
            <li>
              {" "}
              <h4> abumuazu@gmail.com</h4>{" "}
            </li>
            <li>
              <h4> &#128222; +234 0909 265 9629</h4>
            </li>
          </div>
          <div className="box box2">
            <ul>
              <li>
                <input
                  onClick={() => onRouteChange("myWorks")}
                  type="submit"
                  value="My Works"
                />
              </li>
              <li>
                <input
                  onClick={() => onRouteChange("Library")}
                  type="submit"
                  value=" my library"
                />
              </li>
              <li>
                <input
                  onClick={() => onRouteChange("Songs")}
                  type="submit"
                  value="My Songs"
                />
              </li>
            </ul>
            <a className="resume" href="#contact">
              Resume 📗
            </a>
          </div>
          <div className="box box3">
            <h1 className="heading-4">Lets Connect Globally</h1>
            <div className="socialLinks">
              <div className="socialLinksBox">
                <a href="#">
                  <img src={github} alt="github" />
                </a>
                <a href="#">
                  <img src={twitter} alt="twitter" />
                </a>
                <a href="#">
                  <img src={linkedin} alt="linkedin" />
                </a>
                <a href="#">
                  <img src={instagram} alt="instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </StyleFooter>
  );
};
export default Footer;
