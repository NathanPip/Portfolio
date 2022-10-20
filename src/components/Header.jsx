import { createEffect, createSignal } from "solid-js";

const Header = () => {
  const [scroll, setScroll] = createSignal(window.scrollY);

  createEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  });

  return (
    <div className="header">
      <div className="title-container">

        <h1 id="title">
          Nathan Piper <span id="title-desc">front-end web developer</span>
        </h1>

        <ul className="header-links">
          <li>
            <a href="https://github.com/NathanPip" target="_blank" rel="noreferrer">
              <img
                alt="github logo"
                src="https://img.icons8.com/ios-glyphs/120/000000/github.png"
              />
              github
            </a>
          </li>

          <li>
            <a href="https://www.linkedin.com/in/nathan-piper-3b8610231/" target="_blank" rel="noreferrer">
              <img
                alt="linkedin logo"
                src="https://img.icons8.com/ios-filled/100/000000/linkedin.png"
              />
              linkedin
            </a>
          </li>

          <li>
            <a href="#projects">
              <img
                alt="work briefcase logo"
                src="https://img.icons8.com/dotty/80/000000/briefcase.png"
              />
              my work
            </a>
          </li>

          <li>
            <a href="https://docs.google.com/document/d/1_7k2zIPNNdGSqMGPXK-u_X-QOQbP_9OQp8re2uXRhBg/edit?usp=sharing" target="_blank" rel="noreferrer">
              <img
                alt="resume logo"
                src="https://img.icons8.com/ios/100/000000/open-resume.png"
              />
              resume
            </a>
          </li>
        </ul>

        <p className="about-me">
          A passionate web developer who loves making cool stuff. Check out my work below.
        </p>

      </div>

      <ul className="nav">
            <a href="#projects"><li id="project-nav">projects</li></a>
            <a href="#skills"><li id="skill-nav">skills</li></a>
            <a href="#socials"><li id="project-nav">socials</li></a>
            <a href="#contact"><li id="contact-nav">contact</li></a>
      </ul>

      <p className={`scroll-down ${scroll() > 25 ? "fade-out" : ""}`}>
        scroll <span>down</span>
      </p>

    </div>
  );
}

export default Header;
