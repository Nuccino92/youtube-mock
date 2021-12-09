import { MdHome } from "react-icons/md";
import { FaRegCompass } from "react-icons/fa";
import { BsCollectionPlay, BsClock } from "react-icons/bs";
import { MdOutlineVideoLibrary, MdPlaylistAddCheck } from "react-icons/md";
import { VscHistory } from "react-icons/vsc";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { FiThumbsUp } from "react-icons/fi";
const LoggedInSidebar = () => {
  return (
    <div>
      <div>
        <div className="first-sidebar-container">
          <div className="sidebar-inner">
            <MdHome />
            <span>Home</span>
          </div>
          <div className="sidebar-inner">
            <FaRegCompass />
            <span>Expore</span>
          </div>
          <div className="sidebar-inner">
            <BsCollectionPlay />
            <span>Subscriptions</span>
          </div>
        </div>
        <div className="second-sidebar-container">
          <div className="sidebar-inner">
            <MdOutlineVideoLibrary />
            <span>Library</span>
          </div>
          <div className="sidebar-inner">
            <VscHistory />
            <span>History</span>
          </div>
          <div className="sidebar-inner">
            <AiOutlinePlaySquare />
            <span>Your videos</span>
          </div>
          <div className="sidebar-inner">
            <BsClock />
            <span>Watch later</span>
          </div>
          <div className="sidebar-inner">
            <FiThumbsUp />
            <span>Liked videos</span>
          </div>
          <div className="sidebar-inner">
            <MdPlaylistAddCheck />
            <span>Favorites</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoggedInSidebar;
