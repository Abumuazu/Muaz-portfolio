import React from "react";
import styled from "styled-components";
import github from "../images/github.svg";
const StyleMyWorks = styled.section`
  min-height: 90vh;
  overflow-y: hidden;
  padding: 10rem 4rem 2rem 4rem;

  .container {
    min-width: 50vw;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
    grid-gap: 20px;
  }
  .box {
    background-color: #eee;
    display: flex;
    flex-direction: column;
    height: 50vh;
    box-shadow: 5px 5px 5px #555;
    border-radius: 3px;

    cursor: pointer;
    -moz-osx-font-smoothing: grayscale;
    backface-visibility: hidden;
    transform: translateZ(0);
    transition: all 0.25s ease-out;
  }
  .box:hover {
    transform: scale(1.05);
    transform: translate(1rem);
  }
  a {
    font-size: 1.5rem;
    text-decoration: none;
    color: blue;
    // font-family: $tertiary-font;

    transition: all 0.2s ease-in-out;
  }
  a:hover {
    color: #09f755;
  }
  img {
    margin-right: 2rem;
    height: 4rem;
    filter: brightness(1%);
  }
  .github {
    position: absolute;
    top: 10px;
    left: 10px;
  }
  .appName {
    position: absolute;
    top: 40%;
    right: 50%;
    font-size: 5rem;
    transform: translate(50%, -50%);
    color: #333;
  }
  .briefWriteUp {
    position: absolute;
    top: 70%;
    leftt: 0;
    font-size: 1.2rem;
    font-weight: 300;
    text-align: left;
    background-color: #fffafa;
    width: 100%;
    height: 16vh;
    padding: 1.5rem;
    color: #333;
    box-shadow: 5px 5px 5px #777;
  }
  h1 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 2rem;
    color: 333;
    font-weight: 700;
  }
  p {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 8rem;
    color: #333;
  }
`;

const MyWorks = () => {
  return (
    <StyleMyWorks>
      <section id="projects">
        <div className="head">
          <h1>/Works</h1>
          <p>Selected jobs i have worked on</p>
        </div>
        <div className="container">
          <div className="box box1">
            <div className="github">
              <a href="#">
                <img src={github} alt="github" />
              </a>
            </div>
            <div className="appName">
              <h1>Natours</h1>
            </div>
            <div className="briefWriteUp">
              <a
                className="link"
                href="https://abumuazu.github.io/natours/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Natours.website
              </a>
              <article>
                This is a design that showcases the frontend of a fictional
                company that specializes on tours...
              </article>
            </div>
          </div>
          <div className="box box1">
            <div className="github">
              <a href="#">
                <img src={github} alt="github" />
              </a>
            </div>
            <div className="appName">
              <h1>Identifier</h1>
            </div>
            <div className="briefWriteUp">
              <a
                className="link"
                href="https://abumuazu.github.io/Identifier-app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Identifier.app
              </a>
              <article>
                Identifier is a face detection app that points out bounded
                location of faces in pictures.
              </article>
            </div>
          </div>
          <div className="box box1">
            <div className="github">
              <a href="#">
                <img src={github} alt="github" />
              </a>
            </div>
            <div className="appName">
              <h1>FooDie</h1>
            </div>
            <div className="briefWriteUp">
              <a
                className="link"
                href="https://abumuazu.github.io/FooDie-App/"
                target="_blank"
                rel="noopener noreferrer"
              >
                FooDie.app
              </a>
              <article>
                This is a food content detection webapp.It accepts and access
                image url's, then produces the food image, food contents
                alongside thier calculated probabilities.
              </article>
            </div>
          </div>
        </div>
      </section>
    </StyleMyWorks>
  );
};

export default MyWorks;
