import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineVideoCameraAdd,
} from "react-icons/ai";
import { TiMicrophone } from "react-icons/ti";
import { BsGrid3X3Gap } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import youtubeIcon from "/home/anthony/the_odin_project/youtube-mock/src/components/header/youtube-icon.png";

const LoggedInHeader = () => {
  return (
    <div className="header">
      <div className="left-header-container">
        <AiOutlineMenu className="header-menu-icon" />
        <div className="youtube-menu-icon-container">
          <img
            className="youtube-menu-icon"
            src={youtubeIcon}
            alt="youtube-icon"
          />
        </div>
      </div>
      <div className="search-bar-container">
        <label for="search-bar"></label>
        <input type="text" name="search-bar" className="search-bar"></input>
        <AiOutlineSearch className="search-icon" />
      </div>
      <TiMicrophone className="microphone-icon" />
      <div className="right-header-container">
        <AiOutlineVideoCameraAdd />
        <BsGrid3X3Gap />
        <IoIosNotificationsOutline />
        <div>Picture</div>
      </div>
    </div>
  );
};

export default LoggedInHeader;
