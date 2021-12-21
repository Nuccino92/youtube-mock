import { useEffect, useState } from "react";
import { getRelatedVideos } from "../../../api/getRelatedVideos";
import WatchScreenVideoCard from "./WatchScreenVideoCard";

const WatchScreenVideoList = ({ state }) => {
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const callRelatedVideos = async () => {
      setRelatedVideos(await getRelatedVideos(state.id));

      setLoading(false);
    };
    callRelatedVideos();
  }, [state]);

  return loading ? (
    <div>loading...</div>
  ) : (
    <div className="watch-screen-video-list">
      {relatedVideos.map((video, index) => {
        return <WatchScreenVideoCard info={video} key={index} />;
      })}
    </div>
  );
};
export default WatchScreenVideoList;
