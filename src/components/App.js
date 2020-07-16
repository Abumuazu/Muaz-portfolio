import React, { Component } from "react";
import Navigation from "./Nav/navigation";
import Header from "./header/header";
import BodyOne from "./body/bodyOne";
import MyWorks from "./myWorks/myWorks";
import Footer from "./footer/footer";
import Particles from "react-particles-js";
import "../components/App.css";
import Songs from "./songs/songs";
import Library from "./library/library";

// import Logoo from "./components/logo/logo";
// import "../components/app.scss"
const ParticlesOpton = {
  particles: {
    number: {
      value: 20,
      density: {
        enable: true,
        value_area: 300,
      },
    },
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: "home",
    };
  }
  onRouteChange = (route) => {
    this.setState({ route: route });
  };
  render() {
    const { route } = this.state;
    return (
      <div className="App">
        <Particles className="particles" params={ParticlesOpton} />
        <Navigation onRouteChange={this.onRouteChange} />
        {route === "home" ? (
          <div>
            <Header />
            <BodyOne onRouteChange={this.onRouteChange} />
          </div>
        ) : route === "myWorks" ? (
          <div>
            <MyWorks />
          </div>
        ) : route === "Library" ? (
          <div>
            <Library />
          </div>
        ) : (
          <div>
            <Songs />
          </div>
        )}
        ;
        <Footer onRouteChange={this.onRouteChange} />
      </div>
    );
  }
}

export default App;
