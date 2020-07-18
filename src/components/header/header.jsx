import React from "react";
import styled from "styled-components";
import Muaz from "../images/muazu.JPG";
// import Particles from "react-particles-js";

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
    left: 15%;
    @media screen and (max-width: 768px) {
      position: absolute;
      top: 10%;
      left: 10%;
    }
  }
  .box2 {
    position: absolute;
    top: 30%;
    left: 65%;
    width: 300px;
    height: 300px;
    @media screen and (max-width: 768px) {
      position: absolute;
      top: 55%;
      left: 2%;
      width: 340px;
      height: 400px;
    }
    @media screen and (max-width: 350px) {
      position: absolute;
      top: 61.5%;
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
    width: 200px;
    height: 200px;
    transform: rotate(0deg);
    @media screen and (max-width: 768px) {
      width: 180px;
      height: 180px;
    }
    @media screen and (max-width: 350px) {
      width: 150px;
      height: 150px;
    }
  }
  button {
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
      background: #09f755;
      border: 1px solid black;
      color: white;
    }
    background-size: 200% 100%;
    background-position: right bottom;
    transition: all 0.2s ease-out;
    text-align: center;
    font-size: 16px;
    line-height: 30px;
    display: block;
  }
  button:hover {
    background-position: left bottom;
    color: white;
  }
  h1 {
    font-size: 7rem;
    color: #09f755;
  }
  p {
    color: #ffffff;
    margin-top: 3rem;
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
              <img src={Muaz} alt="myPhoto"></img>
            </div>
            <p className="more"> To know more about me</p>
            <button>Resume</button>
          </div>
        </div>
      </header>
    </StyleHeader>
  );
};
export default Header;
