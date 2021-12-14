import { MdHome } from "react-icons/md";
import { FaRegCompass } from "react-icons/fa";
import { BsCollectionPlay } from "react-icons/bs";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { VscHistory } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../context/authContext";
import useWindowSize from "../../../hooks/useWindowSize";

const LoggedOutSidebar = () => {
  const size = useWindowSize();
  const { logIn } = useContext(AuthContext);

  return (
    <div className={size.width < 1331 ? "sidebar modal" : "sidebar"}>
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
        </div>
        <div className="third-sidebar-container">
          <p>Sign in to like videos,</p>
          <p>comment and subscribe.</p>
          <button onClick={logIn} className="sign-in-header-btn">
            SIGN IN
          </button>
        </div>
      </div>
    </div>
  );
};
export default LoggedOutSidebar;
