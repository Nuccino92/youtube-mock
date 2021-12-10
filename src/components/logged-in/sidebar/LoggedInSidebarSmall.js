import { MdHome } from "react-icons/md";
import { FaRegCompass } from "react-icons/fa";
import { BsCollectionPlay } from "react-icons/bs";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { Link } from "react-router-dom";

const LoggedInSidebarSmall = () => {
  return (
    <div>
      <Link to="/">
        <div className="sidebar-small-inner">
          <MdHome />
          <h5>Home</h5>
        </div>
      </Link>
      <div className="sidebar-small-inner">
        <FaRegCompass />
        <h5>Explore</h5>
      </div>
      <div className="sidebar-small-inner">
        <BsCollectionPlay />
        <h5>Subscriptions</h5>
      </div>
      <div className="sidebar-small-inner">
        <MdOutlineVideoLibrary />
        <h5>Library</h5>
      </div>
    </div>
  );
};
export default LoggedInSidebarSmall;
