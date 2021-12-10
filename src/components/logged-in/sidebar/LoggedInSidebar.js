import { MdHome } from "react-icons/md";
import { FaRegCompass } from "react-icons/fa";
import { BsCollectionPlay, BsClock } from "react-icons/bs";
import { MdOutlineVideoLibrary, MdPlaylistAddCheck } from "react-icons/md";
import { VscHistory } from "react-icons/vsc";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { FiThumbsUp } from "react-icons/fi";
import { Link } from "react-router-dom";

const LoggedInSidebar = () => {
  return (
    <div className="sidebar">
      <div>
        <div className="first-sidebar-container">
          <Link to="/">
            <div className="sidebar-inner">
              <MdHome size={22} />
              <span>Home</span>
            </div>
          </Link>
          <div className="sidebar-inner">
            <FaRegCompass size={22} />
            <span>Explore</span>
          </div>
          <div className="sidebar-inner">
            <BsCollectionPlay size={22} />
            <span>Subscriptions</span>
          </div>
        </div>
        <div className="second-sidebar-container">
          <div className="sidebar-inner">
            <MdOutlineVideoLibrary size={22} />
            <span>Library</span>
          </div>
          <div className="sidebar-inner">
            <VscHistory size={22} />
            <span>History</span>
          </div>
          <div className="sidebar-inner">
            <AiOutlinePlaySquare size={22} />
            <span>Your videos</span>
          </div>
          <div className="sidebar-inner">
            <BsClock size={22} />
            <span>Watch later</span>
          </div>
          <div className="sidebar-inner">
            <FiThumbsUp size={22} />
            <span>Liked videos</span>
          </div>
          <div className="sidebar-inner">
            <MdPlaylistAddCheck size={22} />
            <span>Favorites</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoggedInSidebar;
