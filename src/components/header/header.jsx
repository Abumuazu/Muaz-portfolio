import React from "react";
import styled from "styled-components";
import Abu1 from "../images/Abu1.jpg";

const StyleHeader = styled.div`
  header {
    background-color: #000000;
    height: 100vh;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .HeaderContainer {
    min-width: 50vw;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
    grid-gap: 20px;
  }
  .box {
    display: flex;
    flex-direction: column;
  }
  .box1 {
    font-size: 2rem;
    text-align: left;
    position: absolute;
    top: 30%;
    left: 9%;
    @media screen and (max-width: 768px) {
      position: absolute;
      top: 10%;
      left: 10%;
    }
  }
  .box2 {
    position: absolute;
    top: 30%;
    left: 60%;
    width: 300px;
    height: 300px;
    @media screen and (max-width: 768px) {
      position: absolute;
      top: 55%;
      left: -3%;
      width: 340px;
      height: 400px;
    }
    @media screen and (max-width: 350px) {
      position: absolute;
      top: 61%;
      left: -14%;
    }
  }
  .pictureContainer {
    margin: 0 auto;
    width: 200px;
    height: 200px;
    border: 10px solid #09f755;
    overflow: hidden;
    transform: rotate(-11deg);
    transition: all 0.3s linear;
    @media screen and (max-width: 768px) {
      width: 180px;
      height: 180px;
    }
    @media screen and (max-width: 350px) {
      width: 150px;
      height: 150px;
    }
  }
  .pictureContainer:hover {
    transform: rotate(0deg);
  }
  img {
    position: absolute;
    left: -6%;
    top: -9%;
    width: 200px;
    height: 200px;
    transform: rotate(11deg);
    @media screen and (max-width: 768px) {
      width: 180px;
      height: 180px;
    }
    @media screen and (max-width: 350px) {
      width: 150px;
      height: 150px;
    }
  }
  a {
    padding: 1rem;
    cursor: pointer;
    border: 1px solid #09f755;
    color: #09f755;
    border-radius: 50px;
    width: 65%;
    height: 50px;
    display: inline-block;
    align-self: center;
    background: linear-gradient(to right, #09f755 50%, black 50%);
    @media screen and (max-width: 768px) {
      background: #000000;
      border: 1px solid #09f755;
      color: #09f755;
    }
    background-size: 200% 100%;
    background-position: right bottom;
    transition: all 0.2s ease-out;
    text-align: center;
    font-size: 16px;
    line-height: 30px;
    display: block;
  }
  a:hover {
    background-position: left bottom;
    color: white;
  }
  h1 {
    font-size: 7rem;
    color: #09f755;
    @media screen and (max-width: 780px) {
      font-size: 5.5rem;
    }
    @media screen and (max-width: 280px) {
      font-size: 5rem;
    }
  }
  p {
    color: #ffffff;
    margin-top: 3rem;
    @media screen and (max-width: 900px) {
      font-size: 1.6rem;
    }
  }
  .dot {
    color: #ffffff;
  }
  .more {
    font-size: 2rem;
    color: #eee;
    margin-bottom: 1.5rem;
    text-align: center;
  }
`;

const Header = () => {
  return (
    <StyleHeader>
      <header>
        <div className="HeaderContainer">
          <div className="box box1">
            <span>
              {" "}
              <div className="para">
                <h1>
                  <span>
                    Frontend
                    <br /> Developer<span className="dot">.</span>
                  </span>
                </h1>
                <p>
                  As a mathematically minded developer,
                  <br /> i love to build FE products with exceptional user
                  experience.
                </p>
              </div>
            </span>
          </div>
          <div className="box box2">
            <div className="pictureContainer">
              <img src={Abu1} alt="myPhoto"></img>
            </div>
            <p className="more"> To know more about me</p>
            <a
              href="https://drive.google.com/file/d/1QjT693auRmwp9gssos9dLE7QoOr0J8Pj/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
      </header>
    </StyleHeader>
  );
};
export default Header;
