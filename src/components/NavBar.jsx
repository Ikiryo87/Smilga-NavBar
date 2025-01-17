import { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "../data";
import logo from "../logo.svg";

const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    if (linksRef.current) {
      // console.log(linksRef.current);
      const linksHeight = linksRef.current.getBoundingClientRect().height;
      // console.log(linksHeight); comes back as 160px
      if (showLinks) {
        setTimeout(() => {
          linksContainerRef.current.style.height = `${linksHeight}px`;
        }, 10);
      } else {
        linksContainerRef.current.style.height = "0px";
      }
    }
  }, [showLinks]);

  // const linkStyles = {
  //   height: showLinks
  //     ? `${linksRef.current.getBoundingClientRect().height}px`
  //     : "0px",
  // };

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="logo" />
          <button type="button" onClick={toggleLinks} className="nav-toggle">
            <FaBars />
          </button>
        </div>

        <div
          className="links-container"
          ref={linksContainerRef}
          // style={linkStyles}
        >
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        {/* social links */}
        <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;

// console.log(linksRef.current.getBoundingClientRect());
// onClick={() => setShowLinks(!showLinks)}
