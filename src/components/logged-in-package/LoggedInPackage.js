import { useState, useEffect } from "react";
import LoggedInHeader from "./header/LoggedInHeader";
import LoggedInSidebar from "./sidebar/LoggedInSidebar";
import LoggedInSidebarSmall from "./sidebar/LoggedInSidebarSmall";
import useWindowSize from "../../hooks/useWindowSize";

const LoggedInPackage = () => {
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
      <LoggedInHeader handleSidebar={handleSidebar} />
      {toggleSidebar ? <LoggedInSidebarSmall /> : <LoggedInSidebar />}
    </div>
  );
};

export default LoggedInPackage;
