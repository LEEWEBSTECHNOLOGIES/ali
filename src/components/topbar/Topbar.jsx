import "./topbar.scss";
import PersonIcon from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";

const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            leewebs.
          </a>
          <div className="itemContainer">
            <PersonIcon className="icon" />
            <span>
              <a
                href="https://wa.me/2348084838268"
                target="_blank"
                rel="no opener noreferrer"
              >
                +234 808 483 8268
              </a>
            </span>

            {/* <span>+234 808 483 8268</span> */}
          </div>
          <div className="itemContainer">
            <MailIcon className="icon" />
            <span>
              <a href="mailto:aliuajibade317@gmail.com">
                aliuajibade317@gmail.com
              </a>
            </span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line1"></span>
            <span className="line1"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
