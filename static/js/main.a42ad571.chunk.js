(this["webpackJsonpdanladi-portfolio"]=this["webpackJsonpdanladi-portfolio"]||[]).push([[0],{17:function(e,n,t){e.exports=t.p+"static/media/github.ad052847.svg"},302:function(e,n,t){},303:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(73),o=t.n(i),l=(t(92),t(74)),c=t(75),s=t(86),m=t(84),u=t(6),d=t(7),p=t(85);function f(){var e=Object(u.a)(["\n  z-index: 2;\n  list-style: none;\n  display: flex;\n  flex-row: row-nowrap;\n  background-color: #000000;\n  color: #09f755;\n  @media (max-width: 768px) {\n    flex-flow: column nowrap;\n    background-color: #f9f9f9;\n    transform: ",";\n    position: fixed;\n    top: 0;\n    right: 0;\n    height: 100vh;\n    width: 300px;\n    padding-top: 3.5rem;\n    color: #282c34;\n    transition: transform 0.3s ease-in-out;\n  }\n\n  li {\n    padding: 10px 10px;\n  }\n  a {\n    text-transform: uppercase;\n    font-size: 2rem;\n    text-decoration: none;\n    // font-family: $tertiary-font;\n    letter-spacing: -1px;\n    transition: all 0.2s ease-in-out;\n  }\n  a:hover {\n    letter-spacing: 3px;\n  }\n"]);return f=function(){return e},e}var h=d.a.ul(f(),(function(e){return e.open?"translateY(0)":"translateY(100%)"})),g=function(e){var n=e.open,t=e.onRouteChange;return r.a.createElement(h,{open:n},r.a.createElement("li",null,r.a.createElement("a",{onClick:function(){return t("home")}},"\ud83c\udfe1 Home")),r.a.createElement("li",null,r.a.createElement("a",{onClick:function(){return t("myWorks")}}," \ud83d\udcd7 My Work")),r.a.createElement("li",null,r.a.createElement("a",{onClick:function(){return t("Library")}},"\ud83d\udd30 My Library")))};function b(){var e=Object(u.a)(["\n  width: 2rem;\n  height: 2rem;\n  position: fixed;\n  top: 15px;\n  right: 20px;\n  display: none;\n  z-index: 3;\n  @media screen and (max-width: 768px) {\n    display: flex;\n    justify-content: space-around;\n    flex-flow: column nowrap;\n  }\n  div {\n    width: 2rem;\n    height: 0.2rem;\n    background-color: ",";\n    border-radius: 10px;\n    transform-origin: 1px;\n    transition: all 0.4s ease-in-out;\n\n    &:nth-child(1) {\n      transform: ",";\n    }\n    &:nth-child(2) {\n      transform: ",";\n      opacity: ",";\n    }\n    &:nth-child(3) {\n      transform: ",";\n    }\n  }\n"]);return b=function(){return e},e}var x=d.a.div(b(),(function(e){return e.open?"#09f755":"#ffffff"}),(function(e){return e.open?"rotate(45deg)":"rotate(0)"}),(function(e){return e.open?"translateX(100%)":"translateX(0)"}),(function(e){return e.open?0:1}),(function(e){return e.open?"rotate(325deg)":"rotate(0)"})),E=function(e){var n=e.onRouteChange,t=Object(a.useState)(!1),i=Object(p.a)(t,2),o=i[0],l=i[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{open:o,onClick:function(){return l(!o)}},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement(g,{open:o,onRouteChange:n}))};function v(){var e=Object(u.a)(['\n  width: 100%;\n  height: 45px;\n  border-bottom: 2px solid;\n  padding: 0 15px;\n  display: flex;\n  justify-content: space-between;\n  background-color: #000000;\n  cursor: pointer;\n\n  .title {\n    text-transform: uppercase;\n    font-family: "gilroy", sans-serif;\n    font-weight: bold;\n    letter-spacing: 5px;\n    position: absolute;\n    color: transparent;\n    padding: 1.5rem 0;\n  }\n\n  .title::before {\n    content: "Abu Muazu Danladi";\n    position: absolute;\n    top: 0;\n    left: 3rem;\n    width: 100%;\n    height: 100%;\n    color: #09f755;\n    overflow: hidden;\n    border-right: 1px solid #000;\n    white-space: nowrap;\n    animation: type 5s infinite;\n    padding: 1.5rem 0;\n  }\n\n  @keyframes type {\n    0% {\n      width: 0;\n    }\n\n    50% {\n      width: 100%;\n    }\n\n    100% {\n      width: 0;\n    }\n  }\n']);return v=function(){return e},e}var w=d.a.nav(v()),y=function(e){var n=e.onRouteChange;return r.a.createElement(w,null,r.a.createElement("div",{className:"logo"},r.a.createElement("div",{className:"title"},"Abu Muazu Danladi")),r.a.createElement(E,{onRouteChange:n}))},k=t(79),N=t.n(k);function z(){var e=Object(u.a)(["\n  header {\n    background-color: #000000;\n    height: 100vh;\n  }\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  .HeaderContainer {\n    min-width: 50vw;\n    margin: auto;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));\n    grid-gap: 20px;\n  }\n  .box {\n    display: flex;\n    flex-direction: column;\n  }\n  .box1 {\n    font-size: 2rem;\n    text-align: left;\n    position: absolute;\n    top: 30%;\n    left: 9%;\n    @media screen and (max-width: 768px) {\n      position: absolute;\n      top: 10%;\n      left: 10%;\n    }\n  }\n  .box2 {\n    position: absolute;\n    top: 30%;\n    left: 60%;\n    width: 300px;\n    height: 300px;\n    @media screen and (max-width: 768px) {\n      position: absolute;\n      top: 55%;\n      left: 2%;\n      width: 340px;\n      height: 400px;\n    }\n    @media screen and (max-width: 350px) {\n      position: absolute;\n      top: 61%;\n      left: -12%;\n    }\n  }\n  .pictureContainer {\n    margin: 0 auto;\n    width: 200px;\n    height: 200px;\n    border: 10px solid #09f755;\n    overflow: hidden;\n    transform: rotate(-11deg);\n    transition: all 0.3s linear;\n    @media screen and (max-width: 768px) {\n      width: 180px;\n      height: 180px;\n    }\n    @media screen and (max-width: 350px) {\n      width: 150px;\n      height: 150px;\n    }\n  }\n  .pictureContainer:hover {\n    transform: rotate(0deg);\n  }\n  img {\n    position: absolute;\n    left: -6%;\n    top: -9%;\n    width: 200px;\n    height: 200px;\n    transform: rotate(11deg);\n    @media screen and (max-width: 768px) {\n      width: 180px;\n      height: 180px;\n    }\n    @media screen and (max-width: 350px) {\n      width: 150px;\n      height: 150px;\n    }\n  }\n  a {\n    padding: 1rem;\n    cursor: pointer;\n    border: 1px solid #09f755;\n    color: #09f755;\n    border-radius: 50px;\n    width: 65%;\n    height: 50px;\n    display: inline-block;\n    align-self: center;\n    background: linear-gradient(to right, #09f755 50%, black 50%);\n    @media screen and (max-width: 768px) {\n      background: #000000;\n      border: 1px solid #09f755;\n      color: #09f755;\n    }\n    background-size: 200% 100%;\n    background-position: right bottom;\n    transition: all 0.2s ease-out;\n    text-align: center;\n    font-size: 16px;\n    line-height: 30px;\n    display: block;\n  }\n  a:hover {\n    background-position: left bottom;\n    color: white;\n  }\n  h1 {\n    font-size: 7rem;\n    color: #09f755;\n    @media screen and (max-width: 350px) {\n      font-size: 5rem;\n    }\n  }\n  p {\n    color: #ffffff;\n    margin-top: 3rem;\n    @media screen and (max-width: 900px) {\n      font-size: 1.6rem;\n    }\n  }\n  .dot {\n    color: #ffffff;\n  }\n  .more {\n    font-size: 2rem;\n    color: #eee;\n    margin-bottom: 1.5rem;\n    text-align: center;\n  }\n"]);return z=function(){return e},e}var C=d.a.div(z()),j=function(){return r.a.createElement(C,null,r.a.createElement("header",null,r.a.createElement("div",{className:"HeaderContainer"},r.a.createElement("div",{className:"box box1"},r.a.createElement("span",null," ",r.a.createElement("div",{className:"para"},r.a.createElement("h1",null,r.a.createElement("span",null,"Frontend",r.a.createElement("br",null)," Developer",r.a.createElement("span",{className:"dot"},"."))),r.a.createElement("p",null,"As a mathematically minded developer,",r.a.createElement("br",null)," i love to build FE products with exceptional user experience.")))),r.a.createElement("div",{className:"box box2"},r.a.createElement("div",{className:"pictureContainer"},r.a.createElement("img",{src:N.a,alt:"myPhoto"})),r.a.createElement("p",{className:"more"}," To know more about me"),r.a.createElement("a",{href:"https://drive.google.com/file/d/1QjT693auRmwp9gssos9dLE7QoOr0J8Pj/view?usp=sharing",target:"_blank",rel:"noopener noreferrer"},"Resume")))))};function R(){var e=Object(u.a)(["\n  .FirstContainer {\n    margin: 0;\n    text-align: center;\n    padding: 4rem 0rem 0rem 0rem;\n  }\n  .cont {\n    background-color: #eee;\n    box-shadow: 1px 1px 1px #999;\n    width: 100px;\n    display: inline-block;\n    @media screen and (max-width: 768px) {\n      display: block;\n      margin: 0 auto;\n      width: 70vw;\n    }\n    @media screen and (max-width: 630px) {\n      width: 90vw;\n    }\n    padding: 6rem;\n    height: 60vh;\n    width: 46vw;\n    text-align: left;\n    color: #000000;\n    font-family: arial, sans-serif;\n  }\n  .cont1 {\n    border-right: 2px solid #09f755;\n    @media screen and (max-width: 768px) {\n      border-bottom: 2px solid #09f755;\n      border-right: none;\n    }\n  }\n  .cont2 {\n  }\n  h1 {\n    font-size: 5.4rem;\n    color: #333;\n    font-weight: 700;\n    margin-bottom: 3rem;\n    @media screen and (max-width: 430px) {\n      font-size: 3.7rem;\n    }\n  }\n  p {\n    color: #666;\n\n    font-size: 2rem;\n    margin-bottom: 3rem;\n    @media screen and (max-width: 430px) {\n      font-size: 1.6rem;\n    }\n    @media screen and (max-width: 300px) {\n      font-size: 1.2rem;\n    }\n  }\n"]);return R=function(){return e},e}var O=d.a.section(R()),W=function(){return r.a.createElement(O,null,r.a.createElement("section",{className:"projected"},r.a.createElement("div",{className:"FirstContainer"},r.a.createElement("div",{className:"cont cont1"},r.a.createElement("h1",null,"Design"),r.a.createElement("p",null,"Using an illustrator artboard or photoshop is probably not where you would find me, but i design. Deeped in stylesheets pondering layouts,analysing color principles, modifying font sizes while crafting great user experience is where you would see me in action")),r.a.createElement("div",{className:"cont cont2"}," ",r.a.createElement("h1",null,"Engineering"),r.a.createElement("p",null,"--Performance-- being my top priotity while building scalable javascript applications, i'm furnished with the right tools to deliver fast and precise solution.")))))};function L(){var e=Object(u.a)(["\n  section {\n    min-height: 90vh;\n    margin: 0 auto;\n    padding: 9rem 4rem 2rem 4rem;\n  }\n  article {\n    display: flex;\n    flex-direction: column;\n    color: #333;\n    background-color: #eee;\n    min-height: 54vh;\n    @media screen and (max-width: 768px) {\n      min-height: 50vh;\n    }\n    @media screen and (max-width: 320px) {\n      min-height: 40vh;\n    }\n\n    box-shadow: 2px 2px 2px #999;\n    border-radius: 5px;\n    padding: 25px;\n    cursor: pointer;\n    -moz-osx-font-smoothing: grayscale;\n    backface-visibility: hidden;\n    transform: translateZ(0);\n    transition: all 0.25s ease-out;\n    &:hover {\n      transform: scale(1.05);\n      transform: translate(1rem);\n    }\n  }\n  .innerContainer {\n    min-width: 70vw;\n    margin: auto;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));\n    grid-gap: 35px;\n  }\n  .article {\n    position: absolute;\n    top: 9%;\n    left: 50%%;\n    font-size: 2rem;\n    text-align: left;\n  }\n\n  input {\n    position: relative;\n    top: 23rem;\n    padding: 1rem;\n    cursor: pointer;\n    border: 2px solid #333;\n    color: #333;\n    font-weight: 400;\n    border-radius: 3px;\n    width: 65%;\n    height: 50px;\n    display: block;\n    align-self: center;\n    background: linear-gradient(to right, #333 50%, transparent 50%);\n    @media screen and (max-width: 768px) {\n      background: transparent;\n      border: 1px solid #333;\n      color: #333;\n    }\n    background-size: 200% 100%;\n    background-position: right bottom;\n    transition: all 0.2s ease-out;\n\n    text-align: center;\n    font-size: 16px;\n    line-height: 30px;\n\n    display: block;\n  }\n  input:hover {\n    background-position: left bottom;\n    color: #09f755;\n  }\n\n  h1 {\n    color: #333;\n    font-size: 4rem;\n    margin-bottom: 1rem;\n  }\n  p {\n    color: #666;\n  }\n"]);return L=function(){return e},e}var I=d.a.div(L()),A=function(e){var n=e.onRouteChange;return r.a.createElement(I,null,r.a.createElement("section",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"innerContainer"},r.a.createElement("article",null,r.a.createElement("div",{className:"article"},r.a.createElement("h1",null,"I build & ",r.a.createElement("br",null),"design stuffs"),r.a.createElement("p",null,"Websites, web apps",r.a.createElement("br",null)," and experiments")),r.a.createElement("input",{onClick:function(){return n("myWorks")},type:"submit",value:"View my works \u27a2"})),r.a.createElement("article",null,r.a.createElement("div",{className:"article"},r.a.createElement("h1",null," ","I love ",r.a.createElement("br",null),"reading"),r.a.createElement("p",null,"about frontend dev, designs",r.a.createElement("br",null),"music, learning and life")),r.a.createElement("input",{onClick:function(){return n("Library")},type:"submit",value:"view my library \u27a2"})),r.a.createElement("article",null,r.a.createElement("div",{className:"article"},r.a.createElement("h1",null," ","I write & compose",r.a.createElement("br",null),"songs alot"," "),r.a.createElement("p",null,"afro pop, afro raggae, ",r.a.createElement("br",null),"inspirational and R&B.")),r.a.createElement("input",{onClick:function(){return n("Songs")},type:"submit",value:"Bless your ears \u27a2"}))))))},D=t(17),_=t.n(D);function F(){var e=Object(u.a)(["\n  min-height: 90vh;\n  overflow-y: hidden;\n  padding: 10rem 4rem 2rem 4rem;\n\n  .container {\n    min-width: 50vw;\n    margin: auto;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));\n    grid-gap: 20px;\n  }\n  .box {\n    background-color: #eee;\n    display: flex;\n    flex-direction: column;\n    height: 50vh;\n    box-shadow: 5px 5px 5px #555;\n    border-radius: 3px;\n\n    cursor: pointer;\n    -moz-osx-font-smoothing: grayscale;\n    backface-visibility: hidden;\n    transform: translateZ(0);\n    transition: all 0.25s ease-out;\n  }\n  .box:hover {\n    transform: scale(1.05);\n    transform: translate(1rem);\n  }\n  a {\n    font-size: 1.5rem;\n    text-decoration: none;\n    color: blue;\n    // font-family: $tertiary-font;\n\n    transition: all 0.2s ease-in-out;\n  }\n  a:hover {\n    color: #09f755;\n  }\n  img {\n    margin-right: 2rem;\n    height: 4rem;\n    filter: brightness(1%);\n  }\n  .github {\n    position: absolute;\n    top: 10px;\n    left: 10px;\n  }\n  .appName {\n    position: absolute;\n    top: 40%;\n    right: 50%;\n    font-size: 5rem;\n    transform: translate(50%, -50%);\n    color: #333;\n  }\n  .briefWriteUp {\n    position: absolute;\n    top: 70%;\n    leftt: 0;\n    font-size: 1.2rem;\n    font-weight: 300;\n    text-align: left;\n    background-color: #fffafa;\n    width: 100%;\n    height: 16vh;\n    padding: 1.5rem;\n    color: #333;\n    box-shadow: 5px 5px 5px #777;\n  }\n  h1 {\n    text-align: center;\n    font-size: 4rem;\n    margin-bottom: 2rem;\n    color: 333;\n    font-weight: 700;\n  }\n  p {\n    text-align: center;\n    font-size: 2rem;\n    margin-bottom: 8rem;\n    color: #333;\n  }\n"]);return F=function(){return e},e}var P=d.a.section(F()),S=function(){return r.a.createElement(P,null,r.a.createElement("section",{id:"projects"},r.a.createElement("div",{className:"head"},r.a.createElement("h1",null,"/Works"),r.a.createElement("p",null,"Selected jobs i have worked on")),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"box box1"},r.a.createElement("div",{className:"github"},r.a.createElement("a",{href:"#"},r.a.createElement("img",{src:_.a,alt:"github"}))),r.a.createElement("div",{className:"appName"},r.a.createElement("h1",null,"Natours")),r.a.createElement("div",{className:"briefWriteUp"},r.a.createElement("a",{className:"link",href:"https://abumuazu.github.io/Natours/",target:"_blank",rel:"noopener noreferrer"},"Natours.website"),r.a.createElement("article",null,"This is a design that showcases the frontend of a fictional company that specializes on tours..."))),r.a.createElement("div",{className:"box box1"},r.a.createElement("div",{className:"github"},r.a.createElement("a",{href:"#"},r.a.createElement("img",{src:_.a,alt:"github"}))),r.a.createElement("div",{className:"appName"},r.a.createElement("h1",null,"Identifier")),r.a.createElement("div",{className:"briefWriteUp"},r.a.createElement("a",{className:"link",href:"https://abumuazu.github.io/Identifier-app/",target:"_blank",rel:"noopener noreferrer"},"Identifier.app"),r.a.createElement("article",null,"Identifier is a face detection app that points out bounded location of faces in pictures."))),r.a.createElement("div",{className:"box box1"},r.a.createElement("div",{className:"github"},r.a.createElement("a",{href:"#"},r.a.createElement("img",{src:_.a,alt:"github"}))),r.a.createElement("div",{className:"appName"},r.a.createElement("h1",null,"FooDie")),r.a.createElement("div",{className:"briefWriteUp"},r.a.createElement("a",{className:"link",href:"https://abumuazu.github.io/FooDie-App/",target:"_blank",rel:"noopener noreferrer"},"FooDie.app"),r.a.createElement("article",null,"This is a food content detection webapp.It accepts and access image url's, then produces the food image, food contents alongside thier calculated probabilities."))))))},B=t(80),M=t.n(B),T=t(81),$=t.n(T),H=t(82),U=t.n(H);function J(){var e=Object(u.a)(["\n  section {\n    min-height: 90vh;\n    overflow-y: hidden;\n    background-color: #282c34;\n    margin: 0 auto;\n    @media screen and (min-width: 768px) {\n      min-height: 70vh;\n      .box2 {\n        position: relative;\n        top: 40%;\n        left: 0%;\n        font-size: 5rem;\n      }\n    }\n  }\n  .container {\n    width: 85vw;\n    margin: auto;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));\n    grid-gap: 20px;\n  }\n  .box {\n    display: flex;\n    flex-direction: column;\n    color: #797575;\n    padding: 25px;\n    cursor: pointer;\n    -moz-osx-font-smoothing: grayscale;\n    backface-visibility: hidden;\n  }\n  li {\n    list-style: none;\n    text-align: center;\n  }\n  .box1 {\n    position: relative;\n    top: 30%;\n    left: 0%;\n  }\n  .box2 {\n    position: relative;\n    top: 10%;\n    left: 0%;\n    font-size: 5rem;\n  }\n  .box3 {\n    position: relative;\n    top: 10%;\n    left: 5%;\n    font-size: 5rem;\n  }\n  input {\n    background-color: transparent;\n    text-transform: uppercase;\n    font-size: 2rem;\n    text-decoration: none;\n    color: #09f755;\n    // font-family: $tertiary-font;\n    letter-spacing: -1px;\n    transition: all 0.2s ease-in-out;\n    border: none;\n  }\n  input:hover {\n    letter-spacing: 3px;\n  }\n  a {\n    text-transform: uppercase;\n    font-size: 4rem;\n    text-decoration: none;\n    color: #09f755;\n    // font-family: $tertiary-font;\n    letter-spacing: -1px;\n    transition: all 0.2s ease-in-out;\n  }\n  .resume:hover {\n    transform: scale(1.05);\n  }\n  h4 {\n    font-size: 1.7rem;\n    text-align: left;\n    color: #09f755;\n    // font-family: $tertiary-font;\n    letter-spacing: -1px;\n    line-height: 3.1rem;\n  }\n  h1 {\n    text-transform: uppercase;\n    font-size: 2rem;\n    text-align: left;\n    color: #000000;\n    // font-family: $tertiary-font;\n    letter-spacing: -1px;\n    margin-bottom: 0.5rem;\n  }\n  .socialLinks {\n    display: flex;\n    flex-direction: column;\n  }\n  .socialLinksBox {\n    display: flex;\n    align-items: center;\n  }\n  img {\n    margin-right: 2rem;\n    height: 2rem;\n    filter: brightness(1%);\n    transition: all 0.3s ease-in-out;\n  }\n  img:hover {\n    transform: scale(2);\n  }\n"]);return J=function(){return e},e}var Q=d.a.div(J()),X=function(e){var n=e.onRouteChange;return r.a.createElement(Q,null,r.a.createElement("section",{id:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"box box1"},r.a.createElement("h1",null,"Say hello"),r.a.createElement("li",null," ",r.a.createElement("h4",null," \u2709 abumuazu@gmail.com")," "),r.a.createElement("li",null,r.a.createElement("h4",null," \ud83d\udcde +234 0909 265 9629"))),r.a.createElement("div",{className:"box box2"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("input",{onClick:function(){return n("myWorks")},type:"submit",value:" \ud83d\udcd7  My Works"})),r.a.createElement("li",null,r.a.createElement("input",{onClick:function(){return n("Library")},type:"submit",value:"\ud83d\udd30 my library"})),r.a.createElement("li",null,r.a.createElement("input",{onClick:function(){return n("Songs")},type:"submit",value:"\u266b My Songs"}))),r.a.createElement("a",{className:"resume",href:"https://drive.google.com/file/d/1QjT693auRmwp9gssos9dLE7QoOr0J8Pj/view?usp=sharing",target:"_blank",rel:"noopener noreferrer"},"Resume \ud83d\udcd7")),r.a.createElement("div",{className:"box box3"},r.a.createElement("h1",{className:"heading-4"},"Lets Connect Globally"),r.a.createElement("div",{className:"socialLinks"},r.a.createElement("div",{className:"socialLinksBox"},r.a.createElement("a",{href:"#"},r.a.createElement("img",{src:_.a,alt:"github"})),r.a.createElement("a",{href:"#"},r.a.createElement("img",{src:U.a,alt:"twitter"})),r.a.createElement("a",{href:"#"},r.a.createElement("img",{src:$.a,alt:"linkedin"})),r.a.createElement("a",{href:"#"},r.a.createElement("img",{src:M.a,alt:"instagram"}))))))))},Y=t(83),Z=t.n(Y);t(302);function q(){var e=Object(u.a)(["\n  font-size: 8rem;\n  text-align: center;\n  min-height: 50vh;\n"]);return q=function(){return e},e}var G=d.a.div(q()),V=function(){return r.a.createElement(G,null,r.a.createElement("div",null,"Update in progres..."))};function K(){var e=Object(u.a)(["\n  min-height: 100vh;\n  position: relative;\n  padding: 4rem 3rem;\n  -moz-osx-font-smoothing: grayscale;\n\n  ul {\n    box-sizing: border-box;\n    overflow-y: auto;\n    max-height: 100vh;\n    width: 60vw;\n    @media (max-width: 768px) {\n      width: 85vw;\n    }\n    scroll-behavior: auto;\n    background-color: #eee;\n    padding: 4rem;\n    margin: 0;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    box-shadow: 5px 5px 5px #555;\n    display: flex;\n    flex-direction: column;\n  }\n  li {\n    list-style: none;\n    border-bottom: 1px solid grey;\n    margin-bottom: 8rem;\n  }\n  a {\n    text-decoration: none;\n    color: #333;\n    // font-family: $tertiary-font;\n  }\n  .date {\n    color: #ggg;\n    margin-bottom: 1.5rem;\n    font-size: 2rem;\n  }\n  h1 {\n    margin-bottom: 1.5rem;\n    font-size: 3rem;\n  }\n  p {\n    color: #ggg;\n    margin-bottom: 1.3rem;\n    font-size: 2rem;\n    text-align: left;\n  }\n  h5 {\n    text-align: center;\n    font-size: 4rem;\n    margin-bottom: 3rem;\n    color: grey;\n  }\n"]);return K=function(){return e},e}var ee=d.a.ul(K()),ne=function(){return r.a.createElement(ee,null,r.a.createElement("ul",null,r.a.createElement("div",{className:"head"},r.a.createElement("h5",null,"/Library")),r.a.createElement("li",null,r.a.createElement("div",{className:"box "},r.a.createElement("articles",null,r.a.createElement("a",{href:"https://olaolu.dev/shelf/web-performance-the-big-picture/",target:"_blank"},r.a.createElement("div",{className:"date"},r.a.createElement("h4",null,"by Adeneye Abiodun David ")),r.a.createElement("h1",null,"Best Practices With React Hooks"),r.a.createElement("p",null," ","React Hooks are a new addition in React 16.8 that let you use state and other React features without writing a class component. In other words, Hooks are functions that let you \u201chook into\u201d React state and"))))),r.a.createElement("li",null,r.a.createElement("div",{className:"box "},r.a.createElement("articles",null,r.a.createElement("a",{href:"https://olaolu.dev/shelf/web-performance-the-problems/",target:"_blank"},r.a.createElement("div",{className:"date"},r.a.createElement("h4",null,"by Olaolu ")),r.a.createElement("h1",null,"Web Performance: The problems"),r.a.createElement("p",null," ","No doubt, there's a ton of reason why websites are slow, some of which are case specific, i like to look at this from two perspective..."))))),r.a.createElement("li",null,r.a.createElement("div",{className:"box "},r.a.createElement("articles",null,r.a.createElement("a",{href:"https://olaolu.dev/shelf/web-performance-the-big-picture/",target:"_blank"},r.a.createElement("div",{className:"date"},r.a.createElement("h4",null,"by Olaolu ")),r.a.createElement("h1",null,"Web Performance: The Big Picture"),r.a.createElement("p",null," ","As the web platfform continues to evolve very quicky, new technologies and devlopment spring up even more rapidly, it has become more alarming, how many slow sites are on the web today...")))))))},te={particles:{number:{value:20,density:{enable:!0,value_area:300}}}},ae=function(e){Object(s.a)(t,e);var n=Object(m.a)(t);function t(){var e;return Object(l.a)(this,t),(e=n.call(this)).onRouteChange=function(n){e.setState({route:n})},e.state={route:"home"},e}return Object(c.a)(t,[{key:"render",value:function(){var e=this.state.route;return r.a.createElement("div",{className:"App"},r.a.createElement(Z.a,{className:"particles",params:te}),r.a.createElement(y,{onRouteChange:this.onRouteChange}),"home"===e?r.a.createElement("div",null,r.a.createElement(j,null),r.a.createElement(W,null),r.a.createElement(A,{onRouteChange:this.onRouteChange})):"myWorks"===e?r.a.createElement("div",null,r.a.createElement(S,null)):"Library"===e?r.a.createElement("div",null,r.a.createElement(ne,null)):r.a.createElement("div",null,r.a.createElement(V,null)),";",r.a.createElement(X,{onRouteChange:this.onRouteChange}))}}]),t}(a.Component);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ae,null)),document.getElementById("root"))},79:function(e,n,t){e.exports=t.p+"static/media/Abu1.a8cbfc19.jpg"},80:function(e,n,t){e.exports=t.p+"static/media/instagram.bd965c81.svg"},81:function(e,n,t){e.exports=t.p+"static/media/linkedin.12e9c34e.svg"},82:function(e,n,t){e.exports=t.p+"static/media/twitter.c4c914f8.svg"},87:function(e,n,t){e.exports=t(303)},92:function(e,n,t){}},[[87,1,2]]]);
//# sourceMappingURL=main.a42ad571.chunk.js.map