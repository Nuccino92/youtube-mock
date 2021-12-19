import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { getChannelIcon } from "../../api/getChannelIcons";
import { getChannelSubs } from "../../api/getChannelSubs";
import WatchScreenComments from "./watch-screen-comments/WatchScreenComments";
import WatchScreenVideoContainer from "./watch-screen-video-container/WatchScreenVideoContainer";
// import useWindowSize from "../../hooks/useWindowSize";
import WatchScreenVideoList from "./watch-screen-video-list/WatchScreenVideoList";

const WatchScreen = () => {
  const [channelIcon, setChannelIcon] = useState(undefined);
  const [channelSubs, setChannelSubs] = useState(undefined);
  const location = useLocation();
  const { state } = location;
  const { snippet } = state;
  const { statistics } = state;

  // const size = useWindowSize();
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
      <WatchScreenVideoList state={state} />
      <WatchScreenComments
        commentCount={statistics.commentCount}
        item={state}
      />
    </div>
  );
};

export default WatchScreen;
