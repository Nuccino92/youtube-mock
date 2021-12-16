import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { getChannelIcon } from "../../api/getChannelIcons";
import { getChannelSubs } from "../../api/getChannelSubs";
import WatchScreenComments from "./WatchScreenComments";
import WatchScreenVideoContainer from "./watch-screen-video-container/WatchScreenVideoContainer";
import useWindowSize from "../../hooks/useWindowSize";

const WatchScreen = () => {
  const [channelIcon, setChannelIcon] = useState(undefined);
  const [channelSubs, setChannelSubs] = useState(undefined);
  const location = useLocation();
  const { state } = location;
  const { snippet } = state;
  const size = useWindowSize();
  // size 1000

  useEffect(() => {
    const getIcon = async () => {
      setChannelIcon(await getChannelIcon(snippet.channelId));
      setChannelSubs(await getChannelSubs(snippet.channelId));
    };
    getIcon();
  }, [snippet]);

  return (
    <div className="watch-screen">
      <WatchScreenVideoContainer
        state={state}
        channelIcon={channelIcon}
        channelSubs={channelSubs}
      />
      <WatchScreenComments item={state} />
    </div>
  );
};

export default WatchScreen;
