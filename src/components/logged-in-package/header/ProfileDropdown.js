import { useContext } from "react";
import { AuthContext } from "../../../context/authContext";
import { BiLogIn } from "react-icons/bi";

const ProfileDropdown = ({ dropDown }) => {
  const { profile, logOut } = useContext(AuthContext);

  return (
    <div
      className={
        dropDown ? "profile-dropdown dropdown-true" : "profile-dropdown"
      }
    >
      <div className="profile-dropdown-first-container">
        <img src={profile.photo} alt="profile icon" />
        <div>{profile.name}</div>
      </div>
      <div
        className="profile-dropdown-second-container"
        onClick={() => logOut()}
      >
        <BiLogIn className="dropdown-icon" />
        <div>Sign out</div>
      </div>
    </div>
  );
};
export default ProfileDropdown;
