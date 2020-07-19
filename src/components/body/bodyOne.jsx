import React from "react";
import styled from "styled-components";
const StyleBodyOne = styled.div`
  section {
    min-height: 90vh;
    margin: 0 auto;
    padding: 9rem 0rem 2rem 1rem;
    @media screen and (max-width: 600px) {
      padding: 9rem 4rem 2rem 4rem;
    }
  }
  article {
    display: flex;
    flex-direction: column;
    background-color: #eee;
    min-height: 54vh;
    @media screen and (max-width: 768px) {
      min-height: 55vh;
    }

    box-shadow: 2px 2px 2px #999;
    border-radius: 5px;
    padding: 25px;
    cursor: pointer;
    -moz-osx-font-smoothing: grayscale;
    backface-visibility: hidden;
    transform: translateZ(0);
    transition: all 0.25s ease-out;
    &:hover {
      transform: scale(1.05);
      transform: translate(1rem);
    }
  }
  .innerContainer {
    min-width: 70vw;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
    @media screen and (max-width: 280px) {
      grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
    }
    grid-gap: 35px;
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
    border: 2px solid #333;
    color: #333;
    font-weight: 400;
    border-radius: 3px;
    width: 65%;
    height: 50px;
    display: block;
    align-self: center;
    background: linear-gradient(to right, #333 50%, transparent 50%);
    @media screen and (max-width: 768px) {
      background: transparent;
      border: 1px solid #333;
      color: #333;
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
    color: #09f755;
  }

  h1 {
    color: #333;
    font-weigh: 300;
    font-size: 4rem;
    margin-bottom: 1rem;
  }
  p {
    color: #666;
    font-weigh: 300;
  }
`;

const BodyOne = ({ onRouteChange }) => {
  return (
    <StyleBodyOne>
      d{" "}
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
                value="View my works &#10146;"
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
                value="view my library &#10146;"
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
                value="Bless your ears &#10146;"
              />
            </article>
          </div>
        </div>
      </section>
    </StyleBodyOne>
  );
};
export default BodyOne;
