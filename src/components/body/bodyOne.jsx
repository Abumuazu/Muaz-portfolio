import React from "react";
import styled from "styled-components";
const StyleBodyOne = styled.div`
  section {
    min-height: 90vh;

    margin: 0 auto;
    padding: 9rem 2rem 2rem 2rem;
  }
  article {
    display: flex;
    flex-direction: column;
    color: #797575;
    background-color: #000000;
    height: 60vh;
    @media screen and (max-width: 768px) {
      min-height: 65vh;
    }
    border: 1px solid rgb(47, 46, 46);
    box-shadow: 1px 2px 2px black;
    border-radius: 5px;
    padding: 25px;
    cursor: pointer;
    -moz-osx-font-smoothing: grayscale;
    backface-visibility: hidden;
    transform: translateZ(0);
    transition: all 0.25s ease-out;
    &:hover {
      transform: scale(1.05);
    }
  }
  .innerContainer {
    min-width: 70vw;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
    grid-gap: 20px;
  }
  .article {
    position: absolute;
    top: 9%;
    left: 50%%;
    font-size: 2rem;
    text-align: left;
  }

  input {
    position: relative;
    top: 23rem;
    padding: 1rem;
    cursor: pointer;
    border: 1px solid #09f755;
    color: #09f755;
    border-radius: 3px;
    width: 65%;
    height: 50px;
    display: block;
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
  input:hover {
    background-position: left bottom;
    color: white;
  }

  h1 {
    color: #797575;
    font-size: 4rem;
    margin-bottom: 1rem;
  }
  p {
    color: #ffffff;
  }
`;

const BodyOne = ({ onRouteChange }) => {
  return (
    <StyleBodyOne>
      <section>
        <div className="container">
          <div className="innerContainer">
            <article>
              <div className="article">
                <h1>
                  I build & <br />
                  design stuffs
                </h1>
                <p>
                  Websites, web apps
                  <br /> and experiments
                </p>
              </div>

              <input
                onClick={() => onRouteChange("myWorks")}
                type="submit"
                value="View my works"
              />
            </article>

            <article>
              <div className="article">
                <h1>
                  {" "}
                  I love <br />
                  reading
                </h1>
                <p>
                  about frontend dev, designs
                  <br />
                  music, learning and life
                </p>
              </div>
              <input
                onClick={() => onRouteChange("Library")}
                type="submit"
                value="view my library"
              />
            </article>
            <article>
              <div className="article">
                <h1>
                  {" "}
                  I write & compose
                  <br />
                  songs alot{" "}
                </h1>
                <p>
                  afro pop, afro raggae, <br />
                  inspirational and R&B.
                </p>
              </div>

              <input
                onClick={() => onRouteChange("Songs")}
                type="submit"
                value="Bless your ears"
              />
            </article>
          </div>
        </div>
      </section>
    </StyleBodyOne>
  );
};
export default BodyOne;
