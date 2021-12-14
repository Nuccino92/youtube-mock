import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { TiMicrophone } from "react-icons/ti";
import { BsGrid3X3Gap, BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import youtubeIcon from "/home/anthony/the_odin_project/youtube-mock/src/components/header/youtube-icon.png";
import { useContext } from "react";
import { AuthContext } from "../../../context/authContext";

const LoggedOutHeader = ({ handleSidebar }) => {
  const { logIn } = useContext(AuthContext);
  return (
    <div className="header">
      <div className="left-header-container">
        <AiOutlineMenu
          onClick={handleSidebar}
          size={20}
          className="header-menu-icon"
        />
        <div className="youtube-menu-icon-container">
          <Link to="/">
            <img
              title="YouTube Home"
              className="youtube-menu-icon"
              src={youtubeIcon}
              alt="youtube-icon"
            />
          </Link>
        </div>
      </div>
      <div className="search-bar-container">
        <div className="search-bar-border">
          <label htmlFor="search-bar"></label>
          <input
            placeholder="Search"
            type="text"
            name="search-bar"
            className="search-bar"
          ></input>
          <div className="search-icon-container" title="search">
            <AiOutlineSearch size={28} className="search-icon" />
          </div>
        </div>
        <TiMicrophone size={22} className="microphone-icon" />
      </div>

      <div className="right-header-container">
        <BsGrid3X3Gap size={20} title="YouTube Apps" />
        <BsThreeDotsVertical size={20} title="Settings" />
        <button onClick={logIn} className="sign-in-header-btn">
          SIGN IN
        </button>
      </div>
    </div>
  );
};

export default LoggedOutHeader;
