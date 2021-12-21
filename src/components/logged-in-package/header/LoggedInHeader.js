import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineVideoCameraAdd,
} from "react-icons/ai";
import { TiMicrophone } from "react-icons/ti";
import { BsGrid3X3Gap } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../../context/authContext";
import youtubeIcon from "/home/anthony/the_odin_project/youtube-mock/src/components/header/youtube-icon.png";
import ProfileDropdown from "./ProfileDropdown";

const LoggedInHeader = ({ handleSidebar }) => {
  const [dropDown, setDropDown] = useState(false);
  const { profile } = useContext(AuthContext);
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`search/${input}`);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.stopPropagation();
      handleSubmit(e);
    }
  };

  const handleDropDown = () => {
    setDropDown(!dropDown);
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
              placeholder="Search"
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
            onKeyDown={(e) => onKeyDown(e)}
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
        <AiOutlineVideoCameraAdd title="Create" size={23} />
        <BsGrid3X3Gap title="YouTube Apps" size={20} />
        <IoIosNotificationsOutline title="Notifications" size={27} />

        <div
          style={{ backgroundImage: `url(${profile.photo})` }}
          className="profile-picture"
          onClick={handleDropDown}
        >
          <ProfileDropdown dropDown={dropDown} />
        </div>
      </div>
    </div>
  );
};

export default LoggedInHeader;
