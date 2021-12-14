import { useState, useEffect } from "react";
import LoggedOutHeader from "./header/LoggedOutHeader";
import LoggedOutSidebar from "./sidebar/LoggedOutSidebar";
import LoggedOutSidebarSmall from "./sidebar/LoggedOutSidebarSmall";
import useWindowSize from "../../hooks/useWindowSize";

const LoggedOutPackage = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const size = useWindowSize();

  const handleSidebar = () => {
    setToggleSidebar(!toggleSidebar);
  };

  useEffect(() => {
    size.width < 1331 && setToggleSidebar(true);
    size.width > 1331 && setToggleSidebar(false);
  }, [size]);

  return (
    <div>
      <LoggedOutHeader handleSidebar={handleSidebar} />
      {toggleSidebar ? <LoggedOutSidebarSmall /> : <LoggedOutSidebar />}
    </div>
  );
};
export default LoggedOutPackage;
