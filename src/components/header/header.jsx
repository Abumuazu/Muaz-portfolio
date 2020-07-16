import React from "react";
import styled from "styled-components";
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

  article {
    position: absolute;
    top: 30%;
    left: 15%;
    font-size: 2rem;
    text-align: left;
  }
  h1 {
    font-size: 5rem;
    color: #09f755;
    @media screen and (min-width: 768px) {
      font-size: 8rem;
    }
  }
  p {
    color: #ffffff;
    margin-top: 3rem;
  }
  .dot {
    color: #ffffff;
  }
`;

const Header = () => {
  return (
    <StyleHeader>
      <header className="HeaderContainer">
        <div className="container">
          <span>
            {" "}
            <article className="article1">
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
            </article>
          </span>
        </div>
      </header>
    </StyleHeader>
  );
};
export default Header;
