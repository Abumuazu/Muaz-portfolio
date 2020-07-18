import React from "react";
import styled from "styled-components";
const StyleFirstBody = styled.section`
  .FirstContainer {
    margin: 0;
    text-align: center;
    padding: 17rem 4rem 2rem 4rem;
  }
  .cont {
    background-color: #eee;
    box-shadow: 1px 1px 1px #999;
    width: 100px;
    display: inline-block;
    @media screen and (max-width: 768px) {
      display: block;
      margin: 0 auto;
      width: 70vw;
    }
    @media screen and (max-width: 630px) {
      width: 90vw;
    }
    padding: 6rem;
    height: 60vh;
    width: 46vw;
    text-align: left;
    color: #000000;
    font-family: arial, sans-serif;
  }
  .cont1 {
    border-right: 2px solid #09f755;
    @media screen and (max-width: 768px) {
      border-bottom: 2px solid #09f755;
      border-right: none;
    }
  }
  .cont2 {
  }
  h1 {
    font-size: 6rem;
    color: #333;
    font-weight: 800;
    margin-bottom: 3rem;
    @media screen and (max-width: 430px) {
      font-size: 3.7rem;
    }
  }
  p {
    color: #666;

    font-size: 2rem;
    margin-bottom: 3rem;
    @media screen and (max-width: 430px) {
      font-size: 1.2rem;
    }
  }
`;

const FirstBody = () => {
  return (
    <StyleFirstBody>
      <section className="projected">
        <div className="FirstContainer">
          <div className="cont cont1">
            <h1>Design</h1>
            <p>
              Using an illustrator artboard or photoshop is probably not where
              you would find me, but i design. Deeped in stylesheets pondering
              layouts,analysing color principles, modifying font sizes while
              crafting great user experience is where you would see me in action
            </p>
          </div>
          <div className="cont cont2">
            {" "}
            <h1>Engineering</h1>
            <p>
              --Performance-- being my top priotity while building scalable
              javascript applications, i'm furnished with the right tools to
              deliver fast and precise solution.
            </p>
          </div>
        </div>
      </section>
    </StyleFirstBody>
  );
};

export default FirstBody;
