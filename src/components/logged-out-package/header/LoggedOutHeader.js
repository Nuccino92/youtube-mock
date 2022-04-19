import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { TiMicrophone } from "react-icons/ti";
import { BsGrid3X3Gap, BsThreeDotsVertical } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import youtubeIcon from "../../header/youtube-icon.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../../context/authContext";

const LoggedOutHeader = ({ handleSidebar }) => {
  const { logIn } = useContext(AuthContext);
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`search/${input}`);
  };

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
            onChange={(e) => handleChange(e)}
          ></input>
          <div
            onClick={(e) => handleSubmit(e)}
            className="search-icon-container"
            title="search"
          >
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
