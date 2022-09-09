import "./intro.scss";
import Typewriter from "typewriter-effect";

const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="./assets/man2.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I 'm</h2>
          <h1>Ali Ajibade</h1>
          <h3>
            Freelance
            <span>
              <Typewriter
                options={{
                  strings: ["Web Developer", "Graphic Designer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="./assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
