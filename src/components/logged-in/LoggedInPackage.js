import LoggedInHeader from "./header/LoggedInHeader";
import LoggedInSidebar from "./sidebar/LoggedInSidebar";
import LoggedInSidebarSmall from "./sidebar/LoggedInSidebarSmall";

const LoggedInPackage = () => {
  return (
    <div>
      <LoggedInHeader />
      {/* <LoggedInSidebar /> */}
      <LoggedInSidebarSmall />
    </div>
  );
};

export default LoggedInPackage;
