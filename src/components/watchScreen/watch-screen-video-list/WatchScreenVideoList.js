import { useEffect, useState } from "react";
import { getRelatedVideos } from "../../../api/getRelatedVideos";
import WatchScreenVideoCard from "./WatchScreenVideoCard";

const WatchScreenVideoList = ({ state }) => {
  const [relatedVideos, setRelatedVideos] = useState([]);

  useEffect(() => {
    const callRelatedVideos = async () => {
      setRelatedVideos(await getRelatedVideos(state.id));
    };
    callRelatedVideos();
  }, [state]);

  return (
    <div className="watch-screen-video-list">
      {relatedVideos.map((video, index) => {
        return <WatchScreenVideoCard info={video} key={index} />;
      })}
    </div>
  );
};
export default WatchScreenVideoList;
