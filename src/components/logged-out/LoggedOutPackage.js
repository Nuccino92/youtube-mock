import LoggedOutHeader from "./header/LoggedOutHeader";
import LoggedOutSidebar from "./sidebar/LoggedOutSidebar";
import LoggedOutSidebarSmall from "./sidebar/LoggedOutSidebarSmall";

const LoggedOutPackage = () => {
  return (
    <div>
      <LoggedOutHeader />
      <LoggedOutSidebar />
      <LoggedOutSidebarSmall />
    </div>
  );
};
export default LoggedOutPackage;
